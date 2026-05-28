'use client'

export default function Home() {
  return (
    <main style={{background:'#020817',minHeight:'100vh',color:'white',fontFamily:'Inter,sans-serif'}}>

      <nav style={{position:'fixed',top:0,left:0,right:0,background:'rgba(2,8,23,0.95)',borderBottom:'1px solid rgba(14,165,233,0.2)',padding:'16px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',zIndex:999}}>
        <img src="/droneops-apps/logo.png" alt="DroneOps" style={{height:'36px'}} />
        <a href="/droneops-apps/dashboard/" style={{background:'#0ea5e9',color:'white',padding:'8px 20px',borderRadius:'8px',textDecoration:'none',fontSize:'14px',fontWeight:'600'}}>Get Started</a>
      </nav>

      <div style={{height:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'24px',marginTop:'0'}}>
        <img src="/droneops-apps/logo.png" alt="DroneOps" style={{width:'180px',marginBottom:'24px'}} />
        <p style={{color:'#0ea5e9',fontSize:'14px',marginBottom:'16px',border:'1px solid rgba(14,165,233,0.3)',padding:'6px 16px',borderRadius:'999px'}}>Next Generation Fleet Management</p>
        <h1 style={{fontSize:'36px',fontWeight:'900',color:'white',marginBottom:'12px',lineHeight:'1.2'}}>COMMAND YOUR</h1>
        <h1 style={{fontSize:'36px',fontWeight:'900',color:'#0ea5e9',marginBottom:'20px',lineHeight:'1.2'}}>DRONE FLEET</h1>
        <p style={{color:'#94a3b8',fontSize:'15px',maxWidth:'400px',marginBottom:'32px',lineHeight:'1.6'}}>The most advanced drone fleet management platform for professional operators.</p>
        <a href="/droneops-apps/dashboard/" style={{background:'#0ea5e9',color:'white',padding:'14px 36px',borderRadius:'12px',textDecoration:'none',fontSize:'16px',fontWeight:'700',display:'inline-block',marginBottom:'12px'}}>LAUNCH DASHBOARD</a>
        <a href="#features" style={{color:'#94a3b8',fontSize:'13px',textDecoration:'none',display:'block'}}>See Features ↓</a>
      </div>

      <div style={{padding:'20px 24px',display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'12px',maxWidth:'700px',margin:'0 auto'}}>
        {[
          {value:'10K+',label:'Drones'},
          {value:'99.9%',label:'Uptime'},
          {value:'500+',label:'Companies'},
          {value:'2M+',label:'Hours'},
        ].map((s,i) => (
          <div key={i} style={{background:'rgba(15,23,42,0.8)',border:'1px solid rgba(14,165,233,0.2)',borderRadius:'12px',padding:'16px',textAlign:'center'}}>
            <div style={{color:'#0ea5e9',fontSize:'18px',fontWeight:'900'}}>{s.value}</div>
            <div style={{color:'#94a3b8',fontSize:'11px',marginTop:'4px'}}>{s.label}</div>
          </div>
        ))}
      </div>

      <div id="features" style={{padding:'60px 24px'}}>
        <h2 style={{textAlign:'center',fontSize:'26px',fontWeight:'900',marginBottom:'8px',color:'white'}}>EVERYTHING YOU NEED</h2>
        <p style={{textAlign:'center',color:'#94a3b8',fontSize:'14px',marginBottom:'40px'}}>A complete suite of tools for professional drone fleet management</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px',maxWidth:'600px',margin:'0 auto'}}>
          {[
            {icon:'🛸',title:'Fleet Overview',desc:'Real-time drone monitoring'},
            {icon:'🔋',title:'Battery Analytics',desc:'Health and charge tracking'},
            {icon:'📊',title:'Flight Analytics',desc:'Data insights and reports'},
            {icon:'🔧',title:'Maintenance',desc:'Automated scheduling'},
            {icon:'📋',title:'Flight Logs',desc:'Complete mission history'},
            {icon:'⚠️',title:'Incidents',desc:'Report and track issues'},
          ].map((f,i) => (
            <div key={i} style={{background:'rgba(15,23,42,0.8)',border:'1px solid rgba(14,165,233,0.2)',borderRadius:'16px',padding:'20px'}}>
              <div style={{fontSize:'28px',marginBottom:'8px'}}>{f.icon}</div>
              <div style={{color:'white',fontWeight:'700',fontSize:'14px',marginBottom:'4px'}}>{f.title}</div>
              <div style={{color:'#94a3b8',fontSize:'12px'}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{padding:'40px 24px',textAlign:'center'}}>
        <div style={{background:'rgba(15,23,42,0.8)',border:'1px solid rgba(14,165,233,0.2)',borderRadius:'24px',padding:'40px 24px',maxWidth:'500px',margin:'0 auto'}}>
          <h2 style={{fontSize:'22px',fontWeight:'900',marginBottom:'12px',color:'white'}}>READY TO TAKE COMMAND?</h2>
          <p style={{color:'#94a3b8',fontSize:'14px',marginBottom:'24px'}}>Join 500+ drone companies already using DroneOps.</p>
          <a href="/droneops-apps/dashboard/" style={{background:'#0ea5e9',color:'white',padding:'14px 32px',borderRadius:'12px',textDecoration:'none',fontSize:'15px',fontWeight:'700',display:'inline-block'}}>START FREE TRIAL</a>
        </div>
      </div>

      <footer style={{padding:'24px',borderTop:'1px solid rgba(14,165,233,0.1)',textAlign:'center'}}>
        <span style={{color:'#94a3b8',fontSize:'13px'}}>© 2025 DroneOps. All rights reserved.</span>
      </footer>

    </main>
  )
}
