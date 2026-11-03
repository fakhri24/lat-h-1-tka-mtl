import React from 'react';

export const VisualSoal1: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 220" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      <defs>
        <marker id="arr-blue" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M1,1 L7,4 L1,7 Z" fill="#2563eb" />
        </marker>
        <marker id="arr-emerald" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M1,1 L7,4 L1,7 Z" fill="#059669" />
        </marker>
        <marker id="arr-purple" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M1,1 L7,4 L1,7 Z" fill="#7c3aed" />
        </marker>
      </defs>
      {/* 3D Coordinate Axis Preview */}
      <line x1="80" y1="170" x2="400" y2="170" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="80" y1="170" x2="80" y2="30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="80" y1="170" x2="20" y2="205" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="390" y="190" className="text-[12px] fill-slate-500 font-mono">X</text>
      <text x="65" y="30" className="text-[12px] fill-slate-500 font-mono">Z</text>
      <text x="15" y="215" className="text-[12px] fill-slate-500 font-mono">Y</text>

      {/* Vector arrows */}
      <line x1="80" y1="170" x2="190" y2="110" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arr-blue)" />
      <text x="135" y="130" className="text-[13px] font-bold fill-blue-600">u (p, 2, -1)</text>

      <line x1="80" y1="170" x2="260" y2="140" stroke="#059669" strokeWidth="3" markerEnd="url(#arr-emerald)" />
      <text x="215" y="165" className="text-[13px] font-bold fill-emerald-600">v (4, 3, q)</text>

      <line x1="80" y1="170" x2="160" y2="70" stroke="#7c3aed" strokeWidth="3" markerEnd="url(#arr-purple)" />
      <text x="100" y="70" className="text-[13px] font-bold fill-purple-600">w (-1, 1, r)</text>

      <rect x="250" y="25" width="190" height="75" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" className="dark:fill-slate-800 dark:stroke-slate-700" />
      <text x="260" y="48" className="text-[12px] font-semibold fill-slate-700 dark:fill-slate-300">Relasi Kombinasi Linear:</text>
      <text x="260" y="70" className="text-[13px] font-mono font-bold fill-indigo-600 dark:fill-indigo-400">2u - v + 3w = [-5, 4, 1]ᵀ</text>
      <text x="260" y="88" className="text-[11px] fill-slate-500">Mencari nilai p + q + r</text>
    </svg>
  </div>
);

export const VisualSoal5: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 210" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      <line x1="50" y1="170" x2="420" y2="170" stroke="#64748b" strokeWidth="2" />
      <line x1="50" y1="170" x2="50" y2="20" stroke="#64748b" strokeWidth="2" />
      <text x="420" y="190" className="text-[11px] fill-slate-500 font-mono">Bulan (x)</text>
      <text x="20" y="25" className="text-[11px] fill-slate-500 font-mono">Juta Rp</text>

      {/* Grid lines */}
      <line x1="50" y1="120" x2="420" y2="120" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="50" y1="70" x2="420" y2="70" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />

      {/* Curve A(x) */}
      <path d="M 50,150 Q 150,140 230,90 T 380,30" fill="none" stroke="#2563eb" strokeWidth="3" />
      <text x="320" y="45" className="text-[12px] font-bold fill-blue-600">A(x) Manufaktur</text>

      {/* Curve B(x) */}
      <path d="M 50,160 Q 160,155 240,120 T 380,75" fill="none" stroke="#059669" strokeWidth="2.5" strokeDasharray="4 2" />
      <text x="325" y="95" className="text-[12px] font-bold fill-emerald-600">B(x) Distribusi</text>

      {/* Point x = 3 */}
      <line x1="230" y1="170" x2="230" y2="50" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="230" cy="170" r="4" fill="#ef4444" />
      <text x="215" y="190" className="text-[12px] font-bold fill-red-600">x = 3</text>
      <rect x="235" y="55" width="130" height="30" rx="4" fill="#fee2e2" stroke="#f87171" strokeWidth="1" />
      <text x="242" y="75" className="text-[11px] font-bold fill-red-800">Total: Rp359 Juta</text>
    </svg>
  </div>
);

