// Solvely v2 brand tokens — minimalist, clear, fun
// Palette: #6D8196 slate · #ADD8E6 sky · #FFFAFA snow · #000080 navy

const SOLVELY = {
  // core
  navy: '#000080',
  sky: '#ADD8E6',
  slate: '#6D8196',
  snow: '#FFFAFA',
  ink: '#0A0A2A',

  // tints
  skySoft: '#E5F1F7',
  skyDeep: '#7FB8D0',
  slateSoft: '#E2E6EB',
  slateInk: '#3C4A5A',
  snowWarm: '#F6F4F0',

  // semantic
  bg: '#FFFAFA',
  card: '#FFFFFF',
  line: '#ECEAE5',
  hairline: '#E2E6EB',
  muted: '#8A95A3',

  // gradients (used sparingly)
  skyWash: 'linear-gradient(180deg, #E5F1F7 0%, #FFFAFA 100%)',
  navyBtn: 'linear-gradient(180deg, #1B1B8F 0%, #000070 100%)',

  // shadows
  shadowSm: '0 1px 2px rgba(10,10,42,.04), 0 4px 14px rgba(10,10,42,.06)',
  shadowMd: '0 2px 8px rgba(10,10,42,.05), 0 18px 36px rgba(10,10,42,.10)',
  shadowDock: '0 8px 24px rgba(0,0,128,.12), 0 24px 60px rgba(0,0,128,.18)',
  shadowCta: '0 10px 24px rgba(0,0,128,.28)',

  // type
  ui: '"Inter", -apple-system, system-ui, sans-serif',
  display: '"Inter", -apple-system, system-ui, sans-serif',
  mono: '"Geist Mono", "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
};

// ─── Solvely logo mark — a sky-blue square with a navy "S" curl ───
function SolvelyMark({ size = 28, tone = 'navy' }) {
  const bg = tone === 'navy' ? SOLVELY.navy : SOLVELY.sky;
  const fg = tone === 'navy' ? SOLVELY.sky : SOLVELY.navy;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: 'block', flexShrink: 0 }}>
      <rect x="1" y="1" width="38" height="38" rx="11" fill={bg}/>
      <path
        d="M27.5 14c-1.6-1.6-4-2.5-6.6-2.5-4 0-7 2.1-7 5.2 0 3.1 2.6 4.5 6.6 5.3 3 .6 4.4 1.1 4.4 2.5 0 1.4-1.7 2.4-4.3 2.4-2.5 0-4.6-.9-6.2-2.4"
        stroke={fg} strokeWidth="2.8" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

// ─── Wordmark (logo + name) ──────────────────────────────────────
function SolvelyLogo({ size = 22, color }) {
  const c = color || SOLVELY.ink;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
      <SolvelyMark size={size}/>
      <span style={{
        fontFamily: SOLVELY.display, fontWeight: 700,
        fontSize: size * 0.85, letterSpacing: '-.02em', color: c,
      }}>solvely</span>
    </div>
  );
}

// ─── Icon set (single-stroke, generous) ──────────────────────────
const Icon = {
  back: (c = SOLVELY.ink, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M15 5l-7 7 7 7" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sparkle: (c = SOLVELY.navy, s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z" fill={c}/>
    </svg>
  ),
  camera: (c = '#fff', s = 30) => (
    <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
      <path d="M5 8.5h3.5l1.5-2.2h8l1.5 2.2H23a2 2 0 012 2v10.3a2 2 0 01-2 2H5a2 2 0 01-2-2V10.5a2 2 0 012-2z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="14" cy="14.5" r="4" stroke={c} strokeWidth="1.8"/>
    </svg>
  ),
  text: (c, s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M5 7h14M5 12h14M5 17h9" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  gallery: (c, s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke={c} strokeWidth="1.8"/>
      <path d="M7 15l3-3 2 2 3-4 3 4" stroke={c} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <circle cx="9" cy="9.5" r="1.3" fill={c}/>
    </svg>
  ),
  lock: (c, s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="9" rx="2.5" stroke={c} strokeWidth="1.8"/>
      <path d="M8 11V8a4 4 0 018 0v3" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  share: (c, s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 4v12M12 4l-4 4M12 4l4 4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 14v4a2 2 0 002 2h10a2 2 0 002-2v-4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  check: (c = '#fff', s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M5 12l5 5 9-11" stroke={c} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  refresh: (c, s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M18 3v4h-4M6 21v-4h4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  arrowRight: (c, s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bookmark: (c, s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 4h12v17l-6-4-6 4V4z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  plus: (c, s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke={c} strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  ),
  close: (c, s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  flame: (c, s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <path d="M12 3c1 4 5 5 5 10a5 5 0 11-10 0c0-2 1-3 2-4-.2 2 .8 3 2 3 0-3-1-5 1-9z"/>
    </svg>
  ),
};

Object.assign(window, { SOLVELY, SolvelyMark, SolvelyLogo, Icon });
