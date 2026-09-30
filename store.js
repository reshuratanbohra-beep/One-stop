// State Management & Reactive Data Store for CA Final Platform
// Strictly enforces clean initial state and real-time aggregate calculations upon manual student evaluations

(function(window) {
  'use strict';

  // Incremented storage key to ensure pristine clean state
  const STORAGE_KEY = 'ca_final_platform_v2';

  class Store {
    constructor() {
      this.listeners = [];
      this.init();
    }

    init() {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          this.state = parsed;
        } catch (e) {
          console.error("Failed to parse saved state, loading clean defaults", e);
          this.loadDefaultState();
        }
      } else {
        this.loadDefaultState();
      }
    }

    loadDefaultState() {
      const data = window.CA_DATA || {};
      
      // Clean initial chapter status mapping: All "Not Started" by default
      const chapterStatuses = {};
      (data.chapters || []).forEach(ch => {
        chapterStatuses[ch.id] = 'Not Started';
      });

      this.state = {
        user: data.initialUser || {
          name: "Reshu Sharma",
          regNo: "NRO-0482914",
          email: "reshu.sharma@cafinal.org",
          targetExam: "CA Final - November 2026",
          settings: {
            weakChapterThresholdPercent: 50.0,
            weakChapterMinQuestions: 2,
            weakChapterMinMarks: 10
          }
        },
        subjects: data.subjects || [],
        chapters: data.chapters || [],
        questions: data.questions || [],
        exams: data.exams || [],
        chapterStatuses: chapterStatuses,
        attempts: [],        // Pristine clean initial state
        bookmarks: [],       // Pristine clean
        notes: {},           // Pristine clean
        testSessions: [],    // Pristine clean
        trendHistory: []     // Pristine clean
      };

      this.save();
    }

    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      } catch (e) {
        console.error("Storage save failed", e);
      }
      this.notify();
    }

    subscribe(fn) {
      this.listeners.push(fn);
      return () => {
        this.listeners = this.listeners.filter(l => l !== fn);
      };
    }

    notify() {
      this.listeners.forEach(fn => fn(this.state));
    }

    resetToDemoData() {
      localStorage.removeItem(STORAGE_KEY);
      this.loadDefaultState();
      this.notify();
    }

    // ==========================================
    // QUESTION & ATTEMPT ACTIONS
    // ==========================================

    getQuestion(id) {
      return this.state.questions.find(q => q.id === id);
    }

    getAttemptsForQuestion(questionId) {
      return (this.state.attempts || []).filter(a => a.questionId === questionId);
    }

    getLatestAttempt(questionId) {
      const list = this.getAttemptsForQuestion(questionId);
      if (list.length === 0) return null;
      return list[list.length - 1];
    }

    deleteAttempt(questionId) {
      this.state.attempts = (this.state.attempts || []).filter(a => a.questionId !== questionId);
      this.save();
    }

    toggleBookmark(questionId) {
      if (!this.state.bookmarks) this.state.bookmarks = [];
      const idx = this.state.bookmarks.indexOf(questionId);
      if (idx >= 0) {
        this.state.bookmarks.splice(idx, 1);
      } else {
        this.state.bookmarks.push(questionId);
      }
      this.save();
      return this.isBookmarked(questionId);
    }

    isBookmarked(questionId) {
      return (this.state.bookmarks || []).includes(questionId);
    }

    saveNote(questionId, noteText) {
      if (!this.state.notes) this.state.notes = {};
      if (!noteText || !noteText.trim()) {
        delete this.state.notes[questionId];
      } else {
        this.state.notes[questionId] = noteText.trim();
      }
      this.save();
    }

    getNote(questionId) {
      return (this.state.notes && this.state.notes[questionId]) || '';
    }

    setChapterStatus(chapterId, status) {
      if (['Not Started', 'In Progress', 'Completed'].includes(status)) {
        this.state.chapterStatuses[chapterId] = status;
        this.save();
      }
    }

    recordTestSession(session) {
      if (!this.state.testSessions) this.state.testSessions = [];
      const newSession = {
        id: 'TS-' + Date.now(),
        date: new Date().toISOString().split('T')[0],
        subject: session.subject,
        chapter: session.chapter,
        source: session.source || 'Practice Mode',
        exam: session.exam || 'Custom Session',
        questionsCount: session.questionsCount,
        maxMarks: session.maxMarks,
        marksObtained: session.marksObtained,
        accuracy: parseFloat(((session.marksObtained / session.maxMarks) * 100).toFixed(2))
      };
      this.state.testSessions.unshift(newSession);
      this.recordTrendDataPoint();
      this.save();
      return newSession;
    }

    recordTrendDataPoint() {
      if (!this.state.trendHistory) this.state.trendHistory = [];
      const overall = this.getOverallMetrics();
      if (overall.totalMarksAttempted === 0) return;

      const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const lastPoint = this.state.trendHistory[this.state.trendHistory.length - 1];
      
      if (lastPoint && lastPoint.date === today) {
        lastPoint.accuracy = overall.overallAccuracy;
        lastPoint.marks = `${overall.totalMarksObtained} / ${overall.totalMarksAttempted}`;
      } else {
        this.state.trendHistory.push({
          date: today,
          accuracy: overall.overallAccuracy,
          marks: `${overall.totalMarksObtained} / ${overall.totalMarksAttempted}`
        });
      }
    }

    // ==========================================
    // MATHEMATICAL CALCULATIONS (Prompt Sec 7, 8, 25, 48)
    // ==========================================

    // Helper: returns all chapter IDs a question belongs to (supports legacy single chapterId AND new chapterIds[])
    _getQuestionChapterIds(q) {
      if (q.chapterIds && Array.isArray(q.chapterIds) && q.chapterIds.length > 0) {
        return q.chapterIds;
      }
      return q.chapterId ? [q.chapterId] : [];
    }

    // Helper: returns true if a question belongs to a given chapter
    _questionBelongsToChapter(q, chapterId) {
      return this._getQuestionChapterIds(q).includes(chapterId);
    }

    // Chapter Accuracy = SUM(Marks Obtained) ÷ SUM(Maximum Marks Attempted) × 100
    getChapterMetrics(chapterId) {
      const chapter = this.state.chapters.find(c => c.id === chapterId);
      if (!chapter) return null;

      // Match questions that belong to this chapter (single or multi-chapter)
      const chapterQuestions = (this.state.questions || []).filter(q =>
        this._questionBelongsToChapter(q, chapterId)
      );
      const totalQuestionsCount = Math.max(chapterQuestions.length, chapter.totalQuestions || 0);

      // Match attempts by question membership
      const chapterQIds = new Set(chapterQuestions.map(q => q.id));
      const attempts = (this.state.attempts || []).filter(a => chapterQIds.has(a.questionId));

      let sumMarksObtained = 0;
      let sumMaxMarks = 0;
      const attemptedQuestionIds = new Set();

      attempts.forEach(att => {
        sumMarksObtained += (parseFloat(att.marksObtained) || 0);
        sumMaxMarks += (parseFloat(att.maxMarks) || 0);
        if (att.questionId) attemptedQuestionIds.add(att.questionId);
      });

      const questionsAttemptedCount = attemptedQuestionIds.size;
      const remainingQuestionsCount = Math.max(0, totalQuestionsCount - questionsAttemptedCount);
      
      const accuracy = sumMaxMarks > 0 
        ? parseFloat(((sumMarksObtained / sumMaxMarks) * 100).toFixed(2))
        : 0;

      const completionPercent = totalQuestionsCount > 0 
        ? parseFloat(((questionsAttemptedCount / totalQuestionsCount) * 100).toFixed(1))
        : 0;

      const status = (this.state.chapterStatuses && this.state.chapterStatuses[chapterId]) || 'Not Started';

      return {
        chapterId,
        chapterName: chapter.name,
        chapterNumber: chapter.number,
        subjectId: chapter.subjectId,
        module: chapter.module,
        isCompiled: chapter.isCompiled || false,
        compiledNote: chapter.compiledNote || '',
        totalQuestions: totalQuestionsCount,
        questionsAttempted: questionsAttemptedCount,
        remainingQuestions: remainingQuestionsCount,
        marksObtained: parseFloat(sumMarksObtained.toFixed(1)),
        maxMarksAttempted: parseFloat(sumMaxMarks.toFixed(1)),
        accuracy: accuracy,
        completionPercent: completionPercent,
        status: status,
        hasEvaluatedAttempts: sumMaxMarks > 0
      };
    }

    // Subject Accuracy = SUM(Subject Marks Obtained) ÷ SUM(Subject Maximum Marks Attempted) × 100
    getSubjectMetrics(subjectId) {
      const subject = this.state.subjects.find(s => s.id === subjectId);
      if (!subject) return null;

      const subjectChapters = (this.state.chapters || []).filter(c => c.subjectId === subjectId);
      const totalChapters = subjectChapters.length;
      let completedChapters = 0;

      subjectChapters.forEach(ch => {
        const m = this.getChapterMetrics(ch.id);
        if (m && m.status === 'Completed') completedChapters++;
      });

      // Collect all question IDs belonging to this subject (via subjectId OR via chapterIds membership)
      const subjectChapterIds = new Set(subjectChapters.map(c => c.id));
      const subjectQuestions = (this.state.questions || []).filter(q => {
        if (q.subjectId === subjectId) return true;
        // Multi-chapter question: check if ANY of its chapterIds belongs to this subject
        const ids = this._getQuestionChapterIds(q);
        return ids.some(cid => subjectChapterIds.has(cid));
      });

      // Deduplicate: count each unique question once
      const subjectQIds = new Set(subjectQuestions.map(q => q.id));

      let availableQuestions = 0;
      subjectChapters.forEach(ch => {
        const qList = (this.state.questions || []).filter(q => this._questionBelongsToChapter(q, ch.id));
        availableQuestions += Math.max(qList.length, ch.totalQuestions || 0);
      });

      let sumMarksObtained = 0;
      let sumMaxMarks = 0;
      const attemptedQIds = new Set();

      (this.state.attempts || []).forEach(att => {
        if (subjectQIds.has(att.questionId)) {
          sumMarksObtained += (parseFloat(att.marksObtained) || 0);
          sumMaxMarks += (parseFloat(att.maxMarks) || 0);
          attemptedQIds.add(att.questionId);
        }
      });

      const accuracy = sumMaxMarks > 0 
        ? parseFloat(((sumMarksObtained / sumMaxMarks) * 100).toFixed(1))
        : 0;

      const progressPercent = totalChapters > 0
        ? parseFloat(((completedChapters / totalChapters) * 100).toFixed(1))
        : 0;

      return {
        subjectId,
        subjectName: subject.name,
        paperNumber: subject.paperNumber,
        code: subject.code,
        group: subject.group,
        totalChapters,
        completedChapters,
        remainingChapters: totalChapters - completedChapters,
        availableQuestions,
        questionsAttempted: attemptedQIds.size,
        marksObtained: parseFloat(sumMarksObtained.toFixed(1)),
        maxMarksAttempted: parseFloat(sumMaxMarks.toFixed(1)),
        accuracy,
        progressPercent,
        hasAttempts: sumMaxMarks > 0
      };
    }

    // Overall System KPI Metrics (Prompt Section 5 & 6)
    getOverallMetrics() {
      const totalChapters = (this.state.chapters || []).length;
      let completedChapters = 0;
      let inProgressChapters = 0;
      let notStartedChapters = 0;

      (this.state.chapters || []).forEach(ch => {
        const status = (this.state.chapterStatuses && this.state.chapterStatuses[ch.id]) || 'Not Started';
        if (status === 'Completed') completedChapters++;
        else if (status === 'In Progress') inProgressChapters++;
        else notStartedChapters++;
      });

      const remainingChapters = totalChapters - completedChapters;
      const syllabusCompletionPercent = totalChapters > 0 
        ? parseFloat(((completedChapters / totalChapters) * 100).toFixed(1))
        : 0;

      let totalMarksObtained = 0;
      let totalMarksAttempted = 0;
      const attemptedQuestionIds = new Set();

      (this.state.attempts || []).forEach(att => {
        totalMarksObtained += (parseFloat(att.marksObtained) || 0);
        totalMarksAttempted += (parseFloat(att.maxMarks) || 0);
        if (att.questionId) attemptedQuestionIds.add(att.questionId);
      });

      const overallAccuracy = totalMarksAttempted > 0
        ? parseFloat(((totalMarksObtained / totalMarksAttempted) * 100).toFixed(1))
        : 0;

      // Count unique questions across all chapters (multi-chapter questions counted once)
      const allQuestionIds = new Set(
        (this.state.questions || []).map(q => q.id)
      );
      const totalQuestions = allQuestionIds.size;

      const weakChapters = this.getWeakChapters();

      return {
        totalChapters,
        completedChapters,
        remainingChapters,
        inProgressChapters,
        notStartedChapters,
        syllabusCompletionPercent,
        overallAccuracy,
        totalQuestions,
        questionsAttempted: attemptedQuestionIds.size,
        unattemptedQuestions: Math.max(0, totalQuestions - attemptedQuestionIds.size),
        totalMarksAttempted: parseFloat(totalMarksAttempted.toFixed(1)),
        totalMarksObtained: parseFloat(totalMarksObtained.toFixed(1)),
        weakChaptersCount: weakChapters.length,
        hasAttempts: totalMarksAttempted > 0
      };
    }

    // Weak Chapters Detection (Prompt Section 7, 8, 9, 10, 11)
    getWeakChapters() {
      const cfg = (this.state.user && this.state.user.settings) || {};
      const thresholdPct = cfg.weakChapterThresholdPercent !== undefined ? cfg.weakChapterThresholdPercent : 50.0;
      const minQuestions = cfg.weakChapterMinQuestions !== undefined ? cfg.weakChapterMinQuestions : 2;
      const minMarks = cfg.weakChapterMinMarks !== undefined ? cfg.weakChapterMinMarks : 10;

      const weakList = [];

      (this.state.chapters || []).forEach(ch => {
        const metrics = this.getChapterMetrics(ch.id);
        if (!metrics || !metrics.hasEvaluatedAttempts) return;

        const meetsThreshold = (metrics.questionsAttempted >= minQuestions) || (metrics.maxMarksAttempted >= minMarks);

        if (meetsThreshold && metrics.accuracy < thresholdPct) {
          const subject = this.state.subjects.find(s => s.id === ch.subjectId);
          weakList.push({
            chapterId: ch.id,
            chapterNumber: ch.number,
            chapterName: ch.name,
            subjectId: ch.subjectId,
            subjectName: subject ? subject.name : '',
            paperNumber: subject ? subject.paperNumber : '',
            accuracy: metrics.accuracy,
            marksObtained: metrics.marksObtained,
            maxMarksAttempted: metrics.maxMarksAttempted,
            questionsAttempted: metrics.questionsAttempted,
            thresholdPct: thresholdPct
          });
        }
      });

      weakList.sort((a, b) => a.accuracy - b.accuracy);
      return weakList;
    }

    // recordAttempt — also auto-marks all chapterIds as In Progress if Not Started
    recordAttempt({ questionId, marksObtained, status, notes }) {
      const q = this.getQuestion(questionId);
      if (!q) return false;

      const marksNum = parseFloat(marksObtained);
      const maxMarks = q.marks;
      const validMarks = Math.max(0, Math.min(marksNum, maxMarks));
      const percentage = (validMarks / maxMarks) * 100;

      this.state.attempts = (this.state.attempts || []).filter(a => a.questionId !== questionId);

      const newAttempt = {
        questionId: questionId,
        chapterId: q.chapterId || (q.chapterIds && q.chapterIds[0]) || '',
        subjectId: q.subjectId,
        attemptDate: new Date().toISOString().split('T')[0],
        maxMarks: maxMarks,
        marksObtained: validMarks,
        percentage: parseFloat(percentage.toFixed(2)),
        status: status || (percentage >= 80 ? 'Mastered' : percentage >= 50 ? 'Reviewed' : 'Attempted'),
        notes: notes || ''
      };

      this.state.attempts.push(newAttempt);

      if (notes) {
        this.state.notes[questionId] = notes;
      }

      // Auto-mark ALL associated chapters as In Progress if currently Not Started
      const allChapterIds = this._getQuestionChapterIds(q);
      allChapterIds.forEach(cid => {
        if (this.state.chapterStatuses[cid] === 'Not Started') {
          this.state.chapterStatuses[cid] = 'In Progress';
        }
      });

      this.recordTrendDataPoint();
      this.save();
      return newAttempt;
    }

    // ==========================================
    // ADMIN FUNCTIONS
    // ==========================================

    // ==========================================
    // USER PROFILE UPDATE
    // ==========================================

    updateUserProfile({ name, email, regNo, targetExam }) {
      if (!this.state.user) this.state.user = {};
      if (name) this.state.user.name = name.trim();
      if (email) this.state.user.email = email.trim().toLowerCase();
      if (regNo !== undefined) this.state.user.regNo = regNo.trim();
      if (targetExam !== undefined) this.state.user.targetExam = targetExam.trim();
      this.save();
    }

    addQuestion(qData) {
      const newQuestion = {
        id: qData.id || ('Q-' + Date.now()),
        subjectId: qData.subjectId,
        chapterId: qData.chapterId,
        module: qData.module || 'Module 1',
        topic: qData.topic || 'General Topic',
        subTopic: qData.subTopic || '',
        questionNumber: qData.questionNumber || 'Q.1',
        marks: parseFloat(qData.marks) || 5,
        questionType: qData.questionType || 'Practical Problem',
        sourceType: qData.sourceType || 'MTP',
        examSession: qData.examSession || 'May 2026',
        examYear: parseInt(qData.examYear) || 2026,
        sourceName: qData.sourceName || 'ICAI BoS Reference',
        sourceUrl: qData.sourceUrl || 'https://boslive.icai.org/index.php',
        sourcePageNumber: parseInt(qData.sourcePageNumber) || 1,
        suggestedAnswerAvailable: !!qData.suggestedAnswer,
        suggestedAnswer: qData.suggestedAnswer || 'Official suggested answer not available for this question.',
        difficulty: qData.difficulty || 'Medium',
        occurrences: qData.occurrences || [qData.sourceType + ' ' + (qData.examSession || '2026')],
        questionText: qData.questionText || ''
      };

      this.state.questions.push(newQuestion);
      this.save();
      return newQuestion;
    }

    importFromCSV(csvText) {
      const lines = csvText.split(/\r?\n/).filter(line => line.trim().length > 0);
      if (lines.length < 2) {
        return { success: false, errors: ["CSV file is empty or missing data rows."] };
      }

      const headers = lines[0].split(',').map(h => h.trim().replace(/^["']|["']$/g, '').toLowerCase());
      const requiredCols = ['question_id', 'subject', 'chapter', 'question_text', 'marks', 'source_type'];
      const missing = requiredCols.filter(col => !headers.includes(col));
      if (missing.length > 0) {
        return { 
          success: false, 
          errors: [`Missing required columns: ${missing.join(', ')}.`] 
        };
      }

      const getVal = (rowParts, colName) => {
        const idx = headers.indexOf(colName);
        if (idx === -1 || idx >= rowParts.length) return '';
        return rowParts[idx].replace(/^["']|["']$/g, '').trim();
      };

      const importedQuestions = [];
      const errors = [];
      const existingIds = new Set(this.state.questions.map(q => q.id.toLowerCase()));

      for (let i = 1; i < lines.length; i++) {
        const row = lines[i];
        const parts = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || row.split(',');
        const qId = getVal(parts, 'question_id');
        const subjectCode = getVal(parts, 'subject');
        const chapterNum = parseInt(getVal(parts, 'chapter'));
        const qText = getVal(parts, 'question_text');
        const marks = parseFloat(getVal(parts, 'marks'));
        const sourceType = getVal(parts, 'source_type');

        if (!qId) {
          errors.push(`Row ${i + 1}: Missing Question_ID.`);
          continue;
        }

        if (existingIds.has(qId.toLowerCase())) {
          errors.push(`Row ${i + 1}: Duplicate Question_ID '${qId}' already exists.`);
          continue;
        }

        if (isNaN(marks) || marks <= 0) {
          errors.push(`Row ${i + 1}: Invalid marks '${getVal(parts, 'marks')}'.`);
          continue;
        }

        let matchedSubject = this.state.subjects.find(s => 
          s.id.toLowerCase() === subjectCode.toLowerCase() || 
          s.code.toLowerCase() === subjectCode.toLowerCase() ||
          s.name.toLowerCase().includes(subjectCode.toLowerCase())
        ) || this.state.subjects[0];

        let matchedChapter = this.state.chapters.find(c => 
          c.subjectId === matchedSubject.id && (c.number === chapterNum || c.id === getVal(parts, 'chapter'))
        ) || this.state.chapters.find(c => c.subjectId === matchedSubject.id) || this.state.chapters[0];

        const newQ = {
          id: qId,
          subjectId: matchedSubject.id,
          chapterId: matchedChapter.id,
          module: getVal(parts, 'module') || 'Module 1',
          topic: getVal(parts, 'topic') || matchedChapter.name,
          subTopic: getVal(parts, 'subtopic') || '',
          questionNumber: getVal(parts, 'question_number') || 'Q.Imp',
          marks: marks,
          questionType: getVal(parts, 'question_type') || 'Practical Problem',
          sourceType: ['MTP', 'RTP', 'Previous Year'].includes(sourceType) ? sourceType : 'RTP',
          examSession: getVal(parts, 'exam') || getVal(parts, 'session') || 'May 2026',
          examYear: parseInt(getVal(parts, 'year')) || 2026,
          sourceName: getVal(parts, 'source_name') || `ICAI CA Final ${sourceType}`,
          sourceUrl: getVal(parts, 'source_url') || 'https://boslive.icai.org/index.php',
          sourcePageNumber: parseInt(getVal(parts, 'page')) || 1,
          suggestedAnswerAvailable: !!getVal(parts, 'suggested_answer'),
          suggestedAnswer: getVal(parts, 'suggested_answer') || 'Official suggested answer not available for this question.',
          difficulty: 'Medium',
          occurrences: [sourceType + ' ' + (getVal(parts, 'year') || '2026')],
          questionText: qText
        };

        importedQuestions.push(newQ);
        existingIds.add(qId.toLowerCase());
      }

      if (importedQuestions.length > 0) {
        this.state.questions.push(...importedQuestions);
        this.save();
      }

      return {
        success: importedQuestions.length > 0,
        importedCount: importedQuestions.length,
        errors: errors
      };
    }

    exportDatabaseJSON() {
      const dump = {
        exportDate: new Date().toISOString(),
        version: "2.0",
        data: this.state
      };
      return JSON.stringify(dump, null, 2);
    }

    importDatabaseJSON(jsonStr) {
      try {
        const parsed = JSON.parse(jsonStr);
        if (parsed && parsed.data && parsed.data.subjects && parsed.data.chapters) {
          this.state = parsed.data;
          this.save();
          return { success: true };
        } else {
          return { success: false, error: "Invalid backup JSON schema." };
        }
      } catch (e) {
        return { success: false, error: e.message };
      }
    }
  }

  window.store = new Store();

})(window);
