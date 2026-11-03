import React from 'react';

export const SemicircleTriangleSvg: React.FC = () => (
  <svg viewBox="0 0 500 300" className="w-full max-w-[560px] min-h-[220px] h-auto max-h-[62vh] mx-auto select-none">
    <defs>
      <linearGradient id="triFill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#eff6ff" stopOpacity="0.4" />
      </linearGradient>
    </defs>

    {/* Semicircle */}
    <path
      d="M 60 230 A 190 190 0 0 1 440 230 Z"
      fill="#f8fafc"
      stroke="#1e293b"
      strokeWidth="3"
    />

    {/* Triangle DOC (D and C on upper semicircle, O at center) */}
    {/* Center O = (250, 230), Radius = 190 */}
    {/* D at 135 deg: x = 250 - 190*0.707 = 115.7, y = 230 - 190*0.707 = 95.7 */}
    {/* C at 45 deg:  x = 250 + 190*0.707 = 384.3, y = 230 - 190*0.707 = 95.7 */}
    <polygon
      points="250,230 115.7,95.7 384.3,95.7"
      fill="url(#triFill)"
      stroke="#1d4ed8"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />

    {/* Angle arc at D (between DO and DC) */}
    <path
      d="M 155.7 95.7 A 40 40 0 0 1 144 124"
      fill="none"
      stroke="#dc2626"
      strokeWidth="2.2"
    />
    <text x="166" y="118" fontSize="18" fontWeight="bold" fill="#dc2626" fontStyle="italic">
      θ
    </text>

    {/* Angle arc at C (between CD and CO) */}
    <path
      d="M 344.3 95.7 A 40 40 0 0 0 356 124"
      fill="none"
      stroke="#dc2626"
      strokeWidth="2.2"
    />
    <text x="322" y="118" fontSize="18" fontWeight="bold" fill="#dc2626" fontStyle="italic">
      θ
    </text>

    {/* Radius label r on OB */}
    <text x="345" y="254" fontSize="18" fontWeight="bold" fill="#0f172a" fontStyle="italic">
      r
    </text>

    {/* Equal radii tick marks on OD and OC */}
    <line x1="176" y1="168" x2="188" y2="156" stroke="#1d4ed8" strokeWidth="2.2" />
    <line x1="324" y1="168" x2="312" y2="156" stroke="#1d4ed8" strokeWidth="2.2" />

    {/* Vertices */}
    <circle cx="60" cy="230" r="4.5" fill="#0f172a" />
    <circle cx="250" cy="230" r="4.5" fill="#0f172a" />
    <circle cx="440" cy="230" r="4.5" fill="#0f172a" />
    <circle cx="115.7" cy="95.7" r="4.5" fill="#1d4ed8" />
    <circle cx="384.3" cy="95.7" r="4.5" fill="#1d4ed8" />

    {/* Vertex Labels */}
    <text x="45" y="255" fontSize="18" fontWeight="bold" fill="#0f172a">A</text>
    <text x="243" y="255" fontSize="18" fontWeight="bold" fill="#0f172a">O</text>
    <text x="442" y="255" fontSize="18" fontWeight="bold" fill="#0f172a">B</text>
    <text x="92" y="88" fontSize="18" fontWeight="bold" fill="#1d4ed8">D</text>
    <text x="394" y="88" fontSize="18" fontWeight="bold" fill="#1d4ed8">C</text>
  </svg>
);

