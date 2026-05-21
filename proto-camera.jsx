// ── CAMERA SCREEN ──────────────────────────────────────────────

function CameraScreen({ onShutter, onText, onGallery, onClose, scansLeft = 3 }) {
  const [flash, setFlash] = React.useState(false);
  const [shutterAnim, setShutterAnim] = React.useState(false);

  const handleShutter = () => {
    setShutterAnim(true);
    setTimeout(() => { setShutterAnim(false); onShutter && onShutter(); }, 300);
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#0A0C1A', overflow: 'hidden',
      fontFamily: "'Inter',system-ui",
    }}>
      {/* Camera feed — shows the question being scanned */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, #0E1228 0%, #141829 40%, #1A1E32 100%)',
      }}/>
      {/* Simulated paper / question visible through lens */}
      <div style={{
        position: 'absolute', top: '28%', left: 24, right: 24, height: 220,
        borderRadius: 12, overflow: 'hidden',
        background: 'linear-gradient(180deg, #F9F5E8 0%, #EEE8D2 100%)',
        opacity: 0.55, filter: 'blur(0.3px)',
      }}>
        {/* ruled lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(180deg, transparent 0, transparent 30px, rgba(109,129,150,.25) 30px, rgba(109,129,150,.25) 31px)',
        }}/>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 36, width: 1, background: 'rgba(220,80,80,.4)' }}/>
        <div style={{
          position: 'absolute', top: 20, left: 50, right: 16,
          fontFamily: "'Geist Mono', monospace", color: '#1A1830', fontSize: 12, lineHeight: '30px',
        }}>
          <div style={{ opacity: .55, fontSize: 10, fontFamily: "'Inter',system-ui", marginBottom: 6 }}>Algebra II — Homework 4</div>
          <div style={{ opacity: .75 }}>1. Simplify 3x + 5 = 2x − 4</div>
          <div style={{ fontWeight: 700, fontSize: 14 }}>2. Solve for x:</div>
          <div style={{ fontWeight: 700, fontSize: 16, paddingLeft: 14 }}>2x² − 7x + 3 = 0</div>
          <div style={{ opacity: .65 }}>3. Slope of y = ½x + 7</div>
        </div>
      </div>

      {/* Dark vignette overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 30%, rgba(10,12,26,.75) 100%)',
        pointerEvents: 'none',
      }}/>

      {/* Flashlight wash */}
      {flash && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 30%, rgba(255,240,180,.22) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}/>
      )}

      {/* Top bar — scans left on left, flashlight + close on right */}
      <div style={{
        position: 'absolute', top: 62, left: 0, right: 0,
        padding: '10px 16px', zIndex: 10,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        {/* Scans left — top left */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          height: 34, borderRadius: 999,
          background: 'rgba(0,0,128,.6)',
          backdropFilter: 'blur(12px)',
          boxShadow: 'inset 0 0 0 1px rgba(173,216,230,.35)',
          padding: '0 12px',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: C.sky, display: 'block' }}/>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: '.02em' }}>
            {scansLeft} free scan{scansLeft !== 1 ? 's' : ''} left
          </span>
        </div>

        <div style={{ flex: 1 }}/>

        {/* Flashlight */}
        <button onClick={() => setFlash(f => !f)} style={{
          width: 34, height: 34, borderRadius: 999, border: 'none', cursor: 'pointer',
          background: flash ? 'rgba(255,215,0,.25)' : 'rgba(255,255,255,.15)',
          backdropFilter: 'blur(12px)',
          boxShadow: flash ? 'inset 0 0 0 1px rgba(255,215,0,.5)' : 'inset 0 0 0 1px rgba(255,255,255,.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {flash ? <IcoFlashOn s={20}/> : <IcoFlashOff s={20}/>}
        </button>

        {/* Close */}
        <button onClick={onClose} style={{
          width: 34, height: 34, borderRadius: 999, border: 'none', cursor: 'pointer',
          background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(12px)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <IcoClose c="rgba(255,255,255,.85)" s={16}/>
        </button>
      </div>

      {/* Center text */}
      <div style={{
        position: 'absolute', top: '20%', left: 0, right: 0, textAlign: 'center', zIndex: 5,
      }}>
        <div style={{
          fontSize: 22, fontWeight: 700, color: 'rgba(255,255,255,.95)',
          letterSpacing: '-.02em', textShadow: '0 2px 16px rgba(0,0,0,.5)',
        }}>Take a picture of your question</div>
      </div>

      {/* Crosshair */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 40, height: 40, zIndex: 5, pointerEvents: 'none',
      }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1.5, background: 'rgba(255,255,255,.7)', transform: 'translateY(-50%)' }}/>
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1.5, background: 'rgba(255,255,255,.7)', transform: 'translateX(-50%)' }}/>
      </div>

      {/* Frame corners */}
      <div style={{ position: 'absolute', top: '28%', left: 24, right: 24, height: 220, pointerEvents: 'none' }}>
        {[
          { top: -1, left: -1, bt: 'top', bl: 'left' },
          { top: -1, right: -1, bt: 'top', bl: 'right' },
          { bottom: -1, left: -1, bt: 'bottom', bl: 'left' },
          { bottom: -1, right: -1, bt: 'bottom', bl: 'right' },
        ].map((p, i) => {
          const s = {};
          if (p.top !== undefined) s.top = p.top; if (p.bottom !== undefined) s.bottom = p.bottom;
          if (p.left !== undefined) s.left = p.left; if (p.right !== undefined) s.right = p.right;
          return (
            <div key={i} style={{
              position: 'absolute', ...s, width: 24, height: 24,
              borderTop: p.bt === 'top' ? `2.5px solid rgba(255,255,255,.9)` : 'none',
              borderBottom: p.bt === 'bottom' ? `2.5px solid rgba(255,255,255,.9)` : 'none',
              borderLeft: p.bl === 'left' ? `2.5px solid rgba(255,255,255,.9)` : 'none',
              borderRight: p.bl === 'right' ? `2.5px solid rgba(255,255,255,.9)` : 'none',
              borderTopLeftRadius: p.bt === 'top' && p.bl === 'left' ? 8 : 0,
              borderTopRightRadius: p.bt === 'top' && p.bl === 'right' ? 8 : 0,
              borderBottomLeftRadius: p.bt === 'bottom' && p.bl === 'left' ? 8 : 0,
              borderBottomRightRadius: p.bt === 'bottom' && p.bl === 'right' ? 8 : 0,
            }}/>
          );
        })}
      </div>

      {/* Bottom controls: Text | Shutter | Photos */}
      <div style={{
        position: 'absolute', bottom: 92, left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 44px', zIndex: 10,
      }}>
        <button onClick={onText} style={{
          width: 56, height: 56, borderRadius: 18, border: 'none', cursor: 'pointer',
          background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(12px)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.2)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3,
        }}>
          <IcoText c="rgba(255,255,255,.9)" s={22}/>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,.8)', fontWeight: 600 }}>Text</span>
        </button>

        <button onClick={handleShutter} style={{
          width: 76, height: 76, borderRadius: 999, border: 'none', cursor: 'pointer',
          background: 'transparent', padding: 0, position: 'relative',
        }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: 999, border: '3px solid rgba(255,255,255,.9)' }}/>
          <div style={{
            position: 'absolute', inset: 6, borderRadius: 999,
            background: shutterAnim ? 'rgba(255,255,255,.7)' : 'rgba(255,255,255,.95)',
            transform: shutterAnim ? 'scale(0.85)' : 'scale(1)',
            transition: 'transform .2s ease, background .2s',
          }}/>
        </button>

        <button onClick={onGallery} style={{
          width: 56, height: 56, borderRadius: 18, border: 'none', cursor: 'pointer',
          background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(12px)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.2)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3,
          position: 'relative', overflow: 'hidden',
        }}>
          <IcoGallery c="rgba(255,255,255,.9)" s={22}/>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,.8)', fontWeight: 600 }}>Photos</span>
          <div style={{ position: 'absolute', top: 4, right: 4, width: 8, height: 8, borderRadius: 2, background: C.sky }}/>
        </button>
      </div>

      {/* Tab bar dark */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 82,
        background: 'rgba(10,12,26,.85)', backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,.08)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around',
        paddingTop: 10, zIndex: 30,
      }}>
        {[
          { id: 'scan', label: 'Scan', icon: <IcoCamera c={C.sky} s={22}/> },
          { id: 'history', label: 'History', icon: (
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
              <rect x="4" y="3" width="16" height="18" rx="2.5" stroke="rgba(255,255,255,.5)" strokeWidth="1.8"/>
              <path d="M8 8h8M8 12h8M8 16h5" stroke="rgba(255,255,255,.5)" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )},
          { id: 'notes', label: 'Live Notes', icon: <NoteIcon c="rgba(255,255,255,.5)" size={22}/> },
          { id: 'me', label: 'Me', icon: (
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="rgba(255,255,255,.5)" strokeWidth="1.8"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,.5)" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )},
        ].map(t => (
          <div key={t.id} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer',
          }}>
            {t.icon}
            <span style={{
              fontSize: 10, fontWeight: t.id === 'scan' ? 700 : 500,
              color: t.id === 'scan' ? C.sky : 'rgba(255,255,255,.5)',
              fontFamily: "'Inter',system-ui",
            }}>{t.label}</span>
          </div>
        ))}
      </div>

      {shutterAnim && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,.4)', pointerEvents: 'none', zIndex: 99 }}/>
      )}
    </div>
  );
}

Object.assign(window, { CameraScreen });
