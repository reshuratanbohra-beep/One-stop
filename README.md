# ICAI CA Final Master Question Bank & Practice Platform

An independent, professional, and responsive web application designed for CA Final students to practice, organize, and track questions from official ICAI academic resources (MTPs, RTPs, and Previous Year Examination Papers).

> **Official Disclaimer:** This is an independent student practice platform and is not affiliated with or endorsed by ICAI. All official materials reference the ICAI Board of Studies (BoS) curriculum: [https://boslive.icai.org/index.php](https://boslive.icai.org/index.php).

---

## 🌟 Light Theme Design
Built strictly adhering to a **crisp, modern Light Theme**:
- **Backgrounds:** Clean white (`#ffffff`) and subtle slate tint (`#f8fafc`). Strictly no dark, dull, or murky themes.
- **Typography:** Dark navy (`#0f172a` / `#1e293b`) with Google Fonts (*Plus Jakarta Sans* & *Inter*) for exceptional legibility.
- **Accents:** Official ICAI Royal Navy (`#1e3a8a`), Active Blue (`#2563eb`), Emerald Green (`#059669`) for completed items, Amber (`#d97706`) for in-progress, and Crimson Rose (`#dc2626`) for weak chapters.

---

## 🚀 Key Features Implemented (from `prompt.docx`)

### 1. Hierarchy & Organization
- **Paper-wise → Chapter-wise → Topic-wise** breakdown covering all 6 CA Final papers under the ICAI New Scheme (2024 onwards):
  1. Paper 1: Financial Reporting (FR)
  2. Paper 2: Advanced Financial Management (AFM)
  3. Paper 3: Advanced Auditing, Assurance and Professional Ethics (Audit)
  4. Paper 4: Direct Tax Laws & International Taxation (DT)
  5. Paper 5: Indirect Tax Laws (IDT)
  6. Paper 6: Integrated Business Solutions (IBS)

### 2. Live Dashboard with Top KPIs & Native SVG Charts
- **4 Top KPI Cards:**
  - Total Chapters (71)
  - Completed Chapters (42)
  - Remaining Chapters (29)
  - Overall Accuracy (74.5%)
- **Syllabus Completion Chart:** SVG Donut chart displaying completed vs. remaining chapters.
- **Overall Accuracy Gauge:** Dynamic radial gauge showing aggregate performance.
- **Subject-wise Accuracy:** Bar chart comparing accuracy across all papers.
- **Performance Trend:** Date vs. Aggregate Accuracy % line chart with interactive data points.

### 3. Automatic Weak Chapters Engine (< 50% Accuracy)
- **Mathematical Formula:** `SUM(Marks Obtained) ÷ SUM(Maximum Marks Attempted) × 100`.
- **Minimum Attempt Rule:** Configurable threshold (default: student must have attempted at least 2 questions OR 10 maximum marks).
- **Dynamic Updates:**
  - Instantly recalculates when marks are entered, modified, or deleted.
  - If a chapter's accuracy reaches 50% or higher, it is **automatically removed** from the Weak Chapters section!
  - If accuracy falls below 50%, it automatically reappears.
  - When no weak chapters remain, a celebration banner is displayed.
- **`[Practice Again]` Button:** Direct one-click drill down to practice that specific weak chapter.

### 4. Comprehensive Question Bank & Filters
- Authentic ICAI question formats with numerical tables, statutory provisions, and working notes.
- Question occurrences tracking (e.g., *"Appeared 3 times: RTP Nov 2024, PYQ May 2025, MTP May 2026"*).
- Multi-faceted filtering: Subject, Chapter, Source Type (MTP, RTP, PYQ), Exam Session (May 2026, Nov 2025, May 2025, Nov 2024), Marks, and Attempt Status.
- Real-time Global Search bar across question texts, topics, chapters, and concepts.

### 5. Official Suggested Answers & PDF Answer Sheet Generation
- Detailed ICAI suggested answers with working notes, accounting treatments (Ind AS 115, 116, 103, Rule 43, Section 92CA, etc.).
- **Print / PDF Generator:** Fulfills Section 22 by producing formatted documents with an official cover page, question details, source citations, and suggested answers.

### 6. Practice Mode Runner
- Select paper, chapter, question count (5, 10, 20, or Full Chapter), and source filters.
- Real-time question runner with timer, scratchpad, instant self-evaluation mark entry, suggested answer reveal, and automated session scoring.

### 7. Bookmarks, Private Notes & Test History
- Star important questions into **"My Important Questions"**.
- Add private student notes on common mistakes and adjustments.
- Complete chronological **Test History** table.

### 8. Administrator Console & Data Import
- **CSV / Excel Import:** Built-in validator verifying required headers (`Question_ID, Subject, Chapter, Question_Text, Marks, Source_Type`), duplicate ID checks, and error logs.
- **Sample CSV Generator:** Downloadable template.
- **ICAI PDF Metadata Parser:** Heuristic text parser for extracting question numbers and marks from pasted PDF extracts.
- **Full Database Export / Import (JSON):** Export or restore student data and questions.

---

## 💻 How to Access the Application

The app is currently running on your local server:
- Open your browser (Google Chrome, Microsoft Edge, Brave, Firefox, etc.) and navigate to:
  👉 **`http://localhost:8080/`**

Alternatively, you can open `index.html` directly from your file manager in any web browser without needing a server.
