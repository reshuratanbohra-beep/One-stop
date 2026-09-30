// SVG Native Crisp Interactive Charts Engine for CA Final Platform
// Handles clean initial state as well as live dynamic updates

window.CA_CHARTS = {

  /**
   * Render Donut Chart for Syllabus Completion
   */
  renderSyllabusDonut(containerId, completed, total) {
    const el = document.getElementById(containerId);
    if (!el) return;

    const remaining = Math.max(0, total - completed);
    const pct = total > 0 ? ((completed / total) * 100).toFixed(1) : "0.0";
    
    const size = 180;
    const strokeWidth = 18;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const completedOffset = total > 0 ? (circumference - (completed / total) * circumference) : circumference;

    el.innerHTML = `
      <div class="donut-chart-wrapper" style="position: relative; display: flex; align-items: center; justify-content: center; width: 100%; height: 200px;">
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform: rotate(-90deg); filter: drop-shadow(0 4px 6px rgba(0,0,0,0.03));">
          <!-- Background track (Remaining) -->
          <circle
            cx="${size/2}" cy="${size/2}" r="${radius}"
            fill="transparent"
            stroke="#e2e8f0"
            stroke-width="${strokeWidth}"
          />
          <!-- Completed arc -->
          <circle
            cx="${size/2}" cy="${size/2}" r="${radius}"
            fill="transparent"
            stroke="url(#donutGrad)"
            stroke-width="${strokeWidth}"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${completedOffset}"
            stroke-linecap="round"
            style="transition: stroke-dashoffset 0.8s ease-in-out;"
          />
          <defs>
            <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2563eb" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
          </defs>
        </svg>
        <div class="donut-center-label" style="position: absolute; text-align: center;">
          <div style="font-size: 26px; font-weight: 800; color: #0f172a; line-height: 1.1;">${pct}%</div>
          <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-top: 4px;">Completed</div>
          <div style="font-size: 12px; font-weight: 700; color: #1e293b; margin-top: 2px;">${completed} / ${total}</div>
        </div>
      </div>
      <div class="donut-legend" style="display: flex; justify-content: center; gap: 24px; margin-top: 10px; font-size: 12px; font-weight: 600;">
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #059669; display: inline-block;"></span>
          <span style="color: #334155;">Completed: <strong>${completed}</strong></span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #e2e8f0; display: inline-block;"></span>
          <span style="color: #64748b;">Remaining: <strong>${remaining}</strong></span>
        </div>
      </div>
    `;
  },

  /**
   * Render Accuracy Gauge / Progress Ring
   */
  renderAccuracyGauge(containerId, accuracy, hasAttempts) {
    const el = document.getElementById(containerId);
    if (!el) return;

    const val = hasAttempts ? Math.min(100, Math.max(0, accuracy || 0)) : 0;
    const size = 180;
    const strokeWidth = 18;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const arcPercent = 0.75;
    const arcLength = circumference * arcPercent;
    const fillLength = (val / 100) * arcLength;
    const dashOffset = arcLength - fillLength;

    let strokeColor = '#2563eb';
    let badgeText = 'No Evaluations Yet';
    let badgeBg = '#f1f5f9';
    let badgeColor = '#475569';

    if (hasAttempts) {
      if (val < 50) {
        strokeColor = '#e11d48';
        badgeText = 'Needs Remediation';
        badgeBg = '#fff1f2';
        badgeColor = '#be123c';
      } else if (val < 70) {
        strokeColor = '#d97706';
        badgeText = 'Moderate Accuracy';
        badgeBg = '#fffbeb';
        badgeColor = '#b45309';
      } else {
        strokeColor = '#059669';
        badgeText = 'Strong Performance';
        badgeBg = '#ecfdf5';
        badgeColor = '#047857';
      }
    }

    el.innerHTML = `
      <div class="gauge-chart-wrapper" style="position: relative; display: flex; align-items: center; justify-content: center; width: 100%; height: 200px;">
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform: rotate(135deg); filter: drop-shadow(0 4px 6px rgba(0,0,0,0.03));">
          <!-- Background track -->
          <circle
            cx="${size/2}" cy="${size/2}" r="${radius}"
            fill="transparent"
            stroke="#f1f5f9"
            stroke-width="${strokeWidth}"
            stroke-dasharray="${arcLength} ${circumference}"
            stroke-linecap="round"
          />
          <!-- Value arc -->
          <circle
            cx="${size/2}" cy="${size/2}" r="${radius}"
            fill="transparent"
            stroke="${strokeColor}"
            stroke-width="${strokeWidth}"
            stroke-dasharray="${arcLength} ${circumference}"
            stroke-dashoffset="${hasAttempts ? dashOffset : arcLength}"
            stroke-linecap="round"
            style="transition: stroke-dashoffset 0.8s ease-in-out;"
          />
        </svg>
        <div class="gauge-center-label" style="position: absolute; text-align: center; margin-top: -8px;">
          <div style="font-size: 30px; font-weight: 800; color: #0f172a; line-height: 1;">${hasAttempts ? val.toFixed(1) + '%' : '0.0%'}</div>
          <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-top: 6px;">Aggregate Accuracy</div>
          <div style="display: inline-block; margin-top: 6px; padding: 2px 10px; border-radius: 999px; background: ${badgeBg}; color: ${badgeColor}; font-size: 11px; font-weight: 700;">
            ${badgeText}
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 0 20px; font-size: 11px; color: #64748b; font-weight: 600; margin-top: 4px;">
        <span>0%</span>
        <span style="color: #e11d48;">50% Threshold</span>
        <span>100%</span>
      </div>
    `;
  },

  /**
   * Render Subject-wise Accuracy Bar Chart
   */
  renderSubjectBars(containerId, subjectMetrics) {
    const el = document.getElementById(containerId);
    if (!el) return;

    if (!subjectMetrics || subjectMetrics.length === 0) {
      el.innerHTML = `<div style="text-align: center; padding: 20px; color: #94a3b8;">No subject data available.</div>`;
      return;
    }

    let rowsHtml = '';
    subjectMetrics.forEach(sub => {
      const acc = sub.accuracy || 0;
      let barColor = '#2563eb';
      if (acc < 50 && acc > 0) barColor = '#ef4444';
      else if (acc >= 75) barColor = '#059669';
      else if (acc >= 65) barColor = '#2563eb';
      else if (acc > 0) barColor = '#d97706';
      else barColor = '#e2e8f0';

      rowsHtml += `
        <div class="subject-bar-row" style="margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="display: inline-block; padding: 2px 6px; border-radius: 4px; background: #eff6ff; color: #1e40af; font-size: 11px; font-weight: 700;">P.${sub.paperNumber}</span>
              <span style="font-size: 13px; font-weight: 700; color: #0f172a;">${sub.subjectName}</span>
            </div>
            <div style="font-size: 13px; font-weight: 800; color: ${acc > 0 ? (acc < 50 ? '#ef4444' : '#0f172a') : '#94a3b8'};">
              ${sub.hasAttempts ? acc + '%' : '<span style="font-weight: 500; font-size: 11.5px;">No attempts</span>'}
            </div>
          </div>
          <div style="position: relative; height: 10px; background: #f1f5f9; border-radius: 999px; overflow: hidden;">
            <div style="width: ${acc}%; height: 100%; background: ${barColor}; border-radius: 999px; transition: width 0.8s ease-in-out;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 11px; color: #64748b; margin-top: 4px;">
            <span>Marks: <strong>${sub.marksObtained}</strong> / ${sub.maxMarksAttempted}</span>
            <span>Chapters: <strong>${sub.completedChapters}</strong> / ${sub.totalChapters} (${sub.progressPercent}%)</span>
          </div>
        </div>
      `;
    });

    el.innerHTML = `
      <div class="subject-bar-chart" style="padding: 4px 0;">
        ${rowsHtml}
        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 16px; margin-top: 12px; padding-top: 12px; border-top: 1px dashed #e2e8f0; font-size: 11px; color: #64748b;">
          <span style="display: flex; align-items: center; gap: 5px;">
            <span style="width: 8px; height: 8px; border-radius: 2px; background: #059669;"></span> &ge; 75% High
          </span>
          <span style="display: flex; align-items: center; gap: 5px;">
            <span style="width: 8px; height: 8px; border-radius: 2px; background: #2563eb;"></span> 65-74% Good
          </span>
          <span style="display: flex; align-items: center; gap: 5px;">
            <span style="width: 8px; height: 8px; border-radius: 2px; background: #ef4444;"></span> &lt; 50% Weak
          </span>
        </div>
      </div>
    `;
  },

  /**
   * Render Performance Trend Line Graph
   */
  renderPerformanceTrend(containerId, trendData) {
    const el = document.getElementById(containerId);
    if (!el) return;

    if (!trendData || trendData.length === 0) {
      el.innerHTML = `
        <div style="text-align: center; padding: 48px 20px; background: #f8fafc; border-radius: 8px; border: 1px dashed #e2e8f0;">
          <div style="font-size: 28px; margin-bottom: 8px;">📈</div>
          <h4 style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">No Trend Data Recorded Yet</h4>
          <p style="font-size: 12.5px; color: #64748b; max-width: 380px; margin: 0 auto;">
            As you practice questions and record your self-evaluation marks, your accuracy curve over time will be graphed here automatically.
          </p>
        </div>
      `;
      return;
    }

    const width = 640;
    const height = 220;
    const padding = { top: 20, right: 30, bottom: 35, left: 45 };

    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const minY = 50;
    const maxY = 100;

    const getX = (idx) => padding.left + (idx / Math.max(1, trendData.length - 1)) * chartW;
    const getY = (val) => padding.top + chartH - ((Math.max(minY, Math.min(maxY, val)) - minY) / (maxY - minY)) * chartH;

    let pathD = '';
    let areaD = '';
    trendData.forEach((pt, i) => {
      const x = getX(i);
      const y = getY(pt.accuracy);
      if (i === 0) {
        pathD += `M ${x} ${y}`;
        areaD += `M ${x} ${padding.top + chartH} L ${x} ${y}`;
      } else {
        pathD += ` L ${x} ${y}`;
        areaD += ` L ${x} ${y}`;
      }
    });
    if (trendData.length > 0) {
      const lastX = getX(trendData.length - 1);
      areaD += ` L ${lastX} ${padding.top + chartH} Z`;
    }

    const gridYValues = [50, 60, 70, 80, 90, 100];
    let gridLinesSvg = '';
    gridYValues.forEach(val => {
      const y = getY(val);
      const isWeak = val === 50;
      gridLinesSvg += `
        <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="${isWeak ? '#fca5a5' : '#f1f5f9'}" stroke-width="${isWeak ? 1.5 : 1}" stroke-dasharray="${isWeak ? '4 3' : 'none'}" />
        <text x="${padding.left - 8}" y="${y + 4}" font-size="10" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" fill="${isWeak ? '#e11d48' : '#94a3b8'}" text-anchor="end">${val}%</text>
      `;
    });

    let pointsSvg = '';
    let xLabelsSvg = '';
    trendData.forEach((pt, i) => {
      const x = getX(i);
      const y = getY(pt.accuracy);
      pointsSvg += `
        <g class="trend-point" data-date="${pt.date}" data-acc="${pt.accuracy}%" data-marks="${pt.marks || ''}">
          <circle cx="${x}" cy="${y}" r="5" fill="#ffffff" stroke="#2563eb" stroke-width="2.5" style="cursor: pointer; transition: r 0.2s;" />
          <title>${pt.date}: ${pt.accuracy}% (${pt.marks || ''})</title>
        </g>
      `;
      xLabelsSvg += `
        <text x="${x}" y="${height - 10}" font-size="11" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" fill="#64748b" text-anchor="middle">${pt.date}</text>
      `;
    });

    el.innerHTML = `
      <div class="trend-chart-container" style="width: 100%; overflow-x: auto;">
        <svg viewBox="0 0 ${width} ${height}" style="width: 100%; height: auto; min-width: 480px; display: block;">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0" />
            </linearGradient>
          </defs>

          ${gridLinesSvg}
          <path d="${areaD}" fill="url(#areaGradient)" />
          <path d="${pathD}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          ${pointsSvg}
          ${xLabelsSvg}
        </svg>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 11px; color: #64748b; padding: 0 8px;">
          <span>Chronological Student Self-Evaluations</span>
          <span style="display: flex; align-items: center; gap: 6px;">
            <span style="display: inline-block; width: 12px; height: 3px; background: #2563eb; border-radius: 2px;"></span>
            Aggregate Accuracy %
          </span>
        </div>
      </div>
    `;
  }
};
