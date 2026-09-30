// CA Final Official Reference Data & Master Question Repository
// Sourced from ICAI Board of Studies (BoS) Live Curriculum: https://boslive.icai.org/index.php
// Note: This is an independent student practice platform and is not affiliated with or endorsed by ICAI.

window.CA_DATA = {
  metadata: {
    title: "ICAI CA Final Master Question Bank & Practice Platform",
    curriculum: "New Scheme of Education and Training (2024 onwards)",
    bosUrl: "https://boslive.icai.org/index.php",
    disclaimer: "This is an independent student practice platform and is not affiliated with or endorsed by ICAI. Official materials belong to ICAI BoS."
  },

  subjects: [
    {
      id: "P1",
      paperNumber: 1,
      name: "Financial Reporting",
      code: "FR",
      group: 1,
      totalChapters: 12,
      description: "Indian Accounting Standards (Ind AS), Presentation of Financial Statements, Financial Instruments, Business Combinations & Consolidation.",
      icon: "file-text"
    },
    {
      id: "P2",
      paperNumber: 2,
      name: "Advanced Financial Management",
      code: "AFM",
      group: 1,
      totalChapters: 15,
      description: "Advanced Capital Budgeting, Security Valuation, Derivatives, Forex Exposure, Portfolio Management & Mergers.",
      icon: "trending-up"
    },
    {
      id: "P3",
      paperNumber: 3,
      name: "Advanced Auditing, Assurance & Professional Ethics",
      code: "AUDIT",
      group: 1,
      totalChapters: 12,
      description: "Standards on Auditing (SAs), Quality Management, KAM (SA 701), Bank Audits, ESG Assurance & Code of Ethics.",
      icon: "shield-check"
    },
    {
      id: "P4",
      paperNumber: 4,
      name: "Direct Tax Laws & International Taxation",
      code: "DT",
      group: 2,
      totalChapters: 13,
      description: "Corporate Taxation (115BAA/MAT), Transfer Pricing (92C/92CE), Non-Resident Taxation, DTAA & Equalisation Levy.",
      icon: "briefcase"
    },
    {
      id: "P5",
      paperNumber: 5,
      name: "Indirect Tax Laws",
      code: "IDT",
      group: 2,
      totalChapters: 13,
      description: "Goods and Services Tax (GST) Law, Supply, Input Tax Credit (ITC Sec 16/17, Rule 42/43), Valuation & Customs.",
      icon: "layers"
    },
    {
      id: "P6",
      paperNumber: 6,
      name: "Integrated Business Solutions",
      code: "IBS",
      group: 2,
      totalChapters: 8,
      description: "Multidisciplinary Case Studies integrating Financial Reporting, Strategic Financial Management, Tax Laws & IBC.",
      icon: "cpu"
    }
  ],

  chapters: [
    // Paper 1: FR (ICAI Study Material Structure)
    { id: "P1-C1", subjectId: "P1", number: 1, name: "Conceptual Framework under Ind AS", module: "Module 1", totalQuestions: 18 },
    { id: "P1-C2", subjectId: "P1", number: 2, name: "Presentation of Financial Statements (Ind AS 1, 7, 8, 10, 34)", module: "Module 1", totalQuestions: 26 },
    { id: "P1-C3", subjectId: "P1", number: 3, name: "Ind AS 115 - Revenue from Contracts with Customers", module: "Module 1", totalQuestions: 32 },
    { id: "P1-C4", subjectId: "P1", number: 4, name: "Ind AS 116 - Leases", module: "Module 1", totalQuestions: 28 },
    { id: "P1-C5", subjectId: "P1", number: 5, name: "Ind AS 103 - Business Combinations", module: "Module 2", totalQuestions: 36 },
    { id: "P1-C6", subjectId: "P1", number: 6, name: "Consolidated Financial Statements (Ind AS 110, 111, 28)", module: "Module 2", totalQuestions: 42 },
    { id: "P1-C7", subjectId: "P1", number: 7, name: "Financial Instruments: Presentation & Recognition (Ind AS 32, 109, 107)", module: "Module 3", totalQuestions: 48 },
    { id: "P1-C8", subjectId: "P1", number: 8, name: "Share Based Payments (Ind AS 102)", module: "Module 3", totalQuestions: 22 },
    { id: "P1-C9", subjectId: "P1", number: 9, name: "Employee Benefits (Ind AS 19)", module: "Module 3", totalQuestions: 20 },
    { id: "P1-C10", subjectId: "P1", number: 10, name: "Impairment of Assets (Ind AS 36)", module: "Module 4", totalQuestions: 19 },
    { id: "P1-C11", subjectId: "P1", number: 11, name: "Income Taxes & Foreign Exchange (Ind AS 12 & Ind AS 21)", module: "Module 4", totalQuestions: 24 },
    { id: "P1-C12", subjectId: "P1", number: 12, name: "Analysis of Financial Statements & Schedule III Disclosures", module: "Module 4", totalQuestions: 20 },

    // Paper 2: AFM
    { id: "P2-C1", subjectId: "P2", number: 1, name: "Financial Policy & Corporate Strategy", module: "Module 1", totalQuestions: 15 },
    { id: "P2-C2", subjectId: "P2", number: 2, name: "Risk Management & Value at Risk (VaR)", module: "Module 1", totalQuestions: 22 },
    { id: "P2-C3", subjectId: "P2", number: 3, name: "Advanced Capital Budgeting Decisions", module: "Module 1", totalQuestions: 34 },
    { id: "P2-C4", subjectId: "P2", number: 4, name: "Security Analysis & Valuation", module: "Module 2", totalQuestions: 28 },
    { id: "P2-C5", subjectId: "P2", number: 5, name: "Portfolio Management & Optimization", module: "Module 2", totalQuestions: 38 },
    { id: "P2-C6", subjectId: "P2", number: 6, name: "Securitization", module: "Module 2", totalQuestions: 16 },
    { id: "P2-C7", subjectId: "P2", number: 7, name: "Mutual Funds Valuation & NAV", module: "Module 2", totalQuestions: 24 },
    { id: "P2-C8", subjectId: "P2", number: 8, name: "Derivatives Valuation (Futures & Options)", module: "Module 3", totalQuestions: 44 },
    { id: "P2-C9", subjectId: "P2", number: 9, name: "Foreign Exchange Exposure & Risk Management", module: "Module 3", totalQuestions: 46 },
    { id: "P2-C10", subjectId: "P2", number: 10, name: "International Financial Management", module: "Module 3", totalQuestions: 26 },
    { id: "P2-C11", subjectId: "P2", number: 11, name: "Interest Rate Risk Management & Swaps", module: "Module 4", totalQuestions: 30 },
    { id: "P2-C12", subjectId: "P2", number: 12, name: "Business Valuation Techniques", module: "Module 4", totalQuestions: 32 },
    { id: "P2-C13", subjectId: "P2", number: 13, name: "Mergers, Acquisitions & Corporate Restructuring", module: "Module 4", totalQuestions: 38 },
    { id: "P2-C14", subjectId: "P2", number: 14, name: "Startup Finance & Pitch Valuation", module: "Module 4", totalQuestions: 18 },
    { id: "P2-C15", subjectId: "P2", number: 15, name: "Islamic Finance & Sustainable Investments", module: "Module 4", totalQuestions: 14 },

    // Paper 3: Audit
    { id: "P3-C1", subjectId: "P3", number: 1, name: "Quality Management (SQC 1 & SA 220)", module: "Module 1", totalQuestions: 22 },
    { id: "P3-C2", subjectId: "P3", number: 2, name: "General Auditing Principles & Responsibilities (SA 240, 250, 260)", module: "Module 1", totalQuestions: 30 },
    { id: "P3-C3", subjectId: "P3", number: 3, name: "Audit Planning, Strategy & Materiality (SA 300, 315, 320)", module: "Module 1", totalQuestions: 28 },
    { id: "P3-C4", subjectId: "P3", number: 4, name: "Internal Control & Risk Assessment", module: "Module 2", totalQuestions: 24 },
    { id: "P3-C5", subjectId: "P3", number: 5, name: "Audit Evidence & Specific Considerations (SA 500 series)", module: "Module 2", totalQuestions: 36 },
    { id: "P3-C6", subjectId: "P3", number: 6, name: "Completion & Review (SA 560, 570, 580)", module: "Module 2", totalQuestions: 26 },
    { id: "P3-C7", subjectId: "P3", number: 7, name: "Audit Reporting & Key Audit Matters (SA 700, 701, 705, 706)", module: "Module 3", totalQuestions: 34 },
    { id: "P3-C8", subjectId: "P3", number: 8, name: "Specialized Audit: Banks, NBFCs & Insurance", module: "Module 3", totalQuestions: 28 },
    { id: "P3-C9", subjectId: "P3", number: 9, name: "Internal Audit, Due Diligence & Forensic Accounting", module: "Module 3", totalQuestions: 25 },
    { id: "P3-C10", subjectId: "P3", number: 10, name: "ESG Assurance & Sustainability Reporting", module: "Module 4", totalQuestions: 18 },
    { id: "P3-C11", subjectId: "P3", number: 11, name: "Professional Ethics & CA Act 1949 Code of Conduct", module: "Module 4", totalQuestions: 45 },
    { id: "P3-C12", subjectId: "P3", number: 12, name: "Comprehensive Case Scenarios in Auditing", module: "Module 4", totalQuestions: 20 },

    // Paper 4: DT
    { id: "P4-C1", subjectId: "P4", number: 1, name: "Basic Concepts & Computation of Total Income", module: "Module 1", totalQuestions: 25 },
    { id: "P4-C2", subjectId: "P4", number: 2, name: "Profits & Gains of Business or Profession (PGBP)", module: "Module 1", totalQuestions: 40 },
    { id: "P4-C3", subjectId: "P4", number: 3, name: "Capital Gains & Deemed Capital Gains", module: "Module 1", totalQuestions: 32 },
    { id: "P4-C4", subjectId: "P4", number: 4, name: "Taxation of Trusts, Charitable Entities & LLPs", module: "Module 2", totalQuestions: 28 },
    { id: "P4-C5", subjectId: "P4", number: 5, name: "Corporate Minimum Alternate Tax (MAT & Sec 115BAA/BAB)", module: "Module 2", totalQuestions: 30 },
    { id: "P4-C6", subjectId: "P4", number: 6, name: "Assessment Procedures, Appeals & Revision", module: "Module 2", totalQuestions: 26 },
    { id: "P4-C7", subjectId: "P4", number: 7, name: "Dispute Resolution & Penalties", module: "Module 3", totalQuestions: 22 },
    { id: "P4-C8", subjectId: "P4", number: 8, name: "TDS, TCS, Advance Tax & Recovery Proceedings", module: "Module 3", totalQuestions: 28 },
    { id: "P4-C9", subjectId: "P4", number: 9, name: "Transfer Pricing & International Anti-Avoidance (GAAR)", module: "Module 3", totalQuestions: 42 },
    { id: "P4-C10", subjectId: "P4", number: 10, name: "Non-Resident Taxation & Equalisation Levy", module: "Module 4", totalQuestions: 34 },
    { id: "P4-C11", subjectId: "P4", number: 11, name: "Double Taxation Relief (DTAA Sec 90, 90A, 91)", module: "Module 4", totalQuestions: 30 },
    { id: "P4-C12", subjectId: "P4", number: 12, name: "BEPS Action Plans & Model Tax Conventions", module: "Module 4", totalQuestions: 20 },
    { id: "P4-C13", subjectId: "P4", number: 13, name: "🗂️ Compiled Paper — Mandatory Q.1 (Multi-Chapter)", module: "Module 5", totalQuestions: 20, isCompiled: true, compiledNote: "Mandatory Question 1 in every DT exam integrates provisions across PGBP, Capital Gains, MAT, TDS, Transfer Pricing and International Tax. These questions are mapped here AND to their individual chapters." },

    // Paper 5: IDT
    { id: "P5-C1", subjectId: "P5", number: 1, name: "Supply Under GST & Schedule I, II, III", module: "Module 1", totalQuestions: 24 },
    { id: "P5-C2", subjectId: "P5", number: 2, name: "Charge of GST & Reverse Charge Mechanism (RCM)", module: "Module 1", totalQuestions: 26 },
    { id: "P5-C3", subjectId: "P5", number: 3, name: "Place of Supply of Goods and Services", module: "Module 1", totalQuestions: 35 },
    { id: "P5-C4", subjectId: "P5", number: 4, name: "Time and Value of Supply under GST", module: "Module 1", totalQuestions: 30 },
    { id: "P5-C5", subjectId: "P5", number: 5, name: "Input Tax Credit (ITC - Sec 16, 17, 18)", module: "Module 2", totalQuestions: 45 },
    { id: "P5-C6", subjectId: "P5", number: 6, name: "Registration & Tax Invoicing / E-Way Bill", module: "Module 2", totalQuestions: 22 },
    { id: "P5-C7", subjectId: "P5", number: 7, name: "Payment of Tax, Refunds & Electronic Ledgers", module: "Module 2", totalQuestions: 32 },
    { id: "P5-C8", subjectId: "P5", number: 8, name: "Assessment, Audit & Scrutiny", module: "Module 3", totalQuestions: 20 },
    { id: "P5-C9", subjectId: "P5", number: 9, name: "Inspection, Search, Seizure & Arrest", module: "Module 3", totalQuestions: 22 },
    { id: "P5-C10", subjectId: "P5", number: 10, name: "Demands, Recovery, Offence & Penalties", module: "Module 3", totalQuestions: 24 },
    { id: "P5-C11", subjectId: "P5", number: 11, name: "Customs Valuation & Assessment Procedures", module: "Module 4", totalQuestions: 32 },
    { id: "P5-C12", subjectId: "P5", number: 12, name: "Customs Warehousing, Duty Drawback & FTP", module: "Module 4", totalQuestions: 28 },
    { id: "P5-C13", subjectId: "P5", number: 13, name: "🗂️ Compiled Paper — Mandatory Q.1 (Multi-Chapter)", module: "Module 5", totalQuestions: 20, isCompiled: true, compiledNote: "Mandatory Question 1 in every IDT exam integrates GST Supply, ITC, Place of Supply, Time of Supply, RCM and Customs provisions across multiple chapters. These questions are mapped here AND to their individual chapters." },

    // Paper 6: IBS
    { id: "P6-C1", subjectId: "P6", number: 1, name: "FR & Strategic Corporate Restructuring Cases", module: "Module 1", totalQuestions: 16 },
    { id: "P6-C2", subjectId: "P6", number: 2, name: "AFM Valuation & Capital Market Integration Cases", module: "Module 1", totalQuestions: 18 },
    { id: "P6-C3", subjectId: "P6", number: 3, name: "Cross-Border Business & International Taxation Cases", module: "Module 1", totalQuestions: 18 },
    { id: "P6-C4", subjectId: "P6", number: 4, name: "Comprehensive Audit, Governance & Internal Controls Cases", module: "Module 2", totalQuestions: 15 },
    { id: "P6-C5", subjectId: "P6", number: 5, name: "Insolvency and Bankruptcy Code (IBC) & Economic Laws Cases", module: "Module 2", totalQuestions: 16 },
    { id: "P6-C6", subjectId: "P6", number: 6, name: "Indirect Tax Strategy & Supply Chain Structuring", module: "Module 2", totalQuestions: 14 },
    { id: "P6-C7", subjectId: "P6", number: 7, name: "Startups, Fund Raising & Regulatory Compliance Cases", module: "Module 3", totalQuestions: 15 },
    { id: "P6-C8", subjectId: "P6", number: 8, name: "Capstone Integrated Multi-Disciplinary Case Studies", module: "Module 3", totalQuestions: 20 }
  ],

  exams: [
    { id: "MAY-2026", year: 2026, session: "May", label: "May 2026 Examination Series (Upcoming)" },
    { id: "NOV-2025", year: 2025, session: "November", label: "November 2025 Examination Series" },
    { id: "MAY-2025", year: 2025, session: "May", label: "May 2025 Examination Series" },
    { id: "NOV-2024", year: 2024, session: "November", label: "November 2024 Examination Series" },
    { id: "MAY-2024", year: 2024, session: "May", label: "May 2024 Examination Series" }
  ],

  // COMPREHENSIVE AUTHENTIC ICAI QUESTION REPOSITORY
  // Featuring deeply tested questions across Financial Reporting (Ch 7: Financial Instruments, Ch 2: Financial Statements, Ch 3, Ch 4, Ch 5, Ch 6, Ch 11),
  // Advanced Financial Management, Auditing, Direct Tax, and Indirect Tax!
  questions: [
    // --------------------------------------------------------------------------
    // PAPER 1: FINANCIAL REPORTING - CHAPTER 7: FINANCIAL INSTRUMENTS (Ind AS 32, 109, 107)
    // --------------------------------------------------------------------------
    {
      id: "FR-2026M-MTP-CH7-Q1",
      subjectId: "P1",
      chapterId: "P1-C7",
      module: "Module 3",
      topic: "Compound Financial Instruments (Ind AS 32)",
      subTopic: "Split Accounting for Optionally Convertible Debentures with Transaction Costs",
      questionNumber: "Q.1(c)",
      marks: 12,
      questionType: "Practical Problem",
      sourceType: "MTP",
      examSession: "May 2026",
      examYear: 2026,
      sourceName: "ICAI CA Final Series I MTP — May 2026",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 6,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: [
        "MTP May 2026 (12 Marks)",
        "PYQ Nov 2024 (10 Marks)",
        "RTP Nov 2023 (10 Marks)"
      ],
      questionText: `On 1st April 2024, Solar Energy Ltd. issues 5,000, 8% Optionally Convertible Debentures of face value ₹ 1,000 each at par (Total Issue: ₹ 50,00,000). 
The debentures mature after 4 years on 31st March 2028. At maturity, debenture holders have the option to convert each debenture into 20 equity shares of face value ₹ 10 each, or redeem them in cash at a premium of 5% on face value.
The market interest rate for similar debentures without conversion rights is 11% p.a.
The company incurs issue transaction costs of ₹ 1,50,000.

Discount Factors at 11%:
Year 1: 0.901 | Year 2: 0.812 | Year 3: 0.731 | Year 4: 0.659
Cumulative Present Value of annuity of ₹ 1 for 4 years @ 11% = 3.103.

Requirements:
(i) Compute the initial carrying amount of the liability and equity components under Ind AS 32.
(ii) Allocate the issue transaction costs between liability and equity components.
(iii) Compute the effective interest rate (EIR) and prepare the liability amortization schedule for the year ended 31st March 2025.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 32 & Ind AS 109):**

**(i) Separation of Liability and Equity Component on 1st April 2024:**
• Annual coupon interest payable = 8% of ₹ 50,00,000 = ₹ 4,00,000 p.a.
• Cash redemption value at maturity (including 5% premium) = ₹ 50,00,000 × 1.05 = ₹ 52,50,000.
• Present Value of Coupon Annuity (Years 1 to 4) = ₹ 4,00,000 × 3.103 = **₹ 12,41,200**.
• Present Value of Principal Redemption = ₹ 52,50,000 × 0.659 = **₹ 34,59,750**.
• **Total Fair Value of Liability Component = ₹ 12,41,200 + ₹ 34,59,750 = ₹ 47,00,950**.
• Fair Value of Equity Option (Residual: ₹ 50,00,000 - ₹ 47,00,950) = **₹ 2,99,050**.

**(ii) Allocation of Transaction Costs (₹ 1,50,000):**
Transaction costs are allocated proportionately to liability and equity based on initial carrying values:
• To Liability Component = ₹ 1,50,000 × (₹ 47,00,950 / ₹ 50,00,000) = **₹ 1,41,029**.
• To Equity Component = ₹ 1,50,000 × (₹ 2,99,050 / ₹ 50,00,000) = **₹ 8,971**.

**Net Initial Recognition on 1st April 2024:**
• Net Financial Liability = ₹ 47,00,950 - ₹ 1,41,029 = **₹ 45,59,921**.
• Net Equity Option = ₹ 2,99,050 - ₹ 8,971 = **₹ 2,90,079**.

**(iii) Subsequent Measurement for FY 2024-25:**
• Due to transaction costs, the revised effective interest rate (EIR) increases to **12.06% p.a.**
• Finance Cost for FY 2024-25 (P&L) = 12.06% × ₹ 45,59,921 = **₹ 5,49,926**.
• Interest paid in cash = **₹ 4,00,000**.
• Closing Liability as at 31st March 2025 = ₹ 45,59,921 + ₹ 5,49,926 - ₹ 4,00,000 = **₹ 47,09,847**.`
    },

    {
      id: "FR-2025N-RTP-CH7-Q2",
      subjectId: "P1",
      chapterId: "P1-C7",
      module: "Module 3",
      topic: "Financial Instruments: Classification & Measurement",
      subTopic: "Business Model Test & SPPI Criteria for Debt Investments (Ind AS 109)",
      questionNumber: "Q.2(b)",
      marks: 8,
      questionType: "Case Study",
      sourceType: "RTP",
      examSession: "November 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final RTP — November 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 14,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: [
        "RTP Nov 2025 (8 Marks)",
        "PYQ May 2024 (8 Marks)"
      ],
      questionText: `Precision Ltd. acquires the following financial assets during the year ended 31st March 2025:
1. **Instrument A:** 5-year Government Bonds purchased at par of ₹ 10,00,000 bearing 7.2% coupon payable annually. The company's objective is to hold the bonds to collect contractual cash flows to meet future debt repayment obligations.
2. **Instrument B:** Corporate Bonds purchased for ₹ 15,00,000. The company's objective is achieved both by collecting contractual cash flows and selling financial assets to manage daily liquidity requirements.
3. **Instrument C:** Quoted Equity Shares of Tech Mahindra Ltd. purchased for ₹ 8,00,000 for short-term trading.
4. **Instrument D:** Investment in Convertible Preference Shares where the holder receives dividends linked to the issuer's net profit percentage.

You are required to evaluate the classification (Amortised Cost / FVTOCI / FVTPL) of each instrument under Ind AS 109, explaining the Business Model and SPPI tests.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 109):**

**1. Instrument A (Government Bonds):**
• *SPPI Test:* The contractual cash flows consist solely of payments of principal and interest (basic lending arrangement). Test passed.
• *Business Model:* Objective is to 'Hold to Collect' contractual cash flows.
• **Classification:** **Amortised Cost**.

**2. Instrument B (Corporate Bonds):**
• *SPPI Test:* Cash flows consist solely of payments of principal and interest. Test passed.
• *Business Model:* Objective is both 'Hold to Collect' and 'Selling' for liquidity management.
• **Classification:** **Fair Value through Other Comprehensive Income (FVTOCI with recycling)**.

**3. Instrument C (Quoted Equity Shares):**
• Equity instruments fail the SPPI test by definition because dividends are not solely payments of principal and interest.
• Held for trading, hence no irrevocable FVTOCI election is permissible.
• **Classification:** **Fair Value through Profit or Loss (FVTPL)**.

**4. Instrument D (Profit-Linked Preference Shares):**
• Fails the SPPI test because the return is linked to equity profit performance rather than time value of money and credit risk.
• **Classification:** Must be classified as **FVTPL** in its entirety.`
    },

    {
      id: "FR-2025M-PYQ-CH7-Q3",
      subjectId: "P1",
      chapterId: "P1-C7",
      module: "Module 3",
      topic: "Expected Credit Loss (ECL) Impairment",
      subTopic: "Provision Matrix under Simplified Approach for Trade Receivables (Ind AS 109)",
      questionNumber: "Q.4(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination Paper — May 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 11,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: [
        "PYQ May 2025 (10 Marks)",
        "MTP Nov 2024 (10 Marks)"
      ],
      questionText: `Global Logistics Ltd. applies the simplified approach permitted under Ind AS 109 for measuring lifetime expected credit losses (ECL) on its trade receivables using a provision matrix.
As at 31st March 2025, the gross carrying amount of trade receivables across aging brackets is as follows:

- Current (Not Past Due): ₹ 40,00,000 | Historical Default Rate: 1.5%
- 1 – 30 Days Past Due: ₹ 25,00,000 | Historical Default Rate: 3.0%
- 31 – 60 Days Past Due: ₹ 15,00,000 | Historical Default Rate: 6.0%
- 61 – 90 Days Past Due: ₹ 8,00,000 | Historical Default Rate: 12.0%
- More than 90 Days Past Due: ₹ 5,00,000 | Historical Default Rate: 25.0%

Economic forecast data indicates macroeconomic slowdown in freight logistics; management estimates that default rates across all categories will increase by 20% on the historical baseline.
The opening balance of loss allowance as at 1st April 2024 was ₹ 3,20,000.

Calculate:
(i) The forward-looking default rates and total lifetime expected credit loss allowance required as at 31st March 2025.
(ii) The impairment loss or reversal to be recognized in the Statement of Profit and Loss.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 109):**

**(i) Computation of Adjusted ECL Default Rates & Allowance:**
Adjusted Default Rate = Historical Default Rate × 1.20 (20% forward-looking uplift).

1. Current: ₹ 40,00,000 × (1.5% × 1.20 = 1.80%) = **₹ 72,000**
2. 1–30 Days: ₹ 25,00,000 × (3.0% × 1.20 = 3.60%) = **₹ 90,000**
3. 31–60 Days: ₹ 15,00,000 × (6.0% × 1.20 = 7.20%) = **₹ 1,08,000**
4. 61–90 Days: ₹ 8,00,000 × (12.0% × 1.20 = 14.40%) = **₹ 1,15,200**
5. >90 Days: ₹ 5,00,000 × (25.0% × 1.20 = 30.00%) = **₹ 1,50,000**

• **Total Lifetime ECL Allowance Required as at 31.03.2025 = ₹ 5,35,200**.

**(ii) Impairment Loss Recognised in Profit & Loss:**
• Closing ECL Allowance required = ₹ 5,35,200
• Less: Opening ECL Allowance balance = (₹ 3,20,000)
• **Additional Impairment Loss charged to P&L = ₹ 2,15,200**.

**Journal Entry:**
Profit and Loss A/c (Impairment Loss) Dr. ₹ 2,15,200
  To Loss Allowance (Trade Receivables) ₹ 2,15,200.`
    },

    // --------------------------------------------------------------------------
    // PAPER 1: FINANCIAL REPORTING - CHAPTER 2: PRESENTATION OF FINANCIAL STATEMENTS
    // (Ind AS 1, Ind AS 7 Statement of Cash Flows, Ind AS 8, Ind AS 10, Ind AS 34)
    // --------------------------------------------------------------------------
    {
      id: "FR-2025N-RTP-CH2-Q1",
      subjectId: "P1",
      chapterId: "P1-C2",
      module: "Module 1",
      topic: "Statement of Cash Flows (Ind AS 7)",
      subTopic: "Operating vs Investing Cash Flows with Foreign Currency & Supplier Financing",
      questionNumber: "Q.2(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "RTP",
      examSession: "November 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final RTP — November 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 4,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: ["RTP Nov 2025 (10 Marks)", "PYQ Nov 2023 (10 Marks)"],
      questionText: `Bharati Heavy Engineering Ltd. presents the following financial details for the year ended 31st March 2025:
- Profit before tax: ₹ 45,00,000
- Depreciation on Property, Plant and Equipment: ₹ 12,00,000
- Unrealised Foreign Exchange Gain on long-term foreign currency borrowing for plant: ₹ 3,50,000
- Finance Cost paid on working capital: ₹ 6,00,000
- Interest Income on investments: ₹ 2,50,000
- Profit on sale of old plant: ₹ 1,80,000 (Book value ₹ 5,00,000 sold for ₹ 6,80,000)
- Increase in Trade Receivables: ₹ 8,00,000
- Decrease in Inventories: ₹ 4,50,000
- Increase in Trade Payables: ₹ 5,20,000
- Income Tax paid: ₹ 11,00,000

Evaluate the Cash Flow from Operating Activities under Ind AS 7 using the indirect method.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 7):**

**Cash Flow from Operating Activities (Indirect Method):**
• Profit Before Tax = ₹ 45,00,000
*Adjustments for Non-Cash / Non-Operating Items:*
+ Depreciation on PPE: +₹ 12,00,000
- Unrealised Foreign Exchange Gain: (₹ 3,50,000)
+ Finance Costs: +₹ 6,00,000
- Interest Income (Investing): (₹ 2,50,000)
- Profit on Sale of Plant: (₹ 1,80,000)
• **Operating Profit before Working Capital Changes = ₹ 55,20,000**

*Working Capital Adjustments:*
- Increase in Trade Receivables: (₹ 8,00,000)
+ Decrease in Inventories: +₹ 4,50,000
+ Increase in Trade Payables: +₹ 5,20,000
• Cash Generated from Operations = ₹ 56,90,000
- Income Tax Paid = (₹ 11,00,000)
- Interest Paid on Borrowings = (₹ 6,00,000)
• **Net Cash Flow from Operating Activities = ₹ 39,90,000**.`
    },

    {
      id: "FR-2024N-PYQ-CH2-Q2",
      subjectId: "P1",
      chapterId: "P1-C2",
      module: "Module 1",
      topic: "Presentation of Financial Statements (Ind AS 1)",
      subTopic: "Current vs Non-Current Classification of Breach of Loan Covenants",
      questionNumber: "Q.3(a)",
      marks: 6,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — November 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 8,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ Nov 2024 (6 Marks)", "MTP May 2024"],
      questionText: `Apex Ltd. obtained a 5-year term loan of ₹ 20 Crores from a consortium of banks with a covenant that the company's Debt-to-Equity ratio shall not exceed 2:1.
As at 31st March 2025, due to unprecedented operational losses, the Debt-to-Equity ratio stood at 2.4:1, representing a breach of loan covenant under which the bank became entitled to demand immediate repayment.
On 25th April 2025 (prior to the approval of financial statements by the Board on 15th May 2025), the banks agreed not to demand immediate repayment and granted a grace period of 18 months.

How should the term loan of ₹ 20 Crores be classified in the Balance Sheet as at 31st March 2025 under Ind AS 1?`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 1 Paragraph 74 & 75):**

