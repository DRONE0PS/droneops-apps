'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-[#0ea5e9]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0ea5e9] flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-['Orbitron'] text-white font-bold text-lg tracking-wider">
              DRONEOPS
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#94a3b8] hover:text-[#0ea5e9] transition-colors text-sm">Features</a>
            <a href="#stats" className="text-[#94a3b8] hover:text-[#0ea5e9] transition-colors text-sm">Stats</a>
            <a href="#testimonials" className="text-[#94a3b8] hover:text-[#0ea5e9] transition-colors text-sm">Testimonials</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
              Login
            </Link>
            <Link href="/dashboard" className="bg-[#0ea5e9] hover:bg-[#38bdf8] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 glow">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0ea5e9]/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#06b6d4]/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0ea5e9]/5 rounded-full blur-[100px]" />
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-[#0ea5e9] rounded-full animate-pulse" />
              <span className="text-[#0ea5e9] text-sm font-medium">Next Generation Fleet Management</span>
            </div>

            <h1 className="font-['Orbitron'] text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              COMMAND YOUR
              <span className="gradient-text block">DRONE FLEET</span>
            </h1>

            <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              The most advanced drone fleet management platform. Monitor, control, and optimize your entire drone operation from one cinematic command center.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard" className="w-full sm:w-auto bg-[#0ea5e9] hover:bg-[#38bdf8] text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 glow font-['Orbitron'] tracking-wider">
                LAUNCH DASHBOARD
              </Link>
              <button className="w-full sm:w-auto glass border border-[#0ea5e9]/20 text-white px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:border-[#0ea5e9]/50">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10,000+', label: 'Drones Managed' },
            { value: '99.9%', label: 'Uptime' },
            { value: '500+', label: 'Companies' },
            { value: '2M+', label: 'Flight Hours' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center border border-[#0ea5e9]/10 hover:border-[#0ea5e9]/30 transition-all duration-300">
              <div className="font-['Orbitron'] text-3xl font-black gradient-text mb-2">{stat.value}</div>
              <div className="text-[#94a3b8] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Orbitron'] text-3xl md:text-4xl font-black text-white mb-4">
              EVERYTHING YOU NEED
            </h2>
            <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
              A complete suite of tools for professional drone fleet management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🛸', title: 'Fleet Overview', desc: 'Real-time monitoring of your entire drone fleet with live status updates and telemetry data.' },
              { icon: '🔋', title: 'Battery Analytics', desc: 'Advanced battery health monitoring with predictive maintenance alerts and charge cycle tracking.' },
              { icon: '📊', title: 'Flight Analytics', desc: 'Comprehensive flight data analysis with beautiful charts and actionable insights.' },
              { icon: '🔧', title: 'Maintenance', desc: 'Automated maintenance scheduling with repair tracking and parts inventory management.' },
              { icon: '📋', title: 'Flight Logs', desc: 'Detailed mission logs with GPS tracking, pilot data, and compliance reporting.' },
              { icon: '⚠️', title: 'Incident Reports', desc: 'Streamlined incident reporting with severity tracking and resolution workflows.' },
            ].map((feature, i) => (
              <div key={i} className="glass rounded-2xl p-6 border border-[#0ea5e9]/10 hover:border-[#0ea5e9]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-['Orbitron'] text-white font-bold text-lg mb-3 group-hover:text-[#0ea5e9] transition-colors">{feature.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 border border-[#0ea5e9]/20">
          <h2 className="font-['Orbitron'] text-3xl md:text-4xl font-black text-white mb-6">
            READY TO TAKE COMMAND?
          </h2>
          <p className="text-[#94a3b8] text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ drone companies already using DroneOps to manage their fleets more efficiently.
          </p>
          <Link href="/dashboard" className="inline-block bg-[#0ea5e9] hover:bg-[#38bdf8] text-white px-10 py-4 rounded-xl text-base font-semibold transition-all duration-300 glow font-['Orbitron'] tracking-wider">
            START FREE TRIAL
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1e293b]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-['Orbitron'] text-white font-bold tracking-wider">DRONEOPS</span>
          <span className="text-[#94a3b8] text-sm">© 2025 DroneOps. All rights reserved.</span>
        </div>
      </footer>

    </main>
  )
}
