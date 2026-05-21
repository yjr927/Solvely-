// Solvely v2 — minimalist, clear, fun
// 4 screens: Scan · Confirm · Analyzing · Result
// Style: snow white surfaces, navy ink, sky-blue accents, friendly spot illos.

const S = SOLVELY;

// ─────────────────────────────────────────────────────────────
// Shared chrome
// ─────────────────────────────────────────────────────────────
function PageHeader({ leading, trailing, title }) {
  return (
    <div style={{
      position: 'absolute', top: 56, left: 0, right: 0, zIndex: 10,
      padding: '0 20px', display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <div style={{ width: 44, display: 'flex' }}>{leading}</div>
      <div style={{
        flex: 1, textAlign: 'center', fontFamily: S.display,
        fontSize: 16, fontWeight: 600, color: S.ink, letterSpacing: '-.01em',
      }}>{title}</div>
      <div style={{ width: 44, display: 'flex', justifyContent: 'flex-end' }}>{trailing}</div>
    </div>
  );
}

function IconBtn({ children, onClick, style }) {
  return (
    <button onClick={onClick} style={{
      width: 40, height: 40, borderRadius: 14, border: 'none', cursor: 'pointer',
      background: '#fff', boxShadow: 'inset 0 0 0 1px #ECEAE5',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0,
      ...(style || {}),
    }}>{children}</button>
  );
}

function StreakChip({ streak = 4, freeLeft = 3 }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 10px 6px 8px', borderRadius: 999, background: '#fff',
      boxShadow: 'inset 0 0 0 1px #ECEAE5',
      fontFamily: S.ui, fontSize: 12, fontWeight: 600, color: S.ink,
    }}>
      {Icon.flame('#FF8A3D', 14)}
      <span>{streak}-day streak</span>
      <span style={{ width: 1, height: 12, background: S.line, margin: '0 2px' }}/>
      <span style={{ color: S.slate, fontWeight: 500 }}>{freeLeft} free</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 1 · Scan
// ─────────────────────────────────────────────────────────────
function ScanScreen({ onCapture, onText, freeLeft }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: S.bg, overflow: 'hidden',
      fontFamily: S.ui, color: S.ink,
    }}>
      {/* Top bar */}
      <div style={{
        position: 'absolute', top: 58, left: 0, right: 0,
        padding: '0 20px', display: 'flex', alignItems: 'center', gap: 10, zIndex: 10,
      }}>
        <SolvelyLogo size={22}/>
        <div style={{ flex: 1 }}/>
        <StreakChip streak={4} freeLeft={freeLeft}/>
      </div>

      {/* Greeting */}
      <div style={{ position: 'absolute', top: 108, left: 24, right: 24 }}>
        <div style={{ fontSize: 13, color: S.slate, fontWeight: 500 }}>Good afternoon, Maya 👋</div>
        <div style={{ marginTop: 6, fontSize: 30, fontWeight: 700, color: S.ink, lineHeight: '36px', letterSpacing: '-.025em' }}>
          What's stuck<br/>today?
        </div>
      </div>

      {/* Viewfinder card (the camera frame as a friendly card) */}
      <div style={{
        position: 'absolute', top: 232, left: 20, right: 20, height: 320,
        borderRadius: 28, overflow: 'hidden',
        background: S.skySoft,
        boxShadow: 'inset 0 0 0 1px #D6E5EE',
      }}>
        {/* paper preview inside */}
        <div style={{
          position: 'absolute', top: 26, left: 26, right: 26, bottom: 26,
          borderRadius: 18, background: '#fff',
          boxShadow: '0 12px 28px rgba(10,10,42,.08)',
          padding: '24px 26px',
          fontFamily: S.mono, color: S.slateInk, fontSize: 12.5, lineHeight: '22px',
          overflow: 'hidden',
        }}>
          <div style={{ opacity: .55 }}>Algebra · Homework</div>
          <div style={{ marginTop: 14, opacity: .65 }}>1. 3x + 5 = 2x − 4</div>
          <div style={{ marginTop: 14, fontWeight: 600, color: S.ink }}>2. Solve for x:</div>
          <div style={{ marginLeft: 14, color: S.ink, fontWeight: 600, fontSize: 15 }}>2x² − 7x + 3 = 0</div>
          <div style={{ marginTop: 14, opacity: .55 }}>3. Slope of y = ½x + 7</div>
        </div>

        {/* sky-blue crop hint over q2 */}
        <div style={{
          position: 'absolute', top: 120, left: 38, right: 38, height: 80,
          borderRadius: 14,
          boxShadow: `inset 0 0 0 2px ${S.navy}, 0 0 0 6px rgba(0,0,128,.08)`,
        }}>
          {[[-5,-5,'tl'],[-5,'r','tr'],['b',-5,'bl'],['b','r','br']].map(([y, x, k]) => (
            <div key={k} style={{
              position: 'absolute', width: 12, height: 12, borderRadius: 3,
              background: S.navy,
              top: y === 'b' ? 'auto' : -5,
              bottom: y === 'b' ? -5 : 'auto',
              left: x === 'r' ? 'auto' : -5,
              right: x === 'r' ? -5 : 'auto',
            }}/>
          ))}
        </div>

        {/* corner sparkle */}
        <div style={{
          position: 'absolute', top: 14, right: 14,
          width: 32, height: 32, borderRadius: 16,
          background: S.navy, color: S.sky,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 16px rgba(0,0,128,.22)',
        }}>
          {Icon.sparkle(S.sky, 16)}
        </div>
      </div>

      {/* Helper row */}
      <div style={{
        position: 'absolute', top: 568, left: 24, right: 24,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{
          width: 6, height: 6, borderRadius: 3, background: S.sky,
        }}/>
        <div style={{ fontSize: 13, color: S.slate, fontWeight: 500 }}>
          Tip: one question per frame works best
        </div>
      </div>

      {/* Quick subjects */}
      <div style={{
        position: 'absolute', top: 600, left: 20, right: 20,
        display: 'flex', gap: 8, overflowX: 'auto',
      }}>
        {[
          ['Algebra', S.navy, S.sky],
          ['Geometry', '#fff', S.ink, true],
          ['Calculus', '#fff', S.ink, true],
          ['Physics', '#fff', S.ink, true],
        ].map(([label, bg, c, b]) => (
          <div key={label} style={{
            padding: '8px 14px', borderRadius: 999, background: bg, color: c,
            fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap',
            boxShadow: b ? `inset 0 0 0 1px ${S.line}` : 'none',
          }}>{label}</div>
        ))}
      </div>

      {/* Floating dock — Type · CAPTURE · Gallery */}
      <Dock onCapture={onCapture} onText={onText} active="scan"/>
    </div>
  );
}