export const VisualSoal6: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 210" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      <line x1="40" y1="110" x2="430" y2="110" stroke="#64748b" strokeWidth="2" />
      <line x1="80" y1="190" x2="80" y2="20" stroke="#64748b" strokeWidth="2" />
      <text x="415" y="130" className="text-[11px] fill-slate-500 font-mono">x (bulan)</text>
      <text x="40" y="25" className="text-[11px] fill-slate-500 font-mono">f(x)</text>

      {/* Cubic Curve f(x) = (x-1)(x-2)(x-3) */}
      <path
        d="M 60,175 C 90,140 120,60 145,110 C 170,160 200,160 230,110 C 260,60 310,20 370,10"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="3"
      />

      {/* Roots points */}
      <circle cx="145" cy="110" r="4" fill="#ef4444" />
      <text x="140" y="130" className="text-[12px] font-bold fill-slate-700 dark:fill-slate-300">1</text>

      <circle cx="230" cy="110" r="4" fill="#ef4444" />
      <text x="225" y="130" className="text-[12px] font-bold fill-slate-700 dark:fill-slate-300">2</text>

      {/* x = 3 */}
      <circle cx="280" cy="110" r="4" fill="#ef4444" />
      <text x="275" y="130" className="text-[12px] font-bold fill-slate-700 dark:fill-slate-300">3</text>

      {/* Highlight positive region 3 < x <= 5 */}
      <rect x="280" y="30" width="120" height="78" fill="#10b981" fillOpacity="0.15" stroke="#059669" strokeWidth="1" strokeDasharray="3 3" />
      <text x="290" y="60" className="text-[11px] font-bold fill-emerald-700 dark:fill-emerald-400">Untung f(x) &gt; 0</text>
      <text x="295" y="80" className="text-[11px] font-semibold fill-emerald-800 dark:fill-emerald-300">Interval: 3 &lt; x ≤ 5</text>
    </svg>
  </div>
);

export const VisualSoal7: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 210" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      <line x1="50" y1="180" x2="420" y2="180" stroke="#64748b" strokeWidth="2" />
      <line x1="50" y1="180" x2="50" y2="20" stroke="#64748b" strokeWidth="2" />
      <text x="390" y="200" className="text-[11px] fill-slate-500 font-mono">x (ratus unit)</text>
      <text x="25" y="25" className="text-[11px] fill-slate-500 font-mono">Juta Rp</text>

      {/* Curve f(x) Pendapatan */}
      <path d="M 50,170 Q 180,150 260,110 T 400,30" fill="none" stroke="#2563eb" strokeWidth="3" />
      <text x="340" y="45" className="text-[11px] font-bold fill-blue-600">Pendapatan f(x)</text>

      {/* Curve c(x) Modal */}
      <path d="M 50,140 Q 180,135 260,110 T 380,60" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 2" />
      <text x="315" y="85" className="text-[11px] font-bold fill-red-600">Modal c(x)</text>

      {/* Intersection x = 5 */}
      <circle cx="260" cy="110" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
      <line x1="260" y1="180" x2="260" y2="110" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="240" y="200" className="text-[12px] font-bold fill-amber-600">x = 5 (500 unit)</text>
      <rect x="175" y="65" width="130" height="26" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
      <text x="183" y="82" className="text-[11px] font-bold fill-amber-900">Titik Impas (BEP)</text>
    </svg>
  </div>
);

export const VisualSoal15: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 240" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      {/* Axes */}
      <line x1="30" y1="200" x2="430" y2="200" stroke="#64748b" strokeWidth="2" />
      <line x1="120" y1="230" x2="120" y2="20" stroke="#64748b" strokeWidth="2" />
      <text x="420" y="220" className="text-[11px] fill-slate-500 font-mono">X</text>
      <text x="105" y="25" className="text-[11px] fill-slate-500 font-mono">Y</text>

      {/* Circle Center (3, 5), radius 5 (touches X-axis at (3, 0)) */}
      {/* Scale: origin at (120, 200). 1 unit = 20px. (3, 5) -> x=120+60=180, y=200-100=100. r=5 -> 100px */}
      <circle cx="180" cy="100" r="100" fill="#3b82f6" fillOpacity="0.1" stroke="#2563eb" strokeWidth="2.5" />
      <circle cx="180" cy="100" r="4" fill="#ef4444" />
      <text x="190" y="100" className="text-[12px] font-bold fill-red-600">Pusat P(3, 5)</text>

      {/* Radius line down to X-axis */}
      <line x1="180" y1="100" x2="180" y2="200" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="185" y="155" className="text-[11px] font-bold fill-red-500">r = 5</text>
      <circle cx="180" cy="200" r="4" fill="#059669" />
      <text x="160" y="220" className="text-[11px] font-semibold fill-emerald-600">(3, 0)</text>

      <rect x="290" y="30" width="155" height="55" rx="6" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" className="dark:fill-slate-800 dark:stroke-slate-700" />
      <text x="300" y="52" className="text-[11px] font-semibold fill-slate-700 dark:fill-slate-300">Bentuk Baku:</text>
      <text x="300" y="72" className="text-[11px] font-mono fill-blue-700 dark:fill-blue-400">(x-3)² + (y-5)² = 25</text>
    </svg>
  </div>
);