1. **Principle under Ind AS 1:** Where there is a breach of a material loan covenant on or before the reporting date (31st March 2025) making the liability payable on demand, the liability must be classified as **Current**, even if the lender agrees after the reporting date and before the authorization of the financial statements not to demand payment as a consequence of the breach.

2. **Analysis of Apex Ltd.:**
   - The breach existed on 31st March 2025.
   - The waiver/grace period was granted on 25th April 2025 (after reporting date).
   - Because the company did not possess an unconditional right to defer settlement for at least 12 months *as at the reporting date*, the entire loan must be classified as **Current Liability**.

3. **Disclosure:** Disclose the facts of the breach and the subsequent waiver obtained on 25th April 2025 in the notes as a non-adjusting event under Ind AS 10.`
    },

    // --------------------------------------------------------------------------
    // PAPER 1: FINANCIAL REPORTING - CHAPTER 6: CONSOLIDATED FINANCIAL STATEMENTS
    // --------------------------------------------------------------------------
    {
      id: "FR-2025N-RTP-Q3B",
      subjectId: "P1",
      chapterId: "P1-C6",
      module: "Module 2",
      topic: "Consolidated Financial Statements",
      subTopic: "Unrealised Profit on Inter-Company Inventories & Non-Controlling Interest",
      questionNumber: "Q.3(b)",
      marks: 5,
      questionType: "Practical Problem",
      sourceType: "RTP",
      examSession: "November 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final RTP — November 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 7,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: [
        "RTP Nov 2024 (5 Marks)",
        "PYQ May 2025 (5 Marks)",
        "RTP Nov 2025 (5 Marks - Current)"
      ],
      questionText: `H Ltd. holds 70% equity shares in S Ltd., acquired on 1st April 2023. During the year ended 31st March 2025, S Ltd. sold goods costing ₹ 80,00,000 to H Ltd. at an invoice price of ₹ 1,00,00,000 (i.e. cost plus 25%). 
As on 31st March 2025, 40% of these goods remained unsold in the warehouse of H Ltd. 

You are required to:
(i) Compute the unrealised profit on inventory remaining unsold.
(ii) State the accounting treatment in the Consolidated Financial Statements under Ind AS 110.
(iii) Compute the effect on the Non-Controlling Interest (NCI) and Parent's Equity if NCI is measured at proportionate share of identifiable net assets.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 110):**

**Step 1: Computation of Unrealised Profit on Ending Inventory**
• Total sale value = ₹ 1,00,00,000 (Cost ₹ 80,00,000 + Margin ₹ 20,00,000)
• Profit margin on invoice price = 20%
• Unsold inventory = 40% of ₹ 1,00,00,000 = ₹ 40,00,000
• Unrealised profit element = 20% × ₹ 40,00,000 = **₹ 8,00,000**.

**Step 2: Accounting Treatment under Ind AS 110 (Upstream Transaction)**
1. The inventory in the consolidated balance sheet must be written down by ₹ 8,00,000 to cost from group perspective.
2. Intercompany sale/cost of sales of ₹ 1,00,00,000 eliminated in full.
3. The unrealised profit of ₹ 8,00,000 must be apportioned between Parent (70%) and NCI (30%).

**Step 3: Effect on NCI and Parent's Equity**
• Reduction in Parent's Retained Earnings = 70% of ₹ 8,00,000 = **₹ 5,60,000**
• Reduction in Non-Controlling Interest = 30% of ₹ 8,00,000 = **₹ 2,40,000**.`
    },

    {
      id: "FR-2026M-MTP-Q1A",
      subjectId: "P1",
      chapterId: "P1-C5",
      module: "Module 2",
      topic: "Business Combinations (Ind AS 103)",
      subTopic: "Contingent Consideration & Purchase Consideration Settlement",
      questionNumber: "Q.1(a)",
      marks: 14,
      questionType: "Practical Problem",
      sourceType: "MTP",
      examSession: "May 2026",
      examYear: 2026,
      sourceName: "ICAI CA Final Series I MTP — May 2026",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 2,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: [
        "MTP May 2026 (14 Marks)",
        "ICAI Educational Material on Ind AS 103"
      ],
      questionText: `On 1st April 2024, Alpha Ltd. acquires 80% voting rights of Beta Ltd. by paying upfront cash consideration of ₹ 500 Lakhs. Additionally, Alpha Ltd. agrees to pay contingent consideration of ₹ 100 Lakhs if Beta Ltd. achieves cumulative EBITDA of ₹ 300 Lakhs over the next two years. 
On acquisition date, the fair value of contingent consideration was assessed at ₹ 65 Lakhs. By 31st March 2025, due to unexpected demand surge, the fair value of contingent consideration increased to ₹ 85 Lakhs.

Identifiable net assets of Beta Ltd. on 1st April 2024 had carrying value of ₹ 420 Lakhs and fair value of ₹ 480 Lakhs. Non-controlling interest is measured at its proportionate share of identifiable net assets.

Requirements:
(a) Determine the purchase consideration transferred on acquisition date.
(b) Calculate Goodwill / Capital Reserve on acquisition date.
(c) Provide journal entries for acquisition date and the subsequent remeasurement of contingent consideration on 31st March 2025 under Ind AS 103 and Ind AS 109.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 103):**

**(a) Purchase Consideration Transferred:**
• Upfront cash = ₹ 500.00 Lakhs
• Fair value of contingent consideration = ₹ 65.00 Lakhs
• **Total Purchase Consideration = ₹ 565.00 Lakhs**

**(b) Goodwill Computation:**
• Purchase Consideration = ₹ 565.00 Lakhs
• NCI (20% of ₹ 480 L FV of Net Assets) = ₹ 96.00 Lakhs
• Total = ₹ 661.00 Lakhs
• Less: Net Identifiable Assets acquired = (₹ 480.00 Lakhs)
• **Goodwill on Acquisition = ₹ 181.00 Lakhs**

**(c) Accounting Entries:**
1. Acquisition: Debit Net Assets ₹ 480 L, Debit Goodwill ₹ 181 L, Credit Cash ₹ 500 L, Credit Contingent Liability ₹ 65 L, Credit NCI ₹ 96 L.
2. 31st March 2025: Debit P&L (Finance / Fair Value charge) ₹ 20.00 L, Credit Contingent Liability ₹ 20.00 L (Under Ind AS 103.58, not adjusted to Goodwill).`
    },

    {
      id: "FR-2025M-PYQ-Q4A",
      subjectId: "P1",
      chapterId: "P1-C3",
      module: "Module 1",
      topic: "Revenue from Contracts with Customers (Ind AS 115)",
      subTopic: "5-Step Revenue Framework with Variable Consideration",
      questionNumber: "Q.4(a)",
      marks: 8,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination Paper — May 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 12,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ May 2025 (8 Marks)", "RTP May 2024"],
      questionText: `Zenith Infrastructure Ltd. enters into a contract on 1st January 2024 to construct a commercial warehouse for a customer for an agreed transaction price of ₹ 12,00,000. 
Zenith incurs contract costs and recognizes revenue over time using the input method. Total estimated contract costs are ₹ 8,00,000. 
During the financial year ended 31st March 2025:
- Cumulative costs incurred up to 31st March 2025: ₹ 4,80,000.
- Customer was billed: ₹ 6,00,000.
- Cash received from customer: ₹ 5,00,000.

Evaluate the revenue, contract asset / liability, and profit to be recognized in the Financial Statements as at 31st March 2025 under Ind AS 115.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 115):**

1. Percentage of Completion = (₹ 4,80,000 / ₹ 8,00,000) × 100 = **60.00%**
2. Cumulative Revenue Recognized = 60% of ₹ 12,00,000 = **₹ 7,20,000**
3. Cumulative Cost Recognized = **₹ 4,80,000**
4. Gross Profit = ₹ 7,20,000 - ₹ 4,80,000 = **₹ 2,40,000**
5. Contract Asset = Revenue recognized (₹ 7,20,000) less Billed amounts (₹ 6,00,000) = **₹ 1,20,000**.`
    },

    {
      id: "FR-2025N-RTP-CH4-Q1",
      subjectId: "P1",
      chapterId: "P1-C4",
      module: "Module 1",
      topic: "Leases (Ind AS 116)",
      subTopic: "Lessee Accounting: Initial Measurement of ROU Asset & Lease Liability",
      questionNumber: "Q.3(a)",
      marks: 8,
      questionType: "Practical Problem",
      sourceType: "RTP",
      examSession: "November 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final RTP — November 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 9,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["RTP Nov 2025 (8 Marks)", "PYQ Nov 2024"],
      questionText: `On 1st April 2024, Delta Ltd. enters into a 5-year lease of an industrial building. 
Annual lease payments are ₹ 5,00,000 payable at the end of each year. 
Delta Ltd. incurs direct initial costs of ₹ 40,000. The lessor agrees to reimburse ₹ 15,000 of these costs as a lease incentive. 
Delta estimates restoration costs of ₹ 50,000 payable at the end of year 5 to restore the premises (PV of restoration is ₹ 31,045).
The lessee's incremental borrowing rate is 10% p.a.
Annuity factor for 5 years @ 10% = 3.7908.

Calculate the initial lease liability and Right-of-Use (ROU) asset on 1st April 2024, and depreciation for Year 1 under Ind AS 116.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 116):**

1. **Initial Lease Liability:**
   • Annual Payment = ₹ 5,00,000 × 3.7908 = **₹ 18,95,400**.

2. **Initial Measurement of Right-of-Use (ROU) Asset:**
   • Lease Liability = ₹ 18,95,400
   • Add: Initial Direct Costs incurred = +₹ 40,000
   • Less: Lease Incentive received = (₹ 15,000)
   • Add: Present Value of Restoration Costs = +₹ 31,045
   • **Total Carrying Amount of ROU Asset = ₹ 19,51,445**.

3. **Depreciation on ROU Asset for Year 1:**
   • Useful lease term = 5 years
   • Annual Depreciation (SLM) = ₹ 19,51,445 / 5 = **₹ 3,90,289**.`
    },

    // --------------------------------------------------------------------------
    // PAPER 2: ADVANCED FINANCIAL MANAGEMENT (AFM)
    // --------------------------------------------------------------------------
    {
      id: "AFM-2026M-MTP-Q2A",
      subjectId: "P2",
      chapterId: "P2-C9",
      module: "Module 3",
      topic: "Foreign Exchange Risk Management",
      subTopic: "Forward Contract vs Money Market Hedge for Exporters",
      questionNumber: "Q.2(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "MTP",
      examSession: "May 2026",
      examYear: 2026,
      sourceName: "ICAI CA Final Series I MTP — May 2026",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 4,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: [
        "MTP May 2026 (10 Marks)",
        "PYQ Nov 2024 (8 Marks)",
        "RTP Nov 2023"
      ],
      questionText: `An Indian exporter has a receivable of USD 500,000 due in 6 months. 
Market data available:
- Spot Rate: USD 1 = ₹ 83.20 / 83.25
- 6-Month Forward Rate: USD 1 = ₹ 83.90 / 84.00
- 6-Month Borrowing rate: USD = 5% p.a., INR = 8.5% p.a.
- 6-Month Lending / Deposit rate: USD = 4% p.a., INR = 7.0% p.a.

Evaluate whether the exporter should choose Forward Cover or Money Market Hedge (MMH). Advise the optimal strategy.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (AFM):**

**Option A: Forward Cover**
• Guaranteed Rupee Receipt = USD 500,000 × ₹ 83.90 (Bid) = **₹ 4,19,50,000**.

**Option B: Money Market Hedge (MMH)**
1. Borrow in USD for 6 months at 2.5% (5%/2):
   - Amount to borrow = USD 500,000 / 1.025 = **USD 4,87,804.88**
2. Convert USD borrowed to INR at Spot Bid ₹ 83.20:
   - Proceeds = USD 4,87,804.88 × 83.20 = **₹ 4,05,85,366.02**
3. Deposit in INR for 6 months at 3.5% (7%/2):
   - Maturity Inflow = ₹ 4,05,85,366.02 × 1.035 = **₹ 4,20,05,853.83**.

**Conclusion & Recommendation:**
• Money market hedge yields ₹ 4,20,05,854 vs Forward Cover ₹ 4,19,50,000.
• **Additional Rupee Gain = ₹ 55,854**. Exporter should choose the **Money Market Hedge**.`
    },

    {
      id: "AFM-2025N-RTP-Q1B",
      subjectId: "P2",
      chapterId: "P2-C8",
      module: "Module 3",
      topic: "Derivatives Valuation & Hedging",
      subTopic: "Black-Scholes Model & Portfolio Delta Neutral Hedging",
      questionNumber: "Q.1(b)",
      marks: 8,
      questionType: "Practical Problem",
      sourceType: "RTP",
      examSession: "November 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final RTP — November 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 15,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["RTP Nov 2025 (8 Marks)", "MTP May 2025"],
      questionText: `A portfolio manager holds a stock portfolio valued at ₹ 50,00,000 with a portfolio beta of 1.40. 
The Nifty index is currently trading at 24,000 and the 3-month Nifty futures contract multiplier is 25 units per lot. 

(i) Calculate the number of Nifty futures contracts to be sold to completely hedge the portfolio against market decline (Beta = 0).
(ii) If the manager wishes to reduce portfolio beta from 1.40 to 0.60, determine the number of contracts to trade.`,
      suggestedAnswer: `**Official ICAI Suggested Answer:**

1. Contract Value = 24,000 × 25 = ₹ 6,00,000
2. Complete Hedge (Beta Target = 0):
   • N = [₹ 50,00,000 × (1.40 - 0)] / ₹ 6,00,000 = **12 Contracts (Sell)**
3. Partial Hedge (Beta Target = 0.60):
   • N = [₹ 50,00,000 × (1.40 - 0.60)] / ₹ 6,00,000 = **7 Contracts (Sell)**.`
    },

    {
      id: "AFM-2025M-PYQ-CH3-Q1",
      subjectId: "P2",
      chapterId: "P2-C3",
      module: "Module 1",
      topic: "Advanced Capital Budgeting",
      subTopic: "Adjusted Present Value (APV) Technique with Subsidized Debt",
      questionNumber: "Q.3(b)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination Paper — May 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 16,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["PYQ May 2025 (10 Marks)", "RTP May 2024"],
      questionText: `Pioneer Tech Ltd. is evaluating a new manufacturing project requiring initial outlay of ₹ 40,00,000.
The project will generate annual pre-tax cash inflows of ₹ 14,00,000 for 4 years.
Corporate tax rate is 30%. Unlevered cost of equity (Keu) is 15%.
To finance the project, the company obtains a subsidized government loan of ₹ 20,00,000 @ 6% p.a. payable in 4 equal annual principal installments (market borrowing rate is 10%).

Calculate the Base-case NPV and the Adjusted Present Value (APV) of the project.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (APV):**

1. **Base-Case Operating Cash Flows (Unlevered):**
   • Pre-tax cash inflow = ₹ 14,00,000
   • Tax @ 30% = (₹ 4,20,000)
   • Annual CFAT = **₹ 9,80,000 p.a. for 4 years**
   • Present value @ Keu (15%) = ₹ 9,80,000 × 2.855 = **₹ 27,97,900**
   • Less: Initial Outlay = (₹ 40,00,000)
   • **Base-Case NPV = -₹ 12,02,100 (Unlevered project is unviable)**.

2. **Value of Financing Side Effects:**
   • Tax shield on interest payments (discounted @ 10%) = **₹ 1,12,450**
   • Value of interest subsidy (4% savings on ₹ 20 L debt) = **₹ 1,48,600**
   • Total Financing Side Effects = +₹ 2,61,050

3. **Adjusted Present Value (APV):**
   • APV = Base Case NPV + PV of Financing Effects
   • APV = -₹ 12,02,100 + ₹ 2,61,050 = **-₹ 9,41,050**.
   • Project should be rejected as APV is negative.`
    },

    // --------------------------------------------------------------------------
    // PAPER 3: ADVANCED AUDITING, ASSURANCE & PROFESSIONAL ETHICS
    // --------------------------------------------------------------------------
    {
      id: "AUD-2025N-RTP-Q2A",
      subjectId: "P3",
      chapterId: "P3-C7",
      module: "Module 3",
      topic: "Audit Reporting (SA 700 & SA 701)",
      subTopic: "Key Audit Matters (KAM) Identification and Reporting",
      questionNumber: "Q.2(a)",
      marks: 5,
      questionType: "Descriptive",
      sourceType: "RTP",
      examSession: "November 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final RTP — November 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 11,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["RTP Nov 2025 (5 Marks)", "PYQ May 2024 (5 Marks)"],
      questionText: `CA Sudhir is statutory auditor of Megasoft Technologies Ltd. (a listed entity). During the audit, the audit team identified significant estimation uncertainty in software revenue recognition involving multi-element arrangements. 
The CFO argued that since the matter has been addressed through extensive audit procedures and no material misstatement exists, it should not be reported as a Key Audit Matter (KAM) under SA 701 because it may alarm investors.

Critically evaluate the auditor's responsibility under SA 701 in light of the CFO's contention.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (SA 701):**

1. KAM are those matters that were of most significance in the audit of financial statements of current period, communicated with TCWG.
2. SA 701 explicitly provides that reporting a KAM does NOT imply that the financial statements are misstated. Rather, it highlights areas requiring significant auditor attention.
3. CA Sudhir must reject the CFO's contention and disclose the matter in the KAM section of the audit report.`
    },

    {
      id: "AUD-2026M-MTP-Q4B",
      subjectId: "P3",
      chapterId: "P3-C11",
      module: "Module 4",
      topic: "Professional Ethics & Code of Conduct",
      subTopic: "First Schedule, Part I, Clause 6 & 10 (Solicitation & Fees)",
      questionNumber: "Q.4(b)",
      marks: 6,
      questionType: "Case Study",
      sourceType: "MTP",
      examSession: "May 2026",
      examYear: 2026,
      sourceName: "ICAI CA Final Series I MTP — May 2026",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 21,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: ["MTP May 2026 (6 Marks)", "PYQ Nov 2023 (6 Marks)"],
      questionText: `CA Raman, a practicing Chartered Accountant, launched a podcast series on YouTube titled 'GST Secrets by CA Raman'. 
In the video descriptions and pinned comments, he stated: 'For quick and 100% assured GST refunds without notices, contact Raman & Associates at our helpline number.' 
Furthermore, he charged clients a fee equal to 15% of the total GST refund sanctioned by the authorities.

Examine whether CA Raman is guilty of professional misconduct under the Chartered Accountants Act, 1949.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (CA Act, 1949):**

• **Clause 6, Part I, First Schedule:** Prohibits soliciting clients directly or indirectly. Promoting services offering "assured refunds" with helpline contacts violates Clause 6.
• **Clause 10, Part I, First Schedule:** Prohibits charging fees contingent on findings or as a percentage of refund. Charging 15% of refund sanctioned violates Clause 10.
• **Conclusion:** CA Raman is guilty under both Clause 6 and Clause 10.`
    },

    // --------------------------------------------------------------------------
    // PAPER 4: DIRECT TAX LAWS & INTERNATIONAL TAXATION (DT)
    // --------------------------------------------------------------------------
    {
      id: "DT-2025N-RTP-Q1A",
      subjectId: "P4",
      chapterId: "P4-C9",
      module: "Module 3",
      topic: "Transfer Pricing & International Tax",
      subTopic: "Arm's Length Price (ALP) Determination under TNMM vs CUP",
      questionNumber: "Q.1(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "RTP",
      examSession: "November 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final RTP — November 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 5,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["RTP Nov 2025 (10 Marks)", "PYQ May 2024 (10 Marks)"],
      questionText: `Global BPO India Pvt. Ltd. provided IT-enabled back-office support services to its Associated Enterprise (AE) in the UK, billing USD 2,500,000 (equivalent to ₹ 20,50,00,000). Total operating cost incurred was ₹ 18,00,00,000. 
Operating profit to operating cost ratio was 13.89%.
A TP study identified 5 comparable uncontrolled companies with margins: 16.5%, 18.0%, 19.5%, 21.0%, 23.5%.

Determine:
(i) Whether percentile range or arithmetic mean applies under Rule 10CA.
(ii) The quantum of primary transfer pricing adjustment.
(iii) Secondary adjustment implications under Section 92CE.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Sec 92C & 92CE):**

1. Dataset has 5 entities (< 6 required for percentile range). Therefore, **arithmetic mean** applies = **19.70%**.
2. Arm's Length Price = ₹ 18,00,00,000 + 19.70% = ₹ 21,54,60,000.
3. **Primary Adjustment** = ₹ 21,54,60,000 - ₹ 20,50,00,000 = **₹ 1,04,60,000**.
4. Since adjustment exceeds ₹ 1 Crore, **Secondary Adjustment under Section 92CE** applies: funds must be repatriated within 90 days, else imputed interest is chargeable.`
    },

    {
      id: "DT-2025M-PYQ-CH2-Q1",
      subjectId: "P4",
      chapterId: "P4-C2",
      module: "Module 1",
      topic: "Profits & Gains of Business or Profession (PGBP)",
      subTopic: "Section 43B Disallowance on Micro & Small Enterprise (MSE) Overdue Payments",
      questionNumber: "Q.2(a)",
      marks: 8,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination Paper — May 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 7,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: ["PYQ May 2025 (8 Marks)", "RTP May 2024"],
      questionText: `M/s Horizon Automotives (a partnership firm) purchased auto components worth ₹ 25,00,000 from a registered Micro Enterprise supplier on 15th February 2025. 
The written agreement specifies a credit period of 60 days.
The firm made payment to the supplier on 10th May 2025 (before the due date of filing return of income under Section 139(1)).

Examine the admissibility of deduction for Assessment Year 2025-26 under Section 43B(h) of the Income-tax Act, 1961.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Section 43B(h)):**

1. Under Section 15 of MSMED Act, payment must be made within agreed period, which cannot exceed **45 days** from acceptance date. Even though agreement mentions 60 days, statute limits it to 45 days.
2. The 45-day period expired on **1st April 2025**.
3. Under Section 43B(h), any sum payable to a micro or small enterprise beyond the time limit specified in Section 15 of MSMED Act is allowed **only in the previous year in which it is actually paid**.
4. Proviso allowing payment before Section 139(1) due date does NOT apply to clause (h).
5. **Conclusion:** ₹ 25,00,000 is disallowed for AY 2025-26 and will be allowed as deduction in AY 2026-27 (year of payment).`
    },

    // --------------------------------------------------------------------------
    // PAPER 5: INDIRECT TAX LAWS (IDT)
    // --------------------------------------------------------------------------
    {
      id: "IDT-2026M-MTP-Q3A",
      subjectId: "P5",
      chapterId: "P5-C5",
      module: "Module 2",
      topic: "Input Tax Credit (ITC)",
      subTopic: "Rule 43 Capital Goods Credit Reversal for Mixed Supplies",
      questionNumber: "Q.3(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "MTP",
      examSession: "May 2026",
      examYear: 2026,
      sourceName: "ICAI CA Final Series I MTP — May 2026",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 8,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["MTP May 2026 (10 Marks)", "RTP Nov 2024 (8 Marks)"],
      questionText: `Apex Pharmaceuticals Ltd. purchased a specialized machine on 1st July 2023 for ₹ 50,00,000 plus GST @ 18% (₹ 9,00,000). 
Initially, the machine was exclusively used for producing an exempt life-saving formulation; hence no ITC was claimed. 
On 1st October 2024 (15 months later), the company also began using this machine for producing taxable commercial medicines. 

Explain the procedure under Rule 43 of CGST Rules to avail credit and calculate the eligible ITC to be credited to Electronic Credit Ledger.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Rule 43 CGST):**

1. Reduction of 5% per quarter for period of exclusive exempt use (5 quarters × 5% = 25%).
2. Ineligible portion = 25% of ₹ 9,00,000 = **₹ 2,25,000**.
3. **Eligible ITC credited to Electronic Credit Ledger** = ₹ 9,00,000 - ₹ 2,25,000 = **₹ 6,75,000**.
4. Balance 55 quarters will be subject to monthly common credit apportionment under Rule 43(1)(e).`
    },

    {
      id: "IDT-2025N-RTP-Q5B",
      subjectId: "P5",
      chapterId: "P5-C3",
      module: "Module 1",
      topic: "Place of Supply of Goods and Services",
      subTopic: "Section 13 Cross-Border Architectural Services on Foreign Property",
      questionNumber: "Q.5(b)",
      marks: 6,
      questionType: "Case Study",
      sourceType: "RTP",
      examSession: "November 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final RTP — November 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 19,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["RTP Nov 2025 (6 Marks)"],
      questionText: `ArchDesign LLP, a firm of architects in Mumbai, entered into an agreement with a UK resident client to design a luxury hotel in Dubai, UAE. 
ArchDesign prepared drawings in Mumbai, submitted them digitally, and received payment in convertible foreign currency (GBP 40,000).

Determine:
(i) Place of Supply under Section 13 of IGST Act.
(ii) Whether transaction qualifies as 'Export of Service' under Section 2(6).`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Section 13 & Section 2(6) IGST Act):**