export const CollinearCitiesSvg: React.FC = () => (
  <svg viewBox="0 0 520 300" className="w-full max-w-[560px] min-h-[220px] h-auto max-h-[62vh] mx-auto select-none">
    <rect x="10" y="15" width="500" height="270" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
    <text x="260" y="48" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#0f172a">
      Jalur Lurus 5 Kota (E — D — C — B — A)
    </text>

    {/* Straight road line */}
    <line x1="55" y1="145" x2="465" y2="145" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

    {/* Segments & travel times: E(55) --1j-- D(96) --4j-- C(260) --2j-- B(342) --3j-- A(465) */}
    <path d="M 55 130 Q 75.5 108 96 130" fill="none" stroke="#64748b" strokeWidth="1.8" strokeDasharray="3 3" />
    <text x="75.5" y="106" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#475569">1 jam</text>

    <path d="M 96 130 Q 178 95 260 130" fill="none" stroke="#64748b" strokeWidth="1.8" strokeDasharray="3 3" />
    <text x="178" y="98" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#475569">4 jam</text>

    <path d="M 260 130 Q 301 105 342 130" fill="none" stroke="#64748b" strokeWidth="1.8" strokeDasharray="3 3" />
    <text x="301" y="104" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#475569">2 jam</text>

    <path d="M 342 130 Q 403.5 95 465 130" fill="none" stroke="#64748b" strokeWidth="1.8" strokeDasharray="3 3" />
    <text x="403.5" y="98" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#475569">3 jam</text>

    {/* City nodes */}
    {[
      { x: 55, label: 'E', coord: '(-70, -160)', color: '#dc2626' },
      { x: 96, label: 'D', coord: '(-40, -120)', color: '#2563eb' },
      { x: 260, label: 'C', coord: '(80, 40)', color: '#2563eb' },
      { x: 342, label: 'B', coord: '(140, 120)', color: '#2563eb' },
      { x: 465, label: 'A', coord: '(230, 240)', color: '#16a34a' },
    ].map((c) => (
      <g key={c.label}>
        <circle cx={c.x} cy={145} r="8" fill={c.color} stroke="#ffffff" strokeWidth="2.5" />
        <text x={c.x} y={178} textAnchor="middle" fontSize="17" fontWeight="bold" fill="#0f172a">
          {c.label}
        </text>
      </g>
    ))}

    {/* Endpoint coordinates badges */}
    <rect x="20" y="195" width="110" height="32" rx="6" fill="#fef2f2" stroke="#fecaca" />
    <text x="75" y="216" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#b91c1c">
      E(-70, -160)
    </text>

    <rect x="390" y="195" width="110" height="32" rx="6" fill="#f0fdf4" stroke="#bbf7d0" />
    <text x="445" y="216" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803d">
      A(230, 240)
    </text>

    <text x="260" y="260" textAnchor="middle" fontSize="13" fill="#475569">
      Total jarak |AE| = 500 km • Rasio waktu ED : DC : CB : BA = 1 : 4 : 2 : 3
    </text>
  </svg>
);

export const CarromBoardSvg: React.FC = () => (
  <svg viewBox="0 0 460 320" className="w-full max-w-[540px] min-h-[220px] h-auto max-h-[62vh] mx-auto select-none">
    <defs>
      <marker id="arrowRed" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
      </marker>
    </defs>

    {/* Outer wooden frame */}
    <rect x="85" y="15" width="290" height="290" rx="18" fill="#fde68a" stroke="#b45309" strokeWidth="8" />
    <rect x="97" y="27" width="266" height="266" rx="8" fill="#fefce8" stroke="#d97706" strokeWidth="2" />

    {/* 4 Corner Pockets */}
    <circle cx="112" cy="42" r="13" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
    <circle cx="348" cy="42" r="13" fill="#1e293b" />
    <circle cx="112" cy="278" r="13" fill="#1e293b" />
    <circle cx="348" cy="278" r="13" fill="#1e293b" />

    {/* Center circle */}
    <circle cx="230" cy="160" r="28" fill="none" stroke="#fca5a5" strokeWidth="1.8" />
    <circle cx="230" cy="160" r="6" fill="#ef4444" opacity="0.4" />

    {/* Cartesian Axes */}
    <line x1="97" y1="160" x2="363" y2="160" stroke="#2563eb" strokeWidth="2" />
    <line x1="230" y1="27" x2="230" y2="293" stroke="#2563eb" strokeWidth="2" />
    <text x="352" y="152" fontSize="14" fontWeight="bold" fill="#1d4ed8">x</text>
    <text x="238" y="42" fontSize="14" fontWeight="bold" fill="#1d4ed8">y</text>
    <text x="216" y="176" fontSize="12" fontWeight="bold" fill="#1e293b">O</text>

    {/* Coin initial position ("awal") in Quadrant I near center */}
    <circle cx="255" cy="135" r="10" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
    <text x="272" y="140" fontSize="14" fontWeight="bold" fill="#0f172a">awal</text>

    {/* Coin final position ("akhir") in top-left pocket (Quadrant II) */}
    <circle cx="112" cy="42" r="10" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="3 2" />
    <text x="130" y="47" fontSize="14" fontWeight="bold" fill="#dc2626">akhir</text>

    {/* Translation path (red dashed line) */}
    <line
      x1="246"
      y1="129"
      x2="123"
      y2="49"
      stroke="#dc2626"
      strokeWidth="2.8"
      strokeDasharray="6 4"
      markerEnd="url(#arrowRed)"
    />
  </svg>
);