export const VisualSoal16: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 220" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      {/* Semicircle */}
      <path d="M 60,180 A 150,150 0 0,1 360,180 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" className="dark:fill-slate-800/80" />
      <circle cx="210" cy="180" r="4" fill="#0369a1" />
      <text x="205" y="200" className="text-[12px] font-bold fill-sky-800 dark:fill-sky-300">O</text>
      <text x="45" y="195" className="text-[12px] font-bold fill-sky-800 dark:fill-sky-300">A</text>
      <text x="365" y="195" className="text-[12px] font-bold fill-sky-800 dark:fill-sky-300">B</text>

      {/* Triangle DOC */}
      {/* D around 135 deg: 210 - 150*cos(45) = 210 - 106 = 104, 180 - 106 = 74 */}
      {/* C around 60 deg: 210 + 150*cos(60) = 210 + 75 = 285, 180 - 150*sin(60) = 180 - 130 = 50 */}
      <polygon points="210,180 120,85 295,65" fill="#fef08a" fillOpacity="0.4" stroke="#ca8a04" strokeWidth="2" />
      <circle cx="120" cy="85" r="4" fill="#ca8a04" />
      <circle cx="295" cy="65" r="4" fill="#ca8a04" />
      <text x="105" y="75" className="text-[12px] font-bold fill-amber-700 dark:fill-amber-300">D</text>
      <text x="305" y="60" className="text-[12px] font-bold fill-amber-700 dark:fill-amber-300">C</text>

      {/* Angle theta */}
      <path d="M 185,155 A 35,35 0 0,1 230,150" fill="none" stroke="#dc2626" strokeWidth="2" />
      <text x="202" y="145" className="text-[13px] font-bold fill-red-600">θ</text>
      <text x="150" y="125" className="text-[11px] font-bold fill-sky-600">r</text>
      <text x="260" y="115" className="text-[11px] font-bold fill-sky-600">r</text>
    </svg>
  </div>
);

export const VisualSoal19: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 210" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      <line x1="40" y1="170" x2="430" y2="170" stroke="#64748b" strokeWidth="2" />
      <line x1="50" y1="190" x2="50" y2="20" stroke="#64748b" strokeWidth="2" />
      <text x="420" y="190" className="text-[11px] fill-slate-500 font-mono">Waktu t (Jam)</text>
      <text x="20" y="25" className="text-[11px] fill-slate-500 font-mono">°C</text>

      {/* Mean temp line y = 26 C */}
      <line x1="50" y1="95" x2="430" y2="95" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
      <text x="15" y="98" className="text-[11px] fill-slate-400">26°C</text>

      {/* Sine curve */}
      <path
        d="M 50,140 Q 115,160 170,140 T 260,50 T 350,140 T 430,70"
        fill="none"
        stroke="#ea580c"
        strokeWidth="3"
      />

      {/* Max temp point at t = 14 */}
      <circle cx="260" cy="50" r="5" fill="#ef4444" />
      <text x="240" y="40" className="text-[11px] font-bold fill-red-600">Maks: 32°C (14.00)</text>
      <line x1="260" y1="170" x2="260" y2="50" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
      <text x="250" y="190" className="text-[11px] font-semibold fill-slate-600">14</text>

      {/* Min temp point at 20 C */}
      <circle cx="140" cy="140" r="5" fill="#2563eb" />
      <text x="100" y="160" className="text-[11px] font-bold fill-blue-600">Min: 20°C</text>
    </svg>
  </div>
);

