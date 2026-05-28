'use client'

export default function Home() {
  return (
    <main style={{background:'#020817',minHeight:'100vh',color:'white'}}>

      <nav style={{position:'fixed',top:0,width:'100%',background:'rgba(2,8,23,0.9)',borderBottom:'1px solid rgba(14,165,233,0.1)',padding:'16px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',zIndex:50,boxSizing:'border-box'}}>
        <img src="/droneops-apps/logo.png" alt="DroneOps" style={{height:'40px'}} />
        <div style={{display:'flex',gap:'12px'}}>
          <a href="#features" style={{color:'#94a3b8',textDecoration:'none',fontSize:'14px'}}>Features</a>
          <a href="/droneops-apps/dashboard/" style={{background:'#0ea5e9',color:'white',padding:'8px 16px',borderRadius:'8px',textDecoration:'none',fontSize:'14px'}}>Get Started</a>
        </div>
      </nav>

      <section style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'24px',paddingTop:'100px'}}>
        <img src="/droneops-apps/logo.png" alt="DroneOps Logo" style={{width:'200px',marginBottom:'32px'}} />
        <div style={{background:'rgba(14,165,233,0.1)',border:'1px solid rgba(14,165,233,0.2)',borderRadius:'999px',padding:'8px 20px',marginBottom:'24px'}}>
          <span style={{color:'#0ea5e9',fontSize:'13px'}}>Next Generation Fleet Management</span>
        </div>
        <h1 style={{fontSize:'42px',fontWeight:'900',marginBottom:'16px',lineHeight:'1.1'}}>
          COMMAND YOUR<br/>
          <span style={{color:'#0ea5e9'}}>DRONE FLEET</span>
        </h1>
        <p style={{color:'#94a3b8',fontSize:'16px',maxWidth:'500px',marginBottom:'32px',lineHeight:'1.6'}}>
          The most advanced drone fleet management platform. Monitor, control, and optimize your entire drone operation.
        </p>
        <a href="/droneops-apps/dashboard/" style={{background:'#0ea5e9',color:'white',padding:'16px 32px',borderRadius:'12px',textDecoration:'none',fontSize:'16px',fontWeight:'700',marginBottom:'16px',display:'block'}}>
          LAUNCH DASHBOARD
        </a>
        <a href="#features" style={{color:'#94a3b8',fontSize:'14px',textDecoration:'none'}}>
          See Features ↓
        </a>
      </section>

      <section id="features" style={{padding:'60px 24px'}}>
        <h2 style={{textAlign:'center',fontSize:'28px',fontWeight:'900',marginBottom:'40px',color:'white'}}>EVERYTHING YOU NEED</h2>
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
      </section>

      <section style={{padding:'60px 24px',textAlign:'center'}}>
        <div style={{background:'rgba(15,23,42,0.8)',border:'1px solid rgba(14,165,233,0.2)',borderRadius:'24px',padding:'40px 24px',maxWidth:'500px',margin:'0 auto'}}>
          <h2 style={{fontSize:'24px',fontWeight:'900',marginBottom:'16px'}}>READY TO TAKE COMMAND?</h2>
          <p style={{color:'#94a3b8',fontSize:'14px',marginBottom:'24px'}}>Join 500+ drone companies already using DroneOps.</p>
          <a href="/droneops-apps/dashboard/" style={{background:'#0ea5e9',color:'white',padding:'14px 32px',borderRadius:'12px',textDecoration:'none',fontSize:'15px',fontWeight:'700'}}>
            START FREE TRIAL
          </a>
        </div>
      </section>

      <footer style={{padding:'24px',borderTop:'1px solid rgba(14,165,233,0.1)',textAlign:'center'}}>
        <span style={{color:'#94a3b8',fontSize:'13px'}}>© 2025 DroneOps. All rights reserved.</span>
      </footer>

    </main>
  )
}