export const CircleTangentSvg: React.FC = () => (
  <svg viewBox="0 0 460 320" className="w-full max-w-[540px] min-h-[220px] h-auto max-h-[62vh] mx-auto select-none">
    {/* Grid lines */}
    <g stroke="#e2e8f0" strokeWidth="1">
      {[50, 90, 130, 170, 210, 250, 290, 330, 370, 410].map((x) => (
        <line key={`vx-${x}`} x1={x} y1="15" x2={x} y2="305" />
      ))}
      {[30, 70, 110, 150, 190, 230, 270].map((y) => (
        <line key={`hy-${y}`} x1="30" y1={y} x2="430" y2={y} />
      ))}
    </g>

    {/* Axes: Center O at (210, 160), scale: 1 unit = 22px -> r=5 is 110px */}
    <line x1="30" y1="160" x2="430" y2="160" stroke="#475569" strokeWidth="2" />
    <line x1="210" y1="15" x2="210" y2="305" stroke="#475569" strokeWidth="2" />
    <text x="418" y="152" fontSize="14" fontWeight="bold" fill="#334155">x</text>
    <text x="218" y="28" fontSize="14" fontWeight="bold" fill="#334155">y</text>

    {/* Circle x^2 + y^2 = 25 (r = 5 -> 110px) */}
    <circle cx="210" cy="160" r="110" fill="#eff6ff" fillOpacity="0.55" stroke="#1d4ed8" strokeWidth="2.8" />

    {/* Tangent lines from P(7, 1) -> (210 + 154, 160 - 22) = (364, 138) */}
    {/* T1(3, 4) -> (210 + 66, 160 - 88) = (276, 72) */}
    {/* T2(4, -3) -> (210 + 88, 160 + 66) = (298, 226) */}
    <line x1="243" y1="47" x2="386" y2="154" stroke="#dc2626" strokeWidth="2.2" />
    <line x1="265" y1="270" x2="386" y2="109" stroke="#dc2626" strokeWidth="2.2" />

    {/* Dashed radii to tangent points */}
    <line x1="210" y1="160" x2="276" y2="72" stroke="#64748b" strokeWidth="1.6" strokeDasharray="4 4" />
    <line x1="210" y1="160" x2="298" y2="226" stroke="#64748b" strokeWidth="1.6" strokeDasharray="4 4" />

    {/* Points */}
    <circle cx="210" cy="160" r="4" fill="#0f172a" />
    <circle cx="364" cy="138" r="5.5" fill="#dc2626" />
    <circle cx="276" cy="72" r="5" fill="#16a34a" />
    <circle cx="298" cy="226" r="5" fill="#16a34a" />

    {/* Axis intercepts labels */}
    <text x="195" y="177" fontSize="13" fontWeight="bold" fill="#0f172a">O</text>
    <text x="324" y="177" fontSize="13" fontWeight="bold" fill="#1e293b">5</text>
    <text x="84" y="177" fontSize="13" fontWeight="bold" fill="#1e293b">-5</text>
    <text x="192" y="46" fontSize="13" fontWeight="bold" fill="#1e293b">5</text>
    <text x="186" y="285" fontSize="13" fontWeight="bold" fill="#1e293b">-5</text>

    {/* Point labels */}
    <text x="374" y="136" fontSize="14" fontWeight="bold" fill="#dc2626">(7, 1)</text>
    <text x="282" y="64" fontSize="13" fontWeight="bold" fill="#15803d">A(3, 4)</text>
    <text x="308" y="236" fontSize="13" fontWeight="bold" fill="#15803d">B(4, -3)</text>
  </svg>
);