function Dock({ onCapture, onText, active = 'scan' }) {
  return (
    <div style={{
      position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
      display: 'flex', alignItems: 'center', gap: 0,
      background: '#fff', borderRadius: 999, padding: 8,
      boxShadow: S.shadowDock, zIndex: 20,
    }}>
      <DockBtn label="Type" icon={Icon.text(S.slate, 22)} onClick={onText}/>
      <DockBtn label="History" icon={Icon.bookmark(S.slate, 20)}/>
      {/* center capture */}
      <button onClick={onCapture} style={{
        width: 64, height: 64, borderRadius: 999, border: 'none', cursor: 'pointer',
        background: S.navy, color: S.snow, margin: '0 4px',
        boxShadow: S.shadowCta,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', padding: 0,
      }}>
        {Icon.camera('#fff', 26)}
        <div style={{
          position: 'absolute', top: -4, right: -4, width: 16, height: 16, borderRadius: 8,
          background: S.sky, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {Icon.sparkle(S.navy, 10)}
        </div>
      </button>
      <DockBtn label="Upload" icon={Icon.gallery(S.slate, 21)}/>
      <DockBtn label="Profile" icon={(
        <div style={{ width: 26, height: 26, borderRadius: 13, background: S.skySoft, color: S.navy, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>M</div>
      )}/>
    </div>
  );
}

function DockBtn({ label, icon, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: 56, height: 56, borderRadius: 999, border: 'none', cursor: 'pointer',
      background: 'transparent', padding: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }} title={label}>
      {icon}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 2 · Confirm
// ─────────────────────────────────────────────────────────────
function ConfirmScreen({ onRetake, onSolve, freeLeft }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: S.bg, overflow: 'hidden',
      fontFamily: S.ui, color: S.ink,
    }}>
      <PageHeader
        leading={<IconBtn onClick={onRetake}>{Icon.back(S.ink)}</IconBtn>}
        trailing={<IconBtn>{Icon.close(S.slate)}</IconBtn>}
        title="Review"
      />

      {/* Photo card */}
      <div style={{
        position: 'absolute', top: 116, left: 20, right: 20, height: 380,
        borderRadius: 28, overflow: 'hidden',
        background: S.skySoft,
        boxShadow: S.shadowSm,
      }}>
        {/* paper */}
        <div style={{
          position: 'absolute', inset: 18,
          background: 'linear-gradient(180deg,#FFFEFB,#F6F2E8)',
          borderRadius: 16,
          boxShadow: '0 16px 32px rgba(10,10,42,.10)',
          transform: 'rotate(-1deg)',
          overflow: 'hidden',
        }}>
          {/* ruled lines */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(180deg, transparent 0, transparent 30px, rgba(109,129,150,.18) 30px, rgba(109,129,150,.18) 31px)',
          }}/>
          {/* red margin */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 40, width: 1, background: 'rgba(220,80,80,.4)' }}/>
          <div style={{
            position: 'absolute', top: 30, left: 56, right: 24,
            color: S.ink, fontFamily: S.mono, fontSize: 13.5, lineHeight: '30px',
          }}>
            <div style={{ opacity: .55 }}>Algebra II — Homework 4</div>
            <div style={{ marginTop: 12, opacity: .85 }}>1. Simplify 3x + 5 = 2x − 4</div>
            <div style={{ marginTop: 12, fontWeight: 700 }}>2. Solve for x:</div>
            <div style={{ fontWeight: 700, fontSize: 17, marginTop: 4 }}>&nbsp;&nbsp;&nbsp;2x² − 7x + 3 = 0</div>
            <div style={{ marginTop: 16, opacity: .85 }}>3. Find the slope of y = ½x + 7</div>
            <div style={{ marginTop: 12, opacity: .85 }}>4. Graph y = −2x + 1</div>
          </div>
        </div>

        {/* crop highlight */}
        <div style={{
          position: 'absolute', top: 168, left: 40, width: 280, height: 78,
          borderRadius: 12,
          boxShadow: `inset 0 0 0 2.5px ${S.navy}, 0 12px 28px rgba(0,0,128,.18)`,
          pointerEvents: 'none',
        }}>
          {[[-6,-6,'tl'],[-6,'r','tr'],['b',-6,'bl'],['b','r','br']].map(([y, x, k]) => (
            <div key={k} style={{
              position: 'absolute', width: 12, height: 12, borderRadius: 3,
              background: '#fff', boxShadow: `inset 0 0 0 2px ${S.navy}`,
              top: y === 'b' ? 'auto' : -6,
              bottom: y === 'b' ? -6 : 'auto',
              left: x === 'r' ? 'auto' : -6,
              right: x === 'r' ? -6 : 'auto',
            }}/>
          ))}
        </div>

        {/* "1 question" tag */}
        <div style={{
          position: 'absolute', top: 18, left: 18,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 10px', borderRadius: 999,
          background: S.navy, color: S.snow,
          fontSize: 11, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: S.sky }}/>
          1 question found
        </div>
      </div>

      {/* Detected text card */}
      <div style={{
        position: 'absolute', top: 516, left: 20, right: 20,
        padding: 16, background: '#fff', borderRadius: 20,
        boxShadow: 'inset 0 0 0 1px #ECEAE5',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: S.slate, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            Detected
          </div>
          <button style={{
            marginLeft: 'auto', height: 26, padding: '0 10px', borderRadius: 8, border: 'none',
            background: S.skySoft, color: S.navy, fontSize: 11, fontWeight: 600, cursor: 'pointer',
            fontFamily: S.ui,
          }}>Edit</button>
        </div>
        <div style={{ marginTop: 6, fontFamily: S.mono, fontSize: 17, color: S.ink, fontWeight: 600 }}>
          2x² − 7x + 3 = 0
        </div>
        <div style={{ marginTop: 4, fontSize: 12, color: S.slate }}>
          Algebra II · Quadratic equation
        </div>
      </div>

      {/* Actions */}
      <div style={{ position: 'absolute', bottom: 36, left: 20, right: 20, display: 'flex', gap: 10 }}>
        <button onClick={onRetake} style={{
          flex: '0 0 116px', height: 60, borderRadius: 20, border: 'none', cursor: 'pointer',
          background: '#fff', color: S.ink, boxShadow: 'inset 0 0 0 1px #ECEAE5',
          fontFamily: S.ui, fontSize: 15, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          {Icon.refresh(S.ink, 17)} Retake
        </button>
        <button onClick={onSolve} style={{
          flex: 1, height: 60, borderRadius: 20, border: 'none', cursor: 'pointer',
          background: S.navy, color: S.snow,
          fontFamily: S.ui, fontSize: 16, fontWeight: 700, letterSpacing: '-.01em',
          boxShadow: S.shadowCta,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          {Icon.sparkle(S.sky, 16)}
          Solve this
          {Icon.arrowRight(S.snow, 16)}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 3 · Analyzing  (cute spot illustration)
// ─────────────────────────────────────────────────────────────
function AnalyzingScreen({ onDone, freeLeft }) {
  const steps = ['Reading the question', 'Choosing a method', 'Working it out', 'Writing the explanation'];
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    if (active >= steps.length) { const t = setTimeout(onDone, 600); return () => clearTimeout(t); }
    const t = setTimeout(() => setActive(a => a + 1), 950);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div style={{
      position: 'absolute', inset: 0, background: S.bg, overflow: 'hidden',
      fontFamily: S.ui, color: S.ink,
    }}>
      <PageHeader
        leading={<IconBtn>{Icon.back(S.ink)}</IconBtn>}
        trailing={<IconBtn>{Icon.close(S.slate)}</IconBtn>}
        title="Solving"
      />

      {/* Illustration */}
      <div style={{
        position: 'absolute', top: 116, left: 0, right: 0, height: 280,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <SolveIllustration/>
      </div>

      {/* Question card (small) */}
      <div style={{
        position: 'absolute', top: 412, left: 20, right: 20,
        padding: 14, background: '#fff', borderRadius: 18,
        boxShadow: 'inset 0 0 0 1px #ECEAE5',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
          background: S.skySoft, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: S.mono, fontSize: 10, fontWeight: 700, color: S.navy, textAlign: 'center', lineHeight: '13px',
        }}>2x²−<br/>7x+3</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: S.slate, letterSpacing: '.06em', textTransform: 'uppercase' }}>Question</div>
          <div style={{ marginTop: 2, fontFamily: S.mono, fontSize: 14, fontWeight: 600 }}>2x² − 7x + 3 = 0</div>
        </div>
        <div style={{ fontSize: 11, color: S.slate, fontWeight: 500, flexShrink: 0 }}>
          ~5 sec
        </div>
      </div>

      {/* Status */}
      <div style={{ position: 'absolute', top: 488, left: 20, right: 20 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 11px', borderRadius: 999, background: S.skySoft, color: S.navy }}>
          <span className="dot-pulse"/>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.04em' }}>SOLVELY IS THINKING</span>
        </div>
        <div style={{ marginTop: 10, fontSize: 22, fontWeight: 700, letterSpacing: '-.02em' }}>
          Solving your question…
        </div>
      </div>

      {/* steps */}
      <div style={{ position: 'absolute', top: 580, left: 20, right: 20 }}>
        {steps.map((s, i) => {
          const done = i < active;
          const live = i === active;
          return (
            <div key={s} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '8px 4px',
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: 11, flexShrink: 0,
                background: done ? S.navy : live ? '#fff' : 'transparent',
                boxShadow: !done && !live ? `inset 0 0 0 1.5px ${S.hairline}` : live ? `inset 0 0 0 1.5px ${S.navy}` : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
              }}>
                {done && Icon.check('#fff', 11)}
                {live && <span className="live-dot"/>}
              </div>
              <div style={{
                fontSize: 14, fontWeight: live ? 600 : 500,
                color: done ? S.slate : live ? S.ink : S.slate,
                textDecoration: done ? 'none' : 'none',
                opacity: done ? .7 : 1,
              }}>{s}</div>
            </div>
          );
        })}
      </div>

      <style>{`
        .dot-pulse { width: 8px; height: 8px; border-radius: 4px; background: ${S.navy}; animation: pulse 1.3s ease-out infinite; }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0,0,128,.45); }
          70% { box-shadow: 0 0 0 7px rgba(0,0,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,0,128,0); }
        }
        .live-dot { width: 9px; height: 9px; border-radius: 5px; background: ${S.navy}; animation: blink 1s ease-in-out infinite; }
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: .35 } }
        .float-bob { animation: bob 3.4s ease-in-out infinite; }
        @keyframes bob {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-6px) }
        }
        .spin-slow { animation: spin 6s linear infinite; transform-origin: center; }
        @keyframes spin { to { transform: rotate(360deg) } }
      `}</style>
    </div>
  );
}

function SolveIllustration() {
  return (
    <div className="float-bob" style={{ position: 'relative', width: 240, height: 240 }}>
      {/* sky circle */}
      <div style={{ position: 'absolute', inset: 20, borderRadius: '50%', background: S.skySoft }}/>
      {/* orbiting sparkles */}
      <svg viewBox="0 0 240 240" width="240" height="240" style={{ position: 'absolute', inset: 0 }} className="spin-slow">
        <circle cx="120" cy="34" r="6" fill={S.navy}/>
        <circle cx="206" cy="120" r="4" fill={S.navy} opacity=".5"/>
        <rect x="22" y="118" width="8" height="8" rx="2" fill={S.navy} opacity=".25"/>
      </svg>
      {/* main "card" with equation */}
      <div style={{
        position: 'absolute', top: 70, left: 36, right: 36, height: 100,
        background: '#fff', borderRadius: 18,
        boxShadow: '0 18px 36px rgba(10,10,42,.14)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 4,
      }}>
        <div style={{ fontFamily: S.mono, fontSize: 18, fontWeight: 700, color: S.ink }}>
          2x² − 7x + 3 = 0
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '3px 8px', borderRadius: 999, background: S.skySoft, color: S.navy,
          fontSize: 10, fontWeight: 700, letterSpacing: '.04em',
        }}>
          {Icon.sparkle(S.navy, 9)} QUADRATIC
        </div>
      </div>
      {/* little "S" badge */}
      <div style={{
        position: 'absolute', top: 32, right: 18,
        width: 44, height: 44, borderRadius: 14, background: S.navy,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 18px rgba(0,0,128,.32)',
      }}>
        <SolvelyMark size={26} tone="navy"/>
      </div>
      {/* yellow underline mark */}
      <svg viewBox="0 0 240 240" width="240" height="240" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <path d="M70 178 Q120 168 170 178" stroke={S.sky} strokeWidth="4" strokeLinecap="round" fill="none"/>
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 4 · Result
// ─────────────────────────────────────────────────────────────
function ResultScreen({ onShare, onUpgrade, onBack, freeLeft }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: S.bg, overflow: 'hidden',
      fontFamily: S.ui, color: S.ink,
    }}>
      <PageHeader
        leading={<IconBtn onClick={onBack}>{Icon.back(S.ink)}</IconBtn>}
        trailing={
          <div style={{ display: 'flex', gap: 8 }}>
            <IconBtn onClick={onShare}>{Icon.share(S.ink, 17)}</IconBtn>
          </div>
        }
        title="Solution"
      />

      <div style={{
        position: 'absolute', top: 106, left: 0, right: 0, bottom: 0,
        overflowY: 'auto', padding: '0 20px 100px',
      }}>
        {/* Question card */}
        <div style={{
          padding: 16, background: '#fff', borderRadius: 22,
          boxShadow: 'inset 0 0 0 1px #ECEAE5',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14, flexShrink: 0,
            background: S.skySoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: S.mono, fontSize: 11, fontWeight: 700, color: S.navy, textAlign: 'center', lineHeight: '14px',
          }}>2x²−<br/>7x+3</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: S.slate, letterSpacing: '.06em', textTransform: 'uppercase' }}>Question</div>
            <div style={{ marginTop: 2, fontFamily: S.mono, fontSize: 16, fontWeight: 600, color: S.ink }}>2x² − 7x + 3 = 0</div>
            <div style={{ marginTop: 2, fontSize: 11, color: S.slate }}>Algebra II · Quadratics · Medium</div>
          </div>
        </div>

        {/* Answer hero */}
        <div style={{
          marginTop: 12, padding: '22px 22px 20px', borderRadius: 26,
          background: S.navy, color: S.snow,
          boxShadow: S.shadowMd, position: 'relative', overflow: 'hidden',
        }}>
          {/* sky accent */}
          <div style={{
            position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%',
            background: S.sky, opacity: .25,
          }}/>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px',
            borderRadius: 999, background: 'rgba(255,250,250,.16)',
            fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: S.sky }}/>
            Final answer
          </div>
          <div style={{
            marginTop: 14, fontFamily: S.mono, fontSize: 30, fontWeight: 700, letterSpacing: '-.02em', position: 'relative',
          }}>
            x = 3,&nbsp;&nbsp;x = ½
          </div>
          <div style={{ marginTop: 6, fontSize: 13, color: 'rgba(255,250,250,.78)', maxWidth: 280, position: 'relative' }}>
            Two real roots from factoring <span style={{ fontFamily: S.mono, color: S.sky }}>(2x − 1)(x − 3) = 0</span>.
          </div>
        </div>

        {/* Section title */}
        <div style={{ marginTop: 22, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.02em' }}>Step-by-step</div>
          <div style={{ fontSize: 11, color: S.slate, fontWeight: 500 }}>4 steps · 2 free</div>
        </div>

        <StepCard n={1} title="Recognize the form" body={
          <>This is a quadratic in standard form <span style={{ fontFamily: S.mono, background: S.skySoft, padding: '1px 6px', borderRadius: 4, color: S.navy }}>ax² + bx + c = 0</span> with <span style={{ fontFamily: S.mono }}>a = 2</span>, <span style={{ fontFamily: S.mono }}>b = −7</span>, <span style={{ fontFamily: S.mono }}>c = 3</span>.</>
        }/>
        <StepCard n={2} title="Choose factoring first" body={
          <>Look for two numbers that multiply to <span style={{ fontFamily: S.mono }}>a · c = 6</span> and add to <span style={{ fontFamily: S.mono }}>b = −7</span>. Those are <span style={{ fontFamily: S.mono }}>−1</span> and <span style={{ fontFamily: S.mono }}>−6</span>.</>
        }/>

        {/* Locked Pro section */}
        <div style={{
          marginTop: 14, position: 'relative', borderRadius: 24, overflow: 'hidden',
          background: '#fff', boxShadow: 'inset 0 0 0 1px #ECEAE5',
        }}>
          <div style={{
            padding: 18, filter: 'blur(5px)', opacity: .8, userSelect: 'none', pointerEvents: 'none',
          }}>
            <StepCard n={3} title="Split the middle term" body={<>Rewrite −7x as −x − 6x to factor in pairs.</>} bare/>
            <StepCard n={4} title="Solve each factor" body={<>Set each factor equal to zero and solve for x.</>} bare/>
          </div>

          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(255,250,250,.4) 0%, rgba(255,250,250,.98) 50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
            padding: '18px',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 16, marginBottom: 10,
              background: S.navy, display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 10px 22px rgba(0,0,128,.28)',
            }}>{Icon.lock(S.sky, 20)}</div>
            <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.02em', textAlign: 'center' }}>
              Unlock the full walkthrough
            </div>
            <div style={{ marginTop: 4, fontSize: 12, color: S.slate, textAlign: 'center', maxWidth: 280 }}>
              Every step, the "why," practice questions, and review tools.
            </div>

            <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%' }}>
              <Perk label="Full step-by-step"/>
              <Perk label="Similar practice"/>
              <Perk label="Mistake review"/>
              <Perk label="Flashcards"/>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button onClick={onUpgrade} style={{
          marginTop: 16, width: '100%', height: 60, borderRadius: 20, border: 'none', cursor: 'pointer',
          background: S.navy, color: S.snow,
          fontFamily: S.ui, fontSize: 16, fontWeight: 700, letterSpacing: '-.01em',
          boxShadow: S.shadowCta,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          {Icon.sparkle(S.sky, 16)}
          Unlock full solution
        </button>
        <div style={{ marginTop: 8, textAlign: 'center', fontSize: 11, color: S.slate }}>
          7 days free · then $4.99/mo · cancel anytime
        </div>
      </div>
    </div>
  );
}

function StepCard({ n, title, body, bare = false }) {
  return (
    <div style={{
      marginTop: 10, padding: 16, background: bare ? 'transparent' : '#fff', borderRadius: 18,
      boxShadow: bare ? 'none' : 'inset 0 0 0 1px #ECEAE5',
      display: 'flex', gap: 12, alignItems: 'flex-start',
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: 14, flexShrink: 0,
        background: SOLVELY.skySoft, color: SOLVELY.navy,
        boxShadow: `inset 0 0 0 1.5px ${SOLVELY.navy}`,
        fontSize: 13, fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{n}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: SOLVELY.ink, letterSpacing: '-.01em' }}>{title}</div>
        <div style={{ marginTop: 4, fontSize: 13, color: SOLVELY.slateInk, lineHeight: '20px' }}>{body}</div>
      </div>
    </div>
  );
}

function Perk({ label }) {
  return (
    <div style={{
      padding: '10px 12px', borderRadius: 12, background: SOLVELY.skySoft,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <div style={{
        width: 16, height: 16, borderRadius: 8, background: SOLVELY.navy,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>{Icon.check(SOLVELY.sky, 10)}</div>
      <span style={{ fontSize: 12, fontWeight: 600, color: SOLVELY.navy }}>{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// State machine
// ─────────────────────────────────────────────────────────────
function SolvelyApp({ initial = 'scan', freeLeft: freeIn = 3 }) {
  const [screen, setScreen] = React.useState(initial);
  const [freeLeft, setFreeLeft] = React.useState(freeIn);
  React.useEffect(() => { setScreen(initial); setFreeLeft(freeIn); }, [initial, freeIn]);
  const onUpgrade = () => alert('Demo: Pro upsell sheet');

  return (
    <>
      {screen === 'scan' && <ScanScreen freeLeft={freeLeft}
        onCapture={() => setScreen('confirm')}
        onText={() => alert('Demo: type the question')}
      />}
      {screen === 'confirm' && <ConfirmScreen freeLeft={freeLeft}
        onRetake={() => setScreen('scan')}
        onSolve={() => { setFreeLeft(Math.max(0, freeLeft - 1)); setScreen('analyzing'); }}
      />}
      {screen === 'analyzing' && <AnalyzingScreen freeLeft={freeLeft}
        onDone={() => setScreen('result')}
      />}
      {screen === 'result' && <ResultScreen freeLeft={freeLeft} onUpgrade={onUpgrade}
        onShare={() => alert('Demo: share card')}
        onBack={() => setScreen('scan')}
      />}
    </>
  );
}

Object.assign(window, { SolvelyApp, ScanScreen, ConfirmScreen, AnalyzingScreen, ResultScreen });
