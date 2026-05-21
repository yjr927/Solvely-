// ── HOME SCREEN (Scan tab) ─────────────────────────────────────
// Matches Figma Variant1HoverFalse5 exactly, plus History + Notes sections

const HISTORY_ITEMS = [
{ id: 1, subject: 'Algebra II', q: '2x² − 7x + 3 = 0', ans: 'x = 3, x = ½', date: 'Today' },
{ id: 2, subject: 'Geometry', q: 'Area of rhombus ABCD, AP=3, PD=2', ans: '10', date: 'Today' },
{ id: 3, subject: 'Calculus', q: 'Derivative of f(x) = 3x³ − 2x + 1', ans: "f'(x) = 9x² − 2", date: 'Yesterday' },
{ id: 4, subject: 'AMC 12A', q: 'Value of (10(203)) − ((102)(3))', ans: '−2', date: 'May 19' }];


const NOTES = [
{ id: 1, title: 'Quadratic Formula', preview: 'x = (−b ± √(b²−4ac)) / 2a', color: C.skySoft },
{ id: 2, title: 'Slope-Intercept', preview: 'y = mx + b, where m is slope', color: '#FFF3E0' },
{ id: 3, title: 'Trig Identities', preview: 'sin²θ + cos²θ = 1', color: '#F3E5F5' },
{ id: 4, title: 'AMC Tips', preview: 'Process of elimination for multiple choice...', color: C.skySoft }];


