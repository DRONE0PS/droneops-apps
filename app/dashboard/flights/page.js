'use client'

export default function Flights() {
  const flights = [
    { id: 'FLT-001', drone: 'Falcon X1', pilot: 'J. Martinez', date: '2025-05-22', duration: '47m', distance: '12.4km', status: 'Completed' },
    { id: 'FLT-002', drone: 'Eagle Eye', pilot: 'S. Johnson', date: '2025-05-22', duration: '1h 12m', distance: '28.7km', status: 'Completed' },
    { id: 'FLT-003', drone: 'Raptor V2', pilot: 'A. Chen', date: '2025-05-21', duration: '33m', distance: '8.1km', status: 'Aborted' },
    { id: 'FLT-004', drone: 'Shadow Pro', pilot: 'K. Williams', date: '2025-05-21', duration: '2h 05m', distance: '45.2km', status: 'Completed' },
    { id: 'FLT-005', drone: 'Falcon X1', pilot: 'J. Martinez', date: '2025-05-20', duration: '58m', distance: '19.3km', status: 'Completed' },
  ]

  return (
    <main style={{background:'#020817',minHeight:'100vh',color:'white',padding:'16px'}}>

      <a href="/droneops-apps/dashboard/" style={{color:'#0ea5e9',fontSize:'14px',textDecoration:'none',display:'block',marginBottom:'16px'}}>
        ← Back to Dashboard
      </a>

      <div style={{marginBottom:'24px'}}>
        <h1 style={{color:'#0ea5e9',fontSize:'24px',marginBottom:'8px'}}>FLIGHT LOGS</h1>
        <p style={{color:'#94a3b8',fontSize:'14px'}}>Complete mission history</p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'12px',marginBottom:'24px'}}>
        {[
          {label:'Total Flights', value:'247'},
          {label:'Flight Hours', value:'1,247'},
          {label:'Total Distance', value:'8,432km'},
        ].map((s,i) => (
          <div key={i} style={{background:'rgba(15,23,42,0.8)',border:'1px solid rgba(14,165,233,0.2)',borderRadius:'16px',padding:'12px',textAlign:'center'}}>
            <div style={{color:'#0ea5e9',fontSize:'18px',fontWeight:'900'}}>{s.value}</div>
            <div style={{color:'#94a3b8',fontSize:'11px',marginTop:'4px'}}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{background:'rgba(15,23,42,0.8)',border:'1px solid rgba(14,165,233,0.2)',borderRadius:'16px'}}>
        <div style={{padding:'16px',borderBottom:'1px solid rgba(14,165,233,0.1)'}}>
          <h2 style={{color:'white',fontSize:'16px'}}>RECENT MISSIONS</h2>
        </div>
        {flights.map((f,i) => (
          <div key={i} style={{padding:'16px',borderBottom:'1px solid rgba(14,165,233,0.05)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'8px'}}>
              <div style={{color:'#0ea5e9',fontSize:'12px',fontFamily:'monospace'}}>{f.id}</div>
              <div style={{
                padding:'3px 10px',
                borderRadius:'999px',
                fontSize:'11px',
                background: f.status==='Completed' ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)',
                color: f.status==='Completed' ? '#4ade80' : '#f87171',
              }}>{f.status}</div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <div style={{color:'white',fontSize:'14px',marginBottom:'2px'}}>{f.drone}</div>
                <div style={{color:'#94a3b8',fontSize:'12px'}}>Pilot: {f.pilot}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{color:'white',fontSize:'13px',marginBottom:'2px'}}>{f.duration}</div>
                <div style={{color:'#94a3b8',fontSize:'12px'}}>{f.distance}</div>
              </div>
            </div>
            <div style={{color:'#475569',fontSize:'11px',marginTop:'6px'}}>{f.date}</div>
          </div>
        ))}
      </div>

    </main>
  )
}
