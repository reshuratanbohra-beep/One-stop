// PDF & Printable Document Generation for Official ICAI Suggested Answers
// Fulfills Section 22: Generates structured, paginated official answer sheets

window.CA_PDF = {
  /**
   * Generates a printable official suggested answer document with cover page & source references
   * @param {Object} options
   * @param {string} options.subjectName
   * @param {string} options.chapterName
   * @param {Array} options.questions - Array of question objects
   * @param {string} options.studentName
   */
  generateAnswerSheet(options) {
    const { subjectName, chapterName, questions, studentName } = options;

    if (!questions || questions.length === 0) {
      alert("Please select at least one question to generate the Answer PDF.");
      return;
    }

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert("Pop-up was blocked. Please allow pop-ups for this site to generate the PDF.");
      return;
    }

    const todayStr = new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    let questionsHtml = '';
    questions.forEach((q, index) => {
      const qNum = q.questionNumber || `Q.${index + 1}`;
      const examSession = q.examSession || 'ICAI Examination';
      const sourceType = q.sourceType || 'RTP';
      const marks = q.marks || 5;
      const answerContent = q.suggestedAnswer 
        ? q.suggestedAnswer.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        : 'Official suggested answer not available for this question.';

      const formattedQuestionText = q.questionText 
        ? q.questionText.replace(/\n/g, '<br/>')
        : '';

      questionsHtml += `
        <div class="pdf-question-block" style="page-break-inside: avoid; margin-bottom: 30px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: #ffffff;">
          <div class="pdf-q-header" style="background: #f8fafc; padding: 12px 18px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span style="background: #1e3a8a; color: #ffffff; padding: 3px 8px; border-radius: 4px; font-weight: 700; font-size: 13px;">${qNum}</span>
              <span style="font-weight: 700; color: #0f172a; margin-left: 10px; font-size: 14px;">${q.topic || 'Subject Problem'}</span>
            </div>
            <div style="font-size: 12px; color: #475569; font-weight: 600;">
              <span>Source: ${q.sourceName || (sourceType + ' ' + examSession)}</span> |
              <span>Marks: <strong>${marks}</strong></span>
            </div>
          </div>

          <div style="padding: 16px 18px;">
            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700; margin-bottom: 6px;">Question Statement:</div>
            <div style="font-size: 13px; line-height: 1.6; color: #1e293b; margin-bottom: 18px; background: #fdfdfd; padding: 12px; border-left: 3px solid #3b82f6; border-radius: 4px;">
              ${formattedQuestionText}
            </div>

            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #059669; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
              <span style="display:inline-block; width:8px; height:8px; background:#059669; border-radius:50%;"></span>
              Official ICAI Suggested Answer & Detailed Working Notes:
            </div>
            <div style="font-size: 13px; line-height: 1.65; color: #0f172a; background: #f8fafc; padding: 14px 16px; border-radius: 6px; border: 1px solid #e2e8f0;">
              ${answerContent}
            </div>

            <div style="margin-top: 10px; font-size: 11px; color: #64748b; text-align: right;">
              Original Reference: ${q.sourceUrl || 'https://boslive.icai.org/index.php'} (Page: ${q.sourcePageNumber || 'N/A'})
            </div>
          </div>
        </div>
      `;
    });

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>ICAI CA Final Official Suggested Answers - ${chapterName}</title>
        <style>
          @page {
            size: A4;
            margin: 18mm 15mm 18mm 15mm;
            @bottom-right {
              content: counter(page);
            }
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #0f172a;
            background: #ffffff;
            margin: 0;
            padding: 20px;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cover-page {
            page-break-after: always;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
            text-align: center;
            border: 2px solid #1e3a8a;
            padding: 40px 20px;
            border-radius: 8px;
            background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          }
          .btn-print {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            background: #1e3a8a;
            color: #ffffff;
            border: none;
            border-radius: 6px;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.15);
            font-size: 14px;
            z-index: 1000;
          }
          @media print {
            .btn-print { display: none !important; }
            body { padding: 0 !important; }
          }
        </style>
      </head>
      <body>
        <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>

        <!-- COVER PAGE (Requirement 22) -->
        <div class="cover-page">
          <div style="font-size: 13px; font-weight: 700; letter-spacing: 0.1em; color: #1e3a8a; text-transform: uppercase;">
            CA Final Master Question Bank &amp; Practice Repository
          </div>
          <h1 style="font-size: 28px; color: #0f172a; margin: 20px 0 10px 0; font-weight: 800;">
            OFFICIAL SUGGESTED ANSWERS COMPILATION
          </h1>
          <div style="width: 80px; height: 4px; background: #2563eb; margin: 10px auto 25px auto; border-radius: 2px;"></div>

          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px 30px; text-align: left; max-width: 500px; width: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-bottom: 30px;">
            <div style="margin-bottom: 12px; font-size: 14px;"><strong>Subject:</strong> ${subjectName}</div>
            <div style="margin-bottom: 12px; font-size: 14px;"><strong>Chapter:</strong> ${chapterName}</div>
            <div style="margin-bottom: 12px; font-size: 14px;"><strong>Questions Included:</strong> ${questions.length} Items</div>
            <div style="margin-bottom: 12px; font-size: 14px;"><strong>Total Marks:</strong> ${questions.reduce((sum, q) => sum + (q.marks || 0), 0)} Marks</div>
            <div style="margin-bottom: 12px; font-size: 14px;"><strong>Generated For:</strong> ${studentName || 'CA Final Student'}</div>
            <div style="font-size: 14px;"><strong>Date:</strong> ${todayStr}</div>
          </div>

          <div style="font-size: 12px; color: #64748b; max-width: 550px; line-height: 1.5; border-top: 1px dashed #cbd5e1; padding-top: 20px;">
            <strong>Important Disclaimer:</strong> This document is compiled for academic study and self-evaluation purposes. Questions and Suggested Answers are sourced from official ICAI Board of Studies (BoS) publications (MTP, RTP, PYQ). This independent student platform is not affiliated with or endorsed by ICAI.
          </div>
        </div>

        <!-- QUESTIONS & OFFICIAL SUGGESTED ANSWERS -->
        <div class="questions-section">
          <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #0f172a; padding-bottom: 8px; margin-bottom: 24px; font-size: 12px; color: #475569; font-weight: 600;">
            <span>${subjectName} — ${chapterName}</span>
            <span>Official Suggested Answers</span>
          </div>
          ${questionsHtml}
        </div>
      </body>
      </html>
    `;

    printWin.document.write(fullHtml);
    printWin.document.close();
  }
};
