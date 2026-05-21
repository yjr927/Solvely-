// Shared tokens, icons, and iPhone frame for Solvely prototype
// Colors exactly from Figma

const C = {
  bg: 'rgb(255,250,250)',
  navy: 'rgb(0,0,128)',
  sky: 'rgb(173,216,230)',
  skySoft: 'rgb(229,241,247)',
  slate: 'rgb(109,129,150)',
  ink: 'rgb(10,10,42)',
  white: 'rgb(255,255,255)',
  hairline: 'rgb(236,234,229)',
  line: 'rgb(214,229,238)',
  frameGray: 'rgb(242,242,247)',
};

// ── SVG Icons ──────────────────────────────────────────────────
const IcoCamera = ({c='#fff',s=26}) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <path d="M5 8.5h3.5l1.5-2.2h8l1.5 2.2H23a2 2 0 012 2v10.3a2 2 0 01-2 2H5a2 2 0 01-2-2V10.5a2 2 0 012-2z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="14" cy="14.5" r="4" stroke={c} strokeWidth="1.8"/>
  </svg>
);
const IcoSparkle = ({c='rgb(0,0,128)',s=9}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z"/>
  </svg>
);
const IcoBack = ({c='rgb(10,10,42)'}) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <path d="M15 5l-7 7 7 7" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcoCheck = ({c='#fff',s=13}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M5 12l5 5 9-11" stroke={c} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcoRefresh = ({c,s=17}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M18 3v4h-4M6 21v-4h4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IcoLock = ({c,s=16}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="5" y="11" width="14" height="9" rx="2.5" stroke={c} strokeWidth="1.8"/>
    <path d="M8 11V8a4 4 0 018 0v3" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IcoShare = ({c,s=17}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M12 4v12M12 4l-4 4M12 4l4 4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 14v4a2 2 0 002 2h10a2 2 0 002-2v-4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IcoFlame = ({c='#FF8A3D',s=14}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 3c1 4 5 5 5 10a5 5 0 11-10 0c0-2 1-3 2-4-.2 2 .8 3 2 3 0-3-1-5 1-9z"/>
  </svg>
);
const IcoFlashOn = ({s=22}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#FFD66B" stroke="#FFD66B" strokeWidth="0.5"/>
  </svg>
);
const IcoFlashOff = ({s=22}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none"/>
    <line x1="4" y1="4" x2="20" y2="20" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IcoClose = ({c='rgba(255,255,255,0.8)',s=20}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke={c} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IcoText = ({c,s=22}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="16" rx="2.5" stroke={c} strokeWidth="1.8"/>
    <path d="M7 9h10M7 13h6" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IcoGallery = ({c,s=22}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke={c} strokeWidth="1.8"/>
    <path d="M7 15l3-3 2 2 3-4 3 4" stroke={c} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
    <circle cx="9" cy="9.5" r="1.3" fill={c}/>
  </svg>
);

// Note icon from Figma (two-part parallelogram notebook)
const NoteIcon = ({c=C.slate,size=22}) => (
  <svg width={size} height={size} viewBox="0 0 27 24" fill="none">
    <svg x="5.625" y="2" width="16.875" height="17" viewBox="0 0 16.875 17" fill="none">
      <path d="M6.788 4.287C6.385 4.192 5.981 4.441 5.885 4.845C5.79 5.248 6.039 5.652 6.442 5.747L6.615 5.017L6.788 4.287ZM11.813 7.018C12.216 7.113 12.62 6.864 12.716 6.461C12.811 6.058 12.562 5.654 12.159 5.558L11.986 6.288L11.813 7.018ZM5.638 8.083C5.235 7.988 4.831 8.237 4.736 8.64C4.64 9.043 4.889 9.448 5.292 9.543L5.465 8.813L5.638 8.083ZM7.977 10.179C8.38 10.275 8.784 10.025 8.879 9.622C8.975 9.219 8.726 8.815 8.323 8.719L8.15 9.449L7.977 10.179ZM5.599 15.966L5.773 15.237L5.772 15.236L5.599 15.966ZM6.673 16.221L6.499 16.951L6.5 16.951L6.673 16.221ZM12.426 16.689L12.085 16.021L12.085 16.021L12.426 16.689ZM6.615 5.017L6.442 5.747L11.813 7.018L11.986 6.288L12.159 5.558L6.788 4.287L6.615 5.017ZM5.465 8.813L5.292 9.543L7.977 10.179L8.15 9.449L8.323 8.719L5.638 8.083L5.465 8.813ZM5.599 15.966L5.426 16.696L6.499 16.951L6.673 16.221L6.846 15.492L5.773 15.237L5.599 15.966ZM6.673 16.221L6.5 16.951C8 17.307 9.19 17.59 10.155 17.7C11.135 17.811 11.983 17.757 12.767 17.357L12.426 16.689L12.085 16.021C11.672 16.232 11.162 16.304 10.324 16.209C9.47 16.112 8.382 15.856 6.845 15.491L6.673 16.221ZM12.426 16.689L12.767 17.357C13.562 16.952 14.06 16.307 14.456 15.469C14.838 14.66 15.16 13.59 15.56 12.27L14.842 12.052L14.124 11.835C13.711 13.199 13.423 14.142 13.099 14.828C12.789 15.485 12.485 15.817 12.085 16.021L12.426 16.689ZM14.842 12.052L15.56 12.27L16.711 8.473L15.993 8.255L15.275 8.038L14.124 11.835L14.842 12.052ZM15.993 8.255L16.711 8.473C17.111 7.153 17.438 6.083 17.565 5.211C17.696 4.309 17.634 3.5 17.151 2.76L16.523 3.17L15.895 3.58C16.103 3.898 16.183 4.289 16.08 4.995C15.973 5.729 15.69 6.672 15.275 8.038L15.993 8.255ZM16.523 3.17L17.151 2.76C16.677 2.035 15.949 1.607 15.039 1.271C14.141 0.94 12.949 0.659 11.449 0.304L11.276 1.034L11.103 1.764C12.642 2.128 13.728 2.386 14.52 2.679C15.302 2.967 15.678 3.248 15.895 3.58L16.523 3.17ZM11.276 1.034L11.449 0.305L10.376 0.05L10.203 0.779L10.029 1.509L11.103 1.764L11.276 1.034ZM10.203 0.779L10.376 0.049C8.875-0.306 7.685-0.589 6.721-0.699C5.741-0.811 4.893-0.757 4.109-0.357L4.451 0.311L4.792 0.979C5.204 0.768 5.714 0.696 6.551 0.791C7.405 0.888 8.493 1.145 10.03 1.509L10.203 0.779ZM4.451 0.311L4.11-0.357C3.314 0.049 2.816 0.694 2.42 1.532C2.037 2.341 1.715 3.41 1.314 4.73L2.032 4.948L2.75 5.166C3.163 3.802 3.452 2.858 3.776 2.172C4.086 1.515 4.39 1.184 4.791 0.979L4.451 0.311ZM2.032 4.948L1.314 4.731L0.164 8.528L0.882 8.745L1.6 8.963L2.75 5.166L2.032 4.948ZM0.882 8.745L0.164 8.528C-0.236 9.847-0.563 10.917-0.69 11.79C-0.821 12.691-0.759 13.501-0.275 14.241L0.352 13.83L0.98 13.42C0.772 13.102 0.692 12.711 0.794 12.006C0.902 11.272 1.186 10.328 1.6 8.963L0.882 8.745ZM0.352 13.83L-0.276 14.241C0.198 14.965 0.927 15.393 1.836 15.729C2.735 16.06 3.927 16.341 5.426 16.696L5.599 15.966L5.772 15.236C4.234 14.872 3.148 14.614 2.355 14.321C1.573 14.033 1.197 13.752 0.98 13.42L0.352 13.83Z" fill={c}/>
    </svg>
    <svg x="0" y="5" width="11.25" height="15" viewBox="0 0 11.25 15" fill="none">
      <path d="M11.427 14.675C11.829 14.577 12.077 14.172 11.979 13.769C11.881 13.367 11.476 13.12 11.073 13.217L11.25 13.946L11.427 14.675ZM10.179 14.206L10.355 14.935L10.356 14.935L10.179 14.206ZM4.439 14.683L4.092 15.348L4.093 15.348L4.439 14.683ZM2.028 9.955L2.747 9.742L2.747 9.742L2.028 9.955ZM0.88 6.083L1.599 5.87L1.599 5.87L0.88 6.083ZM0.351 0.899L0.983 1.303L0.983 1.303L0.351 0.899ZM11.25 13.946L11.073 13.217L10.002 13.477L10.179 14.206L10.356 14.935L11.427 14.675L11.25 13.946ZM10.179 14.206L10.003 13.477C8.469 13.848 7.385 14.109 6.534 14.208C5.7 14.305 5.196 14.232 4.786 14.018L4.439 14.683L4.093 15.348C4.878 15.758 5.727 15.812 6.707 15.698C7.67 15.586 8.859 15.297 10.355 14.935L10.179 14.206ZM4.439 14.683L4.786 14.018C4.388 13.81 4.083 13.472 3.772 12.798C3.448 12.097 3.159 11.132 2.747 9.742L2.028 9.955L1.309 10.168C1.709 11.515 2.03 12.604 2.41 13.427C2.803 14.277 3.298 14.934 4.092 15.348L4.439 14.683ZM2.028 9.955L2.747 9.742L1.599 5.87L0.88 6.083L0.161 6.296L1.309 10.168L2.028 9.955ZM0.88 6.083L1.599 5.87C1.186 4.479 0.902 3.515 0.795 2.763C0.691 2.039 0.772 1.633 0.983 1.303L0.351 0.899L-0.281 0.495C-0.759 1.243-0.821 2.061-0.69 2.975C-0.564 3.862-0.239 4.951 0.161 6.297L0.88 6.083ZM0.351 0.899L0.983 1.303C1.123 1.084 1.361 0.928 1.866 0.838C2.396 0.745 3.062 0.75 3.938 0.75V0V-0.75C3.125-0.75 2.297-0.761 1.604-0.639C0.887-0.512 0.175-0.219-0.281 0.495L0.351 0.899Z" fill={c}/>
    </svg>
  </svg>
);

// Solvely logo mark
const SolvelyMark = ({size=22}) => (
  <svg width={size} height={size} viewBox="0 0 40 40">
    <rect x="1" y="1" width="38" height="38" rx="11" fill={C.navy}/>
    <path d="M27.5 14c-1.6-1.6-4-2.5-6.6-2.5-4 0-7 2.1-7 5.2 0 3.1 2.6 4.5 6.6 5.3 3 .6 4.4 1.1 4.4 2.5 0 1.4-1.7 2.4-4.3 2.4-2.5 0-4.6-.9-6.2-2.4"
      stroke={C.sky} strokeWidth="2.8" strokeLinecap="round" fill="none"/>
  </svg>
);

// iOS Status bar
const StatusBar = ({dark=false}) => {
  const fg = dark ? '#fff' : C.ink;
  return (
    <div style={{
      position:'absolute',top:0,left:0,right:0,height:62,zIndex:20,
      display:'flex',alignItems:'center',justifyContent:'space-between',
      padding:'21px 24px 0',
    }}>
      <span style={{fontFamily:"'Inter',system-ui",fontWeight:700,fontSize:17,color:fg}}>9:41</span>
      <div style={{display:'flex',gap:7,alignItems:'center'}}>
        {/* signal */}
        <svg width="19" height="12" viewBox="0 0 19 12">
          {[0,1,2,3].map((i)=>(
            <rect key={i} x={i*4.8} y={12-(i+1)*3} width="3.2" height={(i+1)*3} rx="0.7" fill={fg}/>
          ))}
        </svg>
        {/* wifi */}
        <svg width="17" height="12" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={fg}/>
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={fg}/>
          <circle cx="8.5" cy="10.5" r="1.5" fill={fg}/>
        </svg>
        {/* battery */}
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x=".5" y=".5" width="23" height="12" rx="3.5" stroke={fg} strokeOpacity=".35" fill="none"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill={fg}/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={fg} fillOpacity=".4"/>
        </svg>
      </div>
    </div>
  );
};

// Dynamic island
const DynamicIsland = () => (
  <div style={{
    position:'absolute',top:11,left:'50%',transform:'translateX(-50%)',
    width:126,height:37,borderRadius:24,background:'#000',zIndex:50,
  }}/>
);

// Home indicator
const HomeIndicator = ({dark=false}) => (
  <div style={{
    position:'absolute',bottom:0,left:0,right:0,height:34,zIndex:20,
    display:'flex',justifyContent:'center',alignItems:'flex-end',paddingBottom:8,
    pointerEvents:'none',
  }}>
    <div style={{
      width:139,height:5,borderRadius:100,
      background:dark?'rgba(255,255,255,0.7)':'rgba(0,0,0,0.25)',
    }}/>
  </div>
);

// iPhone frame wrapper
const Phone = ({children, dark=false}) => (
  <div style={{
    width:390,height:844,borderRadius:48,overflow:'hidden',
    position:'relative',background:dark?'#000':C.frameGray,
    boxShadow:'0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
    fontFamily:"'Inter',system-ui,sans-serif",
    WebkitFontSmoothing:'antialiased',
    flexShrink:0,
  }}>
    <DynamicIsland/>
    <StatusBar dark={dark}/>
    {children}
    <HomeIndicator dark={dark}/>
  </div>
);

// Icon button
const IconBtn = ({children,onClick,style={}}) => (
  <button onClick={onClick} style={{
    width:40,height:40,borderRadius:14,border:'none',cursor:'pointer',
    background:C.white,boxShadow:`inset 0 0 0 1px ${C.hairline}`,
    display:'flex',alignItems:'center',justifyContent:'center',padding:0,
    ...style,
  }}>{children}</button>
);

// Tab bar (Scan / History / Live Notes / Me)
const TabBar = ({active,onChange}) => {
  const tabs = [
    { id:'scan', label:'Scan', icon: <IcoCamera c={active==='scan'?C.navy:C.slate} s={22}/> },
    { id:'history', label:'History', icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="2.5" stroke={active==='history'?C.navy:C.slate} strokeWidth="1.8"/>
        <path d="M8 8h8M8 12h8M8 16h5" stroke={active==='history'?C.navy:C.slate} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    )},
    { id:'notes', label:'Live Notes', icon: <NoteIcon c={active==='notes'?C.navy:C.slate} size={22}/> },
    { id:'me', label:'Me', icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke={active==='me'?C.navy:C.slate} strokeWidth="1.8"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={active==='me'?C.navy:C.slate} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    )},
  ];
  return (
    <div style={{
      position:'absolute',bottom:0,left:0,right:0,
      height:82,background:C.white,
      borderTop:`1px solid ${C.hairline}`,
      display:'flex',alignItems:'flex-start',justifyContent:'space-around',
      paddingTop:10,paddingBottom:0,zIndex:30,
    }}>
      {tabs.map(t=>(
        <button key={t.id} onClick={()=>onChange(t.id)} style={{
          flex:1,border:'none',background:'transparent',cursor:'pointer',
          display:'flex',flexDirection:'column',alignItems:'center',gap:4,
          padding:0,
        }}>
          {t.icon}
          <span style={{
            fontSize:10,fontWeight:t.id===active?700:500,
            color:t.id===active?C.navy:C.slate,
            fontFamily:"'Inter',system-ui",
          }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
};

Object.assign(window,{C,IcoCamera,IcoSparkle,IcoBack,IcoCheck,IcoRefresh,IcoLock,IcoShare,IcoFlame,IcoFlashOn,IcoFlashOff,IcoClose,IcoText,IcoGallery,NoteIcon,SolvelyMark,StatusBar,DynamicIsland,HomeIndicator,Phone,IconBtn,TabBar});