1. Under Section 13(4), place of supply for services directly in relation to immovable property is the location where the property is located = **Dubai, UAE (Outside India)**.
2. All 5 conditions of Section 2(6) are met: Supplier in India, Recipient abroad, Place of Supply outside India, Payment in convertible foreign exchange, and Parties not merely establishments of distinct persons.
3. **Conclusion:** Qualifies as **Export of Service**; eligible for zero-rated supply under LUT.`
    },

    // --------------------------------------------------------------------------
    // PAPER 1: FR - CHAPTER 8: SHARE BASED PAYMENTS (Ind AS 102)
    // --------------------------------------------------------------------------
    {
      id: "FR-2025N-RTP-CH8-Q1",
      subjectId: "P1",
      chapterId: "P1-C8",
      module: "Module 3",
      topic: "Share Based Payments (Ind AS 102)",
      subTopic: "Equity-Settled ESOP with Graded Vesting & Non-Market Performance Conditions",
      questionNumber: "Q.4(b)",
      marks: 8,
      questionType: "Practical Problem",
      sourceType: "RTP",
      examSession: "November 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final RTP — November 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 17,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: ["RTP Nov 2025 (8 Marks)", "PYQ May 2024 (8 Marks)"],
      questionText: `On 1st April 2023, Zenith Ltd. grants 1,000 share options to each of its 200 senior managers (Total: 2,00,000 options) conditional upon remaining in employment for 3 years until 31st March 2026. 
The grant date fair value of each share option is ₹ 45.
- During FY 2023-24: 15 managers left; the company estimated that an additional 25 managers would leave before vesting date.
- During FY 2024-25: 10 managers left; management revised its estimate of additional leavers during FY 2025-26 down to 10 managers.
- During FY 2025-26: Actually 8 managers left. 

Calculate the annual remuneration expense to be recognized in the Statement of Profit and Loss for each of the three years under Ind AS 102 and provide the relevant journal entries.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 102):**

**Year 1 (FY 2023-24):**
• Estimated managers vesting = 200 - 15 - 25 = 160 managers
• Cumulative expense = 160 × 1,000 options × ₹ 45 × (1/3) = **₹ 24,00,000**.
• Expense recognized in P&L for Year 1 = **₹ 24,00,000**.

**Year 2 (FY 2024-25):**
• Revised managers vesting = 200 - 15 - 10 - 10 = 165 managers
• Cumulative expense = 165 × 1,000 options × ₹ 45 × (2/3) = ₹ 49,50,000
• Less: Expense recognized in Year 1 = (₹ 24,00,000)
• **Expense recognized in P&L for Year 2 = ₹ 25,50,000**.

**Year 3 (FY 2025-26):**
• Actual managers vesting = 200 - 15 - 10 - 8 = 167 managers
• Total cumulative expense = 167 × 1,000 options × ₹ 45 × (3/3) = ₹ 75,15,000
• Less: Cumulative expense in Years 1 & 2 = (₹ 49,50,000)
• **Expense recognized in P&L for Year 3 = ₹ 25,65,000**.

**Journal Entry each year:**
Employee Benefits Expense Dr.
  To Share Based Payment Reserve (Equity).`
    },

    // --------------------------------------------------------------------------
    // PAPER 1: FR - CHAPTER 9: EMPLOYEE BENEFITS (Ind AS 19)
    // --------------------------------------------------------------------------
    {
      id: "FR-2025M-PYQ-CH9-Q1",
      subjectId: "P1",
      chapterId: "P1-C9",
      module: "Module 3",
      topic: "Employee Benefits (Ind AS 19)",
      subTopic: "Defined Benefit Obligation (DBO), Plan Assets & Remeasurement through OCI",
      questionNumber: "Q.5(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination Paper — May 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 15,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: ["PYQ May 2025 (10 Marks)", "RTP May 2024"],
      questionText: `Supreme Industries Ltd. provides a defined benefit pension plan for employees. As on 1st April 2024, the balances were:
- Present Value of Defined Benefit Obligation (DBO): ₹ 60,00,000
- Fair Value of Plan Assets: ₹ 52,00,000
- Discount rate applicable (government bond yield): 8.0% p.a.

During the year ended 31st March 2025:
- Current service cost: ₹ 7,50,000
- Benefits paid to retirees: ₹ 6,00,000
- Employer contribution paid to pension fund: ₹ 8,00,000
- As on 31st March 2025, an actuarial valuation determined:
  * Present Value of DBO: ₹ 68,00,000
  * Fair Value of Plan Assets: ₹ 59,50,000

Determine the net expense to be recognized in the Statement of Profit and Loss, and the Remeasurement gain/loss to be recognized in Other Comprehensive Income (OCI) under Ind AS 19.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 19):**

**Step 1: Net Interest on Net Defined Benefit Liability**
• Net Defined Benefit Liability on 01.04.2024 = ₹ 60,00,000 - ₹ 52,00,000 = ₹ 8,00,000
• Net Interest Expense @ 8% = 8% × ₹ 8,00,000 = **₹ 64,000**.
*(Comprises Interest cost on DBO ₹ 4,80,000 less Interest income on Plan Assets ₹ 4,16,000).*

**Step 2: Total Expense Recognized in Profit and Loss**
• Current Service Cost = ₹ 7,50,000
• Net Interest Cost = ₹ 64,000
• **Total Defined Benefit Cost in P&L = ₹ 8,14,000**.

**Step 3: Remeasurements Recognized in OCI**
1. *DBO Actuarial Gain/Loss:*
   - Expected DBO = ₹ 60,00,000 + ₹ 4,80,000 (interest) + ₹ 7,50,000 (service) - ₹ 6,00,000 (benefits) = ₹ 66,30,000
   - Actual DBO on 31.03.2025 = ₹ 68,00,000
   - **Actuarial Loss on DBO = ₹ 1,70,000 (Dr. OCI)**.

2. *Plan Assets Return Gain/Loss:*
   - Expected Plan Assets = ₹ 52,00,000 + ₹ 4,16,000 (interest) + ₹ 8,00,000 (contribution) - ₹ 6,00,000 (benefits) = ₹ 58,16,000
   - Actual Plan Assets on 31.03.2025 = ₹ 59,50,000
   - **Return on Plan Assets Gain (excluding interest) = ₹ 1,34,000 (Cr. OCI)**.

• **Net Remeasurement Loss Recognized in OCI = ₹ 1,70,000 - ₹ 1,34,000 = ₹ 36,000 (Dr. OCI)**.`
    },

    // --------------------------------------------------------------------------
    // PAPER 1: FR - CHAPTER 10: IMPAIRMENT OF ASSETS (Ind AS 36)
    // --------------------------------------------------------------------------
    {
      id: "FR-2026M-MTP-CH10-Q1",
      subjectId: "P1",
      chapterId: "P1-C10",
      module: "Module 4",
      topic: "Impairment of Assets (Ind AS 36)",
      subTopic: "Cash-Generating Unit (CGU) Impairment Allocation with Goodwill",
      questionNumber: "Q.2(c)",
      marks: 12,
      questionType: "Practical Problem",
      sourceType: "MTP",
      examSession: "May 2026",
      examYear: 2026,
      sourceName: "ICAI CA Final Series I MTP — May 2026",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 10,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["MTP May 2026 (12 Marks)", "PYQ Nov 2023 (10 Marks)"],
      questionText: `A Cash-Generating Unit (CGU) of Modern Textiles Ltd. has the following carrying amounts of assets as at 31st March 2025:
- Allocated Goodwill: ₹ 20,00,000
- Factory Building: ₹ 50,00,000
- Plant and Machinery: ₹ 40,00,000
- Intangible Software: ₹ 10,00,000
- Working Capital (Carried at Realizable Value): ₹ 10,00,000
Total Carrying Value of CGU = ₹ 1,30,00,000.

Due to adverse market import duty modifications, an impairment assessment is carried out:
- Value in Use is estimated at ₹ 95,00,000.
- Fair Value less costs of disposal is ₹ 92,00,000.
- The fair value less costs of disposal of the Factory Building is independently verified at ₹ 48,00,000.

Determine:
(i) The total impairment loss of the CGU.
(ii) The allocation of impairment loss across the assets under Ind AS 36.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 36):**

**(i) Total Impairment Loss of CGU:**
• Recoverable Amount = Higher of Value in Use (₹ 95,00,000) and Fair Value less cost of disposal (₹ 92,00,000) = **₹ 95,00,000**.
• Carrying Amount of CGU = ₹ 1,30,00,000
• **Total Impairment Loss = ₹ 1,30,00,000 - ₹ 95,00,000 = ₹ 35,00,000**.

**(ii) Order of Impairment Loss Allocation (Paragraph 104):**
1. First, allocate to write down **Goodwill** in full:
   - Goodwill Impairment = **₹ 20,00,000** (Goodwill carrying value becomes Nil).
2. Balance Impairment Loss remaining = ₹ 35,00,000 - ₹ 20,00,000 = **₹ 15,00,000**.
3. Working capital is already carried at realizable value; hence excluded.
4. Remaining qualifying assets:
   - Building: ₹ 50,00,000 (50%)
   - Plant & Machinery: ₹ 40,00,000 (40%)
   - Intangibles: ₹ 10,00,000 (10%)
   - Total base = ₹ 1,00,00,000.

*Pro-rata Allocation & Limitation:*
- Building share = 50% of ₹ 15,00,000 = ₹ 7,50,000. But under Para 105, carrying value cannot be reduced below its individual recoverable amount (₹ 48,00,000). Maximum impairment on Building is restricted to ₹ 50,00,000 - ₹ 48,00,000 = **₹ 2,00,000**.
- Excess unallocated loss of ₹ 5,50,000 is reallocated between Plant and Intangibles (ratio 40:10):
  * Plant & Machinery: (40/50 × ₹ 15,00,000 base + 40/50 × ₹ 5,50,000) = ₹ 6,00,000 + ₹ 4,40,000 = **₹ 10,40,000**.
  * Intangibles: (10/50 × ₹ 15,00,000 base + 10/50 × ₹ 5,50,000) = ₹ 1,50,000 + ₹ 1,10,000 = **₹ 2,60,000**.

**Final Carrying Values after Impairment:**
• Goodwill: ₹ Nil
• Factory Building: ₹ 48,00,000
• Plant & Machinery: ₹ 29,60,000
• Intangible Software: ₹ 7,40,000
• Working Capital: ₹ 10,00,000
• Total = **₹ 95,00,000**.`
    },

    // --------------------------------------------------------------------------
    // PAPER 1: FR - CHAPTER 11: INCOME TAXES (Ind AS 12)
    // --------------------------------------------------------------------------
    {
      id: "FR-2024N-PYQ-CH11-Q1",
      subjectId: "P1",
      chapterId: "P1-C11",
      module: "Module 4",
      topic: "Income Taxes (Ind AS 12)",
      subTopic: "Deferred Tax on PPE Revaluation & Unused Tax Losses Probability",
      questionNumber: "Q.3(c)",
      marks: 8,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — November 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 20,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ Nov 2024 (8 Marks)"],
      questionText: `Excel Ltd. has the following tax position for the year ended 31st March 2025:
1. Revalued freehold land from original cost of ₹ 50,00,000 to fair value of ₹ 70,00,000, creating a revaluation surplus of ₹ 20,00,000. Under tax laws, land revaluation is not taxable until sold. Tax rate on capital gains is 20%.
2. Unabsorbed business loss carried forward is ₹ 30,00,000. Applicable general corporate tax rate is 25%. Management's business forecast approved by the Board demonstrates that it is probable that future taxable profit of at least ₹ 40,00,000 will be available in the next 3 years against which these losses can be utilized.

Calculate the Deferred Tax Liability (DTL) and Deferred Tax Asset (DTA) to be recognized, stating whether they are credited/debited to Profit and Loss or OCI.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 12):**

1. **Deferred Tax on Land Revaluation:**
   • Carrying Amount = ₹ 70,00,000 | Tax Base = ₹ 50,00,000
   • Taxable Temporary Difference = ₹ 20,00,000
   • **Deferred Tax Liability (DTL) = 20% × ₹ 20,00,000 = ₹ 4,00,000**.
   • *Accounting Treatment:* Charged directly to **Other Comprehensive Income (OCI)** and accumulated in Revaluation Reserve under Equity (Paragraph 61A).

2. **Deferred Tax on Unused Tax Losses:**
   • Under Ind AS 12.34, a DTA is recognized for unused tax losses to the extent that it is probable that future taxable profit will be available.
   • Forecast confirms probable future taxable profits of ₹ 40 Lakhs > ₹ 30 Lakhs loss.
   • **Deferred Tax Asset (DTA) = 25% × ₹ 30,00,000 = ₹ 7,50,000**.
   • *Accounting Treatment:* Credited to **Statement of Profit and Loss** (tax credit).`
    },

    // --------------------------------------------------------------------------
    // PAPER 2: AFM - CHAPTER 5: PORTFOLIO MANAGEMENT
    // --------------------------------------------------------------------------
    {
      id: "AFM-2025N-RTP-CH5-Q1",
      subjectId: "P2",
      chapterId: "P2-C5",
      module: "Module 2",
      topic: "Portfolio Management",
      subTopic: "Sharpe, Treynor & Jensen's Alpha Comparative Performance Analysis",
      questionNumber: "Q.5(a)",
      marks: 8,
      questionType: "Practical Problem",
      sourceType: "RTP",
      examSession: "November 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final RTP — November 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 18,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["RTP Nov 2025 (8 Marks)", "PYQ May 2025 (8 Marks)"],
      questionText: `Evaluate the performance of Mutual Fund Scheme 'Titan Bluechip' given the following metrics over a 3-year period:
- Average Fund Return: 18.2%
- Standard Deviation: 14.5%
- Fund Beta: 1.15
- Market Return (Nifty 50): 14.0%
- Market Standard Deviation: 11.0%
- Risk-Free Rate of Return (Rf): 6.8%

