'use client'
import Link from 'next/link'

export default function Dashboard() {
  const metrics = [
    { label: 'Active Drones', value: '8', sub: '2 on mission' },
    { label: 'Flight Hours', value: '1,247', sub: 'This month' },
    { label: 'Battery Alerts', value: '3', sub: 'Needs attention' },
    { label: 'Missions Today', value: '12', sub: '4 completed' },
  ]

  const drones = [
    { id: 'DRN-001', name: 'Falcon X1', status: 'Active', battery: 87 },
    { id: 'DRN-002', name: 'Raptor V2', status: 'Charging', battery: 45 },
    { id: 'DRN-003', name: 'Shadow Pro', status: 'Maintenance', battery: 12 },
    { id: 'DRN-004', name: 'Eagle Eye', status: 'Active', battery: 92 },
  ]

  return (
    <main style={{background:'#020817',minHeight:'100vh',color:'white',padding:'16px'}}>
      <div style={{marginBottom:'24px'}}>
        <h1 style={{color:'#0ea5e9',fontSize:'24px',marginBottom:'8px'}}>FLEET OVERVIEW</h1>
        <p style={{color:'#94a3b8',fontSize:'14px'}}>Welcome back, Operator.</p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginBottom:'24px'}}>
        {metrics.map((m,i) => (
          <div key={i} style={{background:'rgba(15,23,42,0.8)',border:'1px solid rgba(14,165,233,0.2)',borderRadius:'16px',padding:'16px'}}>
            <div style={{color:'#0ea5e9',fontSize:'22px',fontWeight:'900'}}>{m.value}</div>
            <div style={{color:'white',fontSize:'12px',marginTop:'4px'}}>{m.label}</div>
            <div style={{color:'#94a3b8',fontSize:'11px'}}>{m.sub}</div>
          </div>
        ))}
      </div>

      <div style={{background:'rgba(15,23,42,0.8)',border:'1px solid rgba(14,165,233,0.2)',borderRadius:'16px',marginBottom:'24px'}}>
        <div style={{padding:'16px',borderBottom:'1px solid rgba(14,165,233,0.1)'}}>
          <h2 style={{color:'white',fontSize:'16px'}}>ACTIVE FLEET</h2>
        </div>
        {drones.map((d,i) => (
          <div key={i} style={{padding:'16px',borderBottom:'1px solid rgba(14,165,233,0.05)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{color:'#0ea5e9',fontSize:'12px',fontFamily:'monospace'}}>{d.id}</div>
              <div style={{color:'white',fontSize:'14px'}}>{d.name}</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{
                padding:'4px 10px',
                borderRadius:'999px',
                fontSize:'11px',
                background: d.status==='Active' ? 'rgba(34,197,94,0.2)' : d.status==='Charging' ? 'rgba(234,179,8,0.2)' : 'rgba(239,68,68,0.2)',
                color: d.status==='Active' ? '#4ade80' : d.status==='Charging' ? '#facc15' : '#f87171',
                marginBottom:'4px'
              }}>{d.status}</div>
              <div style={{color:'#94a3b8',fontSize:'11px'}}>{d.battery}% battery</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
        {[
          {label:'Flight Logs', href:'/dashboard/flights'},
          {label:'Drones', href:'/dashboard/drones'},
          {label:'Batteries', href:'/dashboard/batteries'},
          {label:'Maintenance', href:'/dashboard/maintenance'},
        ].map((item,i) => (
          <Link key={i} href={item.href} style={{background:'rgba(14,165,233,0.1)',border:'1px solid rgba(14,165,233,0.3)',color:'#0ea5e9',padding:'10px 16px',borderRadius:'10px',fontSize:'13px',textDecoration:'none'}}>
            {item.label}
          </Link>
        ))}
      </div>
    </main>
  )
}
