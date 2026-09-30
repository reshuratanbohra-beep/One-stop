// CA Final Master Question Bank & Practice Platform - Main Controller
// High-performance vanilla JavaScript controller handling all views, events & interactions

(function(window) {
  'use strict';

  class App {
    constructor() {
      this.currentView = 'dashboard';
      this.currentFilter = {
        subject: 'ALL',
        chapter: 'ALL',
        source: 'ALL',
        exam: 'ALL',
        marks: 'ALL',
        status: 'ALL',
        search: ''
      };
      
      this.activePracticeSession = null;
      this.activeEvalQuestionId = null;
      this.activeNoteQuestionId = null;

      this.init();
    }

    init() {
      this.bindNavigation();
      this.bindSearch();
      this.bindFilters();
      this.bindModals();
      this.bindPracticeMode();

      // Subscribe to store updates for reactive re-rendering
      window.store.subscribe((state) => {
        this.renderCurrentView();
        this.updateHeaderAndBadges(state);
      });

      // Initial render
      this.renderCurrentView();
      this.updateHeaderAndBadges(window.store.state);
      this.populateChapterSelectOptions();
    }

    // ==========================================
    // NAVIGATION & ROUTING
    // ==========================================

    bindNavigation() {
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const view = item.getAttribute('data-view');
          if (view) {
            this.navigateTo(view);
          }
        });
      });

      // Mobile Menu Toggle
      const menuToggle = document.getElementById('menuToggleBtn');
      const sidebar = document.getElementById('appSidebar');
      if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
          sidebar.classList.toggle('open');
        });
        document.addEventListener('click', (e) => {
          if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
          }
        });
      }
    }

    navigateTo(viewName, params = {}) {
      this.currentView = viewName;

      // Update sidebar active states
      document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-view') === viewName) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      const titles = {
        'dashboard': { title: 'Dashboard', sub: 'CA Final Self-Evaluation & Progress Center' },
        'subjects': { title: 'Subjects & Papers', sub: 'ICAI CA Final Group 1 & Group 2 Curriculum' },
        'chapters': { title: 'Chapter Bank', sub: 'Comprehensive Chapter-wise Preparation & Status' },
        'questions': { title: 'Question Repository', sub: 'ICAI MTP, RTP & Previous Year Questions' },
        'practice': { title: 'Practice Tests', sub: 'Real-time Test Simulation & Instant Evaluation' },
        'weak-chapters': { title: 'Weak Chapters', sub: 'Targeted Remediation for Chapters with Accuracy < 50%' },
        'history': { title: 'Test History', sub: 'Chronological Record of All Self-Evaluations' },
        'bookmarks': { title: 'My Important Questions', sub: 'Starred Questions for Targeted Revision' },
        'notes': { title: 'Personal Notes', sub: 'Private Adjustments & Concept Notes' },
        'exams': { title: 'Examination Series', sub: 'Browse Past Papers by ICAI Examination Sitting' },
        'admin': { title: 'Admin & Import', sub: 'CSV Import, PDF Parser & Database Management' },
        'settings': { title: 'Platform Settings', sub: 'Evaluation Thresholds & Data Management' }
      };

      const meta = titles[viewName] || { title: 'CA Final Platform', sub: '' };
      document.getElementById('pageMainHeading').textContent = meta.title;
      document.getElementById('pageSubHeading').textContent = meta.sub;

      document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.remove('active');
      });

      const targetPanel = document.getElementById(`view-${viewName}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      if (params.filterSubject) {
        this.currentFilter.subject = params.filterSubject;
        const sel = document.getElementById('filterSubject');
        if (sel) sel.value = params.filterSubject;
      }
      if (params.filterChapter) {
        this.currentFilter.chapter = params.filterChapter;
        const sel = document.getElementById('filterChapter');
        if (sel) sel.value = params.filterChapter;
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.renderCurrentView();
    }

    updateHeaderAndBadges(state) {
      const overall = window.store.getOverallMetrics();
      const weakBadge = document.getElementById('navWeakCount');
      if (weakBadge) {
        weakBadge.textContent = overall.weakChaptersCount;
        weakBadge.style.display = overall.weakChaptersCount > 0 ? 'inline-block' : 'none';
      }

      const bookmarkBadge = document.getElementById('navBookmarkCount');
      if (bookmarkBadge) {
        const bCount = (state.bookmarks || []).length;
        bookmarkBadge.textContent = bCount;
        bookmarkBadge.style.display = bCount > 0 ? 'inline-block' : 'none';
      }

      if (state.user) {
        const nameEl = document.getElementById('headerUserName');
        const examEl = document.getElementById('headerTargetExam');
        const avatarEl = document.getElementById('headerAvatar');
        if (nameEl) nameEl.textContent = state.user.name || 'Reshu Sharma';
        if (examEl) examEl.textContent = state.user.targetExam || 'CA Final (Nov 2026)';
        if (avatarEl && state.user.name) {
          const initials = state.user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
          avatarEl.textContent = initials || 'CA';
        }
      }
    }

    renderCurrentView() {
      switch (this.currentView) {
        case 'dashboard':
          this.renderDashboard();
          break;
        case 'subjects':
          this.renderSubjectsView();
          break;
        case 'chapters':
          this.renderChaptersView();
          break;
        case 'questions':
          this.renderQuestionsView();
          break;
        case 'practice':
          this.renderPracticeSetup();
          break;
        case 'weak-chapters':
          this.renderWeakChaptersView();
          break;
        case 'history':
          this.renderHistoryView();
          break;
        case 'bookmarks':
          this.renderBookmarksView();
          break;
        case 'notes':
          this.renderNotesView();
          break;
        case 'exams':
          this.renderExamsView();
          break;
        case 'admin':
          this.renderAdminView();
          break;
        case 'settings':
          this.renderSettingsView();
          break;
      }
    }

    // ==========================================
    // 1. DASHBOARD VIEW CONTROLLER (CLEAN INITIAL STATE)
    // ==========================================

    renderDashboard() {
      const overall = window.store.getOverallMetrics();
      const state = window.store.state;

      // 4 Top KPI Cards
      document.getElementById('kpiTotalChapters').textContent = overall.totalChapters;
      document.getElementById('kpiCompletedChapters').textContent = overall.completedChapters;
      document.getElementById('kpiCompletedPercent').textContent = `${overall.syllabusCompletionPercent}% syllabus completed`;
      document.getElementById('kpiRemainingChapters').textContent = overall.remainingChapters;
      document.getElementById('kpiOverallAccuracy').textContent = overall.hasAttempts ? `${overall.overallAccuracy}%` : '0.0%';
      document.getElementById('kpiMarksSummary').textContent = overall.hasAttempts 
        ? `Marks: ${overall.totalMarksObtained} / ${overall.totalMarksAttempted}`
        : 'Marks: 0 / 0 (No attempts yet)';

      // 5th KPI Card: Unattempted Questions
      const unattemptedEl = document.getElementById('kpiUnattempted');
      const unattemptedSubEl = document.getElementById('kpiUnattemptedSub');
      if (unattemptedEl) unattemptedEl.textContent = overall.unattemptedQuestions;
      if (unattemptedSubEl) {
        const pct = overall.totalQuestions > 0
          ? ((overall.unattemptedQuestions / overall.totalQuestions) * 100).toFixed(0)
          : 0;
        unattemptedSubEl.textContent = `${pct}% of ${overall.totalQuestions} total questions`;
      }

      // Charts Rendering
      window.CA_CHARTS.renderSyllabusDonut('syllabusDonutContainer', overall.completedChapters, overall.totalChapters);
      window.CA_CHARTS.renderAccuracyGauge('accuracyGaugeContainer', overall.overallAccuracy, overall.hasAttempts);

      // Subject-wise accuracy metrics
      const subjectMetrics = state.subjects.map(s => window.store.getSubjectMetrics(s.id));
      window.CA_CHARTS.renderSubjectBars('subjectBarsContainer', subjectMetrics);

      // Performance Trend
      window.CA_CHARTS.renderPerformanceTrend('trendChartContainer', state.trendHistory || []);

      // 5th Section: Weak Chapters
      this.renderWeakChaptersBanner();

      // 6th Section: Chapter Performance Table
      this.renderDashboardChapterTable();

      // 7th Section: Recent Sessions
      this.renderDashboardRecentSessions();
    }

    renderWeakChaptersBanner() {
      const weakContainer = document.getElementById('dashboardWeakCards');
      if (!weakContainer) return;

      const weakList = window.store.getWeakChapters();

      if (weakList.length === 0) {
        weakContainer.innerHTML = `
          <div class="weak-empty-box" style="grid-column: 1 / -1;">
            <h4>🎉 No Weak Chapters Detected</h4>
            <p>All your attempted chapters are currently at or above 50% accuracy. As you practice and enter marks, any chapter scoring below 50% will automatically appear here for practice!</p>
          </div>
        `;
        return;
      }

      let html = '';
      weakList.forEach(item => {
        html += `
          <div class="weak-card">
            <div>
              <div class="weak-card-top">
                <span class="weak-subj-tag">Paper ${item.paperNumber} • ${item.subjectName}</span>
                <span class="weak-accuracy-badge">${item.accuracy}% Accuracy</span>
              </div>
              <div class="weak-ch-name">Ch ${item.chapterNumber}: ${item.chapterName}</div>
              <div class="weak-stats-list">
                <div>Marks: <strong>${item.marksObtained} / ${item.maxMarksAttempted}</strong></div>
                <div>Questions Attempted: <strong>${item.questionsAttempted}</strong></div>
              </div>
            </div>
            <button class="btn-practice-again" onclick="app.practiceChapter('${item.chapterId}')">
              <span>🎯 Practice Again</span>
              <span>→</span>
            </button>
          </div>
        `;
      });

      weakContainer.innerHTML = html;
    }

    renderDashboardChapterTable() {
      const tbody = document.getElementById('dashboardChapterTableBody');
      if (!tbody) return;

      const state = window.store.state;
      const subjFilter = document.getElementById('chapterTableSubjectFilter').value;
      const statFilter = document.getElementById('chapterTableStatusFilter').value;

      let list = state.chapters.map(c => window.store.getChapterMetrics(c.id));

      if (subjFilter !== 'ALL') {
        list = list.filter(c => c.subjectId === subjFilter);
      }
      if (statFilter !== 'ALL') {
        list = list.filter(c => c.status === statFilter);
      }

      if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94a3b8; padding: 24px;">No matching chapters found.</td></tr>`;
        return;
      }

      let html = '';
      list.forEach(item => {
        const subject = state.subjects.find(s => s.id === item.subjectId);
        const subjName = subject ? subject.code : '';
        
        const accDisplay = item.maxMarksAttempted > 0 ? `${item.accuracy}%` : '<span style="color:#94a3b8;">—</span>';
        const isWeak = item.hasEvaluatedAttempts && item.accuracy < 50;

        html += `
          <tr>
            <td>
              <div style="font-weight: 700; color: #0f172a;">${item.chapterName}</div>
              <div style="font-size: 11px; color: #64748b;">${subjName} • Module: ${item.module || 'Module 1'}</div>
            </td>
            <td><strong>${item.questionsAttempted}</strong> / ${item.totalQuestions}</td>
            <td><strong>${item.marksObtained}</strong></td>
            <td>${item.maxMarksAttempted}</td>
            <td>
              <span style="font-weight: 800; color: ${isWeak ? '#dc2626' : item.accuracy >= 70 ? '#059669' : '#0f172a'};">
                ${accDisplay} ${isWeak ? '⚠️' : ''}
              </span>
            </td>
            <td>
              <select class="form-control" style="width: 125px; padding: 4px 8px; font-size: 11.5px; font-weight: 700;" onchange="app.handleStatusChange('${item.chapterId}', this.value)">
                <option value="Not Started" ${item.status === 'Not Started' ? 'selected' : ''}>☐ Not Started</option>
                <option value="In Progress" ${item.status === 'In Progress' ? 'selected' : ''}>◐ In Progress</option>
                <option value="Completed" ${item.status === 'Completed' ? 'selected' : ''}>☑ Completed</option>
              </select>
            </td>
            <td>
              <button class="btn btn-outline btn-sm" onclick="app.practiceChapter('${item.chapterId}')">Practice</button>
            </td>
          </tr>
        `;
      });

      tbody.innerHTML = html;

      document.getElementById('chapterTableSubjectFilter').onchange = () => this.renderDashboardChapterTable();
      document.getElementById('chapterTableStatusFilter').onchange = () => this.renderDashboardChapterTable();
    }

    renderDashboardRecentSessions() {
      const tbody = document.getElementById('dashboardRecentSessionsBody');
      if (!tbody) return;

      const sessions = (window.store.state.testSessions || []).slice(0, 5);
      if (sessions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94a3b8; padding: 24px;">No test history recorded yet. Use <strong>Practice Tests</strong> to start your first session!</td></tr>`;
        return;
      }

      let html = '';
      sessions.forEach(s => {
        html += `
          <tr>
            <td>${s.date}</td>
            <td><strong>${s.subject}</strong></td>
            <td>${s.chapter}</td>
            <td><span class="q-source-badge">${s.source} (${s.exam})</span></td>
            <td>${s.questionsCount} Qs</td>
            <td><strong>${s.marksObtained}</strong> / ${s.maxMarks}</td>
            <td><strong style="color: ${s.accuracy >= 50 ? '#059669' : '#dc2626'};">${s.accuracy}%</strong></td>
          </tr>
        `;
      });
      tbody.innerHTML = html;
    }

    // ==========================================
    // 2. SUBJECTS / PAPERS VIEW CONTROLLER
    // ==========================================

    renderSubjectsView() {
      const container = document.getElementById('subjectsCardsContainer');
      if (!container) return;

      const state = window.store.state;
      let html = '';

      state.subjects.forEach(sub => {
        const m = window.store.getSubjectMetrics(sub.id);

        html += `
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <span style="background: #eff6ff; color: #1e3a8a; padding: 4px 10px; border-radius: var(--radius-sm); font-weight: 800; font-size: 12px;">
                  Paper ${sub.paperNumber}
                </span>
                <span style="font-size: 11.5px; font-weight: 700; color: #64748b;">
                  Group ${sub.group}
                </span>
              </div>

              <h4 style="font-size: 17px; font-weight: 800; color: var(--text-primary); margin-bottom: 6px;">
                ${sub.name} (${sub.code})
              </h4>
              <p style="font-size: 12.5px; color: var(--text-secondary); margin-bottom: 18px; line-height: 1.5;">
                ${sub.description}
              </p>

              <div style="background: #f8fafc; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 12px; margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 6px;">
                  <span style="color: var(--text-muted);">Syllabus Covered:</span>
                  <span style="font-weight: 700; color: var(--text-primary);">${m.completedChapters} / ${m.totalChapters} Chapters (${m.progressPercent}%)</span>
                </div>
                <div style="height: 6px; background: #e2e8f0; border-radius: 999px; overflow: hidden;">
                  <div style="width: ${m.progressPercent}%; height: 100%; background: #059669; border-radius: 999px;"></div>
                </div>

                <div style="display: flex; justify-content: space-between; font-size: 12px; margin-top: 10px;">
                  <span style="color: var(--text-muted);">Aggregate Accuracy:</span>
                  <span style="font-weight: 800; color: ${m.hasAttempts ? (m.accuracy >= 50 ? '#1e3a8a' : '#dc2626') : '#94a3b8'};">
                    ${m.hasAttempts ? m.accuracy + '%' : 'No attempts yet'}
                  </span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 12px; margin-top: 4px;">
                  <span style="color: var(--text-muted);">Marks Obtained:</span>
                  <span style="font-weight: 700; color: var(--text-secondary);">${m.marksObtained} / ${m.maxMarksAttempted}</span>
                </div>
              </div>
            </div>

            <div style="display: flex; gap: 10px;">
              <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="app.filterQuestionsBySubject('${sub.id}')">
                Browse Questions
              </button>
              <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="app.filterChaptersBySubject('${sub.id}')">
                View Chapters
              </button>
            </div>
          </div>
        `;
      });

      container.innerHTML = html;
    }

    filterUnattempted() {
      this.currentFilter.subject = 'ALL';
      this.currentFilter.chapter = 'ALL';
      this.currentFilter.source = 'ALL';
      this.currentFilter.exam = 'ALL';
      this.currentFilter.marks = 'ALL';
      this.currentFilter.status = 'Unattempted';
      this.currentFilter.search = '';
      const subSel = document.getElementById('filterSubject');
      const chSel = document.getElementById('filterChapter');
      const srcSel = document.getElementById('filterSource');
      const statSel = document.getElementById('filterStatus');
      if (subSel) subSel.value = 'ALL';
      if (chSel) chSel.value = 'ALL';
      if (srcSel) srcSel.value = 'ALL';
      if (statSel) statSel.value = 'Unattempted';
      const sInput = document.getElementById('globalSearchInput');
      if (sInput) sInput.value = '';
      this.updateFilterChapters();
      this.navigateTo('questions');
    }

    filterQuestionsBySubject(subjectId) {
      this.currentFilter.subject = subjectId;
      this.currentFilter.chapter = 'ALL';
      const sel = document.getElementById('filterSubject');
      if (sel) sel.value = subjectId;
      this.updateFilterChapters();
      this.navigateTo('questions');
    }

    filterChaptersBySubject(subjectId) {
      const sel = document.getElementById('chapterViewSubjectSelect');
      if (sel) sel.value = subjectId;
      this.navigateTo('chapters');
    }

    // ==========================================
    // 3. CHAPTERS VIEW CONTROLLER
    // ==========================================

    renderChaptersView() {
      const container = document.getElementById('chaptersCardsGrid');
      if (!container) return;

      const state = window.store.state;
      const subjFilter = document.getElementById('chapterViewSubjectSelect').value;
      const statFilter = document.getElementById('chapterViewStatusSelect').value;

      let list = state.chapters.map(c => window.store.getChapterMetrics(c.id));

      if (subjFilter !== 'ALL') {
        list = list.filter(c => c.subjectId === subjFilter);
      }
      if (statFilter !== 'ALL') {
        list = list.filter(c => c.status === statFilter);
      }

      if (list.length === 0) {
        container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: #94a3b8; padding: 40px;">No chapters match the selected criteria.</div>`;
        return;
      }

      let html = '';
      list.forEach(ch => {
        const sub = state.subjects.find(s => s.id === ch.subjectId);
        const isWeak = ch.hasEvaluatedAttempts && ch.accuracy < 50;

        html += `
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border-left: 4px solid ${isWeak ? '#dc2626' : ch.status === 'Completed' ? '#059669' : '#2563eb'};">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                <span style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">
                  ${sub ? sub.code : ''} • ${ch.module}
                </span>
                <span class="status-pill ${ch.status === 'Completed' ? 'status-completed' : ch.status === 'In Progress' ? 'status-in-progress' : 'status-not-started'}">
                  ${ch.status}
                </span>
              </div>

              <h4 style="font-size: 15px; font-weight: 800; color: var(--text-primary); margin-bottom: 12px; line-height: 1.3;">
                Ch ${ch.chapterNumber}: ${ch.chapterName}
              </h4>

              ${ch.isCompiled ? `
                <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:var(--radius-sm);padding:8px 12px;margin-bottom:12px;font-size:12px;color:#1e3a8a;">
                  <strong>📌 Compiled Chapter:</strong> ${ch.compiledNote}
                </div>
              ` : ''}

              <div style="background: #f8fafc; border-radius: var(--radius-sm); padding: 10px 12px; font-size: 12px; margin-bottom: 14px; border: 1px solid var(--border-light);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                  <span>Questions Attempted:</span>
                  <strong>${ch.questionsAttempted} / ${ch.totalQuestions}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                  <span>Marks Scored:</span>
                  <strong>${ch.marksObtained} / ${ch.maxMarksAttempted}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>Chapter Accuracy:</span>
                  <strong style="color: ${isWeak ? '#dc2626' : ch.accuracy >= 70 ? '#059669' : '#0f172a'};">
                    ${ch.maxMarksAttempted > 0 ? ch.accuracy + '%' : '—'} ${isWeak ? '⚠️' : ''}
                  </strong>
                </div>
              </div>
            </div>

            <div>
              <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                <select class="form-control" style="font-size: 12px; padding: 6px 10px;" onchange="app.handleStatusChange('${ch.chapterId}', this.value)">
                  <option value="Not Started" ${ch.status === 'Not Started' ? 'selected' : ''}>☐ Mark Not Started</option>
                  <option value="In Progress" ${ch.status === 'In Progress' ? 'selected' : ''}>◐ Mark In Progress</option>
                  <option value="Completed" ${ch.status === 'Completed' ? 'selected' : ''}>☑ Mark Completed</option>
                </select>
              </div>

              <div style="display: flex; gap: 8px;">
                <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="app.practiceChapter('${ch.chapterId}')">
                  🎯 Practice Chapter
                </button>
                <button class="btn btn-secondary btn-sm" onclick="app.viewChapterQuestions('${ch.chapterId}')">
                  View Questions
                </button>
              </div>
            </div>
          </div>
        `;
      });

      container.innerHTML = html;

      document.getElementById('chapterViewSubjectSelect').onchange = () => this.renderChaptersView();
      document.getElementById('chapterViewStatusSelect').onchange = () => this.renderChaptersView();
    }

    viewChapterQuestions(chapterId) {
      const ch = window.store.state.chapters.find(c => c.id === chapterId);
      if (ch) {
        this.currentFilter.subject = ch.subjectId;
        this.currentFilter.chapter = ch.id;
        const subSel = document.getElementById('filterSubject');
        if (subSel) subSel.value = ch.subjectId;
        this.updateFilterChapters();
        const chSel = document.getElementById('filterChapter');
        if (chSel) chSel.value = ch.id;
      }
      this.navigateTo('questions');
    }

    // ==========================================
    // 4. QUESTION BANK VIEW CONTROLLER
    // ==========================================

    bindFilters() {
      const filterSubj = document.getElementById('filterSubject');
      const filterChap = document.getElementById('filterChapter');
      const filterSrc = document.getElementById('filterSource');
      const filterExam = document.getElementById('filterExam');
      const filterMarks = document.getElementById('filterMarks');
      const filterStat = document.getElementById('filterStatus');
      const resetBtn = document.getElementById('resetFiltersBtn');
      const pdfBtn = document.getElementById('generatePdfBtn');

      if (filterSubj) {
        filterSubj.addEventListener('change', () => {
          this.currentFilter.subject = filterSubj.value;
          this.updateFilterChapters();
          this.currentFilter.chapter = 'ALL';
          this.renderQuestionsView();
        });
      }

      if (filterChap) {
        filterChap.addEventListener('change', () => {
          this.currentFilter.chapter = filterChap.value;
          this.renderQuestionsView();
        });
      }

      if (filterSrc) {
        filterSrc.addEventListener('change', () => {
          this.currentFilter.source = filterSrc.value;
          this.renderQuestionsView();
        });
      }

      if (filterExam) {
        filterExam.addEventListener('change', () => {
          this.currentFilter.exam = filterExam.value;
          this.renderQuestionsView();
        });
      }

      if (filterMarks) {
        filterMarks.addEventListener('change', () => {
          this.currentFilter.marks = filterMarks.value;
          this.renderQuestionsView();
        });
      }

      if (filterStat) {
        filterStat.addEventListener('change', () => {
          this.currentFilter.status = filterStat.value;
          this.renderQuestionsView();
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.currentFilter = {
            subject: 'ALL',
            chapter: 'ALL',
            source: 'ALL',
            exam: 'ALL',
            marks: 'ALL',
            status: 'ALL',
            search: ''
          };
          if (filterSubj) filterSubj.value = 'ALL';
          if (filterChap) filterChap.value = 'ALL';
          if (filterSrc) filterSrc.value = 'ALL';
          if (filterExam) filterExam.value = 'ALL';
          if (filterMarks) filterMarks.value = 'ALL';
          if (filterStat) filterStat.value = 'ALL';
          const sInput = document.getElementById('globalSearchInput');
          if (sInput) sInput.value = '';
          this.updateFilterChapters();
          this.renderQuestionsView();
        });
      }

      if (pdfBtn) {
        pdfBtn.addEventListener('click', () => this.handleGeneratePdfForFiltered());
      }
    }

    bindSearch() {
      const searchInput = document.getElementById('globalSearchInput');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.currentFilter.search = e.target.value.toLowerCase().trim();
          if (this.currentView !== 'questions') {
            this.navigateTo('questions');
          } else {
            this.renderQuestionsView();
          }
        });
      }
    }

    updateFilterChapters() {
      const sel = document.getElementById('filterChapter');
      if (!sel) return;
      const subjId = this.currentFilter.subject;
      const state = window.store.state;

      let chapters = state.chapters;
      if (subjId !== 'ALL') {
        chapters = chapters.filter(c => c.subjectId === subjId);
      }

      let options = `<option value="ALL">All Chapters</option>`;
      chapters.forEach(c => {
        options += `<option value="${c.id}">Ch ${c.number}: ${c.name}</option>`;
      });
      sel.innerHTML = options;
    }

    populateChapterSelectOptions() {
      this.updateFilterChapters();
      this.updateAddFormChapters();
    }

    getFilteredQuestions() {
      const state = window.store.state;
      return (state.questions || []).filter(q => {
        if (this.currentFilter.subject !== 'ALL' && q.subjectId !== this.currentFilter.subject) return false;

        // Chapter filter: match single chapterId OR multi-chapter chapterIds[]
        if (this.currentFilter.chapter !== 'ALL') {
          const qChapterIds = (q.chapterIds && q.chapterIds.length > 0) ? q.chapterIds : (q.chapterId ? [q.chapterId] : []);
          if (!qChapterIds.includes(this.currentFilter.chapter)) return false;
        }

        if (this.currentFilter.source !== 'ALL' && q.sourceType !== this.currentFilter.source) return false;
        if (this.currentFilter.exam !== 'ALL' && !q.examSession.includes(this.currentFilter.exam)) return false;
        if (this.currentFilter.marks !== 'ALL' && q.marks !== parseFloat(this.currentFilter.marks)) return false;

        const latestAttempt = window.store.getLatestAttempt(q.id);
        const status = latestAttempt ? latestAttempt.status : 'Unattempted';
        if (this.currentFilter.status !== 'ALL') {
          if (this.currentFilter.status === 'Unattempted' && latestAttempt) return false;
          if (this.currentFilter.status !== 'Unattempted' && status !== this.currentFilter.status) return false;
        }

        if (this.currentFilter.search) {
          const qText = (q.questionText || '').toLowerCase();
          const topic = (q.topic || '').toLowerCase();
          const qNum = (q.questionNumber || '').toLowerCase();
          const src = (q.sourceName || '').toLowerCase();
          const ans = (q.suggestedAnswer || '').toLowerCase();
          const query = this.currentFilter.search;
          if (!qText.includes(query) && !topic.includes(query) && !qNum.includes(query) && !src.includes(query) && !ans.includes(query)) {
            return false;
          }
        }

        return true;
      });
    }

    renderQuestionsView() {
      const container = document.getElementById('questionsListContainer');
      const countDisplay = document.getElementById('qCountDisplay');
      if (!container) return;

      const questions = this.getFilteredQuestions();
      if (countDisplay) countDisplay.textContent = questions.length;

      if (questions.length === 0) {
        container.innerHTML = `
          <div class="card" style="text-align: center; padding: 40px; color: #64748b;">
            <div style="font-size: 32px; margin-bottom: 10px;">🔍</div>
            <h4 style="font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">No Questions Found</h4>
            <p style="font-size: 13px;">No questions match your current filter and search criteria. Try resetting the filters.</p>
            <button class="btn btn-secondary btn-sm" style="margin-top: 14px;" onclick="document.getElementById('resetFiltersBtn').click()">Reset Filters</button>
          </div>
        `;
        return;
      }

      let html = '';
      const state = window.store.state;

      questions.forEach(q => {
        const sub = state.subjects.find(s => s.id === q.subjectId);
        // Build chapter display — support both single chapterId and multi chapterIds[]
        const allChapterIds = (q.chapterIds && q.chapterIds.length > 0) ? q.chapterIds : (q.chapterId ? [q.chapterId] : []);
        const allChapters = allChapterIds.map(cid => state.chapters.find(c => c.id === cid)).filter(Boolean);
        const ch = allChapters[0]; // primary chapter for backward compat
        const isMultiChapter = allChapters.length > 1;
        const isBookmarked = window.store.isBookmarked(q.id);
        const latestAttempt = window.store.getLatestAttempt(q.id);
        const note = window.store.getNote(q.id);

        let attemptBadge = '';
        if (latestAttempt) {
          const statusLabel = latestAttempt.status || 'Attempted';
          const statusColor = statusLabel === 'Mastered' ? '#059669' : statusLabel === 'Reviewed' ? '#2563eb' : '#dc2626';
          const statusBg = statusLabel === 'Mastered' ? '#ecfdf5' : statusLabel === 'Reviewed' ? '#eff6ff' : '#fef2f2';
          const statusBorder = statusLabel === 'Mastered' ? '#a7f3d0' : statusLabel === 'Reviewed' ? '#bfdbfe' : '#fecaca';
          attemptBadge = `
            <span style="font-size: 11.5px; font-weight: 700; color: ${statusColor}; background: ${statusBg}; padding: 3px 8px; border-radius: 999px; border: 1px solid ${statusBorder};">
              ${statusLabel}: ${latestAttempt.marksObtained} / ${latestAttempt.maxMarks} (${latestAttempt.percentage}%)
            </span>
          `;
        } else {
          attemptBadge = `
            <span style="font-size: 11.5px; font-weight: 700; color: #64748b; background: #f1f5f9; padding: 3px 8px; border-radius: 999px; border: 1px solid #e2e8f0;">
              🔲 Unattempted
            </span>
          `;
        }

        let occHtml = '';
        if (q.occurrences && q.occurrences.length > 0) {
          occHtml = `
            <div class="q-occurrence-tag" title="Historical occurrence in ICAI papers">
              <span>🔁 Appeared ${q.occurrences.length} times</span>
            </div>
          `;
        }

        html += `
          <div class="question-card" id="q-card-${q.id}">
            <div class="q-header">
              <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                <span class="q-source-badge">
                  <span>🏛️ ${q.sourceName || (q.sourceType + ' ' + q.examSession)}</span>
                </span>
                <span class="q-marks-pill">
                  ${q.marks} Marks
                </span>
                ${occHtml}
                ${attemptBadge}
              </div>

              <div style="display: flex; gap: 8px; align-items: center;">
                <button class="btn btn-secondary btn-sm" onclick="app.toggleBookmark('${q.id}')" title="Bookmark question">
                  <span style="color: ${isBookmarked ? '#eab308' : '#94a3b8'};">${isBookmarked ? '★' : '☆'}</span>
                  <span>${isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                </button>
              </div>
            </div>

            <div class="q-meta-line">
              <span><strong>Paper:</strong> ${sub ? sub.name : ''}</span>
              ${isMultiChapter
                ? `<span><strong>Chapters:</strong> ${allChapters.map(c => `Ch ${c.number}`).join(' + ')} <span style="background:#eff6ff;color:#1e3a8a;border-radius:4px;padding:1px 6px;font-size:10px;font-weight:800;margin-left:4px;">MULTI-CHAPTER</span></span>`
                : `<span><strong>Chapter:</strong> Ch ${ch ? ch.number : ''} - ${ch ? ch.name : ''}</span>`
              }
              <span><strong>Question No:</strong> ${q.questionNumber || 'Q.1'}</span>
              <span><strong>Difficulty:</strong> ${q.difficulty || 'Medium'}</span>
            </div>
            ${isMultiChapter ? `
              <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;">
                ${allChapters.map(c => `<span style="background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d;border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700;">Ch ${c.number}: ${c.name}</span>`).join('')}
              </div>
            ` : ''}

            <div class="q-text-box">
              ${q.questionText}
            </div>

            ${note ? `
              <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: var(--radius-sm); padding: 8px 12px; margin-bottom: 14px; font-size: 12px; color: #92400e; display: flex; justify-content: space-between; align-items: center;">
                <span><strong>My Note:</strong> ${note}</span>
                <button class="btn btn-outline btn-sm" style="padding: 2px 6px; font-size: 11px;" onclick="app.openNoteModal('${q.id}')">Edit Note</button>
              </div>
            ` : ''}

            <!-- Suggested Answer Accordion -->
            <div class="suggested-answer-box" id="ans-box-${q.id}">
              <div class="ans-header">
                <span>📘 Official ICAI Suggested Answer &amp; Detailed Working Notes</span>
              </div>
              <div class="ans-content">
                ${q.suggestedAnswer || 'Official suggested answer not available for this question.'}
              </div>
              <div style="margin-top: 12px; font-size: 11px; color: #64748b; border-top: 1px dashed #cbd5e1; padding-top: 8px; display: flex; justify-content: space-between;">
                <span>Source: ICAI BoS Official Material</span>
                <a href="${q.sourceUrl || 'https://boslive.icai.org/index.php'}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: 600;">Open BoS Live ↗</a>
              </div>
            </div>

            <div class="q-actions-bar">
              <div class="q-action-btns-left">
                <button class="btn btn-primary btn-sm" onclick="app.openSelfEvalModal('${q.id}')">
                  ✏️ Enter Marks / Self-Evaluate
                </button>
                <button class="btn btn-secondary btn-sm" onclick="app.toggleSuggestedAnswer('${q.id}')">
                  💡 View Suggested Answer
                </button>
                <button class="btn btn-secondary btn-sm" onclick="app.openNoteModal('${q.id}')">
                  📝 ${note ? 'Edit Note' : 'Add Note'}
                </button>
              </div>

              <div class="q-action-btns-right">
                <a href="${q.sourceUrl || 'https://boslive.icai.org/index.php'}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                  Official Source ↗
                </a>
              </div>
            </div>
          </div>
        `;
      });

      container.innerHTML = html;
    }

    toggleSuggestedAnswer(questionId) {
      const box = document.getElementById(`ans-box-${questionId}`);
      if (box) {
        box.classList.toggle('active');
      }
    }

    toggleBookmark(questionId) {
      window.store.toggleBookmark(questionId);
      this.renderCurrentView();
    }

    handleGeneratePdfForFiltered() {
      const questions = this.getFilteredQuestions();
      if (questions.length === 0) {
        alert("No questions selected. Please adjust your filters.");
        return;
      }

      const state = window.store.state;
      let subjectName = "All CA Final Papers";
      let chapterName = "Mixed Compilation";

      if (this.currentFilter.subject !== 'ALL') {
        const s = state.subjects.find(sub => sub.id === this.currentFilter.subject);
        if (s) subjectName = `Paper ${s.paperNumber}: ${s.name}`;
      }

      if (this.currentFilter.chapter !== 'ALL') {
        const c = state.chapters.find(ch => ch.id === this.currentFilter.chapter);
        if (c) chapterName = `Ch ${c.number}: ${c.name}`;
      }

      window.CA_PDF.generateAnswerSheet({
        subjectName: subjectName,
        chapterName: chapterName,
        questions: questions,
        studentName: state.user.name || 'Reshu Sharma'
      });
    }

    // ==========================================
    // 5. PRACTICE TESTS VIEW & RUNNER
    // ==========================================

    bindPracticeMode() {
      const subjSelect = document.getElementById('practiceSubjectSelect');
      const startBtn = document.getElementById('startPracticeBtn');
      const exitBtn = document.getElementById('runnerExitBtn');

      if (subjSelect) {
        subjSelect.addEventListener('change', () => this.updatePracticeChapters());
      }
      if (startBtn) {
        startBtn.addEventListener('click', () => this.startPracticeSession());
      }
      if (exitBtn) {
        exitBtn.addEventListener('click', () => this.exitPracticeSession());
      }

      this.updatePracticeChapters();
    }

    updatePracticeChapters() {
      const subjSelect = document.getElementById('practiceSubjectSelect');
      const chapSelect = document.getElementById('practiceChapterSelect');
      if (!subjSelect || !chapSelect) return;

      const subjId = subjSelect.value;
      const chapters = window.store.state.chapters.filter(c => c.subjectId === subjId);

      let options = '';
      chapters.forEach(c => {
        options += `<option value="${c.id}">Ch ${c.number}: ${c.name}</option>`;
      });
      chapSelect.innerHTML = options;
    }

    practiceChapter(chapterId) {
      const ch = window.store.state.chapters.find(c => c.id === chapterId);
      if (!ch) return;

      this.navigateTo('practice');
      const subSel = document.getElementById('practiceSubjectSelect');
      if (subSel) subSel.value = ch.subjectId;
      this.updatePracticeChapters();
      const chapSel = document.getElementById('practiceChapterSelect');
      if (chapSel) chapSel.value = ch.id;

      setTimeout(() => {
        this.startPracticeSession();
      }, 100);
    }

    startPracticeWithCurrentFilter() {
      this.navigateTo('practice');
      if (this.currentFilter.subject !== 'ALL') {
        const subSel = document.getElementById('practiceSubjectSelect');
        if (subSel) subSel.value = this.currentFilter.subject;
        this.updatePracticeChapters();
      }
      if (this.currentFilter.chapter !== 'ALL') {
        const chapSel = document.getElementById('practiceChapterSelect');
        if (chapSel) chapSel.value = this.currentFilter.chapter;
      }
    }

    renderPracticeSetup() {
      const setupCard = document.getElementById('practiceSetupCard');
      const runnerView = document.getElementById('practiceRunnerView');
      if (setupCard && runnerView) {
        if (!this.activePracticeSession) {
          setupCard.style.display = 'block';
          runnerView.style.display = 'none';
        } else {
          setupCard.style.display = 'none';
          runnerView.style.display = 'block';
          this.renderPracticeRunnerQuestion();
        }
      }
    }

    startPracticeSession() {
      const subjId = document.getElementById('practiceSubjectSelect').value;
      const chapId = document.getElementById('practiceChapterSelect').value;
      const countVal = document.getElementById('practiceCountSelect').value;
      const srcFilter = document.getElementById('practiceSourceFilter').value;

      const state = window.store.state;
      let questions = state.questions.filter(q => q.subjectId === subjId && q.chapterId === chapId);

      if (srcFilter !== 'ALL') {
        if (srcFilter === 'UNATTEMPTED') {
          questions = questions.filter(q => !window.store.getLatestAttempt(q.id));
        } else {
          questions = questions.filter(q => q.sourceType === srcFilter);
        }
      }

      if (questions.length === 0) {
        alert("No questions match the selected criteria for this chapter. Try choosing another filter or source.");
        return;
      }

      const count = countVal === 'ALL' ? questions.length : parseInt(countVal);
      const sessionQuestions = questions.slice(0, count);

      this.activePracticeSession = {
        subjectId: subjId,
        chapterId: chapId,
        questions: sessionQuestions,
        currentIndex: 0,
        startTime: Date.now(),
        timerInterval: null,
        scores: {}
      };

      document.getElementById('practiceSetupCard').style.display = 'none';
      document.getElementById('practiceRunnerView').style.display = 'block';

      this.startRunnerTimer();
      this.renderPracticeRunnerQuestion();
    }

    startRunnerTimer() {
      const timerDisplay = document.getElementById('runnerTimerDisplay');
      if (!timerDisplay) return;

      if (this.activePracticeSession.timerInterval) {
        clearInterval(this.activePracticeSession.timerInterval);
      }

      this.activePracticeSession.timerInterval = setInterval(() => {
        if (!this.activePracticeSession) return;
        const elapsedSec = Math.floor((Date.now() - this.activePracticeSession.startTime) / 1000);
        const mins = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
        const secs = String(elapsedSec % 60).padStart(2, '0');
        timerDisplay.textContent = `${mins}:${secs}`;
      }, 1000);
    }

    renderPracticeRunnerQuestion() {
      const session = this.activePracticeSession;
      if (!session) return;

      const q = session.questions[session.currentIndex];
      const state = window.store.state;
      const sub = state.subjects.find(s => s.id === session.subjectId);
      const ch = state.chapters.find(c => c.id === session.chapterId);

      document.getElementById('runnerSubjectLabel').textContent = sub ? sub.code : '';
      document.getElementById('runnerChapterLabel').textContent = ch ? ch.name : '';
      document.getElementById('runnerCurrentIndex').textContent = session.currentIndex + 1;
      document.getElementById('runnerTotalCount').textContent = session.questions.length;

      const container = document.getElementById('runnerQuestionContainer');
      const existingScore = session.scores[q.id];

      container.innerHTML = `
        <div style="background: #ffffff; padding: 4px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <span class="q-source-badge">
              <span>🏛️ ${q.sourceName || (q.sourceType + ' ' + q.examSession)}</span>
            </span>
            <span class="q-marks-pill">Maximum Marks: <strong>${q.marks}</strong></span>
          </div>

          <div class="q-text-box" style="font-size: 15px; margin-bottom: 20px;">
            ${q.questionText}
          </div>

          <div style="background: #f8fafc; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
            <h4 style="font-size: 13.5px; font-weight: 800; color: #1e3a8a; margin-bottom: 10px;">
              ✏️ Self-Evaluation for Question ${session.currentIndex + 1}:
            </h4>
            <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
              <div>
                <label class="form-label">Marks Obtained (Out of ${q.marks}):</label>
                <input type="number" id="runnerObtainedInput" class="form-control" style="width: 140px; font-weight: 700;" min="0" max="${q.marks}" step="0.5" value="${existingScore !== undefined ? existingScore : ''}" placeholder="0 - ${q.marks}">
              </div>
              <button class="btn btn-secondary" style="margin-top: 20px;" onclick="app.toggleRunnerAnswer()">
                💡 Reveal ICAI Suggested Answer
              </button>
            </div>
          </div>

          <div id="runnerAnswerReveal" style="display: none; background: #ffffff; border: 1px solid #cbd5e1; border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
            <div style="font-size: 13px; font-weight: 800; color: #059669; margin-bottom: 8px;">
              Official ICAI Suggested Answer:
            </div>
            <div style="font-size: 13.5px; line-height: 1.65; color: #0f172a; white-space: pre-line;">
              ${q.suggestedAnswer}
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 16px;">
            <button class="btn btn-secondary" onclick="app.prevRunnerQuestion()" ${session.currentIndex === 0 ? 'disabled' : ''}>
              ← Previous
            </button>

            <div>
              ${session.currentIndex < session.questions.length - 1 ? `
                <button class="btn btn-primary" onclick="app.nextRunnerQuestion()">
                  Next Question →
                </button>
              ` : `
                <button class="btn btn-primary" onclick="app.finishPracticeSession()" style="background: #059669;">
                  🏁 Complete Test &amp; Save Results
                </button>
              `}
            </div>
          </div>
        </div>
      `;
    }

    toggleRunnerAnswer() {
      const box = document.getElementById('runnerAnswerReveal');
      if (box) {
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
      }
    }

    saveCurrentRunnerScore() {
      if (!this.activePracticeSession) return;
      const q = this.activePracticeSession.questions[this.activePracticeSession.currentIndex];
      const input = document.getElementById('runnerObtainedInput');
      if (input && input.value !== '') {
        const val = parseFloat(input.value);
        if (!isNaN(val)) {
          this.activePracticeSession.scores[q.id] = Math.max(0, Math.min(val, q.marks));
        }
      }
    }

    prevRunnerQuestion() {
      this.saveCurrentRunnerScore();
      if (this.activePracticeSession && this.activePracticeSession.currentIndex > 0) {
        this.activePracticeSession.currentIndex--;
        this.renderPracticeRunnerQuestion();
      }
    }

    nextRunnerQuestion() {
      this.saveCurrentRunnerScore();
      if (this.activePracticeSession && this.activePracticeSession.currentIndex < this.activePracticeSession.questions.length - 1) {
        this.activePracticeSession.currentIndex++;
        this.renderPracticeRunnerQuestion();
      }
    }

    finishPracticeSession() {
      this.saveCurrentRunnerScore();
      const session = this.activePracticeSession;
      if (!session) return;

      clearInterval(session.timerInterval);

      let totalMaxMarks = 0;
      let totalMarksObtained = 0;

      session.questions.forEach(q => {
        totalMaxMarks += q.marks;
        const obtained = session.scores[q.id] !== undefined ? session.scores[q.id] : 0;
        totalMarksObtained += obtained;

        window.store.recordAttempt({
          questionId: q.id,
          marksObtained: obtained,
          notes: ''
        });
      });

      const state = window.store.state;
      const sub = state.subjects.find(s => s.id === session.subjectId);
      const ch = state.chapters.find(c => c.id === session.chapterId);

      const sessionAccuracy = totalMaxMarks > 0 ? ((totalMarksObtained / totalMaxMarks) * 100).toFixed(1) : 0;
      window.store.recordTestSession({
        subject: sub ? sub.name : 'CA Final',
        chapter: ch ? ch.name : 'Chapter',
        source: 'Practice Mode Drill',
        exam: 'Custom Test',
        questionsCount: session.questions.length,
        maxMarks: totalMaxMarks,
        marksObtained: totalMarksObtained
      });

      alert(`Practice session complete!\n\nQuestions: ${session.questions.length}\nTotal Marks: ${totalMarksObtained} / ${totalMaxMarks}\nAccuracy: ${sessionAccuracy}%\n\nDashboard and Weak Chapters updated automatically.`);

      this.activePracticeSession = null;
      this.navigateTo('dashboard');
    }

    exitPracticeSession() {
      if (confirm("Are you sure you want to quit this practice session? Unsaved marks will be lost.")) {
        if (this.activePracticeSession && this.activePracticeSession.timerInterval) {
          clearInterval(this.activePracticeSession.timerInterval);
        }
        this.activePracticeSession = null;
        this.renderPracticeSetup();
      }
    }

    // ==========================================
    // 6. WEAK CHAPTERS VIEW CONTROLLER
    // ==========================================

    renderWeakChaptersView() {
      const container = document.getElementById('dedicatedWeakCardsGrid');
      if (!container) return;

      const weakList = window.store.getWeakChapters();

      if (weakList.length === 0) {
        container.innerHTML = `
          <div class="weak-empty-box" style="grid-column: 1 / -1; padding: 40px;">
            <h4>🎉 No Weak Chapters Detected!</h4>
            <p style="margin-top: 8px;">All your attempted chapters currently have aggregate accuracy &ge; 50%.</p>
          </div>
        `;
        return;
      }

      let html = '';
      weakList.forEach(item => {
        html += `
          <div class="weak-card">
            <div>
              <div class="weak-card-top">
                <span class="weak-subj-tag">Paper ${item.paperNumber} • ${item.subjectName}</span>
                <span class="weak-accuracy-badge">${item.accuracy}% Accuracy</span>
              </div>
              <div class="weak-ch-name">Ch ${item.chapterNumber}: ${item.chapterName}</div>
              <div class="weak-stats-list">
                <div>Marks: <strong>${item.marksObtained} / ${item.maxMarksAttempted}</strong></div>
                <div>Questions Attempted: <strong>${item.questionsAttempted}</strong></div>
              </div>
              <p style="font-size: 11.5px; color: #7f1d1d; margin-bottom: 12px;">
                ⚠️ Remediation: Needs &ge; 50% accuracy to clear from weak list.
              </p>
            </div>
            <button class="btn-practice-again" onclick="app.practiceChapter('${item.chapterId}')">
              <span>🎯 Practice Again</span>
              <span>→</span>
            </button>
          </div>
        `;
      });

      container.innerHTML = html;
    }

    // ==========================================
    // 7. TEST HISTORY VIEW
    // ==========================================

    renderHistoryView() {
      const tbody = document.getElementById('fullHistoryTableBody');
      if (!tbody) return;

      const sessions = window.store.state.testSessions || [];
      if (sessions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: #94a3b8; padding: 30px;">No test history recorded yet. Complete practice sessions to view historical data.</td></tr>`;
        return;
      }

      let html = '';
      sessions.forEach(s => {
        html += `
          <tr>
            <td>${s.date}</td>
            <td><strong>${s.subject}</strong></td>
            <td>${s.chapter}</td>
            <td><span class="q-source-badge">${s.source}</span></td>
            <td>${s.exam}</td>
            <td>${s.questionsCount}</td>
            <td>${s.maxMarks}</td>
            <td><strong>${s.marksObtained}</strong></td>
            <td><strong style="color: ${s.accuracy >= 50 ? '#059669' : '#dc2626'};">${s.accuracy}%</strong></td>
          </tr>
        `;
      });
      tbody.innerHTML = html;
    }

    // ==========================================
    // 8. BOOKMARKS & 9. NOTES VIEWS
    // ==========================================

    renderBookmarksView() {
      const container = document.getElementById('bookmarksListContainer');
      if (!container) return;

      const bookmarks = window.store.state.bookmarks || [];
      if (bookmarks.length === 0) {
        container.innerHTML = `<div class="card" style="text-align: center; padding: 40px; color: #94a3b8;">No questions bookmarked yet. Click the ☆ Bookmark button on any question in the Question Bank.</div>`;
        return;
      }

      const qList = bookmarks.map(id => window.store.getQuestion(id)).filter(Boolean);
      let html = '';
      qList.forEach(q => {
        html += `
          <div class="question-card">
            <div class="q-header">
              <div style="display: flex; gap: 8px; align-items: center;">
                <span class="q-source-badge">${q.sourceName || (q.sourceType + ' ' + q.examSession)}</span>
                <span class="q-marks-pill">${q.marks} Marks</span>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="app.toggleBookmark('${q.id}')">
                <span style="color: #eab308;">★</span> Remove Bookmark
              </button>
            </div>
            <div class="q-meta-line">
              <span><strong>Topic:</strong> ${q.topic}</span>
              <span><strong>Question No:</strong> ${q.questionNumber}</span>
            </div>
            <div class="q-text-box">${q.questionText}</div>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-primary btn-sm" onclick="app.openSelfEvalModal('${q.id}')">Enter Marks</button>
              <button class="btn btn-secondary btn-sm" onclick="app.openNoteModal('${q.id}')">Note</button>
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    }

    renderNotesView() {
      const container = document.getElementById('notesListContainer');
      if (!container) return;

      const notes = window.store.state.notes || {};
      const noteKeys = Object.keys(notes).filter(k => notes[k] && notes[k].trim());

      if (noteKeys.length === 0) {
        container.innerHTML = `<div class="card" style="text-align: center; padding: 40px; color: #94a3b8;">No private notes saved yet. Click 'Add Note' on any question card in the Question Bank.</div>`;
        return;
      }

      let html = '';
      noteKeys.forEach(qId => {
        const q = window.store.getQuestion(qId);
        if (!q) return;

        html += `
          <div class="card" style="margin-bottom: 16px; border-left: 4px solid #f59e0b;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <div style="font-size: 13px; font-weight: 700; color: #0f172a;">
                ${q.questionNumber}: ${q.topic} (${q.sourceName || q.sourceType})
              </div>
              <button class="btn btn-secondary btn-sm" onclick="app.openNoteModal('${q.id}')">Edit Note</button>
            </div>
            <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: var(--radius-sm); padding: 12px; font-size: 13.5px; color: #78350f; line-height: 1.5;">
              ${notes[qId]}
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    }

    // ==========================================
    // 10. EXAMINATIONS VIEW (Prompt Sec 19)
    // ==========================================

    renderExamsView() {
      const container = document.getElementById('examsListContainer');
      if (!container) return;

      const exams = window.store.state.exams || [];
      let html = '';

      exams.forEach(ex => {
        const qCount = window.store.state.questions.filter(q => q.examSession.includes(ex.session) && q.examYear === ex.year).length;

        html += `
          <div class="card" style="cursor: pointer; transition: transform 0.2s;" onclick="app.filterByExam('${ex.session} ${ex.year}')">
            <div style="font-size: 12px; font-weight: 700; color: #2563eb; text-transform: uppercase; margin-bottom: 6px;">
              ${ex.year} Examination
            </div>
            <h4 style="font-size: 16px; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">
              ${ex.label}
            </h4>
            <div style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 14px;">
              Includes MTPs, RTPs and Main Examination Papers
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 10px; font-size: 12px;">
              <span>Available Questions: <strong>${qCount}</strong></span>
              <span style="color: #2563eb; font-weight: 700;">Explore Series →</span>
            </div>
          </div>
        `;
      });

      container.innerHTML = html;
    }

    filterByExam(examSessionStr) {
      this.currentFilter.exam = examSessionStr;
      this.currentFilter.subject = 'ALL';
      this.currentFilter.chapter = 'ALL';
      const sel = document.getElementById('filterExam');
      if (sel) sel.value = examSessionStr;
      this.navigateTo('questions');
    }

    // ==========================================
    // MODALS: SELF EVALUATION & NOTES
    // ==========================================

    bindModals() {
      const saveEvalBtn = document.getElementById('saveEvalBtn');
      const saveNoteBtn = document.getElementById('saveNoteBtn');

      if (saveEvalBtn) {
        saveEvalBtn.addEventListener('click', () => this.handleSaveSelfEval());
      }

      if (saveNoteBtn) {
        saveNoteBtn.addEventListener('click', () => this.handleSaveNote());
      }
    }

    openSelfEvalModal(questionId) {
      const q = window.store.getQuestion(questionId);
      if (!q) return;

      this.activeEvalQuestionId = questionId;
      const latest = window.store.getLatestAttempt(questionId);

      document.getElementById('modalEvalQMeta').textContent = `${q.questionNumber}: ${q.topic} (${q.sourceName || q.sourceType})`;
      document.getElementById('modalEvalMaxMarks').value = q.marks;
      document.getElementById('modalEvalObtainedMarks').value = latest ? latest.marksObtained : '';
      document.getElementById('modalEvalPercentage').textContent = latest ? `${latest.percentage}%` : '0%';
      document.getElementById('modalEvalStatus').value = latest ? latest.status : 'Attempted';
      document.getElementById('modalEvalNotes').value = window.store.getNote(questionId) || '';

      // Show "Mark Unattempted" reset button only when attempt already exists
      const resetBtn = document.getElementById('markUnattemptedBtn');
      if (resetBtn) {
        resetBtn.style.display = latest ? 'inline-flex' : 'none';
      }

      // Show current status in the header block
      const statusLine = document.getElementById('modalEvalCurrentStatus');
      if (statusLine) {
        if (latest) {
          const col = latest.status === 'Mastered' ? '#059669' : latest.status === 'Reviewed' ? '#2563eb' : '#dc2626';
          statusLine.innerHTML = `Current: <strong style="color:${col};">${latest.status}</strong> — ${latest.marksObtained} / ${latest.maxMarks} marks (${latest.percentage}%)`;
        } else {
          statusLine.innerHTML = `<span style="color:#64748b;">🔲 Not yet attempted</span>`;
        }
      }

      // Reset percentage live-calc when marks input changes
      const obtainedInput = document.getElementById('modalEvalObtainedMarks');
      if (obtainedInput) {
        // Remove old listener by cloning the node
        const newInput = obtainedInput.cloneNode(true);
        obtainedInput.parentNode.replaceChild(newInput, obtainedInput);
        newInput.addEventListener('input', () => {
          const max = parseFloat(document.getElementById('modalEvalMaxMarks').value) || 1;
          const val = parseFloat(newInput.value) || 0;
          const pct = Math.max(0, Math.min(100, (val / max) * 100));
          document.getElementById('modalEvalPercentage').textContent = `${pct.toFixed(1)}%`;
        });
      }

      document.getElementById('selfEvalModal').classList.add('active');
    }

    handleSaveSelfEval() {
      if (!this.activeEvalQuestionId) return;

      const marksVal = document.getElementById('modalEvalObtainedMarks').value;
      if (marksVal === '' || marksVal === null) {
        alert("Please enter marks obtained. Enter 0 if you scored nothing.");
        return;
      }

      const status = document.getElementById('modalEvalStatus').value;
      const notes = document.getElementById('modalEvalNotes').value;

      window.store.recordAttempt({
        questionId: this.activeEvalQuestionId,
        marksObtained: marksVal,
        status: status,
        notes: notes
      });

      this.closeModal('selfEvalModal');
      // Force full re-render so dashboard KPIs, unattempted count and question badges all update
      this.renderCurrentView();
      this.updateHeaderAndBadges(window.store.state);
    }

    handleMarkUnattempted() {
      if (!this.activeEvalQuestionId) return;
      if (!confirm('Remove your recorded marks and mark this question as Unattempted?')) return;

      window.store.deleteAttempt(this.activeEvalQuestionId);
      this.closeModal('selfEvalModal');
      // Force full re-render after reset
      this.renderCurrentView();
      this.updateHeaderAndBadges(window.store.state);
    }

    openNoteModal(questionId) {
      const q = window.store.getQuestion(questionId);
      if (!q) return;

      this.activeNoteQuestionId = questionId;
      document.getElementById('modalNoteQMeta').textContent = `Note for ${q.questionNumber}: ${q.topic}`;
      document.getElementById('modalNoteInput').value = window.store.getNote(questionId);

      document.getElementById('noteModal').classList.add('active');
    }

    handleSaveNote() {
      if (!this.activeNoteQuestionId) return;
      const text = document.getElementById('modalNoteInput').value;
      window.store.saveNote(this.activeNoteQuestionId, text);
      this.closeModal('noteModal');
    }

    closeModal(modalId) {
      const m = document.getElementById(modalId);
      if (m) m.classList.remove('active');
    }

    handleStatusChange(chapterId, status) {
      window.store.setChapterStatus(chapterId, status);
    }

    // ==========================================
    // 11. ADMIN VIEW CONTROLLER
    // ==========================================

    renderAdminView() {
      this.updateAddFormChapters();
    }

    switchAdminTab(tabName) {
      document.querySelectorAll('.admin-tab-content').forEach(c => c.style.display = 'none');
      const target = document.getElementById(`adminTab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
      if (target) target.style.display = 'block';

      ['csv', 'pdf', 'add', 'backup'].forEach(t => {
        const btn = document.getElementById(`adminTab${t.charAt(0).toUpperCase() + t.slice(1)}Btn`);
        if (btn) {
          if (t === tabName) {
            btn.className = 'btn btn-primary btn-sm';
          } else {
            btn.className = 'btn btn-secondary btn-sm';
          }
        }
      });
    }

    updateAddFormChapters() {
      const subSel = document.getElementById('addQSubject');
      const chapSel = document.getElementById('addQChapter');
      if (!subSel || !chapSel) return;

      const chapters = window.store.state.chapters.filter(c => c.subjectId === subSel.value);
      let options = '';
      chapters.forEach(c => {
        options += `<option value="${c.id}">Ch ${c.number}: ${c.name}</option>`;
      });
      chapSel.innerHTML = options;
    }

    handleAddQuestionSubmit(e) {
      e.preventDefault();
      const subId = document.getElementById('addQSubject').value;
      const chapId = document.getElementById('addQChapter').value;
      const qNum = document.getElementById('addQNumber').value;
      const marks = document.getElementById('addQMarks').value;
      const srcType = document.getElementById('addQSourceType').value;
      const examSession = document.getElementById('addQSession').value;
      const topic = document.getElementById('addQTopic').value;
      const text = document.getElementById('addQText').value;
      const ans = document.getElementById('addQAnswer').value;

      window.store.addQuestion({
        subjectId: subId,
        chapterId: chapId,
        questionNumber: qNum,
        marks: marks,
        sourceType: srcType,
        examSession: examSession,
        topic: topic,
        questionText: text,
        suggestedAnswer: ans
      });

      alert("Question successfully added to CA Final Repository!");
      document.getElementById('addQuestionForm').reset();
      this.updateAddFormChapters();
      this.navigateTo('questions');
    }

    handleCsvImport() {
      const text = document.getElementById('adminCsvInput').value;
      const resultBox = document.getElementById('adminImportResult');
      if (!text || !text.trim()) {
        alert("Please paste CSV data to import.");
        return;
      }

      const res = window.store.importFromCSV(text);
      resultBox.style.display = 'block';

      if (res.success) {
        let errHtml = '';
        if (res.errors && res.errors.length > 0) {
          errHtml = `
            <div style="margin-top: 10px; font-size: 12px; color: #dc2626;">
              <strong>Warnings (${res.errors.length}):</strong>
              <ul>${res.errors.map(e => `<li>${e}</li>`).join('')}</ul>
            </div>
          `;
        }

        resultBox.innerHTML = `
          <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 14px; border-radius: var(--radius-md); color: #065f46;">
            <strong>Success!</strong> Successfully imported ${res.importedCount} questions.
            ${errHtml}
          </div>
        `;
        document.getElementById('adminCsvInput').value = '';
      } else {
        resultBox.innerHTML = `
          <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 14px; border-radius: var(--radius-md); color: #991b1b;">
            <strong>Import Failed:</strong>
            <ul>${res.errors.map(e => `<li>${e}</li>`).join('')}</ul>
          </div>
        `;
      }
    }

    downloadSampleCSV() {
      const sample = `Question_ID,Subject,Chapter,Question_Text,Marks,Source_Type,Question_Number,Exam,Year,Suggested_Answer
FR-SAMPLE-01,P1,7,"Explain split accounting for convertible debentures under Ind AS 32.",10,MTP,Q.1(a),May 2026,2026,"The liability component is the present value of contractual cash flows. Equity option is the residual amount."
AFM-SAMPLE-01,P2,9,"An exporter has receivable of USD 500000 due in 6 months. Spot is 83.20. Evaluate Forward vs Money Market Hedge.",10,RTP,Q.2(a),November 2025,2025,"Money market hedge yields higher Rupee inflow of 42005854 compared to forward hedge."`;

      const blob = new Blob([sample], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ca_final_questions_template.csv';
      a.click();
      URL.revokeObjectURL(url);
    }

    parsePdfText() {
      const raw = document.getElementById('pdfRawInput').value;
      const preview = document.getElementById('pdfParsePreview');
      if (!raw || !raw.trim()) {
        alert("Please paste text extracted from ICAI PDF.");
        return;
      }

      const qNumMatch = raw.match(/Question\s+No\.?\s*(\d+[a-z\(\)]*)/i) || raw.match(/Q\.?\s*(\d+[a-z\(\)]*)/i);
      const marksMatch = raw.match(/\((\d+)\s*Marks?\)/i) || raw.match(/(\d+)\s*Marks?/i);
      
      const parsedNum = qNumMatch ? qNumMatch[1] : 'Q.1(a)';
      const parsedMarks = marksMatch ? marksMatch[1] : '5';

      preview.innerHTML = `
        <div style="background: #ffffff; border: 1px solid var(--border-light); padding: 14px; border-radius: var(--radius-md);">
          <h5 style="font-weight: 700; color: #0f172a; margin-bottom: 6px;">Parsed Question Metadata:</h5>
          <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 10px;">
            <div>Question Number: <strong>${parsedNum}</strong></div>
            <div>Detected Marks: <strong>${parsedMarks}</strong></div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="app.populateAddFromPdf('${parsedNum}', ${parsedMarks})">
            Transfer to Question Editor →
          </button>
        </div>
      `;
    }

    populateAddFromPdf(qNum, marks) {
      this.switchAdminTab('add');
      document.getElementById('addQNumber').value = qNum;
      document.getElementById('addQMarks').value = marks;
      document.getElementById('addQText').value = document.getElementById('pdfRawInput').value;
    }

    exportDatabase() {
      const jsonStr = window.store.exportDatabaseJSON();
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ca_final_database_backup_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }

    promptImportDatabase() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          const res = window.store.importDatabaseJSON(event.target.result);
          if (res.success) {
            alert("Database restored successfully!");
            location.reload();
          } else {
            alert("Database restore failed: " + res.error);
          }
        };
        reader.readAsText(file);
      };
      input.click();
    }

    // ==========================================
    // 12. SETTINGS VIEW
    // ==========================================

    renderSettingsView() {
      const cfg = window.store.state.user.settings || {};
      document.getElementById('settingThresholdPct').value = cfg.weakChapterThresholdPercent || 50;
      document.getElementById('settingMinQuestions').value = cfg.weakChapterMinQuestions || 2;
      document.getElementById('settingMinMarks').value = cfg.weakChapterMinMarks || 10;
      this.renderSettingsProfileFields();
    }

    saveSettings() {
      const pct = parseFloat(document.getElementById('settingThresholdPct').value) || 50;
      const minQ = parseInt(document.getElementById('settingMinQuestions').value) || 2;
      const minM = parseInt(document.getElementById('settingMinMarks').value) || 10;

      window.store.state.user.settings = {
        weakChapterThresholdPercent: pct,
        weakChapterMinQuestions: minQ,
        weakChapterMinMarks: minM
      };

      window.store.save();
      alert("Settings saved! Weak chapter thresholds updated.");
    }

    // ==========================================
    // PROFILE EDITING (Name & Email)
    // ==========================================

    renderSettingsProfileFields() {
      const user = window.store.state.user;
      if (!user) return;

      const nameInput = document.getElementById('profileNameInput');
      const emailInput = document.getElementById('profileEmailInput');
      const regInput = document.getElementById('profileRegInput');
      const examInput = document.getElementById('profileExamInput');
      const namePreview = document.getElementById('settingsNamePreview');
      const emailPreview = document.getElementById('settingsEmailPreview');
      const regPreview = document.getElementById('settingsRegPreview');
      const avatarPreview = document.getElementById('settingsAvatarPreview');

      if (nameInput) nameInput.value = user.name || '';
      if (emailInput) emailInput.value = user.email || '';
      if (regInput) regInput.value = user.regNo || '';
      if (examInput) examInput.value = user.targetExam || '';
      if (namePreview) namePreview.textContent = user.name || 'Student';
      if (emailPreview) emailPreview.textContent = user.email || '';
      if (regPreview) regPreview.textContent = 'Reg No: ' + (user.regNo || '—');
      if (avatarPreview) {
        const initials = (user.name || 'CA').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        avatarPreview.textContent = initials;
      }
    }

    saveProfile() {
      const nameVal = (document.getElementById('profileNameInput').value || '').trim();
      const emailVal = (document.getElementById('profileEmailInput').value || '').trim();
      const regVal = (document.getElementById('profileRegInput').value || '').trim();
      const examVal = (document.getElementById('profileExamInput').value || '').trim();

      if (!nameVal) { alert('Full name is required.'); return; }
      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        alert('Please enter a valid email address.');
        return;
      }

      window.store.updateUserProfile({ name: nameVal, email: emailVal, regNo: regVal, targetExam: examVal });

      const msg = document.getElementById('profileSaveMsg');
      if (msg) {
        msg.style.display = 'inline';
        setTimeout(() => { msg.style.display = 'none'; }, 3000);
      }

      this.renderSettingsProfileFields();
      this.updateHeaderAndBadges(window.store.state);
    }

    openProfileModal() {
      const user = window.store.state.user;
      if (!user) return;

      const nameInput = document.getElementById('modalProfileName');
      const emailInput = document.getElementById('modalProfileEmail');
      const regInput = document.getElementById('modalProfileReg');
      const examInput = document.getElementById('modalProfileExam');
      const namePreview = document.getElementById('modalNamePreview');
      const emailPreview = document.getElementById('modalEmailPreview');
      const avatarPreview = document.getElementById('modalAvatarPreview');

      if (nameInput) nameInput.value = user.name || '';
      if (emailInput) emailInput.value = user.email || '';
      if (regInput) regInput.value = user.regNo || '';
      if (examInput) examInput.value = user.targetExam || '';
      if (namePreview) namePreview.textContent = user.name || 'Student';
      if (emailPreview) emailPreview.textContent = user.email || '';
      if (avatarPreview) {
        const initials = (user.name || 'CA').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        avatarPreview.textContent = initials;
      }

      // Live preview as user types
      if (nameInput) {
        nameInput.oninput = () => {
          const val = nameInput.value.trim();
          if (namePreview) namePreview.textContent = val || 'Student';
          if (avatarPreview) {
            const init = (val || 'CA').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
            avatarPreview.textContent = init;
          }
        };
      }
      if (emailInput) {
        emailInput.oninput = () => {
          if (emailPreview) emailPreview.textContent = emailInput.value.trim() || '';
        };
      }

      const errEl = document.getElementById('modalProfileError');
      if (errEl) errEl.style.display = 'none';

      document.getElementById('profileEditModal').classList.add('active');
    }

    saveProfileFromModal() {
      const nameVal = (document.getElementById('modalProfileName').value || '').trim();
      const emailVal = (document.getElementById('modalProfileEmail').value || '').trim();
      const regVal = (document.getElementById('modalProfileReg').value || '').trim();
      const examVal = (document.getElementById('modalProfileExam').value || '').trim();

      const errEl = document.getElementById('modalProfileError');

      if (!nameVal) {
        if (errEl) { errEl.textContent = '⚠️ Full name is required.'; errEl.style.display = 'block'; }
        return;
      }
      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        if (errEl) { errEl.textContent = '⚠️ Please enter a valid email address.'; errEl.style.display = 'block'; }
        return;
      }

      window.store.updateUserProfile({ name: nameVal, email: emailVal, regNo: regVal, targetExam: examVal });

      this.closeModal('profileEditModal');
      this.updateHeaderAndBadges(window.store.state);

      // If currently on settings page, refresh the preview
      if (this.currentView === 'settings') {
        this.renderSettingsProfileFields();
      }
    }

    resetDemoData() {
      if (confirm("Reset all platform data, marks, notes, and attempts to a clean fresh state?")) {
        window.store.resetToDemoData();
        alert("Platform reset to clean initial state.");
        this.navigateTo('dashboard');
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
  });

})(window);
