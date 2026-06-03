'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin() {
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    setLoading(true)
    setError('')
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      if (data.user) {
        window.location.href = '/dashboard'
      }
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <main style={{background:'#020817',color:'white',fontFamily:'Inter,sans-serif',minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'20px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:'30%',left:'50%',transform:'translateX(-50%)',width:'300px',height:'300px',background:'radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 70%)',pointerEvents:'none'}}></div>

      <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'24px',position:'relative',zIndex:1}}>
        <div style={{width:'36px',height:'36px',background:'linear-gradient(135deg,#0ea5e9,#06b6d4)',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'900',fontSize:'16px',color:'white'}}>D</div>
        <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:'700',fontSize:'16px',letterSpacing:'2px'}}>DRONEOPS</span>
      </div>

      <div style={{background:'rgba(15,23,42,0.9)',border:'1px solid rgba(14,165,233,0.15)',borderRadius:'20px',padding:'24px 20px',width:'100%',maxWidth:'360px',position:'relative',zIndex:1}}>
        <h1 style={{fontFamily:'Orbitron,sans-serif',fontSize:'16px',fontWeight:'900',letterSpacing:'1px',marginBottom:'4px',textAlign:'center'}}>WELCOME BACK</h1>
        <p style={{color:'#334155',fontSize:'12px',textAlign:'center',marginBottom:'24px'}}>Sign in to your DroneOps account</p>

        {error && (
          <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:'8px',padding:'10px',marginBottom:'14px',color:'#f87171',fontSize:'12px',textAlign:'center'}}>
            {error}
          </div>
        )}

        <label style={{color:'#94a3b8',fontSize:'11px',letterSpacing:'0.5px',marginBottom:'6px',display:'block'}}>EMAIL ADDRESS</label>
        <input
          style={{width:'100%',background:'rgba(2,8,23,0.8)',border:'1px solid rgba(14,165,233,0.15)',borderRadius:'10px',padding:'12px 14px',color:'white',fontSize:'14px',marginBottom:'14px',outline:'none',boxSizing:'border-box'}}
          type="email"
          placeholder="operator@droneops.io"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label style={{color:'#94a3b8',fontSize:'11px',letterSpacing:'0.5px',marginBottom:'6px',display:'block'}}>PASSWORD</label>
        <input
          style={{width:'100%',background:'rgba(2,8,23,0.8)',border:'1px solid rgba(14,165,233,0.15)',borderRadius:'10px',padding:'12px 14px',color:'white',fontSize:'14px',marginBottom:'8px',outline:'none',boxSizing:'border-box'}}
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <div style={{display:'flex',justifyContent:'flex-end',marginBottom:'20px'}}>
          <a href="/forgot-password" style={{color:'#0ea5e9',fontSize:'12px',textDecoration:'none'}}>Forgot password?</a>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{width:'100%',background:'linear-gradient(135deg,#0ea5e9,#06b6d4)',color:'white',padding:'14px',borderRadius:'10px',fontFamily:'Orbitron,sans-serif',fontSize:'12px',fontWeight:'700',letterSpacing:'1px',border:'none',cursor:'pointer',marginBottom:'16px',opacity:loading ? 0.7 : 1}}
        >
          {loading ? 'SIGNING IN...' : 'SIGN IN'}
        </button>

        <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'16px'}}>
          <div style={{flex:1,height:'1px',background:'rgba(14,165,233,0.08)'}}></div>
          <span style={{color:'#334155',fontSize:'11px'}}>OR</span>
          <div style={{flex:1,height:'1px',background:'rgba(14,165,233,0.08)'}}></div>
        </div>

        <div style={{textAlign:'center',color:'#334155',fontSize:'12px'}}>
          Don't have an account?{' '}
          <a href="/signup" style={{color:'#0ea5e9',textDecoration:'none',fontWeight:'600'}}>Create account</a>
        </div>
      </div>

      <a href="/" style={{color:'#334155',fontSize:'12px',textDecoration:'none',marginTop:'20px',position:'relative',zIndex:1}}>← Back to Home</a>
    </main>
  )
}
