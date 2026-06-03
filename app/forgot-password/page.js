'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleReset() {
    if (!email) {
      setError('Please enter your email')
      return
    }
    setLoading(true)
    setError('')
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://droneops-app.vercel.app/reset-password',
      })
      if (error) throw error
      setSent(true)
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <main style={{background:'#020817',color:'white',fontFamily:'Inter,sans-serif',minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'20px'}}>
      <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'24px'}}>
        <div style={{width:'36px',height:'36px',background:'linear-gradient(135deg,#0ea5e9,#06b6d4)',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'900',fontSize:'16px',color:'white'}}>D</div>
        <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:'700',fontSize:'16px',letterSpacing:'2px'}}>DRONEOPS</span>
      </div>

      <div style={{background:'rgba(15,23,42,0.9)',border:'1px solid rgba(14,165,233,0.15)',borderRadius:'20px',padding:'24px 20px',width:'100%',maxWidth:'360px'}}>
        <div style={{width:'64px',height:'64px',background:'rgba(14,165,233,0.1)',border:'1px solid rgba(14,165,233,0.2)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:'28px'}}>🔐</div>

        <h1 style={{fontFamily:'Orbitron,sans-serif',fontSize:'16px',fontWeight:'900',letterSpacing:'1px',marginBottom:'8px',textAlign:'center'}}>RESET PASSWORD</h1>
        <p style={{color:'#334155',fontSize:'12px',textAlign:'center',marginBottom:'24px',lineHeight:'1.6'}}>Enter your email and we'll send you a reset link</p>

        {sent ? (
          <div style={{background:'rgba(34,197,94,0.1)',border:'1px solid rgba(34,197,94,0.2)',borderRadius:'12px',padding:'16px',textAlign:'center'}}>
            <div style={{fontSize:'32px',marginBottom:'8px'}}>📧</div>
            <div style={{color:'#4ade80',fontFamily:'Orbitron,sans-serif',fontSize:'13px',fontWeight:'700',marginBottom:'8px'}}>EMAIL SENT!</div>
            <div style={{color:'#94a3b8',fontSize:'12px'}}>Check your inbox for the reset link</div>
          </div>
        ) : (
          <>
            {error && (
              <div style={{background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.2)',borderRadius:'8px',padding:'10px',marginBottom:'14px',color:'#f87171',fontSize:'12px',textAlign:'center'}}>
                {error}
              </div>
            )}

            <label style={{color:'#94a3b8',fontSize:'11px',letterSpacing:'0.5px',marginBottom:'6px',display:'block'}}>EMAIL ADDRESS</label>
            <input
              style={{width:'100%',background:'rgba(2,8,23,0.8)',border:'1px solid rgba(14,165,233,0.15)',borderRadius:'10px',padding:'12px 14px',color:'white',fontSize:'14px',marginBottom:'20px',outline:'none',boxSizing:'border-box'}}
              type="email"
              placeholder="operator@droneops.io"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <button
              onClick={handleReset}
              disabled={loading}
              style={{width:'100%',background:'linear-gradient(135deg,#0ea5e9,#06b6d4)',color:'white',padding:'14px',borderRadius:'10px',fontFamily:'Orbitron,sans-serif',fontSize:'12px',fontWeight:'700',letterSpacing:'1px',border:'none',cursor:'pointer',marginBottom:'16px',opacity:loading ? 0.7 : 1}}
            >
              {loading ? 'SENDING...' : 'SEND RESET LINK'}
            </button>
          </>
        )}

        <div style={{textAlign:'center',color:'#334155',fontSize:'12px',marginTop:'16px'}}>
          Remember your password?{' '}
          <a href="/login" style={{color:'#0ea5e9',textDecoration:'none',fontWeight:'600'}}>Sign in</a>
        </div>
      </div>

      <a href="/" style={{color:'#334155',fontSize:'12px',textDecoration:'none',marginTop:'20px'}}>← Back to Home</a>
    </main>
  )
}