function HomeScreen({ onCapture, onTab }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: C.bg, overflow: 'hidden'
    }}>
      {/* Content area — scrollable */}
      <div style={{
        position: 'absolute', top: 62, left: 0, right: 0, bottom: 82,
        overflowY: 'auto', paddingBottom: 16
      }}>
        {/* Logo + streak row — top:58 from frame top → 58-62 = -4 from scroll top, but fixed above */}
        <div style={{
          padding: '6px 20px 0', display: 'flex', alignItems: 'center', gap: 10
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <SolvelyMark size={22} />
            <span style={{ fontFamily: "'Inter',system-ui", fontWeight: 700, fontSize: 18.7, letterSpacing: '-0.374px', color: C.ink }}>solvely</span>
          </div>
          <div style={{ flex: 1 }} />
          {/* Streak pill */}
          <div style={{
            height: 27, borderRadius: 999, background: C.white,
            boxShadow: `inset 0 0 0 1px ${C.hairline}`,
            display: 'flex', alignItems: 'center', gap: 6, padding: '0 10px 0 8px'
          }}>
            <IcoFlame />
            <span style={{ fontSize: 12, fontWeight: 700, color: C.ink }}>Refer and Earn</span>
            <div style={{ width: 1, height: 12, background: C.hairline, margin: '0 2px' }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: C.slate }}>1 month free</span>
          </div>
        </div>

        {/* Greeting */}
        <div style={{ padding: '16px 24px 0' }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: C.slate, lineHeight: '100%' }}>Good afternoon, JJ 👋</div>
          <div style={{ marginTop: 6, fontSize: 30, fontWeight: 700, lineHeight: '36px', letterSpacing: '-0.75px', color: C.ink }}>
            Stuck on a homework<br />question?
          </div>
        </div>

        {/* Viewfinder card */}
        <div style={{
          margin: '16px 20px 0', height: 320, borderRadius: 28, overflow: 'hidden',
          background: C.skySoft, boxShadow: `inset 0 0 0 1px ${C.line}`, position: 'relative'
        }}>
          <div style={{
            position: 'absolute', left: 26, top: 26, right: 26, bottom: 26,
            borderRadius: 18, background: C.white,
            boxShadow: '0 12px 28px rgba(10,10,42,0.08)',
            padding: '24px 26px', overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'repeating-linear-gradient(180deg,transparent 0,transparent 30px,rgba(109,129,150,.16) 30px,rgba(109,129,150,.16) 31px)'
            }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 40, width: 1, background: 'rgba(220,80,80,.38)' }} />
            <div style={{ position: 'relative', paddingLeft: 16, fontFamily: "'Geist Mono','JetBrains Mono',monospace", color: C.ink, fontSize: 13, lineHeight: '30px' }}>
              <div style={{ opacity: .55, marginBottom: 4, fontFamily: "'Inter',system-ui", fontSize: 11 }}>Algebra II — Homework 4</div>
              <div style={{ opacity: .65 }}>1. Simplify 3x + 5 = 2x − 4</div>
              <div style={{ fontWeight: 700, marginTop: 2 }}>2. Solve for x:</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginLeft: 14 }}>2x² − 7x + 3 = 0</div>
              <div style={{ opacity: .65, marginTop: 2 }}>3. Slope of y = ½x + 7</div>
            </div>
          </div>
          <div style={{
            position: 'absolute', right: 14, top: 14, width: 32, height: 32,
            borderRadius: 16, background: C.navy,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 16px rgba(0,0,128,.22)'
          }}>
            <IcoSparkle c={C.sky} s={16} />
          </div>
        </div>

        {/* Tip row */}
        <div style={{
          margin: '12px 24px 0', display: 'flex', alignItems: 'center', gap: 10
        }}>
          <div style={{ width: 6, height: 6, borderRadius: 3, background: C.sky, flexShrink: 0 }} />
          <span style={{ fontWeight: 500, color: C.slate, fontSize: "12px" }}>Snap a question and Solvely will explain it step by step.</span>
        </div>

        {/* Subject chips */}
        <div style={{
          margin: '10px 20px 0', display: 'flex', gap: 8, overflowX: 'auto',
          paddingBottom: 2
        }}>
          {[
          ['Algebra', 'navy'], ['Geometry', 'ghost'], ['Calculus', 'ghost'], ['Physics', 'ghost']].
          map(([l, v]) =>
          <div key={l} style={{
            padding: '8px 14px', borderRadius: 999, whiteSpace: 'nowrap',
            background: v === 'navy' ? C.navy : C.white,
            color: v === 'navy' ? C.sky : C.ink,
            fontSize: 13, fontWeight: 700, flexShrink: 0,
            boxShadow: v === 'ghost' ? `inset 0 0 0 1px ${C.hairline}` : 'none'
          }}>{l}</div>
          )}
        </div>

        {/* ── History of answers ───────────────────────────────── */}
        <div style={{ margin: '22px 0 0' }}>
          <div style={{
            padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 10
          }}>
            <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-.02em', color: C.ink }}>Recent answers</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: C.navy, cursor: 'pointer' }}>See all</span>
          </div>
          {/* Horizontal scroll */}
          <div style={{
            display: 'flex', gap: 12, overflowX: 'auto', padding: '0 20px',
            paddingBottom: 4
          }}>
            {HISTORY_ITEMS.map((item) =>
            <div key={item.id} style={{
              flexShrink: 0, width: 170, padding: '12px 14px',
              borderRadius: 18, background: C.white,
              boxShadow: `inset 0 0 0 1px ${C.hairline}`,
              cursor: 'pointer'
            }}>
                <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                padding: '3px 8px', borderRadius: 999, background: C.skySoft,
                marginBottom: 8
              }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: C.navy, letterSpacing: '.04em' }}>{item.subject}</span>
                </div>
                <div style={{
                fontFamily: "'Geist Mono',monospace", fontSize: 12.5, fontWeight: 600,
                color: C.ink, lineHeight: '18px', marginBottom: 6,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
              }}>{item.q}</div>
                <div style={{
                fontFamily: "'Geist Mono',monospace", fontSize: 13, fontWeight: 700,
                color: C.navy, marginBottom: 4
              }}>{item.ans}</div>
                <div style={{ fontSize: 10, color: C.slate }}>{item.date}</div>
              </div>
            )}
          </div>
        </div>

        {/* ── Note collection ──────────────────────────────────── */}
        <div style={{ margin: '22px 0 0' }}>
          <div style={{
            padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 10
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <NoteIcon c={C.ink} size={18} />
              <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-.02em', color: C.ink }}>My notes</span>
            </div>
            <button style={{
              height: 28, padding: '0 10px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: C.skySoft, color: C.navy, fontSize: 12, fontWeight: 700,
              fontFamily: "'Inter',system-ui", display: 'flex', alignItems: 'center', gap: 4
            }}>
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke={C.navy} strokeWidth="2.4" strokeLinecap="round" />
              </svg>
              New
            </button>
          </div>
          {/* 2-col grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
            padding: '0 20px'
          }}>
            {NOTES.map((n) =>
            <div key={n.id} style={{
              padding: '14px 14px 12px', borderRadius: 18,
              background: n.color, cursor: 'pointer',
              boxShadow: 'inset 0 0 0 1px rgba(10,10,42,.04)',
              minHeight: 88
            }}>
                <div style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                marginBottom: 6
              }}>
                  <NoteIcon c={C.navy} size={18} />
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="5" r="1.5" fill={C.slate} />
                    <circle cx="12" cy="12" r="1.5" fill={C.slate} />
                    <circle cx="12" cy="19" r="1.5" fill={C.slate} />
                  </svg>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{n.title}</div>
                <div style={{ fontSize: 11, color: C.slate, lineHeight: '16px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{n.preview}</div>
              </div>
            )}
          </div>
        </div>

        <div style={{ height: 20 }} />
      </div>

      {/* ── Floating dock — Type | Camera | Upload ─────────────── */}
      {/* ── Floating dock ─────────────────────────────────────── */}
      <div style={{
        position: 'absolute', bottom: 90, left: '50%', transform: 'translateX(-50%)',
        width: 240, height: 80, borderRadius: 999, background: C.white,
        boxShadow: '0 24px 60px rgba(0,0,128,.18), 0 8px 24px rgba(0,0,128,.12)',
        zIndex: 20, flexShrink: 0
      }}>
        <DockBtn icon={<IcoText c={C.slate} s={22} />} label="Type" x={8} />
        {/* Main capture */}
        <button onClick={onCapture} style={{
          position: 'absolute', left: 88, top: 8, width: 64, height: 64,
          borderRadius: 999, border: 'none', cursor: 'pointer', padding: 0,
          background: C.navy, boxShadow: '0 10px 24px rgba(0,0,128,.28)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <IcoCamera c="#fff" s={26} />
          <div style={{
            position: 'absolute', top: -4, right: -4, width: 16, height: 16, borderRadius: 8,
            background: C.sky, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <IcoSparkle c={C.navy} s={10} />
          </div>
        </button>
        <DockBtn icon={<IcoGallery c={C.slate} s={22} />} label="Upload" x={168} />
      </div>

      <TabBar active="scan" onChange={onTab} />
    </div>);

}

function DockBtn({ icon, label, x, onClick }) {
  return (
    <button onClick={onClick} style={{
      position: 'absolute', left: x, top: 12, width: 56, height: 56,
      border: 'none', background: 'transparent', cursor: 'pointer',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', gap: 3, padding: 0
    }}>
      {icon}
      <span style={{ fontSize: 9, color: C.slate, fontWeight: 500, fontFamily: "'Inter',system-ui" }}>{label}</span>
    </button>);

}

Object.assign(window, { HomeScreen, HISTORY_ITEMS, NOTES });