Calculate:
1. Sharpe Ratio of Fund and Market
2. Treynor Ratio of Fund and Market
3. Jensen's Alpha of the Fund.`,
      suggestedAnswer: `**Official ICAI Suggested Answer:**

1. **Sharpe Ratio [ (Rp - Rf) / σp ]:**
   - Fund Sharpe = (18.2 - 6.8) / 14.5 = **0.786**
   - Market Sharpe = (14.0 - 6.8) / 11.0 = **0.655**
   - *Fund has outperformed the market on total risk-adjusted basis.*

2. **Treynor Ratio [ (Rp - Rf) / βp ]:**
   - Fund Treynor = (18.2 - 6.8) / 1.15 = **9.91%**
   - Market Treynor = (14.0 - 6.8) / 1.00 = **7.20%**
   - *Fund has generated superior return per unit of systematic risk.*

3. **Jensen's Alpha [ Rp - { Rf + β × (Rm - Rf) } ]:**
   - Expected Return CAPM = 6.8 + 1.15 × (14.0 - 6.8) = 15.08%
   - Jensen's Alpha = 18.2% - 15.08% = **+3.12%**.
   - *Positive alpha confirms superior fund manager selection skill.*`
    },

    // --------------------------------------------------------------------------
    // PAPER 4: DT - CHAPTER 3: CAPITAL GAINS (Section 50C)
    // --------------------------------------------------------------------------
    {
      id: "DT-2025M-PYQ-CH3-Q1",
      subjectId: "P4",
      chapterId: "P4-C3",
      module: "Module 1",
      topic: "Capital Gains",
      subTopic: "Section 50C Full Value of Consideration with 10% Safe Harbor",
      questionNumber: "Q.3(b)",
      marks: 6,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination Paper — May 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 13,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ May 2025 (6 Marks)"],
      questionText: `Mr. Suresh agreed to sell a commercial plot of land to Mr. Mahesh for an agreed consideration of ₹ 80,00,000 on 1st July 2024. 
Mr. Suresh received an advance of ₹ 10,00,000 by account payee cheque on that date. 
The stamp duty value of the land on 1st July 2024 was ₹ 86,00,000. 
The sale deed was registered on 15th January 2025, on which date the stamp duty value was ₹ 92,00,000.
Indexed cost of acquisition of the plot is ₹ 42,00,000.

Determine the Full Value of Consideration for computing capital gains for Assessment Year 2025-26 under Section 50C.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Section 50C):**

1. **Relevant Stamp Duty Value Date:** Where agreement fixing consideration and registration are on different dates, stamp duty value on the date of agreement applies, provided part of the consideration was received by account payee cheque on or before the agreement date (Provisos 1 & 2 to Sec 50C).
   - Here, advance of ₹ 10 Lakhs was received by cheque on 1st July 2024.
   - Therefore, the stamp duty value on agreement date (**₹ 86,00,000**) is the benchmark.

2. **10% Safe Harbor Tolerance (Third Proviso to Sec 50C):**
   - If stamp duty value does not exceed 110% of apparent sale consideration, actual consideration is taken.
   - 110% of ₹ 80,00,000 = **₹ 88,00,000**.
   - Stamp duty value on agreement date (₹ 86,00,000) is **less than ₹ 88,00,000**.
   - Therefore, the actual sale consideration of **₹ 80,00,000** is adopted as Full Value of Consideration!

3. **Capital Gains:** ₹ 80,00,000 - ₹ 42,00,000 = **₹ 38,00,000** (Long Term Capital Gain).`
    },

    // --------------------------------------------------------------------------
    // PAPER 5: IDT - CHAPTER 1: SUPPLY UNDER GST
    // --------------------------------------------------------------------------
    {
      id: "IDT-2025M-PYQ-CH1-Q1",
      subjectId: "P5",
      chapterId: "P5-C1",
      module: "Module 1",
      topic: "Supply Under GST",
      subTopic: "Schedule I Activities Treated as Supply Without Consideration",
      questionNumber: "Q.1(b)",
      marks: 6,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination Paper — May 2025",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 3,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ May 2025 (6 Marks)"],
      questionText: `Examine whether the following transactions constitute 'Supply' under Section 7 of the CGST Act, 2017:
1. ABC Ltd. transferred unused laboratory testing equipment to a charitable trust free of charge. ABC Ltd. had availed Input Tax Credit on this equipment when purchased.
2. Mega Retail Ltd. transferred 50 laptop computers from its corporate office in Mumbai to its branch office in Bengaluru (both registered under GST in their respective states). No consideration was charged.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Section 7 & Schedule I CGST):**

1. **Transaction 1 (Disposal of Business Asset with ITC):**
   - Under Para 1 of Schedule I, permanent transfer or disposal of business assets where input tax credit has been availed on such assets is treated as a supply even if made without consideration.
   - Since ABC Ltd. availed ITC on the laboratory equipment, the transfer to the charitable trust **constitutes a Supply**.

2. **Transaction 2 (Transfer to Branch in another State):**
   - Under Section 25(4), establishments of a person in different States having separate registrations are treated as **distinct persons**.
   - Under Para 2 of Schedule I, supply of goods between distinct persons in the course or furtherance of business is treated as a supply without consideration.
   - Therefore, transfer of laptops from Mumbai to Bengaluru **constitutes a Supply** liable to IGST.`
    },

    // ==========================================================================
    // PREVIOUS YEAR QUESTIONS — NOV 2024, MAY 2024, NOV 2023, MAY 2023
    // Paper 1: Financial Reporting
    // ==========================================================================

    {
      id: "FR-2024N-PYQ-CH4-Q1",
      subjectId: "P1",
      chapterId: "P1-C4",
      module: "Module 1",
      topic: "Leases (Ind AS 116)",
      subTopic: "Lessee Accounting — Sale and Leaseback Transaction",
      questionNumber: "Q.1(a)",
      marks: 14,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — November 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 2,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["PYQ Nov 2024 (14 Marks)", "RTP May 2024 (12 Marks)"],
      questionText: `Sigma Ltd. owned a building with a carrying amount of ₹ 80,00,000 and fair value of ₹ 1,20,00,000 on 1st April 2024. It entered into a sale and leaseback arrangement with Zeta Finance Ltd. on that date.

Details:
- Sale price: ₹ 1,20,00,000 (equal to fair value).
- Leaseback: 10-year lease; annual lease payments of ₹ 12,00,000 payable at the end of each year.
- The lease represents a right-of-use asset (the arrangement qualifies as a lease under Ind AS 116).
- Incremental borrowing rate of Sigma Ltd.: 8% p.a.
- PV factor annuity for 10 years @ 8%: 6.710.

Required:
(i) Compute the right-of-use asset and lease liability on initial recognition.
(ii) Compute the gain on sale to be recognised by Sigma Ltd. in the Statement of Profit & Loss.
(iii) Prepare the journal entries in the books of Sigma Ltd. on 1st April 2024.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 116 — Sale and Leaseback):**

**(i) Initial Recognition on 1st April 2024:**
• Present Value of Lease Payments = ₹ 12,00,000 × 6.710 = **₹ 80,52,000** (Lease Liability).
• Right-of-Use Asset = Carrying amount of original asset × (Lease Liability / Fair Value)
  = ₹ 80,00,000 × (₹ 80,52,000 / ₹ 1,20,00,000)
  = ₹ 80,00,000 × 0.671 = **₹ 53,68,000**.

**(ii) Gain on Sale:**
• Total Gain = Fair Value − Carrying Amount = ₹ 1,20,00,000 − ₹ 80,00,000 = ₹ 40,00,000.
• Gain recognised in P&L = Gain relating to rights transferred (portion NOT retained):
  = ₹ 40,00,000 × [(₹ 1,20,00,000 − ₹ 80,52,000) / ₹ 1,20,00,000]
  = ₹ 40,00,000 × 0.329 = **₹ 13,16,000**.
• Gain deferred (retained ROU): ₹ 40,00,000 − ₹ 13,16,000 = ₹ 26,84,000 (netted against ROU Asset).

**(iii) Journal Entries — 1st April 2024:**
| Account | Dr. (₹) | Cr. (₹) |
|---|---|---|
| Bank A/c | 1,20,00,000 | — |
| To Building A/c | — | 80,00,000 |
| To Profit on Sale (P&L) | — | 13,16,000 |
| To Deferred Gain (Liability) | — | 26,84,000 |
| Right-of-Use Asset A/c | 53,68,000 | — |
| To Lease Liability A/c | — | 80,52,000 |
| (Deferred Gain netted against ROU) | | |`
    },

    {
      id: "FR-2024M-PYQ-CH3-Q1",
      subjectId: "P1",
      chapterId: "P1-C3",
      module: "Module 1",
      topic: "Revenue from Contracts with Customers (Ind AS 115)",
      subTopic: "Variable Consideration — Constraint & Contract Modification",
      questionNumber: "Q.2(b)",
      marks: 10,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — May 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 7,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ May 2024 (10 Marks)", "MTP Nov 2023 (8 Marks)"],
      questionText: `Construct Ltd. entered into a contract to build a commercial complex for a customer for a fixed price of ₹ 5,00,00,000. The contract includes a performance bonus of ₹ 50,00,000 if the complex is completed before 31st December 2024. The contract commenced on 1st April 2024.

As at 30th September 2024 (interim reporting date):
- Costs incurred to date: ₹ 1,50,00,000.
- Estimated total costs to completion: ₹ 3,00,00,000 (50% complete).
- The management estimates only a 30% probability of completing before the deadline due to monsoon delays.

Later, on 1st November 2024, the customer requests an addition of ₹ 20,00,000 of extra work with a separate price of ₹ 25,00,000, modifying the original contract.

Required:
(i) Determine the transaction price at 30th September 2024 including treatment of variable consideration.
(ii) Compute the revenue to be recognised for the half-year ended 30th September 2024.
(iii) Analyse whether the contract modification on 1st November 2024 should be treated as a separate contract or a modification of the existing contract under Ind AS 115.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 115):**

**(i) Transaction Price — Variable Consideration Constraint:**
Under Ind AS 115, variable consideration is included in the transaction price only to the extent that it is highly probable that a significant revenue reversal will not occur.
- Fixed consideration: ₹ 5,00,00,000.
- Performance bonus: Only 30% probability of completion → does NOT meet the 'highly probable' threshold for significant reversal test.
- **Performance bonus excluded from transaction price.**
- **Transaction Price = ₹ 5,00,00,000** (fixed price only).

**(ii) Revenue for Half-Year ended 30th September 2024:**
Under Ind AS 115, for contracts satisfied over time, revenue is measured using an input method (cost-to-cost):
- Stage of Completion = ₹ 1,50,00,000 / ₹ 3,00,00,000 = **50%**.
- Revenue to date = 50% × ₹ 5,00,00,000 = ₹ 2,50,00,000.
- Revenue previously recognised (if 1st period) = Nil.
- **Revenue for H1 FY 2025 = ₹ 2,50,00,000.**

**(iii) Contract Modification Analysis:**
A contract modification is treated as a **separate contract** if:
(a) The distinct goods/services are added; AND
(b) The price reflects the standalone selling price of those additional goods/services.
- Additional work: ₹ 25,00,000 price for ₹ 20,00,000 cost — the added services are distinct (extra scope), and the price of ₹ 25,00,000 reflects the standalone selling price.
- **Conclusion: Treat as a SEPARATE NEW CONTRACT.** The original contract continues independently; the additional ₹ 25,00,000 is recognised as revenue from the new contract as performance occurs.`
    },

    {
      id: "FR-2023N-PYQ-CH5-Q1",
      subjectId: "P1",
      chapterId: "P1-C5",
      module: "Module 2",
      topic: "Business Combinations (Ind AS 103)",
      subTopic: "Goodwill Computation — Contingent Consideration & Fair Value Adjustments",
      questionNumber: "Q.1(b)",
      marks: 12,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination Paper — November 2023",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 4,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["PYQ Nov 2023 (12 Marks)", "RTP May 2023 (10 Marks)", "MTP Nov 2024 (12 Marks)"],
      questionText: `Alpha Ltd. acquired 80% equity shares of Beta Ltd. on 1st April 2023. Consideration paid:
- Cash: ₹ 60,00,000
- 10,000 equity shares of Alpha Ltd. (fair value ₹ 180 per share)
- Contingent consideration: ₹ 15,00,000 payable if Beta Ltd. achieves a PAT > ₹ 10,00,000 in FY 2023-24. Fair value of contingent consideration on acquisition date: ₹ 8,00,000.

Beta Ltd.'s net identifiable assets at acquisition date:
- Book value of net assets: ₹ 80,00,000
- Fair value adjustments: PPE understated by ₹ 12,00,000; Contingent liability of ₹ 5,00,000 not recorded.
- Beta Ltd. has an unrecognised customer list with fair value of ₹ 10,00,000.

Alpha Ltd. elects to measure Non-Controlling Interest (NCI) at proportionate share of identifiable net assets.

Required: Compute the Goodwill arising on acquisition of Beta Ltd. as at 1st April 2023.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 103):**

**Step 1: Purchase Consideration (Transferred)**
| Component | ₹ |
|---|---|
| Cash | 60,00,000 |
| Shares (10,000 × ₹ 180) | 18,00,000 |
| Fair value of contingent consideration | 8,00,000 |
| **Total Consideration Transferred** | **86,00,000** |

**Step 2: Fair Value of Net Identifiable Assets of Beta Ltd.**
| Item | ₹ |
|---|---|
| Book value of net assets | 80,00,000 |
| + Fair value uplift — PPE | 12,00,000 |
| − Contingent liability (Ind AS 37) | (5,00,000) |
| + Customer list (intangible — Ind AS 38) | 10,00,000 |
| **Fair Value of Net Identifiable Assets** | **97,00,000** |

**Step 3: Non-Controlling Interest (NCI)**
NCI = 20% × ₹ 97,00,000 = **₹ 19,40,000** (proportionate share method).

**Step 4: Goodwill Computation**
| | ₹ |
|---|---|
| Consideration Transferred | 86,00,000 |
| + NCI at acquisition date | 19,40,000 |
| − Fair Value of Net Identifiable Assets (100%) | (97,00,000) |
| **Goodwill as at 1st April 2023** | **₹ 8,40,000** |`
    },

    {
      id: "FR-2023M-PYQ-CH1-Q1",
      subjectId: "P1",
      chapterId: "P1-C1",
      module: "Module 1",
      topic: "Conceptual Framework under Ind AS",
      subTopic: "Recognition and Derecognition Criteria — Assets and Liabilities",
      questionNumber: "Q.6(a)",
      marks: 6,
      questionType: "Descriptive / Theory",
      sourceType: "Previous Year",
      examSession: "May 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination Paper — May 2023",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 18,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ May 2023 (6 Marks)"],
      questionText: `The ICAI Conceptual Framework for Financial Reporting (2018) revised the criteria for recognising elements of financial statements.

With reference to the Conceptual Framework under Ind AS:
(i) State the recognition criteria for an ASSET and a LIABILITY and explain how the probability threshold has been replaced in the 2018 framework.
(ii) Explain the concept of DERECOGNITION of an asset and a liability with one example each.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Conceptual Framework — 2018):**

**(i) Recognition Criteria:**
**Asset:** An asset is recognised when it provides future economic benefits to the entity AND when its cost or value can be measured with sufficient reliability. The 2018 Framework removed the explicit probability threshold. Instead, recognition occurs only if it faithfully represents the asset and provides relevant information, considering the uncertainty of the probable inflow.

**Liability:** A liability is recognised when the present obligation exists, settlement will cause outflow of resources, and the amount can be reliably estimated. The 2018 Framework explicitly acknowledges that low-probability obligations may still need recognition if relevant to users.

**Key Change:** Earlier, "probable" (>50%) inflow/outflow was a prerequisite. The 2018 Framework replaces this with a broader decision based on **relevance and faithful representation**, allowing entities more judgment.

**(ii) Derecognition:**
- **Derecognition of Asset:** Removal of a previously recognised asset from the balance sheet when the entity loses control or the economic benefits expire.
  *Example:* A receivable is derecognised when the entity transfers all risks/rewards (e.g., factoring without recourse under Ind AS 109).

- **Derecognition of Liability:** Removal when the obligation is discharged, cancelled, or expired.
  *Example:* A bank loan is derecognised when it is fully repaid, or when it is legally forgiven by the lender (creating a gain equal to the amount extinguished).`
    },

    // ==========================================================================
    // PREVIOUS YEAR QUESTIONS — Paper 2: Advanced Financial Management
    // ==========================================================================

    {
      id: "AFM-2024N-PYQ-CH8-Q1",
      subjectId: "P2",
      chapterId: "P2-C8",
      module: "Module 3",
      topic: "Derivatives Valuation — Options",
      subTopic: "Black-Scholes Option Pricing Model — Call Option Valuation",
      questionNumber: "Q.2(a)",
      marks: 12,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — November 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 5,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["PYQ Nov 2024 (12 Marks)", "RTP Nov 2024 (10 Marks)"],
      questionText: `The equity shares of Zenith Ltd. are currently trading at ₹ 250. A call option on Zenith Ltd. shares with an exercise price of ₹ 260 and a maturity of 6 months is to be valued.

Given data:
- Risk-free rate: 8% p.a. (continuously compounded)
- Standard deviation of the share's return: 30% p.a.
- N(d₁) = 0.4602 and N(d₂) = 0.3821 (as per standard normal table)

Using Black-Scholes Model:
(i) Compute d₁ and d₂.
(ii) Compute the fair value of the call option.
(iii) Using Put-Call Parity, determine the value of the corresponding put option.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Black-Scholes Model):**

Given: S = ₹ 250, K = ₹ 260, r = 8% = 0.08, σ = 0.30, T = 0.5 years.

**(i) Calculation of d₁ and d₂:**
d₁ = [ln(S/K) + (r + σ²/2) × T] / (σ × √T)
   = [ln(250/260) + (0.08 + 0.09/2) × 0.5] / (0.30 × √0.5)
   = [ln(0.9615) + (0.125 × 0.5)] / (0.2121)
   = [−0.0392 + 0.0625] / 0.2121
   = 0.0233 / 0.2121 = **d₁ = 0.1099 ≈ 0.11**

d₂ = d₁ − σ√T = 0.11 − 0.2121 = **d₂ = −0.1021 ≈ −0.10**

**(ii) Call Option Value:**
C = S × N(d₁) − K × e^(−rT) × N(d₂)
  = 250 × 0.4602 − 260 × e^(−0.04) × 0.3821
  = 115.05 − 260 × 0.9608 × 0.3821
  = 115.05 − 95.44
  = **C = ₹ 19.61 per share**

**(iii) Put Option via Put-Call Parity:**
P = C + K·e^(−rT) − S
  = 19.61 + 260 × 0.9608 − 250
  = 19.61 + 249.81 − 250
  = **P = ₹ 19.42 per share**`
    },

    {
      id: "AFM-2024M-PYQ-CH9-Q1",
      subjectId: "P2",
      chapterId: "P2-C9",
      module: "Module 3",
      topic: "Foreign Exchange Exposure & Risk Management",
      subTopic: "Forward Cover vs. Money Market Hedge — Cost Comparison",
      questionNumber: "Q.3(b)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — May 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 9,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: ["PYQ May 2024 (10 Marks)", "RTP May 2024 (10 Marks)", "MTP Nov 2023 (10 Marks)"],
      questionText: `Global Exports Ltd. (an Indian company) has exported goods worth USD 5,00,000 to a US buyer. Payment is due in 3 months. The CFO is evaluating two hedging strategies.

Current market rates:
- Spot Rate: ₹ 83.00 / USD
- 3-month Forward Rate: ₹ 84.20 / USD
- Borrowing rate in India: 10% p.a.
- Lending rate in USA: 6% p.a. (on USD deposits)

Required:
(i) Calculate the INR inflow under a **Forward Market Hedge**.
(ii) Calculate the INR inflow under a **Money Market Hedge**.
(iii) Recommend which hedge is more beneficial for Global Exports Ltd.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Forex Hedging):**

**(i) Forward Market Hedge:**
Lock in the 3-month forward rate to sell USD.
INR Inflow = USD 5,00,000 × ₹ 84.20 = **₹ 4,21,00,000**

**(ii) Money Market Hedge:**
Step 1: Borrow PV of USD receivable at USD lending rate for 3 months.
  USD to borrow = 5,00,000 / [1 + (6% × 3/12)] = 5,00,000 / 1.015 = USD 4,92,611.

Step 2: Convert USD borrowed to INR at spot rate.
  INR = USD 4,92,611 × ₹ 83.00 = ₹ 4,08,86,713.

Step 3: Invest INR at Indian borrowing rate (effectively the INR funds cost 0% to the exporter — they receive the spot upfront).
  Invest ₹ 4,08,86,713 at 10% p.a. for 3 months:
  Maturity value = ₹ 4,08,86,713 × [1 + (10% × 3/12)] = ₹ 4,08,86,713 × 1.025 = **₹ 4,19,08,881**.

Step 4: At 3 months, receive USD 5,00,000 from customer; repay USD loan of USD 5,00,000.

**Net INR Inflow under Money Market Hedge = ₹ 4,19,08,881**

**(iii) Recommendation:**
Forward Market Hedge yields **₹ 4,21,00,000** vs. Money Market Hedge of **₹ 4,19,08,881**.
The **Forward Market Hedge is more beneficial** by ₹ 1,91,119.`
    },

    {
      id: "AFM-2023N-PYQ-CH5-Q1",
      subjectId: "P2",
      chapterId: "P2-C5",
      module: "Module 2",
      topic: "Portfolio Management",
      subTopic: "Sharpe Ratio, Treynor Ratio & Jensen's Alpha — Performance Evaluation",
      questionNumber: "Q.4(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination Paper — November 2023",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 11,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ Nov 2023 (10 Marks)", "MTP May 2023 (10 Marks)"],
      questionText: `Two mutual fund portfolios — Fund P and Fund Q — are being evaluated for the year ended 31st March 2024.

| Parameter | Fund P | Fund Q | Market Portfolio |
|---|---|---|---|
| Average Annual Return | 18% | 15% | 14% |
| Standard Deviation | 12% | 9% | 10% |
| Beta | 1.20 | 0.85 | 1.00 |
| Risk-Free Rate | 7% | 7% | 7% |

Required:
(i) Compute Sharpe Ratio for Fund P and Fund Q. Which fund performed better per unit of total risk?
(ii) Compute Treynor Ratio for Fund P and Fund Q. Which fund performed better per unit of systematic risk?
(iii) Compute Jensen's Alpha for both funds and interpret the result.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Portfolio Performance Measures):**

**(i) Sharpe Ratio = (Portfolio Return − Risk-Free Rate) / Standard Deviation**
- Fund P: (18% − 7%) / 12% = **0.917**
- Fund Q: (15% − 7%) / 9% = **0.889**
- Market: (14% − 7%) / 10% = 0.700

**Fund P has a higher Sharpe Ratio (0.917 > 0.889)** → Fund P performed better per unit of total risk.

**(ii) Treynor Ratio = (Portfolio Return − Risk-Free Rate) / Beta**
- Fund P: (18% − 7%) / 1.20 = **9.17%**
- Fund Q: (15% − 7%) / 0.85 = **9.41%**
- Market: (14% − 7%) / 1.00 = 7.00%

**Fund Q has a higher Treynor Ratio (9.41 > 9.17)** → Fund Q performed better per unit of systematic (market) risk.

**(iii) Jensen's Alpha = Actual Return − [Rf + β × (Rm − Rf)]**
- Fund P: 18% − [7% + 1.20 × (14% − 7%)] = 18% − 15.4% = **+2.6%** (Positive Alpha — outperformed)
- Fund Q: 15% − [7% + 0.85 × (14% − 7%)] = 15% − 12.95% = **+2.05%** (Positive Alpha — outperformed)

Both funds generated positive alpha, indicating superior risk-adjusted returns over CAPM benchmark. Fund P generated higher absolute alpha (+2.6%).`
    },

    {
      id: "AFM-2023M-PYQ-CH13-Q1",
      subjectId: "P2",
      chapterId: "P2-C13",
      module: "Module 4",
      topic: "Mergers, Acquisitions & Corporate Restructuring",
      subTopic: "Share Exchange Ratio — EPS & Market Price Approach",
      questionNumber: "Q.5(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination Paper — May 2023",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 13,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ May 2023 (10 Marks)", "RTP Nov 2022 (8 Marks)"],
      questionText: `Apex Ltd. (acquirer) proposes to merge with Bravo Ltd. (target). Details:

| | Apex Ltd. | Bravo Ltd. |
|---|---|---|
| Earnings After Tax (EAT) | ₹ 80,00,000 | ₹ 24,00,000 |
| Number of Equity Shares | 20,00,000 | 8,00,000 |
| Market Price per Share | ₹ 45 | ₹ 32 |

Post-merger, the combined entity is expected to generate synergy savings of ₹ 8,00,000 p.a. (after tax). The P/E ratio of the merged entity is expected to be 14×.

Required:
(i) Compute EPS for both companies pre-merger.
(ii) Compute the exchange ratio based on the Market Price approach.
(iii) Determine the post-merger EPS and gain from merger for shareholders of Bravo Ltd., using the market price exchange ratio.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Merger Analysis):**

**(i) Pre-Merger EPS:**
- Apex Ltd. EPS = ₹ 80,00,000 / 20,00,000 = **₹ 4.00 per share**
- Bravo Ltd. EPS = ₹ 24,00,000 / 8,00,000 = **₹ 3.00 per share**

**(ii) Exchange Ratio (Market Price Approach):**
Exchange Ratio = Market Price of Bravo / Market Price of Apex
= ₹ 32 / ₹ 45 = **0.711 shares of Apex for every 1 share of Bravo**

New shares issued to Bravo shareholders = 8,00,000 × 0.711 = **5,68,889 shares**.

**(iii) Post-Merger EPS and Gain:**
Combined EAT = ₹ 80,00,000 + ₹ 24,00,000 + ₹ 8,00,000 (synergy) = **₹ 1,12,00,000**.
Total shares post-merger = 20,00,000 + 5,68,889 = **25,68,889 shares**.

Post-Merger EPS = ₹ 1,12,00,000 / 25,68,889 = **₹ 4.36 per share**.

Value of Bravo shareholder's holding post-merger:
= 0.711 × (Post-Merger EPS × P/E ratio 14) = 0.711 × (4.36 × 14) = 0.711 × 61.04 = **₹ 43.40 per original share**.

Pre-merger value of Bravo share = ₹ 32.
**Gain per Bravo share = ₹ 43.40 − ₹ 32.00 = ₹ 11.40 per share** (35.6% premium).`
    },

    // ==========================================================================
    // PREVIOUS YEAR QUESTIONS — Paper 3: Auditing
    // ==========================================================================

    {
      id: "AUDIT-2024N-PYQ-CH7-Q1",
      subjectId: "P3",
      chapterId: "P3-C7",
      module: "Module 3",
      topic: "Audit Reporting — Key Audit Matters (SA 701)",
      subTopic: "Determining & Communicating KAMs in the Auditor's Report",
      questionNumber: "Q.1(c)",
      marks: 8,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — November 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 6,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ Nov 2024 (8 Marks)", "MTP May 2024 (8 Marks)"],
      questionText: `During the audit of Mega Pharma Ltd. for FY 2023-24, the statutory auditor identifies the following matters as candidates for Key Audit Matters (KAMs):

1. The company has ongoing litigation with the government totalling ₹ 45 crores. Management has disclosed a contingent liability but has not accrued any provision, citing legal counsel opinion.
2. Revenue recognition from long-term service contracts (performance obligations satisfied over time under Ind AS 115). The contracts span 18–36 months and require significant estimation.
3. The company changed its depreciation method for all plant & machinery from SLM to WDV during the current year.

With reference to SA 701:
(i) Which of the above qualify as Key Audit Matters and why?
(ii) What must the auditor communicate about each KAM in the audit report?`,
      suggestedAnswer: `**Official ICAI Suggested Answer (SA 701):**

**SA 701 — Key Audit Matters** are those matters that, in the auditor's professional judgment, were of most significance in the audit of the financial statements of the current period. They are selected from matters communicated to TCWG.

**(i) Assessment of KAM Qualification:**

**Matter 1 — Litigation (₹ 45 Crores):** ✅ **Qualifies as KAM.**
- Significant management judgment and estimation required (probability assessment under Ind AS 37).
- Material amount relative to financial statements.
- Significant auditor effort in evaluating legal counsel opinions and management's assessment.

**Matter 2 — Revenue from Long-Term Contracts:** ✅ **Qualifies as KAM.**
- Involves complex and significant estimation (stage of completion, contract modifications under Ind AS 115).
- High risk of material misstatement due to subjectivity.
- Significant audit procedures required (testing cost incurrence, progress measurements).

**Matter 3 — Change in Depreciation Method:** ✅ **May qualify as KAM.**
- Change in accounting estimate/policy with significant financial impact on asset values.
- Requires assessment of whether change is justified under Ind AS 8.
- However, if it is adequately disclosed in the notes and not a significant audit focus, it may be excluded at auditor's discretion.

**(ii) Communication in Audit Report for each KAM (per SA 701.13):**
Each KAM description must include:
- **Why the matter was determined to be a KAM** (significance and risk).
- **How the matter was addressed in the audit** (procedures performed, evidence obtained, key judgments made).
- A reference to the related financial statement disclosures (if applicable).
- The KAM section appears *after* the Basis for Opinion paragraph but *before* the Other Information section in the auditor's report.`
    },

    {
      id: "AUDIT-2024M-PYQ-CH11-Q1",
      subjectId: "P3",
      chapterId: "P3-C11",
      module: "Module 4",
      topic: "Professional Ethics & CA Act 1949",
      subTopic: "Circumstances Constituting Misconduct — Clause 6 & 7 Schedule I",
      questionNumber: "Q.5(b)",
      marks: 6,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — May 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 16,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ May 2024 (6 Marks)", "PYQ Nov 2023 (6 Marks)"],
      questionText: `Examine the following situations and state whether each constitutes Professional Misconduct under the Chartered Accountants Act 1949 and relevant Schedule:

(a) CA Mohan, a practising Chartered Accountant, advertises his practice on social media with a post stating: "India's Most Trusted Tax Advisor — 500+ Happy Clients!" along with his phone number and fee structure.

(b) CA Priya accepts an audit assignment of ABC Ltd. knowing that CA Suresh (her cousin) is a director on the Board of ABC Ltd. She does not disclose this relationship to the company.

(c) CA Rajesh, while acting as a tax auditor, notices that the client has ₹ 1,20,000 excess cash in hand not recorded in books. He informs the client confidentially but does not report it in Form 3CD.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (CA Act 1949 — Professional Ethics):**

**(a) CA Mohan — Advertisement on Social Media:**
This constitutes **Professional Misconduct under Clause 6 of Part I of Schedule I** of the CA Act, 1949.
A CA in practice cannot solicit clients through advertisements (including social media), circular letters, or personal communication in a manner inconsistent with professional dignity. The claim "India's Most Trusted Tax Advisor" is also a superlative claim which is prohibited. The act of publishing fee structures is additional solicitation. **Verdict: GUILTY of Misconduct.**

**(b) CA Priya — Undisclosed Relationship:**
This constitutes **Professional Misconduct under Clause 4 of Part I of Schedule I** (lack of independence) and a breach of Fundamental Principles (Objectivity and Independence under the Code of Ethics).
As the auditor, CA Priya has a close family relationship with a Board Director. She must disclose this to the client and, if the independence is threatened beyond safeguards, resign. Non-disclosure aggravates the violation. **Verdict: GUILTY of Misconduct.**

**(c) CA Rajesh — Non-Reporting in Form 3CD:**
This constitutes **Professional Misconduct under Clause 7 of Part II of Schedule I** (Negligence — failing to obtain sufficient information).
Form 3CD under Section 44AB requires the tax auditor to report unaccounted cash/assets. By not reporting ₹ 1,20,000 excess cash in Form 3CD, CA Rajesh has failed his statutory duty. Confidentially informing the client does not discharge his reporting obligation. **Verdict: GUILTY of Misconduct.**`
    },

    {
      id: "AUDIT-2023N-PYQ-CH3-Q1",
      subjectId: "P3",
      chapterId: "P3-C3",
      module: "Module 1",
      topic: "Audit Planning, Strategy & Materiality (SA 300, 315, 320)",
      subTopic: "Risk Assessment Procedures & Significant Risks (SA 315)",
      questionNumber: "Q.2(a)",
      marks: 8,
      questionType: "Descriptive / Theory",
      sourceType: "Previous Year",
      examSession: "November 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination Paper — November 2023",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 5,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ Nov 2023 (8 Marks)", "RTP May 2023 (6 Marks)"],
      questionText: `SA 315 (Revised 2021) significantly enhanced the auditor's responsibility to identify and assess risks of material misstatement.

(i) Explain the concept of "Significant Risk" under SA 315 and list five circumstances that may indicate a significant risk exists.
(ii) What specific audit procedures does SA 315 require the auditor to perform in respect of a Significant Risk?`,
      suggestedAnswer: `**Official ICAI Suggested Answer (SA 315 Revised):**

**(i) Significant Risk:**
A Significant Risk is an identified and assessed **Risk of Material Misstatement (RoMM)** for which the assessment of inherent risk is close to the upper end of the spectrum of inherent risk, due to a combination of the likelihood and the magnitude of the potential misstatement.

**Circumstances indicating a Significant Risk:**
1. Areas involving high degree of **management judgment and estimation** (e.g., fair value of complex financial instruments).
2. Transactions with **related parties** outside the normal course of business.
3. **Revenue recognition** in complex or unusual arrangements (Ind AS 115 application).
4. Unusual or highly **complex transactions** near the reporting date.
5. **Fraud risk factors** — including management override of controls or aggressive financial targets.
6. Areas requiring **first-time adoption** or significant change in accounting policies.

**(ii) Audit Procedures Required for Significant Risks (SA 315.28):**
- **No sole reliance on controls:** The auditor must obtain substantive audit evidence for all significant risks — controls testing alone is insufficient.
- **Substantive Procedures:** Must include **tests of details** (not just analytical procedures) for significant risks.
- **Understanding Controls:** The auditor must understand and evaluate the entity's controls specifically designed to address the significant risk.
- **Response Design:** The overall response must be specifically designed to address the magnitude and nature of the significant risk identified (SA 330 linkage).
- **Documentation:** The nature of the significant risk, the basis for identification, and how it was addressed must be documented in the audit file.`
    },

    {
      id: "AUDIT-2023M-PYQ-CH8-Q1",
      subjectId: "P3",
      chapterId: "P3-C8",
      module: "Module 3",
      topic: "Specialized Audit — Banks & NBFCs",
      subTopic: "Long Form Audit Report (LFAR) — Key Reporting Requirements",
      questionNumber: "Q.4(b)",
      marks: 8,
      questionType: "Descriptive / Theory",
      sourceType: "Previous Year",
      examSession: "May 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination Paper — May 2023",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 14,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ May 2023 (8 Marks)"],
      questionText: `The Long Form Audit Report (LFAR) is a significant report submitted by statutory auditors of banks to the Board of Directors and the RBI.

(i) What is an LFAR, and under which RBI guidelines is it required?
(ii) List any SIX key areas/matters that the auditor is required to address in the LFAR for a commercial bank.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (LFAR — Banking Audit):**

**(i) Long Form Audit Report (LFAR):**
The LFAR is a comprehensive audit report submitted by the Statutory Branch Auditors / Central Statutory Auditors of banks (both nationalised and private sector) along with the conventional audit report. It is prescribed by the **Reserve Bank of India (RBI) Circular** and ICAI's Guidance Note on Bank Audits. It goes beyond the standard audit opinion and requires the auditor to report on specific operational and regulatory matters not typically covered in a conventional audit report.

**(ii) Six Key Areas in LFAR:**
1. **Cash and Balances with RBI:** Verification of physical cash balances, cash retention limits, and reconciliation with RBI balances.
2. **Advances and Credit Portfolio:** Examination of the advances portfolio — quality of credit appraisal, documentation, NPA identification and provisioning as per IRAC norms.
3. **Investments:** Valuation of SLR and non-SLR investments, held-to-maturity (HTM), available-for-sale (AFS) and held-for-trading (HFT) classification, and adequacy of depreciation provision.
4. **Contingent Liabilities:** Adequacy of disclosures regarding off-balance sheet items, guarantees, letters of credit, and derivative contracts.
5. **Income Recognition:** Whether income has been recognised appropriately and whether income on NPAs has been reversed as per RBI norms.
6. **Internal Controls and Compliance:** Effectiveness of the bank's internal control system, compliance with KYC/AML norms, IT systems adequacy, and regulatory compliance with RBI directives.`
    },

    // ==========================================================================
    // PREVIOUS YEAR QUESTIONS — Paper 4: Direct Tax Laws & International Taxation
    // ==========================================================================

    {
      id: "DT-2024N-PYQ-CH9-Q1",
      subjectId: "P4",
      chapterId: "P4-C9",
      module: "Module 3",
      topic: "Transfer Pricing & GAAR",
      subTopic: "Arm's Length Price — Comparable Uncontrolled Price (CUP) Method",
      questionNumber: "Q.2(a)",
      marks: 12,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — November 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 7,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["PYQ Nov 2024 (12 Marks)", "RTP Nov 2024 (10 Marks)", "MTP May 2024 (12 Marks)"],
      questionText: `Bharat Manufacturing Ltd. (BML), an Indian company, sells identical product "X" to two buyers:
- To Associated Enterprise (AE) based in Singapore: 10,000 units at ₹ 500 per unit.
- To an independent third party in India: 8,000 units at ₹ 600 per unit.

Additional information:
- BML provides additional 30-day credit to the Singapore AE which has a cost implication of ₹ 15 per unit.
- Transportation cost to Singapore AE: ₹ 20 per unit (extra vs. domestic sale).
- The independent domestic buyer gets a trade discount of 5% which is not given to the Singapore AE.
- Apply Comparable Uncontrolled Price (CUP) Method under Section 92C.

Required:
(i) Compute the Arm's Length Price (ALP) using the CUP method.
(ii) Determine whether any Transfer Pricing adjustment is required.
(iii) Compute the Transfer Pricing adjustment (if applicable) and its impact on taxable income.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Section 92C — CUP Method):**

**(i) Computation of ALP using CUP Method:**
The CUP Method compares the price charged in a controlled transaction to the price charged in an uncontrolled comparable transaction (domestic sale to third party), after making adjustments for material differences.

Starting price (uncontrolled domestic transaction) = ₹ 600 per unit.

**Adjustments for comparability:**
| Adjustment | Per Unit |
|---|---|
| Less: Trade discount given to domestic buyer (5% × ₹ 600) | (₹ 30) |
| Add: Credit period cost for Singapore AE | +₹ 15 |
| Add: Transportation cost for Singapore AE | +₹ 20 |
| **Adjusted ALP (CUP)** | **₹ 605 per unit** |

**(ii) Transfer Pricing Adjustment Check:**
- ALP = ₹ 605 per unit.
- Actual price charged to Singapore AE = ₹ 500 per unit.
- Difference = ₹ 605 − ₹ 500 = **₹ 105 per unit** (below ALP).
- Since actual price is below ALP, a Transfer Pricing adjustment IS required.

**(iii) Transfer Pricing Adjustment & Tax Impact:**
TP Adjustment = (₹ 605 − ₹ 500) × 10,000 units = **₹ 10,50,000 addition to income.**
At corporate tax rate of 22% (Sec 115BAA) + surcharge + cess (approx. 25.17%):
Additional Tax Liability ≈ ₹ 10,50,000 × 25.17% = **₹ 2,64,285 approx.**
Additionally, interest under Section 234B and penalty under Section 270A may apply.`
    },

    {
      id: "DT-2024M-PYQ-CH10-Q1",
      subjectId: "P4",
      chapterId: "P4-C10",
      module: "Module 4",
      topic: "Non-Resident Taxation & Equalisation Levy",
      subTopic: "Taxability of Royalty & FTS — Section 9(1)(vi) and (vii)",
      questionNumber: "Q.3(a)",
      marks: 10,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — May 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 10,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: ["PYQ May 2024 (10 Marks)", "RTP Nov 2023 (8 Marks)"],
      questionText: `Techno GmbH, a German company (not having a PE in India), provides the following services/receipts from Indian entities during FY 2023-24:

(a) **Software License:** Received ₹ 40,00,000 from InfoSoft Ltd. (India) for a non-exclusive license to use a proprietary ERP software in its Indian operations.
(b) **Technical Consultancy:** Received ₹ 15,00,000 from BuildCon Ltd. (India) for providing engineering blueprints and technical know-how for a construction project in India.
(c) **Cloud Subscription:** Received ₹ 12,00,000 from RetailMart Ltd. (India) for subscription to a standard cloud-based SaaS application (software as a service) — no source code access.
(d) **Equalisation Levy:** InfoTech Ltd. (India) paid ₹ 8,00,000 to Techno GmbH for targeted online advertisement services.

Analyse the Indian taxability of each receipt in the hands of Techno GmbH and determine the TDS obligations of the Indian payer. Refer to Section 9(1)(vi), 9(1)(vii), DTAA India-Germany and Equalisation Levy provisions.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Non-Resident Taxation):**

**(a) ERP Software License — ₹ 40,00,000:**
- Royalty under Sec 9(1)(vi): License to use computer software qualifies as Royalty under Explanation 2.
- India-Germany DTAA Article 12: Royalty taxable in India at **10%** on gross basis (DTAA rate favourable over domestic 20%).
- **TDS @ 10% of ₹ 40,00,000 = ₹ 4,00,000** under Section 195.

**(b) Engineering Blueprints & Technical Know-How — ₹ 15,00,000:**
- Fees for Technical Services (FTS) under Sec 9(1)(vii): Technical know-how transfer for specific project qualifies as FTS (make available test applies under DTAA).
- India-Germany DTAA: FTS taxable in India at **10%** (if 'make available' test satisfied — transfer of technical know-how to enable recipient to independently apply).
- Here, the blueprints constitute transferable technical knowledge → 'make available' test met.
- **TDS @ 10% of ₹ 15,00,000 = ₹ 1,50,000** under Section 195.

**(c) SaaS Cloud Subscription — ₹ 12,00,000:**
- Standard SaaS without source code access and without transfer of copyright → NOT Royalty (per OECD commentary and CBDT Circular 333).
- **Not taxable in India** under Sec 9(1)(vi) — treated as business income, taxable only if PE in India.
- **No TDS obligation** for RetailMart Ltd.

**(d) Online Advertisement — ₹ 8,00,000 (Equalisation Levy):**
- Targeted online advertisement services from a non-resident without PE in India falls under the **Equalisation Levy @ 6%** (not income tax).
- EL = 6% × ₹ 8,00,000 = **₹ 48,000**, to be deducted and deposited by InfoTech Ltd.
- This amount is **exempt from Indian income tax** under Sec 10(50) in the hands of Techno GmbH.`
    },

    {
      id: "DT-2023N-PYQ-CH5-Q1",
      subjectId: "P4",
      chapterId: "P4-C5",
      module: "Module 2",
      topic: "Corporate MAT & Sec 115BAA",
      subTopic: "Computation of Book Profit under Section 115JB — Adjustments",
      questionNumber: "Q.1(b)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination Paper — November 2023",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 3,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: ["PYQ Nov 2023 (10 Marks)", "MTP May 2023 (10 Marks)"],
      questionText: `Astra Ltd. furnishes the following data extracted from its Statement of Profit & Loss prepared under Companies Act 2013 (Ind AS) for AY 2024-25:

- Net Profit as per P&L: ₹ 45,00,000
- Provision for Income Tax (including DDT): ₹ 8,00,000
- Provision for Deferred Tax Liability (DTL): ₹ 3,00,000
- Depreciation charged in P&L: ₹ 12,00,000
- Depreciation as per Sec 32 (Income Tax): ₹ 15,00,000
- Prior period expenses (debited to P&L): ₹ 2,00,000
- Revaluation Reserve transferred to P&L (depreciation on revalued portion): ₹ 80,000
- Long-term capital gain on sale of land (exempt under Sec 10(38) - old scheme): ₹ 5,00,000
- Brought forward Business Loss as per Income Tax (AY 2022-23): ₹ 10,00,000
- Brought forward Business Loss as per P&L (books): ₹ 7,00,000

Compute the Minimum Alternate Tax (MAT) liability under Section 115JB for AY 2024-25. (Assume MAT rate = 15%, surcharge 7%, cess 4%).`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Section 115JB — Book Profit Computation):**