export const AntibioticDecaySvg: React.FC = () => (
  <svg viewBox="0 0 540 310" className="w-full max-w-[580px] min-h-[220px] h-auto max-h-[62vh] mx-auto select-none">
    <rect x="5" y="5" width="530" height="300" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
    <text x="270" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">
      Grafik Eliminasi Obat Antibiotik dalam Darah (Orde Pertama)
    </text>

    {/* Plot area: x from 65 to 505 (t=0 to 22), y from 45 (C=100) to 255 (C=0) */}
    {/* Scale X: 20px per hour (t=0 -> 65, t=5 -> 165, t=10 -> 265, t=15 -> 365, t=20 -> 465) */}
    {/* Scale Y: 2.1px per mg/L (C=0 -> 255, C=20 -> 213, C=40 -> 171, C=60 -> 129, C=80 -> 87, C=100 -> 45) */}
    <g stroke="#e2e8f0" strokeWidth="1">
      {[45, 87, 129, 171, 213, 255].map((y) => (
        <line key={`gy-${y}`} x1="65" y1={y} x2="505" y2={y} />
      ))}
      {[65, 165, 265, 365, 465].map((x) => (
        <line key={`gx-${x}`} x1={x} y1="45" x2={x} y2="255" />
      ))}
    </g>

    {/* Axes */}
    <line x1="65" y1="45" x2="65" y2="255" stroke="#475569" strokeWidth="2" />
    <line x1="65" y1="255" x2="505" y2="255" stroke="#475569" strokeWidth="2" />

    {/* Y axis labels */}
    {[
      { c: 100, y: 49 },
      { c: 80, y: 91 },
      { c: 60, y: 133 },
      { c: 40, y: 175 },
      { c: 20, y: 217 },
      { c: 0, y: 259 },
    ].map((tick) => (
      <text key={tick.c} x="56" y={tick.y} textAnchor="end" fontSize="12" fontWeight="bold" fill="#475569">
        {tick.c}
      </text>
    ))}

    {/* X axis labels */}
    {[
      { t: 0, x: 65 },
      { t: 5, x: 165 },
      { t: 10, x: 265 },
      { t: 15, x: 365 },
      { t: 20, x: 465 },
    ].map((tick) => (
      <text key={tick.t} x={tick.x} y="274" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">
        {tick.t}
      </text>
    ))}

    <text x="285" y="294" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#334155">
      Waktu / t (Jam)
    </text>
    <text x="20" y="150" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155" transform="rotate(-90 20 150)">
      Konsentrasi C (mg/L)
    </text>

    {/* Dashed guides for t=4, C=50 */}
    <line x1="65" y1="150" x2="145" y2="150" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 4" />
    <line x1="145" y1="150" x2="145" y2="255" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 4" />

    {/* MIC / KHM green dashed line at C = 12.5 mg/L (y = 255 - 12.5*2.1 = 228.75) */}
    <line x1="65" y1="228.8" x2="505" y2="228.8" stroke="#15803d" strokeWidth="2" strokeDasharray="8 4 2 4" />

    {/* Exponential Decay Curve C(t) = 100 * (0.5)^(t/4) */}
    <path
      d="M 65 45 C 92 98, 118 128, 145 150 C 172 172, 198 190, 225 202.5 C 252 215, 278 223, 305 228.8 C 332 234.5, 358 239, 385 241.9 C 425 246, 465 248.4, 505 250.3"
      fill="none"
      stroke="#0369a1"
      strokeWidth="3"
    />

    {/* Key Points & Callout Boxes */}
    {[
      { x: 65, y: 45, label1: 't=0j', label2: '(100.0 mg/L)', bx: 74, by: 36 },
      { x: 145, y: 150, label1: 't=4j', label2: '(50.0 mg/L)', bx: 152, by: 122 },
      { x: 225, y: 202.5, label1: 't=8j', label2: '(25.0 mg/L)', bx: 232, by: 174 },
      { x: 305, y: 228.8, label1: 't=12j', label2: '(12.5 mg/L)', bx: 312, by: 198 },
      { x: 385, y: 241.9, label1: 't=16j', label2: '(6.2 mg/L)', bx: 392, by: 210 },
    ].map((pt) => (
      <g key={pt.label1}>
        <circle cx={pt.x} cy={pt.y} r="4.5" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
        <rect x={pt.bx} y={pt.by} width="76" height="28" rx="4" fill="#fff1f2" fillOpacity="0.92" stroke="#fda4af" strokeWidth="1" />
        <text x={pt.bx + 5} y={pt.by + 11} fontSize="9.5" fontWeight="bold" fill="#881337">
          {pt.label1}
        </text>
        <text x={pt.bx + 5} y={pt.by + 23} fontSize="9.5" fill="#9f1239">
          {pt.label2}
        </text>
      </g>
    ))}

    {/* Legend */}
    <rect x="335" y="42" width="160" height="38" rx="4" fill="#f8fafc" stroke="#cbd5e1" />
    <line x1="343" y1="54" x2="363" y2="54" stroke="#0369a1" strokeWidth="2.5" />
    <text x="368" y="57" fontSize="9.5" fontWeight="bold" fill="#0f172a">C(t) = C₀ · e^(-kt)</text>
    <line x1="343" y1="69" x2="363" y2="69" stroke="#15803d" strokeWidth="2" strokeDasharray="5 3" />
    <text x="368" y="72" fontSize="9.5" fontWeight="bold" fill="#15803d">MIC / KHM (12.5 mg/L)</text>
  </svg>
);

export const QUESTION_SVGS: Record<string, React.FC> = {
  semicircle_triangle: SemicircleTriangleSvg,
  collinear_cities: CollinearCitiesSvg,
  carrom_board: CarromBoardSvg,
  circle_tangent: CircleTangentSvg,
  antibiotic_decay: AntibioticDecaySvg,
};