export const VisualSoal20: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 200" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      {/* Straight line connecting 5 cities */}
      <line x1="40" y1="100" x2="420" y2="100" stroke="#475569" strokeWidth="4" strokeLinecap="round" />

      {/* Cities E, D, C, B, A */}
      {/* Segment proportions: E-D (1h, 10%), D-C (4h, 40%), C-B (2h, 20%), B-A (3h, 30%) */}
      {/* E at 40, D at 78, C at 230, B at 306, A at 420 */}

      {/* City E */}
      <circle cx="40" cy="100" r="7" fill="#dc2626" />
      <text x="33" y="80" className="text-[13px] font-bold fill-red-600">E</text>
      <text x="10" y="125" className="text-[10px] font-mono fill-slate-500">(-70, -160)</text>

      {/* City D */}
      <circle cx="78" cy="100" r="5" fill="#d97706" />
      <text x="73" y="80" className="text-[12px] font-bold fill-amber-600">D</text>
      <text x="45" y="145" className="text-[10px] font-mono fill-slate-500">(-40, -120)</text>

      {/* City C */}
      <circle cx="230" cy="100" r="6" fill="#059669" />
      <text x="225" y="80" className="text-[13px] font-bold fill-emerald-600">C</text>
      <text x="210" y="125" className="text-[10px] font-mono fill-slate-500">(80, 40)</text>

      {/* City B */}
      <circle cx="306" cy="100" r="5" fill="#2563eb" />
      <text x="301" y="80" className="text-[12px] font-bold fill-blue-600">B</text>
      <text x="280" y="145" className="text-[10px] font-mono fill-slate-500">(140, 120)</text>

      {/* City A */}
      <circle cx="420" cy="100" r="7" fill="#7c3aed" />
      <text x="415" y="80" className="text-[13px] font-bold fill-purple-600">A</text>
      <text x="370" y="125" className="text-[10px] font-mono fill-slate-500">(230, 240)</text>

      {/* Travel times */}
      <text x="50" y="60" className="text-[10px] font-semibold fill-slate-600">1 jam</text>
      <text x="140" y="60" className="text-[10px] font-semibold fill-slate-600">4 jam</text>
      <text x="255" y="60" className="text-[10px] font-semibold fill-slate-600">2 jam</text>
      <text x="350" y="60" className="text-[10px] font-semibold fill-slate-600">3 jam</text>
    </svg>
  </div>
);

export const VisualSoal22: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 220" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      {/* Carrom board square */}
      <rect x="130" y="10" width="200" height="200" rx="8" fill="#fef3c7" stroke="#b45309" strokeWidth="4" />
      <rect x="140" y="20" width="180" height="180" fill="#fdf8ed" stroke="#d97706" strokeWidth="1" />

      {/* Axis in center of board */}
      <line x1="140" y1="110" x2="320" y2="110" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="230" y1="20" x2="230" y2="200" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="230" cy="110" r="15" fill="none" stroke="#d97706" strokeWidth="1" />
      <text x="235" y="125" className="text-[10px] fill-slate-400 font-mono">(0,0)</text>

      {/* Initial coin position P(-4, 3) -> (-50, -40) from center */}
      <circle cx="180" cy="70" r="10" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
      <text x="145" y="65" className="text-[11px] font-bold fill-red-600">P(-4, 3)</text>
      <text x="140" y="80" className="text-[9px] fill-red-500">Posisi Awal</text>

      {/* Arrow */}
      <line x1="180" y1="70" x2="280" y2="150" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />

      {/* Final coin position P'(4, -3) -> (+50, +40) from center */}
      <circle cx="280" cy="150" r="10" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
      <text x="270" y="175" className="text-[11px] font-bold fill-emerald-600">P'(4, -3)</text>
      <text x="270" y="190" className="text-[9px] fill-emerald-500">Posisi Akhir</text>
    </svg>
  </div>
);