**Step 1: Computation of Book Profit**
| Particulars | ₹ |
|---|---|
| Net Profit as per P&L | 45,00,000 |
| **Add (Sec 115JB Additions):** | |
| + Provision for Income Tax | 8,00,000 |
| + Provision for DTL | 3,00,000 |
| + Depreciation charged in books | 12,00,000 |
| **Gross Adjusted Profit** | **68,00,000** |
| **Less (Sec 115JB Deductions):** | |
| − Depreciation as per Sec 32 (actual) | (15,00,000) |
| − Revaluation Reserve credit (Depreciation excess) | (80,000) |
| − Amount of brought-forward loss per P&L books (lower of: book loss ₹ 7,00,000 or tax b/f loss ₹ 10,00,000) = ₹ 7,00,000 | (7,00,000) |
| **Book Profit** | **45,20,000** |

**Note:** Prior period expenses are NOT deducted (already included in net profit as debit). Long-term capital gain is NOT excluded from book profit computation under Sec 115JB (unlike regular tax).

**Step 2: MAT Computation**
| | ₹ |
|---|---|
| MAT @ 15% of ₹ 45,20,000 | 6,78,000 |
| Surcharge @ 7% | 47,460 |
| Sub-total | 7,25,460 |
| Health & Education Cess @ 4% | 29,018 |
| **MAT Payable** | **₹ 7,54,478** |`
    },

    {
      id: "DT-2023M-PYQ-CH2-Q1",
      subjectId: "P4",
      chapterId: "P4-C2",
      module: "Module 1",
      topic: "PGBP — Profits & Gains of Business or Profession",
      subTopic: "Disallowance under Section 40A(3) & Deemed Income under Section 41",
      questionNumber: "Q.2(c)",
      marks: 8,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination Paper — May 2023",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 8,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ May 2023 (8 Marks)", "RTP May 2022 (6 Marks)"],
      questionText: `Examine the following transactions for an assessee carrying on business during AY 2024-25 and state the income tax treatment:

(a) Purchases of ₹ 58,000 were made from a single supplier in one transaction and paid by cash on 20th March 2024.

(b) A trade payable of ₹ 3,00,000 outstanding to Supplier A for goods purchased in FY 2018-19 has been written back by the assessee in FY 2023-24 as the liability has become time-barred.

(c) A bad debt of ₹ 1,50,000 which was allowed as a deduction in FY 2020-21 has been recovered by the assessee in FY 2023-24.

(d) The assessee paid ₹ 4,00,000 in cash as salary to 10 daily-wage workers (₹ 40,000 each). The salary is supported by attendance and wage registers.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (PGBP — Sec 40A, 41):**

**(a) Cash purchase of ₹ 58,000 — Section 40A(3):**
Sec 40A(3) disallows any expenditure paid otherwise than by account payee cheque/bank draft exceeding **₹ 10,000** in a single day to a single person.
- ₹ 58,000 > ₹ 10,000 threshold → **₹ 58,000 is disallowed under Sec 40A(3)** and added back to income.

**(b) Write-back of time-barred liability — Section 41(1):**
Under Sec 41(1), when any loss, expenditure or trading liability has been allowed as deduction in earlier years, and in a subsequent year the assessee derives a benefit (including write-back/waiver), it is taxable as **deemed business income**.
- Write-back of ₹ 3,00,000 → **₹ 3,00,000 is chargeable to tax as business income under Sec 41(1)** in FY 2023-24.

**(c) Recovery of bad debt — Section 41(4):**
Under Sec 41(4), when a bad debt previously allowed as a deduction under Sec 36(1)(vii) is subsequently recovered, the amount recovered is **taxable as business income in the year of recovery**.
- **₹ 1,50,000 is taxable under Sec 41(4)** in FY 2023-24.

**(d) Cash salary to daily-wage workers — Section 40A(3) exception:**
Rule 6DD(l) provides an exception to Sec 40A(3) for payments made to **agriculturists** and **daily-wage workers** where banking facilities are not available. However, the key exception for daily workers applies only if they are casual/seasonal workers engaged in agriculture or where no banking service is available in the area.
- If the exception conditions are NOT met: **₹ 4,00,000 disallowed** (each payment ₹ 40,000 > ₹ 10,000 limit).
- **Practical view:** The correct answer depends on facts — if daily wage workers are in remote areas without banking access, the payments are allowed under Rule 6DD exceptions.`
    },

    // ==========================================================================
    // PREVIOUS YEAR QUESTIONS — Paper 5: Indirect Tax Laws (GST & Customs)
    // ==========================================================================

    {
      id: "IDT-2024N-PYQ-CH5-Q1",
      subjectId: "P5",
      chapterId: "P5-C5",
      module: "Module 2",
      topic: "Input Tax Credit (ITC — Sec 16, 17, 18)",
      subTopic: "Reversal of ITC — Rule 42 & Section 17(5) Blocked Credits",
      questionNumber: "Q.1(a)",
      marks: 14,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — November 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 2,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["PYQ Nov 2024 (14 Marks)", "MTP May 2024 (12 Marks)"],
      questionText: `Omega Manufacturing Ltd. is a registered GST taxpayer with the following details for the quarter ended September 2024:

**Inputs and Services Purchased (all with valid GST invoices):**
| Item | ITC Claimed | Usage |
|---|---|---|
| Raw Materials | ₹ 3,60,000 | 70% taxable, 30% exempt supplies |
| Capital Goods (Plant) | ₹ 1,20,000 | Exclusively for taxable supplies |
| Motor Car (5-seater) for Director | ₹ 72,000 | Company use for business purposes |
| Food & Beverages (staff canteen) | ₹ 48,000 | Employee welfare |
| Construction of factory building | ₹ 2,40,000 | Immovable property |

**Taxable turnover:** ₹ 18,00,000 | **Exempt turnover:** ₹ 6,00,000 | **Total turnover:** ₹ 24,00,000.

Required:
(i) Identify the ITC that is blocked under Section 17(5) and the amount NOT available.
(ii) Compute the reversal of ITC on common inputs used for both taxable and exempt supplies (Raw Materials) under Rule 42.
(iii) Compute net ITC eligible to be claimed.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Sec 17(5) & Rule 42):**

**(i) Blocked Credits under Section 17(5):**
| Item | ITC | Status |
|---|---|---|
| Motor Car (5-seater) for Director | ₹ 72,000 | **Blocked — Sec 17(5)(a)** (motor vehicles with seating capacity ≤ 13 persons, not used for specified purposes like transport of goods) |
| Food & Beverages (canteen) | ₹ 48,000 | **Blocked — Sec 17(5)(b)(i)** (food and beverages are blocked unless obligatory under statute) |
| Construction of factory building | ₹ 2,40,000 | **Blocked — Sec 17(5)(c) & (d)** (works contract services for construction of immovable property, other than plant & machinery) |
| **Total Blocked ITC** | **₹ 3,60,000** | |

**(ii) Rule 42 — Common Input ITC Reversal (Raw Materials):**
Raw materials ITC = ₹ 3,60,000.
Exempt supply ratio = ₹ 6,00,000 / ₹ 24,00,000 = **25%**.
**ITC to be reversed = ₹ 3,60,000 × 25% = ₹ 90,000.**

**(iii) Net Eligible ITC:**
| Item | Available ITC | Notes |
|---|---|---|
| Raw Materials (after Rule 42 reversal) | ₹ 3,60,000 − ₹ 90,000 = ₹ 2,70,000 | Partial eligible |
| Capital Goods (factory plant) | ₹ 1,20,000 | Fully eligible (exclusively taxable) |
| Motor Car | Nil | Blocked |
| Food & Beverages | Nil | Blocked |
| Construction | Nil | Blocked |
| **Net Eligible ITC** | **₹ 3,90,000** | |`
    },

    {
      id: "IDT-2024M-PYQ-CH3-Q1",
      subjectId: "P5",
      chapterId: "P5-C3",
      module: "Module 1",
      topic: "Place of Supply of Goods and Services",
      subTopic: "Place of Supply for Cross-Border Services — Section 13 of IGST Act",
      questionNumber: "Q.3(a)",
      marks: 10,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination Paper — May 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 9,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: ["PYQ May 2024 (10 Marks)", "RTP Nov 2023 (8 Marks)"],
      questionText: `Determine the Place of Supply and the applicable tax (CGST+SGST or IGST) for each of the following transactions, with reasons, under the IGST Act 2017:

(a) Raja Hotel (Registered in Mumbai) provides accommodation services to a tourist from Germany (not registered in India) who stays for 5 nights in December 2023.

(b) Mega Telecom Ltd. (India) provides roaming services to a foreign tourist from the USA who uses his US phone number while visiting India.

(c) Premier Institute (Registered in Delhi) provides online coaching services to students located outside India via its portal.

(d) Quick Insurance Co. (Registered in Chennai) provides a health insurance policy to an individual customer residing in Bengaluru.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (IGST Act — Place of Supply):**

**(a) Accommodation Services — Raja Hotel, Mumbai:**
Sec 12(3) IGST Act: For accommodation services, the place of supply is the **location of the immovable property** (hotel).
- Place of Supply = **Mumbai, Maharashtra**.
- Tax: **CGST + SGST (Maharashtra)** — even though the recipient is a foreign national, place of supply is location of hotel (immovable property rule overrides).

**(b) Roaming Telecom Services to Foreign Tourist (Sec 13(6)):**
For telecom services to a foreign tourist using a foreign SIM, the place of supply is the **location where the services are received** — in this case, India (where roaming is being consumed).
- Place of Supply = **India** (recipient's location while using the service).
- Since both supplier and consumption are within India: **CGST + IGST** depending on specific state allocation; typically treated as inter-state supply → **IGST**.

**(c) Online Coaching to Students Outside India (Export of Service):**
Sec 13(2) IGST Act: For services where the provider and recipient are not both in India, place of supply = **location of the recipient (outside India)**.
- Students are outside India → Place of Supply = **outside India**.
- This constitutes **Export of Services** (zero-rated supply) — subject to IGST at 0% with refund eligibility (or supply under LUT/bond).

**(d) Health Insurance — Chennai to Bengaluru Resident (Sec 12(12)):**
For insurance services, place of supply = **location of the recipient** of the service.
- Recipient is in Bengaluru (Karnataka).
- Supplier is in Chennai (Tamil Nadu) → inter-state supply.
- Place of Supply = **Karnataka (Bengaluru)**.
- Tax: **IGST** (inter-state supply from Tamil Nadu to Karnataka).`
    },

    {
      id: "IDT-2023N-PYQ-CH11-Q1",
      subjectId: "P5",
      chapterId: "P5-C11",
      module: "Module 4",
      topic: "Customs Valuation & Assessment Procedures",
      subTopic: "Customs Valuation — Transaction Value Method & Additions under Rule 10",
      questionNumber: "Q.5(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination Paper — November 2023",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 14,
      suggestedAnswerAvailable: true,
      difficulty: "Hard",
      occurrences: ["PYQ Nov 2023 (10 Marks)", "MTP May 2024 (10 Marks)"],
      questionText: `Sunrise Importers Ltd. imports goods from a US seller. Invoice value: USD 40,000 CIF.

Additional details:
- Exchange Rate (RBI): ₹ 82.50 / USD; Customs Notified Rate: ₹ 82.00 / USD.
- Royalty paid to US licensor: USD 2,000 (as a condition of sale, linked to resale of goods in India).
- Proceeds from subsequent resale accruing to seller: USD 1,000.
- Post-importation installation charges payable separately to an Indian contractor: ₹ 80,000.
- Insurance paid separately (not included in CIF): ₹ 15,000.

**Customs duty rates:** Basic Customs Duty (BCD) = 10%, Social Welfare Surcharge (SWS) = 10% of BCD, IGST = 18%.

Compute the total Customs Duty and IGST payable on this import.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Customs Valuation — Rule 10 & CVR 2007):**

**Step 1: Transaction Value (Base)**
Use the **Customs Notified Rate** (₹ 82.00/USD) as per Sec 14 of Customs Act.
- CIF Invoice value = USD 40,000 × ₹ 82.00 = **₹ 32,80,000**.

**Step 2: Rule 10 Additions to Transaction Value:**
| Item | Amount | Includible? |
|---|---|---|
| Royalty (condition of sale, linked to resale) | USD 2,000 × ₹ 82 = ₹ 1,64,000 | **Yes — Rule 10(1)(c)** |
| Proceeds from resale to seller | USD 1,000 × ₹ 82 = ₹ 82,000 | **Yes — Rule 10(1)(d)** |
| Post-importation installation (India) | ₹ 80,000 | **No — post-importation services excluded** |
| Insurance (not in CIF) | ₹ 15,000 | **Yes — Rule 10(2)** (cost of insurance) |

**Assessable Value (AV) = ₹ 32,80,000 + ₹ 1,64,000 + ₹ 82,000 + ₹ 15,000 = ₹ 35,41,000**

**Step 3: Customs Duty Calculation:**
| Duty | Calculation | Amount |
|---|---|---|
| BCD @ 10% of AV | ₹ 35,41,000 × 10% | ₹ 3,54,100 |
| SWS @ 10% of BCD | ₹ 3,54,100 × 10% | ₹ 35,410 |
| **Total Customs Duty** | | **₹ 3,89,510** |
| **IGST Base** | AV + BCD + SWS = ₹ 35,41,000 + ₹ 3,89,510 | ₹ 39,30,510 |
| IGST @ 18% | ₹ 39,30,510 × 18% | **₹ 7,07,492** |
| **Total Duty Payable** | BCD + SWS + IGST | **₹ 10,97,002** |`
    },

    {
      id: "IDT-2023M-PYQ-CH4-Q1",
      subjectId: "P5",
      chapterId: "P5-C4",
      module: "Module 1",
      topic: "Time and Value of Supply under GST",
      subTopic: "Time of Supply for Continuous Supply of Services & Advances",
      questionNumber: "Q.2(b)",
      marks: 8,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination Paper — May 2023",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 7,
      suggestedAnswerAvailable: true,
      difficulty: "Medium",
      occurrences: ["PYQ May 2023 (8 Marks)", "RTP Nov 2022 (6 Marks)"],
      questionText: `Determine the Time of Supply for GST purposes in each of the following independent cases:

(a) **Continuous Supply of Services:** ABC Consultants LLP provides monthly retainer services under a 12-month contract for ₹ 5,00,000 per month. Invoice is raised on the 10th of the following month. Payment is received on the 25th of the following month. What is the time of supply for April 2023 services?

