'use client'
import Link from 'next/link'
export default function Dashboard() {
  return (
    <main style={{background:'#020817',minHeight:'100vh',color:'white',padding:'20px'}}>
      <h1 style={{color:'#0ea5e9',fontFamily:'Orbitron'}}>DRONEOPS DASHBOARD</h1>
      <p style={{color:'#94a3b8'}}>Welcome back, Operator.</p>
      <Link href="/" style={{color:'#0ea5e9'}}>Back to Home</Link>
    </main>
  )
}