export const VisualSoal24: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 220" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      {/* Origin (0,0) at (170, 110). 1 unit = 16px. r = 5 -> 80px */}
      <line x1="40" y1="110" x2="420" y2="110" stroke="#94a3b8" strokeWidth="1" />
      <line x1="170" y1="20" x2="170" y2="200" stroke="#94a3b8" strokeWidth="1" />

      {/* Circle x^2 + y^2 = 25 */}
      <circle cx="170" cy="110" r="80" fill="#dbeafe" fillOpacity="0.2" stroke="#2563eb" strokeWidth="2" />
      <circle cx="170" cy="110" r="3" fill="#2563eb" />
      <text x="155" y="125" className="text-[10px] fill-slate-500">O(0,0)</text>

      {/* Exterior point (7, 1) -> x = 170 + 7*16 = 282, y = 110 - 1*16 = 94 */}
      <circle cx="282" cy="94" r="5" fill="#dc2626" />
      <text x="290" y="95" className="text-[11px] font-bold fill-red-600">P(7, 1)</text>

      {/* Tangent point 1: (3, 4) -> x = 170 + 3*16 = 218, y = 110 - 4*16 = 46 */}
      <circle cx="218" cy="46" r="4" fill="#059669" />
      <text x="180" y="40" className="text-[11px] font-bold fill-emerald-600">(3, 4)</text>
      <line x1="282" y1="94" x2="218" y2="46" stroke="#059669" strokeWidth="2" />

      {/* Tangent point 2: (4, -3) -> x = 170 + 4*16 = 234, y = 110 + 3*16 = 158 */}
      <circle cx="234" cy="158" r="4" fill="#059669" />
      <text x="240" y="170" className="text-[11px] font-bold fill-emerald-600">(4, -3)</text>
      <line x1="282" y1="94" x2="234" y2="158" stroke="#059669" strokeWidth="2" />
    </svg>
  </div>
);

export const VisualSoal30: React.FC = () => (
  <div className="flex justify-center my-4">
    <svg viewBox="0 0 460 230" className="w-full max-w-[460px] h-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-3 shadow-inner border border-slate-200 dark:border-slate-800">
      {/* Axes */}
      <line x1="60" y1="180" x2="420" y2="180" stroke="#64748b" strokeWidth="2" />
      <line x1="60" y1="180" x2="60" y2="20" stroke="#64748b" strokeWidth="2" />
      <text x="380" y="200" className="text-[11px] fill-slate-500 font-mono">Waktu t (Jam)</text>
      <text x="15" y="25" className="text-[11px] fill-slate-500 font-mono">C (mg/L)</text>

      {/* Y ticks: 100, 50, 25, 12.5 */}
      {/* Scale: y=180 is 0. y=40 is 100. 1 mg/L = 1.4 px */}
      <text x="25" y="45" className="text-[10px] font-bold fill-slate-600">100</text>
      <line x1="55" y1="40" x2="60" y2="40" stroke="#64748b" strokeWidth="2" />

      <text x="32" y="115" className="text-[10px] font-bold fill-slate-600">50</text>
      <line x1="55" y1="110" x2="420" y2="110" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />

      <text x="32" y="150" className="text-[10px] font-bold fill-slate-600">20</text>
      <line x1="55" y1="152" x2="420" y2="152" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />

      {/* MIC line 12.5 mg/L -> y = 180 - 17.5 = 162.5 */}
      <line x1="60" y1="162" x2="420" y2="162" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="280" y="158" className="text-[10px] font-bold fill-red-600">KHM / MIC (12.5 mg/L)</text>

      {/* First Order Elimination Curve C(t) = 100 * 2^(-t/5) */}
      {/* t=0: (60, 40) */}
      {/* t=5: (140, 110) */}
      {/* t=10: (220, 145) */}
      {/* t=15: (300, 162) */}
      {/* t=20: (380, 171) */}
      <path
        d="M 60,40 Q 110,95 140,110 T 220,145 T 300,162 T 380,171"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
      />

      {/* Points */}
      <circle cx="60" cy="40" r="4" fill="#2563eb" />
      <circle cx="140" cy="110" r="4" fill="#2563eb" />
      <text x="130" y="100" className="text-[10px] font-semibold fill-blue-700">(5 jam, 50)</text>

      {/* Highlight interval 20 to 50 mg/L */}
      <rect x="140" y="110" width="105" height="42" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
      <text x="150" y="135" className="text-[10px] font-bold fill-emerald-700 dark:fill-emerald-400">Rentang 20 - 50 mg/L</text>
    </svg>
  </div>
);