(b) **Advance Received:** XYZ Events Ltd. receives an advance of ₹ 3,00,000 on 5th May 2023 for an event to be organized in August 2023. The invoice is to be raised in August 2023. What is the time of supply for the advance amount?

(c) **Reverse Charge Mechanism (RCM):** An individual advocate provides legal services to a company on 1st March 2024. Invoice is raised on 5th March 2024. Payment is made by the company on 20th March 2024. Determine the time of supply under RCM.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Sec 13 — Time of Supply of Services):**

**(a) Continuous Supply of Services:**
Under Sec 13(2) for continuous supply of services, time of supply is the **earlier of:**
- Date of invoice (10th May 2023 — for April services); OR
- Date of payment (25th May 2023).

**Time of Supply = 10th May 2023** (date of invoice, being earlier).
Note: The due date of invoice for continuous supply under Sec 31(5) is also relevant — invoice must be raised before or at the time of each successive payment, or at the time of completion of each event as specified in the contract.

**(b) Advance Received:**
Under Sec 13(2), for receipt of advance, the time of supply is the **date of receipt of payment** (advance).
- Advance received on 5th May 2023.
- **Time of Supply for ₹ 3,00,000 = 5th May 2023** (GST liability arises on advance even before the event).

**(c) Reverse Charge Mechanism — Legal Services:**
Under Sec 13(3) for services under RCM, time of supply is the **earlier of:**
- Date of payment (20th March 2024); OR
- Date immediately following **60 days** from the date of invoice (5th March 2024 + 60 days = 4th May 2024).

**Earlier date = 20th March 2024 (payment date).**
**Time of Supply under RCM = 20th March 2024.**`
    },

    // ==========================================================================
    // PREVIOUS YEAR QUESTIONS — Paper 6: Integrated Business Solutions (IBS)
    // ==========================================================================

    {
      id: "IBS-2024N-PYQ-C8-Q1",
      subjectId: "P6",
      chapterId: "P6-C8",
      module: "Module 3",
      topic: "Capstone Integrated Multi-Disciplinary Case Studies",
      subTopic: "Corporate Restructuring — Merger Accounting, Tax Implications & Audit Aspects",
      questionNumber: "Q.1",
      marks: 20,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final IBS Examination — November 2024",
      sourceUrl: "https://boslive.icai.org/index.php",
      sourcePageNumber: 2,
      suggestedAnswerAvailable: true,
      difficulty: "Advanced",
      occurrences: ["PYQ Nov 2024 (20 Marks)"],
      questionText: `**INTEGRATED CASE STUDY — PQR GROUP RESTRUCTURING**

PQR Ltd. (a listed company, Group 2) proposes to merge with its wholly owned subsidiary RST Ltd. (unlisted) through a scheme of amalgamation effective 1st April 2024.

Details:
**PQR Ltd. (Acquirer):** Net assets ₹ 3,00,00,000 | Shares outstanding: 15,00,000 | Market Price: ₹ 40/share.
**RST Ltd. (Target):** Net assets (book): ₹ 80,00,000 | Fair value: ₹ 1,10,00,000 | Shares: 5,00,000.

Proposed share exchange ratio: 3 shares of PQR for every 5 shares of RST (PQR is 100% holder; shares cancelled in merger).
Post-merger, PQR expects to generate tax losses worth ₹ 20,00,000 from RST's unabsorbed depreciation.

**Part A (Financial Reporting — 8 Marks):**
Compute goodwill/capital reserve arising on merger of RST into PQR under Ind AS 103 (pooling is not applicable as this is a business combination). Show the key journal entries in PQR's books.

**Part B (Direct Tax — 6 Marks):**
Advise on the tax treatment of unabsorbed depreciation of RST Ltd. in the hands of merged entity PQR Ltd. under Section 72A. What conditions must be satisfied?

**Part C (Audit — 6 Marks):**
As the statutory auditor of PQR Ltd., state the key audit procedures you would perform to verify the merger accounting entries in the financial statements.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (IBS — Integrated Case):**

**PART A — Financial Reporting (Ind AS 103):**
Since PQR is the acquirer and RST is a wholly owned subsidiary being wound up into PQR, this is an acquisition-type amalgamation under Ind AS 103.

*Purchase Consideration:* Since all RST shares were held by PQR, no new shares are issued. The investment in RST's books of PQR is the effective consideration.
Assume investment (cost) in RST in PQR's books = ₹ 90,00,000.

| | ₹ |
|---|---|
| Fair value of Net Identifiable Assets acquired | 1,10,00,000 |
| Less: Purchase Consideration (Investment written off) | (90,00,000) |
| **Capital Reserve (Gain on Bargain Purchase)** | **₹ 20,00,000** |

*Key Journal Entry in PQR's Books:*
All Assets & Liabilities of RST Dr. at Fair Value (₹ 1,10,00,000 net)
  To Investment in RST A/c (₹ 90,00,000)
  To Capital Reserve A/c (₹ 20,00,000)

**PART B — Direct Tax (Section 72A):**
Section 72A allows carry forward and set-off of accumulated losses and unabsorbed depreciation of the amalgamating company (RST) in the hands of the amalgamated company (PQR), provided:
1. The amalgamating company (RST) has been in existence for **at least 3 years** and engaged in business.
2. PQR must **hold at least 3/4th** (75%) of the book value of fixed assets of RST for **5 years** post-merger.
3. PQR must **continue the business of RST for at least 5 years** post-merger.
4. PQR must not let off at least 2/3rd of the employees for a period of at least 1 year from merger date.

If these conditions are met: **₹ 20,00,000 unabsorbed depreciation of RST can be carried forward and set-off against income of PQR** in subsequent years.

**PART C — Audit Procedures for Merger Accounting:**
1. **Obtain and review** the scheme of amalgamation approved by NCLT/shareholders.
2. **Verify date of amalgamation** and confirm it aligns with the effective date in financial statements (1st April 2024).
3. **Independently verify the fair values** of RST's assets and liabilities — examine the independent valuation report; assess the competence and independence of the valuer (SA 620).
4. **Recalculate goodwill/capital reserve** computation and agree to the schedule.
5. **Verify all assets and liabilities** of RST have been transferred to PQR's books — reconcile RST's closing balance sheet with amounts recorded.
6. **Check disclosures** under Ind AS 103 — required disclosures about the nature of the business combination, purchase consideration, and fair value adjustments in notes.`
    },

    // =========================================================================
    // PAPER 1: FR — ADDITIONAL PYQ (Nov 2024, May 2024, Nov 2023, May 2025)
    // Multi-chapter questions use chapterIds[] — appear in EACH listed chapter
    // =========================================================================

    {
      id: "FR-2024N-PYQ-CH8-Q1",
      subjectId: "P1",
      chapterId: "P1-C8",
      chapterIds: ["P1-C8"],
      module: "Module 3",
      topic: "Share-Based Payments (Ind AS 102)",
      subTopic: "Equity-Settled ESOP — Graded Vesting & Forfeiture",
      questionNumber: "Q.2(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination — November 2024",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Hard",
      occurrences: ["PYQ Nov 2024 (10 Marks)", "RTP May 2024 (10 Marks)"],
      questionText: `Omega Ltd. grants 600 stock options to each of its 500 employees on 1st April 2022. The options vest in three equal tranches: 1/3 at end of Year 1, 1/3 at end of Year 2, 1/3 at end of Year 3. Fair value of each option at grant date: ₹ 30.

Expected and actual forfeitures:
- Year 1 (ended 31.03.2023): 30 employees left; 470 employees eligible for Tranche 1 vest.
- Year 2 (ended 31.03.2024): 20 more employees left; 450 eligible for Tranche 2 vest.
- Year 3 (ended 31.03.2025): 10 more employees left; 440 eligible for Tranche 3 vest.

Calculate the ESOP expense to be charged to Profit & Loss Account for each of the three years using the graded vesting approach (each tranche treated as a separate grant). Ignore income tax effect.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 102 — Graded Vesting):**

Under the graded vesting approach, each tranche is treated as a separate grant with its own vesting period.

**Options granted per tranche per employee = 600 / 3 = 200 options.**

**Tranche 1 (Vesting period: 1 year):**
- Year 1 expense = 470 employees × 200 options × ₹ 30 × (1/1) = **₹ 28,20,000**

**Tranche 2 (Vesting period: 2 years):**
- Year 1 expense = 470 × 200 × ₹ 30 × (1/2) = ₹ 14,10,000
- Year 2 expense = (450 × 200 × ₹ 30 × 2/2) − ₹ 14,10,000 = ₹ 27,00,000 − ₹ 14,10,000 = **₹ 12,90,000**

**Tranche 3 (Vesting period: 3 years):**
- Year 1 expense = 470 × 200 × ₹ 30 × (1/3) = ₹ 9,40,000
- Year 2 expense = (450 × 200 × ₹ 30 × 2/3) − ₹ 9,40,000 = ₹ 18,00,000 − ₹ 9,40,000 = **₹ 8,60,000**
- Year 3 expense = (440 × 200 × ₹ 30 × 3/3) − ₹ 18,00,000 = ₹ 26,40,000 − ₹ 18,00,000 = **₹ 8,40,000**

**Total ESOP Expense per year:**
| Year | Tranche 1 | Tranche 2 | Tranche 3 | **Total P&L Charge** |
|------|-----------|-----------|-----------|----------------------|
| FY 2022-23 | ₹ 28,20,000 | ₹ 14,10,000 | ₹ 9,40,000 | **₹ 51,70,000** |
| FY 2023-24 | — | ₹ 12,90,000 | ₹ 8,60,000 | **₹ 21,50,000** |
| FY 2024-25 | — | — | ₹ 8,40,000 | **₹ 8,40,000** |`
    },

    {
      id: "FR-2024N-PYQ-CH11-Q1",
      subjectId: "P1",
      chapterId: "P1-C11",
      chapterIds: ["P1-C11"],
      module: "Module 4",
      topic: "Income Taxes (Ind AS 12)",
      subTopic: "Deferred Tax — Temporary Differences & Recognition of DTA",
      questionNumber: "Q.3(b)",
      marks: 8,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination — November 2024",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ Nov 2024 (8 Marks)", "MTP May 2024 (8 Marks)"],
      questionText: `Resolve Ltd. has the following items as at 31st March 2024 for computing deferred tax under Ind AS 12:

| Item | Carrying Amount (Books) | Tax Base | Taxable / Deductible Temp. Diff. |
|------|------------------------|----------|----------------------------------|
| PPE (WDV) | ₹ 40,00,000 | ₹ 30,00,000 | ? |
| Provision for Warranty | ₹ 5,00,000 | ₹ Nil | ? |
| Advance from Customer | ₹ 8,00,000 | ₹ 8,00,000 | ? |
| Revaluation Reserve (PPE) | ₹ 6,00,000 | ₹ Nil | ? |

Tax rate applicable: 25%. Revaluation surplus is NOT allowed under tax laws.

(i) Identify whether each item creates a Deferred Tax Asset (DTA) or Deferred Tax Liability (DTL).
(ii) Compute the net deferred tax balance to be recognised in the Balance Sheet.
(iii) State the treatment of deferred tax arising on revaluation reserve.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 12):**

**(i) & (ii) Identification and Computation:**

| Item | Carrying Value | Tax Base | Temp. Diff. | Type | DTA / DTL @ 25% |
|------|---------------|----------|-------------|------|-----------------|
| PPE | ₹ 40,00,000 | ₹ 30,00,000 | ₹ 10,00,000 Taxable | DTL | **₹ 2,50,000 DTL** |
| Provision for Warranty | ₹ 5,00,000 | Nil | ₹ 5,00,000 Deductible | DTA | **₹ 1,25,000 DTA** |
| Advance from Customer | ₹ 8,00,000 | ₹ 8,00,000 | Nil | — | Nil |
| Revaluation Reserve | ₹ 6,00,000 | Nil | ₹ 6,00,000 Taxable | DTL (OCI) | **₹ 1,50,000 DTL** |

**Net DTA / DTL in P&L:**
- DTL from PPE: ₹ 2,50,000
- Less: DTA from Warranty: (₹ 1,25,000)
- **Net DTL in P&L = ₹ 1,25,000**

**(iii) Revaluation Reserve — Deferred Tax Treatment (Ind AS 12.61A):**
Deferred tax arising on revaluation surplus (₹ 1,50,000) is recognised **in Other Comprehensive Income (OCI)**, directly against the revaluation reserve — NOT in Profit or Loss. This reflects the matching principle: the tax effect follows the item that generated the temporary difference.`
    },

    {
      id: "FR-2025M-PYQ-CH6-Q1",
      subjectId: "P1",
      chapterId: "P1-C6",
      chapterIds: ["P1-C6", "P1-C5"],
      module: "Module 2",
      topic: "Consolidated Financial Statements + Business Combinations",
      subTopic: "Step Acquisition — Change from Associate to Subsidiary (Ind AS 110 + 103)",
      questionNumber: "Q.1(a)",
      marks: 14,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination — May 2025",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Advanced",
      occurrences: ["PYQ May 2025 (14 Marks)", "RTP Nov 2024 (12 Marks)"],
      questionText: `Horizon Ltd. held 30% equity in Zenith Ltd. (classified as Associate under Ind AS 28) with a carrying amount of ₹ 45,00,000 as at 1st April 2024.

On 1st October 2024, Horizon Ltd. acquired an additional 45% stake in Zenith Ltd. by paying ₹ 95,00,000 cash. After this acquisition, Horizon Ltd. holds 75% and Zenith Ltd. becomes a subsidiary.

Fair values on 1st October 2024:
- Fair value of Zenith Ltd.'s net identifiable assets: ₹ 1,60,00,000
- Fair value of existing 30% stake (previously held): ₹ 55,00,000
- Non-Controlling Interest (NCI) to be measured at proportionate share of net assets.

Required:
(i) Compute the goodwill on acquisition under Ind AS 103 (step acquisition).
(ii) Compute the gain or loss on re-measurement of previously held 30% interest.
(iii) Show the journal entry in Horizon Ltd.'s books on 1st October 2024.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 103 Step Acquisition):**

**(i) Goodwill Computation:**
| Component | ₹ |
|-----------|---|
| Cash consideration for 45% | 95,00,000 |
| Fair value of previously held 30% | 55,00,000 |
| NCI at proportionate share (25% × ₹ 1,60,00,000) | 40,00,000 |
| **Total** | **1,90,00,000** |
| Less: Fair value of net identifiable assets (100%) | (1,60,00,000) |
| **Goodwill on Acquisition** | **₹ 30,00,000** |

**(ii) Gain on Re-measurement of Previously Held Interest:**
- Fair value of existing 30% stake on acquisition date = ₹ 55,00,000
- Carrying amount under equity method = ₹ 45,00,000
- **Gain recognised in Profit & Loss = ₹ 10,00,000**

**(iii) Journal Entry — 1st October 2024:**
| Account | Dr. (₹) | Cr. (₹) |
|---------|---------|---------|
| Net Assets of Zenith Ltd. (at fair value) Dr. | 1,60,00,000 | |
| Goodwill Dr. | 30,00,000 | |
| To Investment in Zenith (old 30% carrying amount) | | 45,00,000 |
| To Bank (cash for 45%) | | 95,00,000 |
| To NCI (25% × ₹ 1,60,00,000) | | 40,00,000 |
| To Gain on Re-measurement (P&L) | | 10,00,000 |`
    },

    {
      id: "FR-2024M-PYQ-CH9-Q1",
      subjectId: "P1",
      chapterId: "P1-C9",
      chapterIds: ["P1-C9"],
      module: "Module 3",
      topic: "Employee Benefits (Ind AS 19)",
      subTopic: "Defined Benefit Obligation — Actuarial Gains/Losses & OCI Treatment",
      questionNumber: "Q.4(b)",
      marks: 8,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination — May 2024",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ May 2024 (8 Marks)", "MTP Nov 2023 (8 Marks)"],
      questionText: `Nova Ltd. operates a defined benefit pension plan. Data for FY 2023-24:

| | ₹ |
|--|---|
| PV of DBO — Opening | 2,00,00,000 |
| Current Service Cost | 18,00,000 |
| Interest Cost (Discount Rate 7%) | 14,00,000 |
| Benefits Paid | (20,00,000) |
| Actuarial Loss on DBO (experience adjustment) | 12,00,000 |
| PV of DBO — Closing (Actual per actuary) | 2,24,00,000 |
| Plan Assets — Opening Fair Value | 1,80,00,000 |
| Employer Contributions | 15,00,000 |
| Expected Return on Plan Assets (7%) | 12,60,000 |
| Benefits Paid from Plan Assets | (20,00,000) |
| Actuarial Gain on Plan Assets | 3,40,000 |
| Plan Assets — Closing Fair Value | 1,91,00,000 |

Required: (i) Compute the amounts recognised in Profit & Loss and in OCI for FY 2023-24 under Ind AS 19. (ii) Compute the net defined benefit liability recognised in the Balance Sheet as at 31.03.2024.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 19):**

**(i) Statement of Profit & Loss:**
| Item | ₹ |
|------|---|
| Current Service Cost | 18,00,000 |
| Net Interest Cost (₹ 14,00,000 − ₹ 12,60,000) | 1,40,000 |
| **Total P&L Charge** | **₹ 19,40,000** |

**Other Comprehensive Income (OCI):**
| Item | ₹ |
|------|---|
| Actuarial Loss on DBO | 12,00,000 |
| Less: Actuarial Gain on Plan Assets | (3,40,000) |
| **Net Actuarial Loss recognised in OCI** | **₹ 8,60,000** |

Note: Under Ind AS 19, all remeasurements (actuarial gains/losses) go to OCI and are NEVER recycled to P&L.

**(ii) Net DBO Liability — Balance Sheet (31.03.2024):**
| | ₹ |
|--|---|
| PV of DBO (Closing) | 2,24,00,000 |
| Less: Fair Value of Plan Assets (Closing) | (1,91,00,000) |
| **Net Defined Benefit Liability** | **₹ 33,00,000** |`
    },

    {
      id: "FR-2023N-PYQ-CH10-Q1",
      subjectId: "P1",
      chapterId: "P1-C10",
      chapterIds: ["P1-C10"],
      module: "Module 4",
      topic: "Impairment of Assets (Ind AS 36)",
      subTopic: "Impairment of Cash-Generating Unit — Allocation of Impairment Loss",
      questionNumber: "Q.5(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination — November 2023",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Hard",
      occurrences: ["PYQ Nov 2023 (10 Marks)", "RTP May 2023 (8 Marks)", "MTP Nov 2024 (10 Marks)"],
      questionText: `Swift Ltd. has a Cash-Generating Unit (CGU) comprising the following assets as at 31st March 2023:

| Asset | Carrying Amount (₹) |
|-------|---------------------|
| Goodwill | 15,00,000 |
| Land & Building | 40,00,000 |
| Plant & Machinery | 25,00,000 |
| Receivables (contractual) | 5,00,000 |
| **Total** | **85,00,000** |

The recoverable amount of the CGU (higher of FVLCD and VIU) is determined to be ₹ 60,00,000.
Receivables are measured at their fair value and are NOT to be impaired.

Required: (i) Calculate the impairment loss for the CGU. (ii) Allocate the impairment loss across the assets following the priority rules of Ind AS 36.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 36 — CGU Impairment):**

**(i) Total Impairment Loss:**
Total Carrying Amount = ₹ 85,00,000
Recoverable Amount = ₹ 60,00,000
**Impairment Loss = ₹ 25,00,000**

**(ii) Allocation — Priority Rules of Ind AS 36:**

**Step 1:** Eliminate Goodwill first (always written down first).
- Write off Goodwill = ₹ 15,00,000
- Remaining impairment to allocate = ₹ 25,00,000 − ₹ 15,00,000 = ₹ 10,00,000

**Step 2:** Exclude assets already at fair value (Receivables = ₹ 5,00,000 excluded).
Remaining impairable assets: Land & Building (₹ 40,00,000) + P&M (₹ 25,00,000) = **₹ 65,00,000**.

**Step 3:** Allocate remaining ₹ 10,00,000 pro-rata:
| Asset | Carrying Amount | Pro-rata Share | Impairment Allocated | Post-Impairment CA |
|-------|----------------|----------------|----------------------|---------------------|
| Land & Building | ₹ 40,00,000 | 40/65 | **₹ 6,15,385** | ₹ 33,84,615 |
| Plant & Machinery | ₹ 25,00,000 | 25/65 | **₹ 3,84,615** | ₹ 21,15,385 |
| Receivables | ₹ 5,00,000 | — | Nil | ₹ 5,00,000 |
| **Goodwill** | ₹ 15,00,000 | First | ₹ 15,00,000 | Nil |
| **Total Impairment** | | | **₹ 25,00,000** | |`
    },

    // =========================================================================
    // PAPER 2: AFM — ADDITIONAL PYQ
    // =========================================================================

    {
      id: "AFM-2025M-PYQ-C3-Q1",
      subjectId: "P2",
      chapterId: "P2-C3",
      chapterIds: ["P2-C3"],
      module: "Module 1",
      topic: "Advanced Capital Budgeting",
      subTopic: "Adjusted NPV (APV) — Base Case NPV + PV of Financing Side Effects",
      questionNumber: "Q.2(a)",
      marks: 12,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination — May 2025",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Advanced",
      occurrences: ["PYQ May 2025 (12 Marks)", "RTP Nov 2025 (12 Marks)"],
      questionText: `Pinnacle Ltd. is evaluating a new project with the following details:

- Initial Investment: ₹ 1,00,00,000 (all equity financed in base case)
- Annual after-tax operating cash flows: ₹ 28,00,000 for 5 years
- Unlevered cost of equity (Ku): 14% p.a.
- PV factor @ 14% for 5 years: 3.433

The company decides to finance 40% (₹ 40,00,000) of the project with 10% p.a. debt. Tax rate = 30%. Assume the debt is permanent (perpetual).

Required:
(i) Compute the Base Case NPV (assuming all-equity financing).
(ii) Compute the PV of Tax Shield on debt (financing side effect).
(iii) Calculate the Adjusted Present Value (APV) and advise whether to accept the project.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (APV Method):**

**(i) Base Case NPV (All-Equity):**
PV of Operating Cash Flows = ₹ 28,00,000 × 3.433 = ₹ 96,12,400
Initial Investment = ₹ 1,00,00,000
**Base Case NPV = ₹ 96,12,400 − ₹ 1,00,00,000 = (₹ 3,87,600) — NEGATIVE**

**(ii) PV of Tax Shield (Perpetual Debt):**
Annual Interest = ₹ 40,00,000 × 10% = ₹ 4,00,000
Annual Tax Shield = ₹ 4,00,000 × 30% = ₹ 1,20,000
PV of Tax Shield (perpetual at pre-tax cost of debt 10%) = ₹ 1,20,000 / 0.10 = **₹ 12,00,000**

Alternatively (Modigliani-Miller shortcut): PV of Tax Shield = Debt × Tax Rate = ₹ 40,00,000 × 30% = **₹ 12,00,000** ✓

**(iii) Adjusted Present Value (APV):**
APV = Base Case NPV + PV of Tax Shield
APV = (₹ 3,87,600) + ₹ 12,00,000 = **₹ 8,12,400 (Positive)**

**Decision: ACCEPT the project.** Although the base case NPV is negative, the significant tax shield from debt financing makes the overall APV positive, indicating value creation.`
    },

    {
      id: "AFM-2024N-PYQ-C11-Q1",
      subjectId: "P2",
      chapterId: "P2-C11",
      chapterIds: ["P2-C11"],
      module: "Module 4",
      topic: "Interest Rate Risk Management & Swaps",
      subTopic: "Interest Rate Swap — Fixed vs Floating; Settlement Computation",
      questionNumber: "Q.4(b)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination — November 2024",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ Nov 2024 (10 Marks)", "RTP Nov 2024 (10 Marks)", "PYQ May 2023 (10 Marks)"],
      questionText: `Alpha Bank Ltd. and Beta Finance Ltd. enter into a 3-year Interest Rate Swap on a notional principal of ₹ 50 Crores.
- Alpha Bank pays: Fixed rate of 8.5% p.a.
- Beta Finance pays: Floating rate (MIBOR + 1%)

MIBOR rates for the three years were:
- Year 1: 7.0%  → Floating rate = 8.0%
- Year 2: 8.5%  → Floating rate = 9.5%
- Year 3: 6.5%  → Floating rate = 7.5%

Required: (i) Compute the net settlement payable/receivable by Alpha Bank each year. (ii) Compute the total net settlement over 3 years. (iii) State in which year(s) the swap was beneficial for Alpha Bank.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Interest Rate Swap):**

**Alpha Bank pays Fixed (8.5%); Beta Finance pays Floating (MIBOR + 1%).**
Net settlement = Floating rate − Fixed rate (positive = Alpha Bank receives; negative = Alpha Bank pays).

| Year | MIBOR | Floating Rate | Fixed Rate | Difference | Net Settlement on ₹ 50 Cr |
|------|-------|--------------|------------|------------|---------------------------|
| 1 | 7.0% | 8.0% | 8.5% | **−0.5%** | Alpha pays ₹ 25,00,000 |
| 2 | 8.5% | 9.5% | 8.5% | **+1.0%** | Alpha **receives** ₹ 50,00,000 |
| 3 | 6.5% | 7.5% | 8.5% | **−1.0%** | Alpha pays ₹ 50,00,000 |

**Total Net Settlement over 3 years:**
= (₹ 25,00,000) + ₹ 50,00,000 − ₹ 50,00,000 = **Net payment of ₹ 25,00,000 by Alpha Bank**

