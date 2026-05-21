// ── CONFIRM SCREEN ────────────────────────────────────────────
// Matches Figma Variant1HoverFalse6 exactly

function ConfirmScreen({ onRetake, onSolve }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.bg, overflow: 'hidden', fontFamily: "'Inter',system-ui" }}>
      {/* Header */}
      <div style={{ position: 'absolute', top: 56, left: 0, right: 0, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 10, zIndex: 10 }}>
        <IconBtn onClick={onRetake}><IcoBack c={C.ink} /></IconBtn>
        <span style={{ flex: 1, textAlign: 'center', fontSize: 16, fontWeight: 600, color: C.ink, letterSpacing: '-.01em' }}>Review</span>
        <IconBtn><IcoClose c={C.slate} s={16} /></IconBtn>
      </div>

      {/* Photo card */}
      <div style={{
        position: 'absolute', top: 116, left: 20, right: 20, height: 380,
        borderRadius: 28, overflow: 'hidden', background: C.skySoft,
        boxShadow: '0 4px 14px rgba(10,10,42,.06),0 1px 2px rgba(10,10,42,.04)',
        position: 'absolute', top: 116, left: 20, right: 20, height: 380
      }}>
        {/* Paper tilted */}
        <div style={{
          position: 'absolute', top: 18, left: 15, right: 15, bottom: 18,
          background: 'linear-gradient(180deg,rgb(255,254,251) 0%,rgb(246,242,232) 100%)',
          borderRadius: 16,
          transform: 'rotate(-1.2deg)',
          boxShadow: '0 16px 32px rgba(10,10,42,.10)',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(180deg,transparent 0,transparent 30px,rgba(109,129,150,.18) 30px,rgba(109,129,150,.18) 31px)'
          }} />
          {/* Adjust frame reminder overlay */}
          <div style={{
            position: 'absolute', bottom: 10, left: 0, right: 0,
            textAlign: 'center', pointerEvents: 'none',
          }}>
            <span style={{
              display: 'inline-block', padding: '5px 12px', borderRadius: 999,
              background: 'rgba(0,0,128,.72)', backdropFilter: 'blur(8px)',
              fontSize: 11, fontWeight: 600, color: '#fff', letterSpacing: '.02em',
            }}>Adjust the frame if needed</span>
          </div>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 40, width: 1, background: 'rgba(220,80,80,.4)' }} />
          <div style={{
            position: 'absolute', top: 30, left: 56, right: 24,
            fontFamily: "'Geist Mono',monospace", fontSize: 13, lineHeight: '30px', color: C.ink
          }}>
            <div style={{ opacity: .55, fontFamily: "'Inter',system-ui", fontSize: 11, marginBottom: 8 }}>Algebra II — Homework 4</div>
            <div style={{ opacity: .85 }}>1. Simplify 3x + 5 = 2x − 4</div>
            <div style={{ fontWeight: 700, marginTop: 2 }}>2. Solve for x:</div>
            <div style={{ fontWeight: 700, fontSize: 17, marginLeft: 14 }}>2x² − 7x + 3 = 0</div>
            <div style={{ opacity: .85, marginTop: 4 }}>3. Find the slope of y = ½x + 7</div>
            <div style={{ opacity: .85, marginTop: 4 }}>4. Graph y = −2x + 1</div>
          </div>
        </div>

        {/* Crop frame */}
        <div style={{
          position: 'absolute', top: 168, left: 40, width: 274, height: 78, borderRadius: 14,
          boxShadow: `inset 0 0 0 2.5px ${C.navy},0 12px 28px rgba(0,0,128,.18)`,
          pointerEvents: 'none'
        }}>
          {[{ t: -6, l: -6 }, { t: -6, r: -6 }, { b: -6, l: -6 }, { b: -6, r: -6 }].map((p, i) =>
          <div key={i} style={{
            position: 'absolute', width: 12, height: 12, borderRadius: 3,
            background: '#fff', boxShadow: `inset 0 0 0 2px ${C.navy}`,
            top: p.t !== undefined ? p.t : 'auto', bottom: p.b !== undefined ? p.b : 'auto',
            left: p.l !== undefined ? p.l : 'auto', right: p.r !== undefined ? p.r : 'auto'
          }} />
          )}
        </div>

        {/* Badge */}
        <div style={{
          position: 'absolute', top: 18, left: 18,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 10px', borderRadius: 999,
          background: C.navy, color: C.bg,
          fontSize: 11, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: C.sky, display: 'block' }} />
          1 question found
        </div>
      </div>

      {/* Detected text card */}
      <div style={{
        position: 'absolute', top: 516, left: 20, right: 20,
        padding: 16, background: C.white, borderRadius: 20,
        boxShadow: `inset 0 0 0 1px ${C.hairline}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: C.slate, letterSpacing: '.06em', textTransform: 'uppercase' }}>Detected</span>
          <button style={{
            marginLeft: 'auto', height: 26, padding: '0 10px', borderRadius: 8, border: 'none',
            background: C.skySoft, color: C.navy, fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: "'Inter',system-ui"
          }}>Edit</button>
        </div>
        <div style={{ marginTop: 6, fontFamily: "'Geist Mono',monospace", fontSize: 17, fontWeight: 600, color: C.ink }}>2x² − 7x + 3 = 0</div>
        <div style={{ marginTop: 4, fontSize: 12, color: C.slate }}>Algebra II · Quadratic equation</div>
      </div>

      {/* Tip */}
      <div style={{
        position: 'absolute', left: 24, right: 24,
        display: 'flex', alignItems: 'center', gap: 10,
        top: 610
      }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: C.slate }}></span>
      </div>

      {/* Actions */}
      <div style={{ position: 'absolute', bottom: 100, left: 20, right: 20, display: 'flex', gap: 10 }}>
        <button onClick={onRetake} style={{
          flex: '0 0 116px', height: 60, borderRadius: 20, border: 'none', cursor: 'pointer',
          background: C.white, color: C.ink, boxShadow: `inset 0 0 0 1px ${C.hairline}`,
          fontFamily: "'Inter',system-ui", fontSize: 15, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
        }}>
          <IcoRefresh c={C.ink} s={17} /> Retake
        </button>
        <button onClick={onSolve} style={{
          flex: 1, height: 60, borderRadius: 20, border: 'none', cursor: 'pointer',
          background: C.navy, color: C.bg,
          fontFamily: "'Inter',system-ui", fontSize: 16, fontWeight: 700, letterSpacing: '-.01em',
          boxShadow: '0 10px 24px rgba(0,0,128,.28)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
        }}>
          <IcoSparkle c={C.sky} s={16} />
          Solve this
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke={C.sky} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <TabBar active="scan" onChange={() => {}} />
    </div>);

}

// ── ANALYZING SCREEN ──────────────────────────────────────────

function AnalyzingScreen({ onDone }) {
  const steps = ['Reading the question', 'Choosing a method', 'Working it out', 'Writing the explanation'];
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    if (active >= steps.length) {const t = setTimeout(onDone, 600);return () => clearTimeout(t);}
    const t = setTimeout(() => setActive((a) => a + 1), 900);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div style={{ position: 'absolute', inset: 0, background: C.bg, overflow: 'hidden', fontFamily: "'Inter',system-ui", color: C.ink }}>
      {/* Header */}
      <div style={{ position: 'absolute', top: 56, left: 0, right: 0, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 10, zIndex: 10 }}>
        <IconBtn><IcoBack c={C.ink} /></IconBtn>
        <span style={{ flex: 1, textAlign: 'center', fontSize: 16, fontWeight: 600, color: C.ink }}>Solving</span>
        <IconBtn><IcoClose c={C.slate} s={16} /></IconBtn>
      </div>

      {/* Illustration */}
      <div style={{
        position: 'absolute', top: 116, left: 0, right: 0, height: 280,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', width: 240, height: 240, animation: 'bob 3.4s ease-in-out infinite' }}>
          <div style={{ position: 'absolute', left: 20, top: 20, width: 200, height: 200, borderRadius: 100, background: C.skySoft }} />
          {/* orbit dots */}
          <div style={{ position: 'absolute', top: 34, left: '50%', width: 12, height: 12, borderRadius: 6, background: C.navy, transform: 'translateX(-50%)' }} />
          <div style={{ position: 'absolute', top: '50%', right: 34, width: 8, height: 8, borderRadius: 4, background: C.navy, opacity: .5, transform: 'translateY(-50%)' }} />
          <div style={{ position: 'absolute', bottom: 34, left: 36, width: 8, height: 8, borderRadius: 2, background: C.navy, opacity: .25 }} />
          {/* Card */}
          <div style={{
            position: 'absolute', left: 36, top: 70, width: 168, height: 100,
            borderRadius: 18, background: C.white,
            boxShadow: '0 18px 36px rgba(10,10,42,.14)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4
          }}>
            <div style={{ fontFamily: "'Geist Mono',monospace", fontSize: 16, fontWeight: 700, color: C.ink, textAlign: 'center', lineHeight: '22px' }}>
              2x² − 7x<br />+ 3 = 0
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 8px', borderRadius: 999, background: C.skySoft,
              fontSize: 10, fontWeight: 700, color: C.navy, letterSpacing: '.04em'
            }}>
              <IcoSparkle c={C.navy} s={9} /> QUADRATIC
            </div>
          </div>
          {/* badge */}
          <div style={{
            position: 'absolute', right: 18, top: 32, width: 44, height: 44,
            borderRadius: 14, background: C.navy,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 18px rgba(0,0,128,.32)'
          }}>
            <SolvelyMark size={26} />
          </div>
        </div>
      </div>

      {/* Question card (small) */}
      <div style={{
        position: 'absolute', top: 412, left: 20, right: 20,
        padding: 14, background: C.white, borderRadius: 18,
        boxShadow: `inset 0 0 0 1px ${C.hairline}`,
        display: 'flex', alignItems: 'center', gap: 12
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
          background: C.skySoft, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Geist Mono',monospace", fontSize: 10, fontWeight: 700, color: C.navy, textAlign: 'center', lineHeight: '13px'
        }}>2x²−<br />7x+3</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: C.slate, letterSpacing: '.06em', textTransform: 'uppercase' }}>Question</div>
          <div style={{ marginTop: 2, fontFamily: "'Geist Mono',monospace", fontSize: 14, fontWeight: 600, color: C.ink }}>2x² − 7x + 3 = 0</div>
        </div>
        <span style={{ fontSize: 11, color: C.slate, fontWeight: 500, flexShrink: 0 }}>~5 sec</span>
      </div>

      {/* Status */}
      <div style={{ position: 'absolute', top: 488, left: 20, right: 20 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 11px', borderRadius: 999, background: C.skySoft, color: C.navy }}>
          <span className="dot-pulse" />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.04em' }}>SOLVELY IS THINKING</span>
        </div>
        <div style={{ marginTop: 10, fontSize: 22, fontWeight: 700, letterSpacing: '-.02em' }}>Solving your question…</div>
      </div>

      {/* Steps */}
      <div style={{ position: 'absolute', top: 580, left: 20, right: 20 }}>
        {steps.map((s, i) => {
          const done = i < active,live = i === active;
          return (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 4px' }}>
              <div style={{
                width: 22, height: 22, borderRadius: 11, flexShrink: 0,
                background: done ? C.navy : live ? '#fff' : 'transparent',
                boxShadow: live ? `inset 0 0 0 1.5px ${C.navy}` : !done ? `inset 0 0 0 1.5px ${C.hairline}` : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
              }}>
                {done && <IcoCheck c="#fff" s={11} />}
                {live && <span className="live-dot" />}
                {!done && !live && <span style={{ fontSize: 11, color: C.slate, fontWeight: 600 }}>{i + 1}</span>}
              </div>
              <div style={{
                fontSize: 14, fontWeight: live ? 600 : 500,
                color: done ? C.slate : live ? C.ink : C.slate,
                opacity: done ? .7 : 1
              }}>{s}</div>
            </div>);

        })}
      </div>

      <TabBar active="scan" onChange={() => {}} />

      <style>{`
        .dot-pulse{width:8px;height:8px;border-radius:4px;background:${C.navy};display:inline-block;animation:pulse 1.3s ease-out infinite;}
        @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,0,128,.45)}70%{box-shadow:0 0 0 7px rgba(0,0,128,0)}100%{box-shadow:0 0 0 0 rgba(0,0,128,0)}}
        .live-dot{width:9px;height:9px;border-radius:5px;background:${C.navy};display:inline-block;animation:blink 1s ease-in-out infinite;}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
        @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
      `}</style>
    </div>);

}

Object.assign(window, { ConfirmScreen, AnalyzingScreen });