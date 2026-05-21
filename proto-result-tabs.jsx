// ── RESULT SCREEN ─────────────────────────────────────────────
// Matches Figma Variant1HoverFalse exactly

function ResultScreen({ onBack, onUpgrade, onShare }) {
  return (
    <div style={{position:'absolute',inset:0,background:C.bg,overflow:'hidden',fontFamily:"'Inter',system-ui",color:C.ink}}>
      {/* Header */}
      <div style={{position:'absolute',top:56,left:0,right:0,padding:'0 20px',display:'flex',alignItems:'center',gap:10,zIndex:10}}>
        <IconBtn onClick={onBack}><IcoBack c={C.ink}/></IconBtn>
        <span style={{flex:1,textAlign:'center',fontSize:16,fontWeight:600,color:C.ink}}>Solution</span>
        <IconBtn onClick={onShare}><IcoShare c={C.ink} s={17}/></IconBtn>
      </div>

      {/* Scrollable content */}
      <div style={{position:'absolute',top:106,left:0,right:0,bottom:82,overflowY:'auto',padding:'0 20px 24px'}}>
        {/* Question card */}
        <div style={{
          padding:16,background:C.white,borderRadius:22,
          boxShadow:`inset 0 0 0 1px ${C.hairline}`,
          display:'flex',alignItems:'center',gap:12,
        }}>
          <div style={{
            width:56,height:56,borderRadius:14,flexShrink:0,
            background:C.skySoft,display:'flex',alignItems:'center',justifyContent:'center',
            fontFamily:"'Geist Mono',monospace",fontSize:11,fontWeight:700,color:C.navy,textAlign:'center',lineHeight:'14px',
          }}>2x²−<br/>7x+3</div>
          <div style={{flex:1}}>
            <div style={{fontSize:10,fontWeight:600,color:C.slate,letterSpacing:'.06em',textTransform:'uppercase'}}>Question</div>
            <div style={{marginTop:2,fontFamily:"'Geist Mono',monospace",fontSize:16,fontWeight:600,color:C.ink}}>2x² − 7x + 3 = 0</div>
            <div style={{marginTop:2,fontSize:11,color:C.slate}}>Algebra II · Quadratics · Medium</div>
          </div>
        </div>

        {/* Answer hero */}
        <div style={{
          marginTop:12,padding:'22px 22px 20px',borderRadius:26,
          background:C.navy,color:C.bg,
          boxShadow:'0 18px 36px rgba(10,10,42,.10),0 2px 8px rgba(10,10,42,.05)',
          position:'relative',overflow:'hidden',
        }}>
          <div style={{
            position:'absolute',top:-40,right:-40,width:160,height:160,
            borderRadius:'50%',background:C.sky,opacity:.22,
          }}/>
          <div style={{
            display:'inline-flex',alignItems:'center',gap:6,padding:'4px 10px',
            borderRadius:999,background:'rgba(255,250,250,.16)',
            fontSize:11,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',position:'relative',
          }}>
            <span style={{width:6,height:6,borderRadius:3,background:C.sky,display:'block'}}/>
            Final answer
          </div>
          <div style={{
            marginTop:14,fontFamily:"'Geist Mono',monospace",
            fontSize:30,fontWeight:700,letterSpacing:'-.02em',position:'relative',
          }}>x = 3,&nbsp;&nbsp;x = ½</div>
          <div style={{marginTop:6,fontSize:13,color:'rgba(255,250,250,.78)',maxWidth:280,position:'relative'}}>
            Two real roots from factoring&nbsp;
            <span style={{fontFamily:"'Geist Mono',monospace",color:C.sky}}>(2x − 1)(x − 3) = 0</span>.
          </div>
        </div>

        {/* Section header */}
        <div style={{marginTop:22,display:'flex',alignItems:'baseline',justifyContent:'space-between'}}>
          <span style={{fontSize:18,fontWeight:700,letterSpacing:'-.02em'}}>Step-by-step</span>
          <span style={{fontSize:11,color:C.slate,fontWeight:500}}>4 steps · 2 free</span>
        </div>

        {/* Steps 1 & 2 (free) */}
        <ResultStep n={1} title="Recognize the form" body={
          <>This is a quadratic in standard form&nbsp;<Code>ax² + bx + c = 0</Code> with <Code>a=2</Code>, <Code>b=−7</Code>, <Code>c=3</Code>.</>
        }/>
        <ResultStep n={2} title="Choose factoring first" body={
          <>Find two numbers that multiply to <Code>a·c = 6</Code> and add to <Code>b = −7</Code>. Those are <Code>−1</Code> and <Code>−6</Code>.</>
        }/>

        {/* Locked steps 3 & 4 */}
        <div style={{marginTop:14,position:'relative',borderRadius:24,overflow:'hidden',background:C.white,boxShadow:`inset 0 0 0 1px ${C.hairline}`}}>
          <div style={{padding:16,filter:'blur(5px)',opacity:.8,userSelect:'none',pointerEvents:'none'}}>
            <ResultStep n={3} title="Split the middle term" body="Rewrite −7x as −x − 6x to factor in pairs." bare/>
            <ResultStep n={4} title="Solve each factor" body="Set each factor equal to zero and solve for x." bare/>
          </div>
          <div style={{
            position:'absolute',inset:0,
            background:'linear-gradient(180deg,rgba(255,250,250,.4) 0%,rgba(255,250,250,.97) 50%)',
            display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',
            padding:18,
          }}>
            <div style={{width:48,height:48,borderRadius:16,marginBottom:10,background:C.navy,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 10px 22px rgba(0,0,128,.28)'}}>
              <IcoLock c={C.sky} s={20}/>
            </div>
            <div style={{fontSize:17,fontWeight:700,letterSpacing:'-.02em',textAlign:'center'}}>Unlock the full walkthrough</div>
            <div style={{marginTop:4,fontSize:12,color:C.slate,textAlign:'center',maxWidth:280}}>Every step, the "why," practice questions, and review tools.</div>
            <div style={{marginTop:14,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,width:'100%'}}>
              {['Full step-by-step','Similar practice','Mistake review','Flashcards'].map(l=>(
                <div key={l} style={{padding:'10px 12px',borderRadius:12,background:C.skySoft,display:'flex',alignItems:'center',gap:8}}>
                  <div style={{width:16,height:16,borderRadius:8,background:C.navy,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <IcoCheck c={C.sky} s={10}/>
                  </div>
                  <span style={{fontSize:12,fontWeight:600,color:C.navy}}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <button onClick={onUpgrade} style={{
          marginTop:16,width:'100%',height:60,borderRadius:20,border:'none',cursor:'pointer',
          background:C.navy,color:C.bg,fontFamily:"'Inter',system-ui",fontSize:16,fontWeight:700,
          letterSpacing:'-.01em',boxShadow:'0 10px 24px rgba(0,0,128,.28)',
          display:'flex',alignItems:'center',justifyContent:'center',gap:8,
        }}>
          <IcoSparkle c={C.sky} s={16}/>
          Unlock full solution
        </button>
        <div style={{marginTop:8,textAlign:'center',fontSize:11,color:C.slate}}>
          7 days free · then $4.99/mo · cancel anytime
        </div>
        <div style={{height:16}}/>
      </div>

      <TabBar active="scan" onChange={()=>{}}/>
    </div>
  );
}

const Code = ({children}) => (
  <span style={{fontFamily:"'Geist Mono',monospace",background:C.skySoft,padding:'1px 5px',borderRadius:4,color:C.navy}}>{children}</span>
);

function ResultStep({n,title,body,bare=false}) {
  return (
    <div style={{marginTop:10,padding:16,background:bare?'transparent':C.white,borderRadius:18,boxShadow:bare?'none':`inset 0 0 0 1px ${C.hairline}`,display:'flex',gap:12,alignItems:'flex-start'}}>
      <div style={{
        width:28,height:28,borderRadius:14,flexShrink:0,background:C.skySoft,
        boxShadow:`inset 0 0 0 1.5px ${C.navy}`,color:C.navy,
        fontSize:13,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',
      }}>{n}</div>
      <div style={{flex:1}}>
        <div style={{fontSize:14,fontWeight:700,color:C.ink,letterSpacing:'-.01em'}}>{title}</div>
        <div style={{marginTop:4,fontSize:13,color:'rgb(60,74,90)',lineHeight:'20px'}}>{body}</div>
      </div>
    </div>
  );
}

// ── HISTORY TAB ───────────────────────────────────────────────
function HistoryScreen({ onTab }) {
  return (
    <div style={{position:'absolute',inset:0,background:C.bg,fontFamily:"'Inter',system-ui"}}>
      <div style={{position:'absolute',top:56,left:0,right:0,padding:'0 20px',display:'flex',alignItems:'center',zIndex:10}}>
        <span style={{fontSize:18,fontWeight:700,letterSpacing:'-.02em',color:C.ink}}>History</span>
        <div style={{flex:1}}/>
        <button style={{height:32,padding:'0 12px',borderRadius:10,border:'none',cursor:'pointer',background:C.skySoft,color:C.navy,fontSize:12,fontWeight:700,fontFamily:"'Inter',system-ui"}}>Filter</button>
      </div>
      <div style={{position:'absolute',top:100,left:0,right:0,bottom:82,overflowY:'auto',padding:'0 20px 24px'}}>
        {HISTORY_ITEMS.concat([
          {id:5,subject:'Physics',q:'F = ma, find F if m=5kg, a=3m/s²',ans:'F = 15 N',date:'May 18'},
          {id:6,subject:'AMC 10B',q:'How many of first 10 Fibonacci numbers are prime?',ans:'5',date:'May 17'},
        ]).map(item=>(
          <div key={item.id} style={{
            marginBottom:10,padding:'14px 16px',background:C.white,borderRadius:20,
            boxShadow:`inset 0 0 0 1px ${C.hairline}`,
            display:'flex',alignItems:'center',gap:12,cursor:'pointer',
          }}>
            <div style={{
              width:48,height:48,borderRadius:12,flexShrink:0,background:C.skySoft,
              display:'flex',alignItems:'center',justifyContent:'center',
              fontFamily:"'Geist Mono',monospace",fontSize:10,fontWeight:700,color:C.navy,
              textAlign:'center',lineHeight:'13px',
            }}>{item.subject.slice(0,4)}</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:'inline-flex',alignItems:'center',padding:'2px 7px',borderRadius:999,background:C.skySoft,marginBottom:4}}>
                <span style={{fontSize:10,fontWeight:700,color:C.navy}}>{item.subject}</span>
              </div>
              <div style={{fontFamily:"'Geist Mono',monospace",fontSize:12,fontWeight:600,color:C.ink,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{item.q}</div>
              <div style={{display:'flex',alignItems:'center',gap:8,marginTop:2}}>
                <span style={{fontFamily:"'Geist Mono',monospace",fontSize:13,fontWeight:700,color:C.navy}}>{item.ans}</span>
                <span style={{fontSize:10,color:C.slate}}>{item.date}</span>
              </div>
            </div>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke={C.slate} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ))}
      </div>
      <TabBar active="history" onChange={onTab}/>
    </div>
  );
}

// ── LIVE NOTES TAB ────────────────────────────────────────────
function NotesScreen({ onTab }) {
  return (
    <div style={{position:'absolute',inset:0,background:C.bg,fontFamily:"'Inter',system-ui"}}>
      <div style={{position:'absolute',top:56,left:0,right:0,padding:'0 20px',display:'flex',alignItems:'center',zIndex:10}}>
        <span style={{fontSize:18,fontWeight:700,letterSpacing:'-.02em',color:C.ink}}>Live Notes</span>
        <div style={{flex:1}}/>
        <button style={{
          height:32,padding:'0 12px',borderRadius:10,border:'none',cursor:'pointer',
          background:C.navy,color:C.bg,fontSize:12,fontWeight:700,fontFamily:"'Inter',system-ui",
          display:'flex',alignItems:'center',gap:5,
        }}>
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"/></svg>
          New note
        </button>
      </div>
      <div style={{
        position:'absolute',top:100,left:0,right:0,bottom:82,overflowY:'auto',
        padding:'0 20px 24px',
        display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,alignContent:'start',
        paddingTop:0,
      }}>
        {[...NOTES,
          {id:5,title:'AMC Formulas',preview:'Distance = rate × time\nWork = force × distance',color:'#E8F5E9'},
          {id:6,title:'Physics Notes',preview:'F = ma, KE = ½mv², PE = mgh',color:'#FFF3E0'},
        ].map(n=>(
          <div key={n.id} style={{
            padding:'14px 14px 12px',borderRadius:18,background:n.color,
            cursor:'pointer',boxShadow:'inset 0 0 0 1px rgba(10,10,42,.04)',minHeight:100,
          }}>
            <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:8}}>
              <NoteIcon c={C.navy} size={18}/>
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="5" r="1.5" fill={C.slate}/>
                <circle cx="12" cy="12" r="1.5" fill={C.slate}/>
                <circle cx="12" cy="19" r="1.5" fill={C.slate}/>
              </svg>
            </div>
            <div style={{fontSize:13,fontWeight:700,color:C.ink,marginBottom:4}}>{n.title}</div>
            <div style={{fontSize:11,color:C.slate,lineHeight:'16px',overflow:'hidden',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical'}}>{n.preview}</div>
          </div>
        ))}
      </div>
      <TabBar active="notes" onChange={onTab}/>
    </div>
  );
}

// ── ME TAB ───────────────────────────────────────────
function MeScreen({ onTab }) {
  return (
    <div style={{position:'absolute',inset:0,background:C.bg,fontFamily:"'Inter',system-ui"}}>
      <div style={{position:'absolute',top:62,left:0,right:0,bottom:82,overflowY:'auto',padding:'0 20px 24px'}}>
        <div style={{textAlign:'center',marginTop:20,marginBottom:24}}>
          <div style={{width:80,height:80,borderRadius:40,background:C.skySoft,margin:'0 auto 10px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,fontWeight:700,color:C.navy}}>JJ</div>
          <div style={{fontSize:20,fontWeight:700,color:C.ink}}>JJ</div>
          <div style={{fontSize:13,color:C.slate,marginTop:2}}>Premium Member</div>
          <div style={{display:'inline-flex',alignItems:'center',gap:6,marginTop:8,padding:'6px 12px',borderRadius:999,background:C.navy,color:C.bg,fontSize:12,fontWeight:700}}>
            <IcoFlame c={C.sky}/> 4-day streak · 3 free scans
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10,marginBottom:20}}>
          {[['12','Questions solved'],['4','Day streak'],['6','Notes saved']].map(([v,l])=>(
            <div key={l} style={{padding:'14px 10px',background:C.white,borderRadius:18,textAlign:'center',boxShadow:`inset 0 0 0 1px ${C.hairline}`}}>
              <div style={{fontSize:22,fontWeight:700,color:C.navy}}>{v}</div>
              <div style={{fontSize:10,color:C.slate,marginTop:2,lineHeight:'14px'}}>{l}</div>
            </div>
          ))}
        </div>
        {[['Upgrade to Pro','→'],['Notifications',''],['Language','English'],['Help & Support',''],['Sign out','']].map(([l,r])=>(
          <div key={l} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 0',borderBottom:`1px solid ${C.hairline}`,cursor:'pointer'}}>
            <span style={{fontSize:14,fontWeight:l==='Upgrade to Pro'?700:500,color:l==='Upgrade to Pro'?C.navy:C.ink}}>{l}</span>
            <span style={{fontSize:13,color:C.slate}}>{r}</span>
          </div>
        ))}
      </div>
      <TabBar active="me" onChange={onTab}/>
    </div>
  );
}

Object.assign(window,{ResultScreen,HistoryScreen,NotesScreen,MeScreen,Code,ResultStep});