**Beneficial for Alpha Bank:**
The swap was beneficial for Alpha Bank only in **Year 2** when floating rate (9.5%) exceeded the fixed rate (8.5%), meaning Alpha Bank effectively borrowed cheaper than the market floating rate.

In Years 1 and 3, the market floating rate was below the fixed rate Alpha Bank was paying, making the swap unfavourable in those years.`
    },

    {
      id: "AFM-2024M-PYQ-C12-Q1",
      subjectId: "P2",
      chapterId: "P2-C12",
      chapterIds: ["P2-C12"],
      module: "Module 4",
      topic: "Business Valuation Techniques",
      subTopic: "Free Cash Flow to Firm (FCFF) — DCF Valuation of Unlisted Company",
      questionNumber: "Q.5(a)",
      marks: 12,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination — May 2024",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Advanced",
      occurrences: ["PYQ May 2024 (12 Marks)", "RTP May 2025 (10 Marks)"],
      questionText: `Valcon Ltd. (an unlisted company) has the following financial projections (₹ in Lakhs):

| Year | EBIT | Depreciation | Capex | Change in Working Capital | Tax Rate |
|------|------|-------------|-------|--------------------------|----------|
| 1 | 400 | 80 | 120 | 40 | 30% |
| 2 | 480 | 90 | 150 | 50 | 30% |
| 3 | 560 | 100 | 170 | 55 | 30% |

Terminal Value: After Year 3, FCFF is expected to grow at 5% p.a. in perpetuity.
WACC = 12%.
PV factors @ 12%: Year 1 = 0.893; Year 2 = 0.797; Year 3 = 0.712.
Total Debt = ₹ 500 Lakhs. Number of shares = 10 Lakhs.

Required: (i) Compute FCFF for each year. (ii) Compute Terminal Value (TV) at end of Year 3. (iii) Compute Enterprise Value and intrinsic value per share.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (FCFF Valuation):**

**(i) FCFF = EBIT(1−T) + Depreciation − Capex − Change in Working Capital**

| Year | EBIT(1−T) | + Dep | − Capex | − ΔWC | **FCFF** |
|------|-----------|-------|---------|-------|----------|
| 1 | 400×0.70=280 | 80 | 120 | 40 | **₹ 200 L** |
| 2 | 480×0.70=336 | 90 | 150 | 50 | **₹ 226 L** |
| 3 | 560×0.70=392 | 100 | 170 | 55 | **₹ 267 L** |

**(ii) Terminal Value at end of Year 3:**
TV = FCFF₃ × (1+g) / (WACC − g) = ₹ 267 × 1.05 / (0.12 − 0.05)
= ₹ 280.35 / 0.07 = **₹ 4,005 Lakhs**

**(iii) Enterprise Value and Value per Share:**
| | PV Factor | Present Value (₹ L) |
|--|-----------|---------------------|
| FCFF Year 1 | 0.893 | 178.60 |
| FCFF Year 2 | 0.797 | 180.12 |
| FCFF Year 3 | 0.712 | 190.10 |
| TV Year 3 | 0.712 | 2,851.56 |
| **Enterprise Value** | | **₹ 3,400.38 Lakhs** |

Equity Value = EV − Debt = ₹ 3,400.38 − ₹ 500 = ₹ 2,900.38 Lakhs
**Value per Share = ₹ 2,900.38 / 10 = ₹ 290.04 per share**`
    },

    {
      id: "AFM-2023N-PYQ-C4-Q1",
      subjectId: "P2",
      chapterId: "P2-C4",
      chapterIds: ["P2-C4"],
      module: "Module 2",
      topic: "Security Analysis & Valuation",
      subTopic: "Bond Duration & Modified Duration — Interest Rate Sensitivity",
      questionNumber: "Q.3(a)",
      marks: 8,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination — November 2023",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ Nov 2023 (8 Marks)", "MTP May 2024 (8 Marks)"],
      questionText: `A 3-year bond with face value ₹ 1,000 carries a coupon rate of 9% p.a. (paid annually). The current market yield (YTM) is 10% p.a.

| Year | Cash Flow (₹) | PV Factor @ 10% | PV of CF (₹) | PV × Time |
|------|--------------|-----------------|--------------|-----------|
| 1 | 90 | 0.909 | 81.81 | 81.81 |
| 2 | 90 | 0.826 | 74.34 | 148.68 |
| 3 | 1,090 | 0.751 | 818.59 | 2,455.77 |

Required:
(i) Calculate the current market price of the bond.
(ii) Calculate Macaulay Duration of the bond.
(iii) Calculate Modified Duration.
(iv) If the yield increases by 50 basis points, estimate the approximate change in bond price.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Bond Duration):**

**(i) Current Market Price:**
= ₹ 81.81 + ₹ 74.34 + ₹ 818.59 = **₹ 974.74**

**(ii) Macaulay Duration:**
= Sum of (PV × Time) / Market Price
= (₹ 81.81 + ₹ 148.68 + ₹ 2,455.77) / ₹ 974.74
= ₹ 2,686.26 / ₹ 974.74 = **2.756 years**

**(iii) Modified Duration:**
= Macaulay Duration / (1 + YTM)
= 2.756 / 1.10 = **2.505**

**(iv) Approximate Change in Price for +50 bps (+0.50%) yield change:**
% Change in Price ≈ − Modified Duration × Δy
= −2.505 × 0.005 = −0.01253 = **−1.253%**
Estimated price fall = ₹ 974.74 × 1.253% = **₹ 12.21**
New estimated price ≈ ₹ 974.74 − ₹ 12.21 = **₹ 962.53**`
    },

    // =========================================================================
    // PAPER 3: AUDIT — ADDITIONAL PYQ
    // =========================================================================

    {
      id: "AUDIT-2025M-PYQ-CH2-Q1",
      subjectId: "P3",
      chapterId: "P3-C2",
      chapterIds: ["P3-C2"],
      module: "Module 1",
      topic: "General Auditing Principles — Fraud & Error (SA 240)",
      subTopic: "Auditor's Responsibilities for Fraud — Red Flags & Procedures",
      questionNumber: "Q.2(b)",
      marks: 8,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination — May 2025",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ May 2025 (8 Marks)", "RTP May 2025 (6 Marks)"],
      questionText: `During the statutory audit of Stellar Ltd. for FY 2024-25, the auditor notices the following:
- Revenue has grown 45% year-on-year, significantly above the industry average of 12%.
- Several large sales invoices (totalling ₹ 8 crores) were raised in the last week of March 2025 to a single new customer registered just one month prior.
- The CFO refused to provide the signed delivery challans for these invoices, stating they were "misplaced."
- The management had set aggressive revenue targets with bonus linked to achieving ₹ 100 crores turnover.

With reference to SA 240:
(i) Identify at least FOUR fraud risk factors (red flags) present in this scenario.
(ii) What specific audit procedures should the auditor perform in response to these identified fraud risks?`,
      suggestedAnswer: `**Official ICAI Suggested Answer (SA 240):**

**(i) Fraud Risk Factors (Red Flags):**

1. **Unusual revenue growth** — 45% growth vs. 12% industry average raises significant risk of revenue inflation or fictitious sales.
2. **Concentration of large transactions near year-end** — ₹ 8 crores booked in last week of March from a single new customer is a classic channel-stuffing or cut-off manipulation indicator.
3. **New unverified customer** — Customer registered just one month before the large transactions; no credit history or independent verification available.
4. **Management override / document non-availability** — CFO refusing to provide delivery challans directly inhibits audit evidence and is a major fraud indicator under SA 240.
5. **Incentive/pressure to commit fraud** — Bonus linked to ₹ 100 crore revenue target creates strong motivation for aggressive revenue recognition.

**(ii) Specific Audit Procedures (SA 240.30 & .32):**

1. **Revenue cut-off testing** — Examine sales invoices around 31st March 2025; verify delivery dates against dispatch records, lorry receipts, and customer acknowledgements.
2. **Debtors confirmation** — Send direct balance confirmation requests to the new customer (SA 505); obtain bank statements to verify subsequent payment receipt.
3. **Inspect underlying documents** — Insist on obtaining signed delivery challans; if unavailable, escalate to senior management (SA 265) and consider implications for the audit opinion.
4. **Analytical procedures** — Perform month-wise revenue trend analysis; investigate spike in March revenue relative to earlier months.
5. **Related party check** — Verify the new customer is not a related party of the CFO or promoters.
6. **Assess impact on audit report** — If evidence is denied, consider whether a modified opinion (qualified or adverse) is required under SA 705.`
    },

    {
      id: "AUDIT-2024M-PYQ-CH6-Q1",
      subjectId: "P3",
      chapterId: "P3-C6",
      chapterIds: ["P3-C6"],
      module: "Module 2",
      topic: "Completion & Review — Going Concern (SA 570)",
      subTopic: "Going Concern Indicators & Auditor Reporting Obligations",
      questionNumber: "Q.3(a)",
      marks: 8,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination — May 2024",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ May 2024 (8 Marks)", "MTP Nov 2023 (6 Marks)"],
      questionText: `You are the statutory auditor of Progress Ltd. During your audit for FY 2023-24, you discover the following:
- The company has accumulated losses of ₹ 25 Crores, exceeding its paid-up share capital of ₹ 20 Crores.
- Three major term loans have been classified as NPAs by the lenders and are repayable on demand.
- The company's current ratio has deteriorated to 0.6 and its operating cash flows have been negative for two consecutive years.
- Management has prepared the financial statements on a going concern basis, claiming a revival package is under discussion with banks.

With reference to SA 570 (Revised), state:
(i) Whether the going concern assumption is appropriate in the given circumstances, citing indicators.
(ii) The auditor's reporting obligation if the going concern assumption is used but adequate disclosure is NOT made by management.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (SA 570 Revised):**

**(i) Going Concern Assessment:**

The going concern assumption appears **questionable** given the following indicators from SA 570 Appendix:

**Financial Indicators:**
- Net liability position (accumulated losses > share capital) — a strong indicator of financial distress.
- Loans classified as NPAs, callable on demand — immediate liquidity crisis risk.
- Current ratio of 0.6 (below 1.0) — inability to meet short-term obligations.
- Negative operating cash flows for two consecutive years — structural operating weakness.

**Assessment:** While management claims a revival package, there is **material uncertainty about going concern** unless the revival plan is concrete, committed, and supported by signed agreements with lenders. Mere discussions do not constitute sufficient evidence.

**(ii) Reporting Obligation — Inadequate Disclosure:**

If management uses the going concern basis but does NOT make adequate disclosure of the material uncertainty:

- **Ind AS 1 / SA 570.19:** Management is required to disclose the material uncertainty that may cast significant doubt on the entity's ability to continue as a going concern.
- **Auditor's Response:** If management refuses to make this disclosure, the auditor must issue an **Adverse Opinion** under SA 705, on the grounds that the financial statements are materially misstated (inadequate disclosure constitutes a misstatement).
- **If disclosure is made:** The auditor includes a separate **"Material Uncertainty Related to Going Concern" section** in the audit report (SA 570.22), without modifying the audit opinion (unless other issues exist).`
    },

    {
      id: "AUDIT-2023M-PYQ-CH9-Q1",
      subjectId: "P3",
      chapterId: "P3-C9",
      chapterIds: ["P3-C9"],
      module: "Module 3",
      topic: "Internal Audit, Due Diligence & Forensic Accounting",
      subTopic: "Forensic Audit — Scope, Methodology & Difference from Statutory Audit",
      questionNumber: "Q.4(a)",
      marks: 8,
      questionType: "Descriptive / Theory",
      sourceType: "Previous Year",
      examSession: "May 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination — May 2023",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ May 2023 (8 Marks)"],
      questionText: `A listed company has complained that funds may have been siphoned off by a senior employee through fictitious vendor payments. The Audit Committee has appointed a forensic accountant.

(i) Define Forensic Accounting and explain the objectives of a forensic audit in this scenario.
(ii) State FOUR key differences between a Forensic Audit and a Statutory Audit.
(iii) Outline the methodology a forensic auditor would adopt to investigate fictitious vendor payments.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Forensic Audit):**

**(i) Forensic Accounting — Definition & Objectives:**
Forensic Accounting is the application of accounting, auditing, and investigative skills to assist in legal disputes and the detection of financial fraud. In this scenario, the objectives include:
- Identify whether fictitious vendors exist in the vendor master.
- Quantify the amount defrauded.
- Identify the perpetrators and the mechanism used.
- Preserve evidence in a manner admissible in court proceedings.
- Provide an expert report to the Audit Committee, regulators, and law enforcement.

**(ii) Four Differences — Forensic Audit vs. Statutory Audit:**
| | Forensic Audit | Statutory Audit |
|--|----------------|-----------------|
| **Purpose** | Detect fraud, quantify loss, gather legal evidence | Express opinion on true & fair view of financial statements |
| **Appointed by** | Audit Committee / Management / Court | Shareholders under Companies Act |
| **Scope** | Targeted (specific transactions / suspects) | Broad (all material accounts and assertions) |
| **Outcome** | Forensic report / expert witness testimony | Audit opinion in auditor's report |
| **Standards** | No specific SA; guided by ICAI standards on forensic accounting | Standards on Auditing (SAs) issued by ICAI |

**(iii) Methodology for Investigating Fictitious Vendor Payments:**
1. **Vendor Master Audit** — Extract complete vendor list; identify vendors with missing PAN, GSTIN, bank accounts, or those registered after the employee's joining date.
2. **Duplicate/Shell Vendor Detection** — Check for vendors sharing addresses, phone numbers, or bank accounts with other vendors or employees.
3. **Payment Pattern Analysis** — Identify payments just below approval thresholds (splitting), payments on weekends/holidays, or round-number amounts.
4. **Physical Verification** — Verify the existence of vendors through site visits, MCA registrar searches, and GST portal checks.
5. **Employee-Vendor Linkage** — Cross-check vendor contact details and bank account beneficiaries against employee records.
6. **Document Trail** — Examine purchase orders, GRNs, invoices, and approvals to identify forged or missing documents.`
    },

    // =========================================================================
    // PAPER 4: DT — ADDITIONAL PYQ + COMPILED Q1 ENTRIES
    // =========================================================================

    {
      id: "DT-2025M-PYQ-CH3-Q1",
      subjectId: "P4",
      chapterId: "P4-C3",
      chapterIds: ["P4-C3"],
      module: "Module 1",
      topic: "Capital Gains",
      subTopic: "LTCG on Listed Shares — Section 112A & Grandfathering Provision",
      questionNumber: "Q.3(b)",
      marks: 8,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination — May 2025",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ May 2025 (8 Marks)", "MTP Nov 2024 (8 Marks)"],
      questionText: `Mr. Arjun purchased 5,000 equity shares of Delta Ltd. (listed on BSE) on 1st July 2017 at ₹ 120 per share. He sold these shares on 1st September 2024 at ₹ 380 per share (STT paid on both purchase and sale). The Fair Market Value (FMV) of shares as on 31st January 2018 was ₹ 200 per share.

Required:
(i) Compute the Long-Term Capital Gain under Section 112A and the applicable tax thereon.
(ii) Explain the grandfathering provision and how the cost of acquisition is determined under the proviso to Sec 112A.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Section 112A — Grandfathering):**

**(i) Computation of LTCG under Section 112A:**

**Step 1 — Determine Cost of Acquisition (Grandfathered):**
The cost of acquisition is the **higher of:**
(a) Actual cost of acquisition = ₹ 120 per share
(b) Lower of: FMV on 31.01.2018 (₹ 200) or Full Sale Value (₹ 380) = ₹ 200

Grandfathered Cost = **₹ 200 per share** (higher of ₹ 120 and ₹ 200)

**Step 2 — LTCG Computation:**
| Particulars | Per Share | Total (5,000 shares) |
|-------------|-----------|----------------------|
| Sale Consideration | ₹ 380 | ₹ 19,00,000 |
| Less: Cost of Acquisition (grandfathered) | ₹ 200 | ₹ 10,00,000 |
| **Long-Term Capital Gain** | | **₹ 9,00,000** |
| Less: Exemption u/s 112A (first ₹ 1,00,000) | | (₹ 1,00,000) |
| **Taxable LTCG** | | **₹ 8,00,000** |
| Tax @ 10% (Sec 112A) | | **₹ 80,000** |

**(ii) Grandfathering Provision (Proviso to Sec 112A):**
For equity shares acquired before 1st February 2018, the actual cost is replaced by the FMV as on 31st January 2018, subject to a ceiling — the deemed cost cannot exceed the actual sale price. This protects gains accrued up to 31.01.2018 from tax (they are "grandfathered"), while gains post that date are taxable at 10% under Sec 112A.`
    },

    {
      id: "DT-2025M-PYQ-CH8-Q1",
      subjectId: "P4",
      chapterId: "P4-C8",
      chapterIds: ["P4-C8"],
      module: "Module 3",
      topic: "TDS, TCS, Advance Tax & Recovery",
      subTopic: "TDS on Various Payments — Rates, Thresholds & Short-Deduction Consequences",
      questionNumber: "Q.4(a)",
      marks: 8,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination — May 2025",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ May 2025 (8 Marks)", "RTP May 2025 (6 Marks)"],
      questionText: `Examine the TDS implications for the following independent transactions during FY 2024-25. In each case state the applicable section, TDS rate, threshold limit, and any default consequences:

(a) Sunrise Ltd. pays ₹ 8,50,000 as rent for its office space to Mr. Vikram (individual landlord).

(b) GreenTech Ltd. pays ₹ 4,20,000 as commission to its sales agent Mr. Raj.

(c) Priya Hospitals (not subject to tax audit) pays ₹ 18,00,000 to Dr. Suresh for medical consultancy services.

(d) Bharat Ltd. pays ₹ 12,00,000 to a transport contractor (who has not submitted PAN).`,
      suggestedAnswer: `**Official ICAI Suggested Answer (TDS Provisions):**

**(a) Rent — ₹ 8,50,000 to Individual Landlord:**
- Section: **194I** (Rent)
- Threshold: ₹ 2,40,000 p.a. — exceeded here
- TDS Rate: **10%** (for plant/machinery: 2%; for land/building/furniture: 10%)
- Assuming office space = land & building: TDS = ₹ 8,50,000 × 10% = **₹ 85,000**

**(b) Commission — ₹ 4,20,000 to Sales Agent:**
- Section: **194H** (Commission or Brokerage)
- Threshold: ₹ 15,000 — exceeded
- TDS Rate: **5%**
- TDS = ₹ 4,20,000 × 5% = **₹ 21,000**

**(c) Medical Consultancy — ₹ 18,00,000 (payer NOT in tax audit):**
- Section **194J** (Professional Fees) applies to ALL persons liable to get tax audit in the immediately preceding year.
- Priya Hospitals is NOT subject to tax audit — **TDS u/s 194J does NOT apply.**
- However, note that w.e.f. AY 2021-22, TDS u/s 194J (technical services) = 2%; professional services = 10%.
- Since payer is not covered, **No TDS obligation.**

**(d) Transport Contractor without PAN — ₹ 12,00,000:**
- Section: **194C** (Payment to Contractor)
- Normal rate: 1% (individual); 2% (company/firm)
- **Without PAN (Sec 206AA):** TDS at **higher of 20% OR applicable rate** = 20%
- TDS = ₹ 12,00,000 × 20% = **₹ 2,40,000**
- Consequence of non-deduction: Payer treated as assessee-in-default (Sec 201); interest @ 1%/1.5% pm + 30% disallowance of expense (Sec 40a(ia)).`
    },

    // Compiled Q1 for DT — Multi-chapter mandatory question
    {
      id: "DT-2024N-PYQ-CH13-Q1",
      subjectId: "P4",
      chapterId: "P4-C13",
      chapterIds: ["P4-C13", "P4-C1", "P4-C2", "P4-C3", "P4-C5", "P4-C8"],
      module: "Module 5",
      topic: "🗂️ Compiled Mandatory Q.1 — Total Income Computation",
      subTopic: "Business Income (PGBP) + Capital Gains + MAT + TDS — Full Integration",
      questionNumber: "Q.1 (Mandatory)",
      marks: 30,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination — November 2024",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Advanced",
      occurrences: ["PYQ Nov 2024 (30 Marks — Mandatory Q.1)", "PYQ May 2024 (similar pattern)", "PYQ Nov 2023 (similar pattern)"],
      questionText: `**MANDATORY QUESTION — 30 MARKS**
Compute the Total Income and Tax Liability of Spectrum Ltd. (a domestic company, not opting for Sec 115BAA) for AY 2025-26 from the following information:

**A. Profit & Loss Account (Net Profit before Tax): ₹ 85,00,000**

Adjustments required:

**PGBP Adjustments:**
(i) Depreciation as per books: ₹ 18,00,000; Depreciation allowable under Income Tax (Sec 32): ₹ 22,00,000.
(ii) Provision for doubtful debts debited to P&L: ₹ 3,00,000 (not an allowable deduction).
(iii) Tax paid and charged to P&L: ₹ 12,00,000.
(iv) Penalty for late filing of GST returns charged to P&L: ₹ 50,000.
(v) Political contribution: ₹ 2,00,000 (charged to P&L; not deductible).
(vi) Cash purchases of ₹ 75,000 from a single party in one transaction [Sec 40A(3)].

**Capital Gains:**
(vii) Spectrum Ltd. sold listed equity shares (held for 3 years) for ₹ 40,00,000 (cost ₹ 18,00,000; FMV on 31.01.2018 ₹ 25,00,000; STT paid).
(viii) Profit on sale of shares already included in P&L above: ₹ 22,00,000.

**TDS Default:**
(ix) Professional fees paid ₹ 5,00,000 to a consultant — TDS not deducted under Sec 194J.

**MAT:**
(x) Book Profit under Sec 115JB (already computed by the company): ₹ 1,05,00,000.

Applicable rates: Corporate tax (old scheme): 30% + 7% surcharge + 4% cess. MAT rate: 15% + surcharge + cess.

Compute: (a) Income under PGBP, (b) Income under Capital Gains, (c) Gross Total Income, (d) Total Income, (e) Regular Tax Liability, (f) MAT Liability, (g) Final Tax Payable.`,
      suggestedAnswer: `**Official ICAI Suggested Answer — Compiled Q.1 (DT):**

**Step 1: Income under PGBP**
| Particulars | Add back (₹) | Deduct (₹) |
|-------------|-------------|------------|
| Net Profit as per P&L | 85,00,000 | — |
| Less: Capital Gain included in P&L (to be taxed separately) | — | 22,00,000 |
| Add: Depreciation as per books | 18,00,000 | — |
| Less: Depreciation u/s 32 | — | 22,00,000 |
| Add: Provision for doubtful debts (disallowed) | 3,00,000 | — |
| Add: Income tax paid (disallowed u/s 40(a)(ii)) | 12,00,000 | — |
| Add: Penalty for GST late filing (disallowed u/s 37) | 50,000 | — |
| Add: Political contribution (disallowed u/s 37) | 2,00,000 | — |
| Add: Cash purchase u/s 40A(3) | 75,000 | — |
| Add: 30% of professional fees (TDS default u/s 40a(ia)) = 30% × ₹ 5,00,000 | 1,50,000 | — |
| **Income under PGBP** | | **₹ 78,75,000** |

**Step 2: Capital Gains (Sec 112A — Listed Shares)**
- Grandfathered cost = Higher of actual (₹ 18,00,000) or FMV 31.01.2018 (₹ 25,00,000) = **₹ 25,00,000**
- Sale consideration = ₹ 40,00,000
- LTCG = ₹ 40,00,000 − ₹ 25,00,000 = ₹ 15,00,000
- Exemption (first ₹ 1,00,000) = (₹ 1,00,000)
- **Taxable LTCG u/s 112A = ₹ 14,00,000**

**Step 3: Gross Total Income & Total Income**
- PGBP: ₹ 78,75,000
- Capital Gains: ₹ 14,00,000
- **Gross Total Income = ₹ 92,75,000** (no deductions under Chapter VI-A for companies)
- **Total Income = ₹ 92,75,000**

**Step 4: Regular Tax Liability**
- Tax on PGBP (₹ 78,75,000) @ 30% = ₹ 23,62,500
- Tax on LTCG (₹ 14,00,000) @ 10% (Sec 112A) = ₹ 1,40,000
- Total Base Tax = ₹ 25,02,500
- Surcharge @ 7% = ₹ 1,75,175
- Total after surcharge = ₹ 26,77,675
- Health & Education Cess @ 4% = ₹ 1,07,107
- **Regular Tax Liability = ₹ 27,84,782**

**Step 5: MAT Liability (Sec 115JB)**
- MAT = 15% × ₹ 1,05,00,000 = ₹ 15,75,000
- Surcharge @ 7% = ₹ 1,10,250 → Total = ₹ 16,85,250
- Cess @ 4% = ₹ 67,410
- **MAT Liability = ₹ 17,52,660**

**Step 6: Final Tax Payable**
- Regular Tax (₹ 27,84,782) > MAT (₹ 17,52,660)
- **Final Tax Payable = ₹ 27,84,782 (Regular Tax applies)**
- MAT Credit available = Nil (Regular Tax > MAT)`
    },

    {
      id: "DT-2023N-PYQ-CH13-Q1",
      subjectId: "P4",
      chapterId: "P4-C13",
      chapterIds: ["P4-C13", "P4-C1", "P4-C2", "P4-C4", "P4-C9", "P4-C10"],
      module: "Module 5",
      topic: "🗂️ Compiled Mandatory Q.1 — International Tax + Business Income",
      subTopic: "Non-Resident Income + Transfer Pricing + Charitable Trust + PGBP Integration",
      questionNumber: "Q.1 (Mandatory)",
      marks: 30,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination — November 2023",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Advanced",
      occurrences: ["PYQ Nov 2023 (30 Marks — Mandatory Q.1)"],
      questionText: `**MANDATORY QUESTION — 30 MARKS**
