export async function POST(request) {
  try {
    const { email, full_name } = await request.json()

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer re_re_5qqPt5Dh_L4ejmYY5RHAorQ11oaypAg9U`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'DroneOps <onboarding@resend.dev>',
        to: email,
        subject: 'Welcome to DroneOps! 🛸',
        html: `
          <div style="background:#020817;padding:40px;font-family:Arial,sans-serif">
            <h1 style="color:#0ea5e9;font-size:28px;margin-bottom:16px">Welcome to DroneOps! 🛸</h1>
            <p style="color:#94a3b8;font-size:16px;margin-bottom:16px">Hi ${full_name},</p>
            <p style="color:#94a3b8;font-size:16px;margin-bottom:24px">Thank you for joining DroneOps — the most advanced drone fleet management platform.</p>
            <p style="color:#94a3b8;font-size:16px;margin-bottom:24px">Your account is ready. Start managing your drone fleet today!</p>
            <a href="https://droneops-app.vercel.app/login" style="display:inline-block;background:#0ea5e9;color:white;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:16px">
              LAUNCH DRONEOPS
            </a>
            <p style="color:#334155;font-size:12px;margin-top:32px">© 2025 DroneOps. All rights reserved.</p>
          </div>
        `
      })
    })

    const data = await response.json()
    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}