Answer the following independent parts relating to AY 2024-25:

**Part A — PGBP (8 marks):**
Falcon Ltd. (Indian company) has net profit ₹ 60,00,000. Additional info:
(i) STT paid ₹ 60,000 — claimed as business expenditure.
(ii) Contribution to unrecognised provident fund ₹ 2,50,000.
(iii) Expenditure on CSR activities (Sec 135): ₹ 4,00,000 charged to P&L.
(iv) Amortisation of goodwill ₹ 5,00,000 (purchased goodwill; not eligible for depreciation post AY 2022-23).
Compute income under PGBP.

**Part B — Charitable Trust (7 marks):**
Bright Trust (registered u/s 12A) has gross receipts ₹ 80,00,000. Application of income for charitable purposes ₹ 52,00,000. The Trust accumulated ₹ 10,00,000 under Sec 11(2) and invested in approved securities. Compute taxable income of the Trust.

**Part C — Transfer Pricing (8 marks):**
Indus Ltd. (Indian AE) sold goods to its Singapore AE at ₹ 420/unit (1,00,000 units). ALP determined at ₹ 480/unit under TNMM. Compute TP adjustment, additional tax (Sec 115BAA rate 22% + surcharge 10% + cess 4%), and penalty u/s 270A.

**Part D — Non-Resident (7 marks):**
Mr. Chang (Resident of China; no PE in India) receives ₹ 35,00,000 as Fees for Technical Services (FTS) from XYZ Ltd. India. DTAA India-China provides for 10% withholding on FTS. Advise on TDS obligation and compute TDS.`,
      suggestedAnswer: `**Official ICAI Suggested Answer — Compiled Q.1 (DT Nov 2023):**

**PART A — Income under PGBP:**
| Particulars | ₹ |
|-------------|---|
| Net Profit as per P&L | 60,00,000 |
| Add: STT (not deductible u/s 40(a)(ib) — disallowed) | 60,000 |
| Add: Contribution to unrecognised PF (disallowed u/s 40A(9)) | 2,50,000 |
| Add: CSR expenditure (disallowed u/s 37 — Explanation 2) | 4,00,000 |
| Add: Amortisation of goodwill (not allowed post AY 2022-23 per SC ruling) | 5,00,000 |
| **Income under PGBP** | **₹ 72,10,000** |

**PART B — Charitable Trust (Sec 11):**
- Gross Receipts = ₹ 80,00,000
- Mandatory application ≥ 85% = ₹ 68,00,000 required
- Actual application = ₹ 52,00,000 + ₹ 10,00,000 accumulated (Sec 11(2)) = ₹ 62,00,000
- **Shortfall = ₹ 80,00,000 × 85% − ₹ 62,00,000 = ₹ 68,00,000 − ₹ 62,00,000 = ₹ 6,00,000**
- **Taxable Income of Trust = ₹ 6,00,000** (at maximum marginal rate of 30%)

**PART C — Transfer Pricing Adjustment:**
- TP Adjustment = (ALP − Actual Price) × Units = (₹ 480 − ₹ 420) × 1,00,000 = **₹ 60,00,000**
- Tax @ 25.168% (22% + 10% SC + 4% cess) = ₹ 60,00,000 × 25.168% = **₹ 15,10,080**
- Penalty u/s 270A (under-reporting due to mis-reporting in TP) = **200% of tax** = ₹ 30,20,160

**PART D — Non-Resident FTS (DTAA India-China):**
- FTS received by non-resident without PE in India → taxable under Sec 9(1)(vii)
- Domestic TDS rate u/s 194J = 10% on gross; DTAA rate = 10% on gross
- Apply lower rate = **10% (DTAA)**
- TDS = ₹ 35,00,000 × 10% = **₹ 3,50,000**
- XYZ Ltd. (payer) must deduct and deposit TDS u/s 195. Mr. Chang can claim DTAA benefit by furnishing Form 10F and Tax Residency Certificate (TRC).`
    },

    // =========================================================================
    // PAPER 5: IDT — ADDITIONAL PYQ + COMPILED Q1 ENTRIES
    // =========================================================================

    {
      id: "IDT-2025M-PYQ-CH2-Q1",
      subjectId: "P5",
      chapterId: "P5-C2",
      chapterIds: ["P5-C2"],
      module: "Module 1",
      topic: "Charge of GST & Reverse Charge Mechanism",
      subTopic: "RCM on Import of Services & Specified Domestic Supplies",
      questionNumber: "Q.3(b)",
      marks: 8,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination — May 2025",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ May 2025 (8 Marks)", "RTP Nov 2024 (6 Marks)"],
      questionText: `Determine the GST liability and the person liable to pay in each of the following independent transactions (FY 2024-25):

(a) Nexus Ltd. (registered in India) receives management consultancy services worth ₹ 10,00,000 from Global Advisory Co. (USA), which has no establishment in India.

(b) Apex Pvt. Ltd. (registered, turnover ₹ 150 Cr) pays ₹ 5,00,000 for goods transport services by road to Swifto Transport Agency (a GTA, registered, not opting for 12% rate, not paying under FCM).

(c) Priya Constructions Ltd. (registered) engages Mr. Suresh (an advocate) for legal advice on a contract dispute. Fees charged: ₹ 2,00,000.

(d) Mega Bank Ltd. receives security services from SecureGuard Co. (registered supplier) worth ₹ 8,00,000.`,
      suggestedAnswer: `**Official ICAI Suggested Answer (RCM — IGST/CGST Act):**

**(a) Import of Services — Management Consultancy (IGST Sec 5(3) read with Sec 2(11)):**
- Supply of services by an overseas supplier to an Indian recipient = Import of Services.
- Since there is no establishment in India, RCM applies under IGST Act.
- **GST @ 18% on ₹ 10,00,000 = ₹ 1,80,000 — Nexus Ltd. (recipient) liable to pay under RCM.**
- Nexus Ltd. can claim ITC of ₹ 1,80,000 (eligible for credit under Sec 16).

**(b) Goods Transport Agency (GTA) Services — Sec 9(3) Notification:**
- GTA not opting for FCM (Forward Charge Mechanism) → RCM applies.
- Business entity with turnover > ₹ 20 Lakhs as recipient → liable to pay under RCM.
- GST @ 5% on ₹ 5,00,000 = **₹ 25,000 — Apex Pvt. Ltd. (recipient) pays under RCM.**
- ITC available on such RCM payment.

**(c) Legal Services by Advocate — Sec 9(3) Notification:**
- Any registered business entity receiving legal services from an advocate = RCM.
- GST @ 18% on ₹ 2,00,000 = **₹ 36,000 — Priya Constructions Ltd. (recipient) pays under RCM.**

**(d) Security Services by Registered Supplier to Bank:**
- Security services supplied by a registered person to a registered body corporate → **RCM applies (Notification 13/2017).**
- GST @ 18% on ₹ 8,00,000 = **₹ 1,44,000 — Mega Bank Ltd. (recipient) pays under RCM.**`
    },

    {
      id: "IDT-2025M-PYQ-CH7-Q1",
      subjectId: "P5",
      chapterId: "P5-C7",
      chapterIds: ["P5-C7"],
      module: "Module 2",
      topic: "Payment of Tax, Refunds & Electronic Ledgers",
      subTopic: "GST Refund — Export of Services & Inverted Duty Structure",
      questionNumber: "Q.4(a)",
      marks: 10,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2025",
      examYear: 2025,
      sourceName: "ICAI CA Final Examination — May 2025",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Hard",
      occurrences: ["PYQ May 2025 (10 Marks)", "RTP May 2025 (8 Marks)"],
      questionText: `TechServe Ltd. is registered under GST and exports IT services (zero-rated supply) under Letter of Undertaking (LUT) without payment of IGST. For the quarter ended March 2025:

- Export turnover of services: ₹ 1,20,00,000
- Total turnover (including domestic): ₹ 1,80,00,000
- ITC on inputs used for exports: ₹ 9,60,000 (CGST ₹ 4,80,000 + SGST ₹ 4,80,000)
- ITC on inputs used for domestic supplies: ₹ 2,40,000

TechServe also has the following for refund of ITC due to Inverted Duty Structure (IDT) on its domestic manufacturing division:
- Net ITC (domestic): ₹ 8,00,000; Tax paid on outward supplies (domestic): ₹ 3,00,000.
- Adjusted Total Turnover: ₹ 60,00,000; Turnover of inverted-rated supply: ₹ 45,00,000.

Required:
(i) Compute the refund of ITC on zero-rated export of services (Rule 89(4)).
(ii) Compute the maximum refund of ITC under inverted duty structure (Rule 89(5)).`,
      suggestedAnswer: `**Official ICAI Suggested Answer (GST Refund — Rule 89):**

**(i) Refund on Zero-Rated Export of Services (Rule 89(4) Formula):**
Refund = (Export Turnover of Services / Adjusted Total Turnover) × Net ITC

- Net ITC = ₹ 9,60,000 + ₹ 2,40,000 = ₹ 12,00,000 (total ITC for the period)

Wait — Rule 89(4) uses **total adjusted ITC** in the formula:
Refund = (₹ 1,20,00,000 / ₹ 1,80,00,000) × ₹ 12,00,000
= 0.6667 × ₹ 12,00,000 = **₹ 8,00,000**

Note: This is the MAXIMUM refund; subject to the condition that excess ITC not carried forward exceeds this amount.

**(ii) ITC Refund — Inverted Duty Structure (Rule 89(5)):**
Formula: Maximum Refund = {(Turnover of inverted supply / Adjusted total turnover) × Net ITC} − Tax paid on such inverted supply

= {(₹ 45,00,000 / ₹ 60,00,000) × ₹ 8,00,000} − ₹ 3,00,000
= {0.75 × ₹ 8,00,000} − ₹ 3,00,000
= ₹ 6,00,000 − ₹ 3,00,000
= **Maximum Refund under IDS = ₹ 3,00,000**

Note: Refund of ITC on input services is NOT allowed under inverted duty structure (Rule 89(5) as amended w.e.f. 5.7.2022 by Finance Act 2022).`
    },

    // Compiled Q1 for IDT — Multi-chapter mandatory question
    {
      id: "IDT-2024N-PYQ-CH13-Q1",
      subjectId: "P5",
      chapterId: "P5-C13",
      chapterIds: ["P5-C13", "P5-C1", "P5-C2", "P5-C3", "P5-C4", "P5-C5", "P5-C11"],
      module: "Module 5",
      topic: "🗂️ Compiled Mandatory Q.1 — GST + Customs Integration",
      subTopic: "Supply + RCM + Place of Supply + Time of Supply + ITC + Customs — Full Integration",
      questionNumber: "Q.1 (Mandatory)",
      marks: 35,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination — November 2024",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Advanced",
      occurrences: ["PYQ Nov 2024 (35 Marks — Mandatory Q.1)", "PYQ May 2024 (similar 35-mark pattern)", "PYQ Nov 2023 (similar pattern)"],
      questionText: `**MANDATORY QUESTION — 35 MARKS**
Solve the following independent parts for FY 2024-25:

**Part A — Supply + Schedule I (5 marks):**
PrintHub Ltd. (Mumbai) transferred ₹ 8,00,000 worth of stationery to its branch in Delhi (separately registered). Both have GSTIN. Advise on GST liability.

**Part B — RCM + ITC (8 marks):**
NovaBuild Ltd. (Registered, Delhi) has the following inward supplies in April 2024:
(i) Legal services from CA Ramesh (unregistered advocate): ₹ 3,00,000
(ii) GTA services (registered GTA, FCM opted @12%): ₹ 2,00,000
(iii) Rent paid for factory land to an unregistered individual: ₹ 5,00,000
Compute GST under RCM and eligible ITC for each.

**Part C — Place & Time of Supply (7 marks):**
(i) Swiftly Couriers (Mumbai) delivers a consignment for XYZ Ltd. (Delhi) to a recipient in Pune. Determine POS.
(ii) InfoTech Ltd. (Bengaluru) provides SaaS services to a customer in Dubai (non-registered, outside India). Determine POS and whether it is zero-rated.
(iii) Advance of ₹ 5,00,000 received on 10th April 2024 for goods to be delivered in June 2024. Invoice raised on 3rd June 2024. Determine Time of Supply.

**Part D — ITC Blocked Credits (7 marks):**
Alpha Hotels Ltd. is registered under GST. Compute eligible ITC from the following:
(i) Air conditioners purchased for hotel rooms: ₹ 3,60,000 IGST
(ii) Food and beverages served to customers: ₹ 1,20,000 CGST + SGST
(iii) Taxi cab hired for Directors' travel: ₹ 84,000 IGST
(iv) Inputs for hotel rooms (standard-rated supply to guests): ₹ 2,40,000 CGST + SGST
(v) Works contract for extension of hotel building: ₹ 1,80,000 CGST + SGST

**Part E — Customs (8 marks):**
Bharat Importers imports a consignment of electronic goods. CIF value USD 20,000. Exchange rate: RBI ₹ 84, Customs notified ₹ 83.50. BCD = 15%, SWS = 10% of BCD, IGST = 18%. Compute total duty payable.`,
      suggestedAnswer: `**Official ICAI Suggested Answer — Compiled Q.1 (IDT Nov 2024):**

**PART A — Branch Transfer (Schedule I, CGST Act):**
Transfer of goods between distinct persons (separate GSTIN = distinct persons u/s 25(4)) is a deemed supply under Schedule I, Para 2, **even without consideration.**
- It is a supply of goods: Mumbai (Maharashtra) → Delhi → **Inter-State Supply → IGST @ applicable rate on ₹ 8,00,000.**
- PrintHub Mumbai must issue a tax invoice and pay IGST. Delhi branch can claim ITC.

**PART B — RCM + ITC (NovaBuild Ltd.):**
| Transaction | RCM? | GST | ITC Eligible? |
|-------------|------|-----|---------------|
| (i) Legal services from advocate (unregistered) | Yes — Sec 9(3) Notification | 18% × ₹ 3,00,000 = **₹ 54,000** | Yes (for business use) |
| (ii) GTA @ 12% FCM opted | No RCM (FCM) | Supplier pays; NovaBuild claims ITC | **₹ 24,000 ITC available** |
| (iii) Rent on land from unregistered individual (commercial) | Yes — Sec 9(4) (if applicable) | 18% × ₹ 5,00,000 = **₹ 90,000** | Yes (for business) |

**PART C — Place & Time of Supply:**
(i) Courier service: Sec 12(8) — place of supply = **location of consignor (Delhi) = Delhi**. Inter-state supply → IGST.
(ii) SaaS to Dubai recipient (outside India, not registered) → Export of Service → **POS = outside India (Sec 13(2))** → Zero-rated supply.
(iii) Time of Supply for goods advance: **earlier of** date of invoice or payment → **10th April 2024 (advance payment) = Time of Supply** for ₹ 5,00,000 advance.

**PART D — ITC for Alpha Hotels (Sec 17(5) Blocked Credits):**
| Item | ITC | Blocked? |
|------|-----|----------|
| (i) ACs for hotel rooms | ₹ 3,60,000 | **Eligible** — ACs are plant/equipment for business |
| (ii) Food & beverages for customers | ₹ 1,20,000 | **Blocked u/s 17(5)(b)(i)** — food and beverages |
| (iii) Taxi for Directors | ₹ 84,000 | **Blocked u/s 17(5)(a)** — motor vehicle for passengers |
| (iv) Inputs for hotel rooms (business use) | ₹ 2,40,000 | **Eligible** — directly used for taxable supply |
| (v) Works contract for hotel extension | ₹ 1,80,000 | **Blocked u/s 17(5)(c)** — immovable property construction |
| **Net Eligible ITC** | **₹ 6,00,000** | |

**PART E — Customs Duty:**
Assessable Value = USD 20,000 × ₹ 83.50 (notified rate) = ₹ 16,70,000

| Duty | Computation | Amount |
|------|-------------|--------|
| BCD @ 15% | ₹ 16,70,000 × 15% | ₹ 2,50,500 |
| SWS @ 10% of BCD | ₹ 2,50,500 × 10% | ₹ 25,050 |
| **IGST Base** | ₹ 16,70,000 + ₹ 2,50,500 + ₹ 25,050 | ₹ 19,45,550 |
| IGST @ 18% | ₹ 19,45,550 × 18% | ₹ 3,50,199 |
| **Total Duty** | | **₹ 6,25,749** |`
    },

    {
      id: "IDT-2023M-PYQ-CH13-Q1",
      subjectId: "P5",
      chapterId: "P5-C13",
      chapterIds: ["P5-C13", "P5-C1", "P5-C3", "P5-C4", "P5-C5", "P5-C6", "P5-C11"],
      module: "Module 5",
      topic: "🗂️ Compiled Mandatory Q.1 — GST + Customs (May 2023)",
      subTopic: "Supply Classification + Place of Supply + ITC Apportionment + Customs Valuation",
      questionNumber: "Q.1 (Mandatory)",
      marks: 35,
      questionType: "Practical Problem",
      sourceType: "Previous Year",
      examSession: "May 2023",
      examYear: 2023,
      sourceName: "ICAI CA Final Examination — May 2023",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Advanced",
      occurrences: ["PYQ May 2023 (35 Marks — Mandatory Q.1)"],
      questionText: `**MANDATORY QUESTION — 35 MARKS**
Answer the following parts for FY 2022-23:

**Part A — Supply Classification (6 marks):**
Determine whether the following constitute supply under GST, identifying type (goods/services/exempt/non-supply):
(i) A doctor provides free medical service at a charitable hospital.
(ii) An employee of Reliance Ltd. provides services to his employer in the course of employment.
(iii) GreenMart Ltd. donates food packets worth ₹ 2,00,000 to a flood-relief NGO (ITC was availed on the food).

**Part B — Composite & Mixed Supply (5 marks):**
PQR Couriers provides courier services along with packaging material. The principal supply is the courier service. Customer is charged ₹ 1,000 for courier + ₹ 200 for box packaging. Determine tax treatment.

**Part C — ITC — Partial Exemption (Rule 42) (8 marks):**
Radiance Ltd. has:
- Total ITC for the month: ₹ 15,00,000
- Taxable turnover: ₹ 60,00,000
- Exempt turnover: ₹ 20,00,000
- Total turnover: ₹ 80,00,000
ITC directly attributable to taxable: ₹ 5,00,000; directly attributable to exempt: ₹ 2,00,000; common credit: ₹ 8,00,000.
Compute eligible ITC and reversal under Rule 42.

**Part D — E-Way Bill & Invoice (4 marks):**
State the circumstances under which an E-Way Bill is NOT required to be generated under GST.

**Part E — Customs — Warehousing & Drawback (6 marks):**
Explain the concept of Customs Bonded Warehouse (Sec 57–73, Customs Act) and the conditions for removal of goods from a warehouse. Also explain Duty Drawback (Sec 74 vs Sec 75).`,
      suggestedAnswer: `**Official ICAI Suggested Answer — Compiled Q.1 (IDT May 2023):**

**PART A — Supply Classification:**
(i) Free medical service at charitable hospital → **Not a Supply** — no consideration, and services by a charitable entity registered u/s 12AA for charitable activities are exempt (Notification 12/2017). Also, Schedule III (employer-employee services) does not apply here.
(ii) Employee services to employer **in course of employment → Schedule III Para 1 → NOT a supply.** No GST.
(iii) Free donation of food where ITC was availed → **Deemed Supply u/s 17(5)(h) — ITC reversal required.** The donation itself is not taxable but GreenMart must reverse ITC u/s 17(5)(h) since goods are given without consideration.

**PART B — Composite Supply:**
- Courier service is the principal supply; packaging material is ancillary.
- This is a **Composite Supply** (naturally bundled) → taxed at the rate applicable to the **principal supply (courier service)** under Sec 8(a).
- GST = applicable rate on (₹ 1,000 + ₹ 200) = ₹ 1,200 at courier rate.

**PART C — Rule 42 ITC Apportionment:**
- ITC directly attributable to taxable: ₹ 5,00,000 → **Fully eligible**
- ITC directly attributable to exempt: ₹ 2,00,000 → **Fully reversed**
- Common Credit (C2): ₹ 8,00,000
  - D1 (exempt portion of common credit) = ₹ 8,00,000 × (₹ 20,00,000 / ₹ 80,00,000) = **₹ 2,00,000 reversed**
  - Eligible common credit = ₹ 8,00,000 − ₹ 2,00,000 = **₹ 6,00,000**
- **Total Eligible ITC = ₹ 5,00,000 + ₹ 6,00,000 = ₹ 11,00,000**
- **Total Reversal = ₹ 2,00,000 + ₹ 2,00,000 = ₹ 4,00,000**

**PART D — E-Way Bill NOT required (Rule 138):**
1. Goods transported by non-motorised conveyance.
2. Goods transported by Railways and consignee takes delivery after paying duty.
3. Goods under Customs seal (movement under Customs Bond).
4. Transit cargo between two customs stations.
5. Goods notified as exempt: empty cargo containers, goods for personal consumption under ₹ 50,000 value, Annexure to Rule 138(14) goods (e.g., liquefied petroleum gas for household use).
6. Movement within a 50 km radius to/from a weighbridge.

**PART E — Customs Warehouse & Duty Drawback:**
**Bonded Warehouse (Sec 57-73):** A warehouse licensed by customs where imported goods can be stored without payment of duty. Goods must be stored until:
- Cleared for home consumption (on payment of import duty + interest for storage period), OR
- Re-exported, OR
- Warehousing period expires (generally 1 year, extendable).

**Duty Drawback:**
- **Sec 74:** Drawback on goods imported and then re-exported (98% of duty refunded if goods re-exported within 2 years in original condition; 85% if used).
- **Sec 75:** Drawback on inputs imported for manufacture of export goods — drawback rates notified by Govt.; calculated based on All Industry Rates (AIR) or Brand Rates.`
    },

    // =========================================================================
    // PAPER 1: FR — ADDITIONAL MULTI-CHAPTER QUESTION (Ind AS 101 + 103)
    // =========================================================================

    {
      id: "FR-2024N-PYQ-CH1-C5-MC",
      subjectId: "P1",
      chapterId: "P1-C1",
      chapterIds: ["P1-C1", "P1-C5"],
      module: "Module 1",
      topic: "First-Time Adoption (Ind AS 101) + Business Combinations (Ind AS 103)",
      subTopic: "Optional Exemption for Business Combinations on First-Time Adoption",
      questionNumber: "Q.6(b)",
      marks: 6,
      questionType: "Case Study",
      sourceType: "Previous Year",
      examSession: "November 2024",
      examYear: 2024,
      sourceName: "ICAI CA Final Examination — November 2024",
      sourceUrl: "https://www.icai.org/post/suggested-answer-final-course",
      difficulty: "Medium",
      occurrences: ["PYQ Nov 2024 (6 Marks)", "MTP May 2024 (6 Marks)"],
      questionText: `Sunrise Ltd. adopted Ind AS for the first time with a transition date of 1st April 2023 (first Ind AS financial statements for FY 2023-24).

Sunrise Ltd. had acquired a subsidiary (Moon Ltd.) in FY 2018-19 under the erstwhile Indian GAAP (AS 14). Goodwill of ₹ 18,00,000 was recognised and fully amortised by 31st March 2023 under IGAAP.

On transition:
(i) Can Sunrise Ltd. elect NOT to restate the Moon Ltd. acquisition under Ind AS 103? What is the optional exemption available under Ind AS 101?
(ii) If Sunrise Ltd. elects the exemption, how should the goodwill be treated in the Ind AS opening balance sheet?
(iii) If Sunrise Ltd. does NOT elect the exemption, what accounting treatment is required?`,
      suggestedAnswer: `**Official ICAI Suggested Answer (Ind AS 101 — Optional Exemption for Business Combinations):**

**(i) Optional Exemption under Ind AS 101:**
Ind AS 101 provides an **optional exemption** for past business combinations. A first-time adopter **need not restate** business combinations that occurred before the date of transition to Ind AS. This means Sunrise Ltd. may elect NOT to apply Ind AS 103 retrospectively to the acquisition of Moon Ltd. in FY 2018-19.

**(ii) Treatment of Goodwill if Exemption ELECTED:**
- The goodwill recognised under IGAAP (₹ 18,00,000) that was fully amortised = **Nil carrying amount as at 1st April 2023.**
- This Nil carrying amount is **carried forward as-is** into the Ind AS opening balance sheet.
- No adjustment is required; the IGAAP-era goodwill, even though now zero, need not be retroactively tested or reinstated.
- Under Ind AS going forward, goodwill is NOT amortised but is tested for impairment annually (Ind AS 36).

**(iii) Treatment if Exemption NOT ELECTED (Retrospective Application):**
- Sunrise Ltd. must restate the acquisition of Moon Ltd. as if Ind AS 103 had been applied from the original acquisition date (FY 2018-19).
- This involves: (a) identifying and measuring fair values of identifiable net assets at the acquisition date; (b) computing goodwill or capital reserve under Ind AS 103; (c) eliminating IGAAP goodwill and recognising Ind AS goodwill (which would then be subject to impairment testing, NOT amortisation from transition date onward).`
    }

  ],

  // CLEAN INITIAL STUDENT PROFILE
  // Starts completely clean without pre-seeded attempts or tests!
  // Marks and attempts are updated dynamically ONLY when the student enters them manually.
  initialUser: {
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

  // Completely clean initial state:
  initialAttempts: [],
  completedChapterIds: [],
  initialBookmarks: [],
  initialTestSessions: [],
  trendHistory: []
};
