'use client'

import Link from 'next/link'

const drones = [
  { id: 'DRN-001', name: 'Falcon X1', status: 'Active', battery: 87, location: 'Zone A' },
  { id: 'DRN-002', name: 'Raptor V2', status: 'Charging', battery: 45, location: 'Base' },
  { id: 'DRN-003', name: 'Shadow Pro', status: 'Maintenance', battery: 12, location: 'Hangar' },
  { id: 'DRN-004', name: 'Eagle Eye', status: 'Active', battery: 92, location: 'Zone C' },
]

const metrics = [
  { label: 'Active Drones', value: '8', sub: '2 on mission' },
  { label: 'Flight Hours', value: '1,247', sub: 'This month' },
  { label: 'Battery Alerts', value: '3', sub: 'Needs attention' },
  { label: 'Missions Today', value: '12', sub: '4 completed' },
]

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#020817]">

      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-[#0ea5e9]/10">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0ea5e9] flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-['Orbitron'] text-white font-bold tracking-wider">
              DRONEOPS
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[#94a3b8] text-sm">System Online</span>
            <div className="w-8 h-8 rounded-full bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 flex items-center justify-center">
              <span className="text-[#0ea5e9] text-xs font-bold">OP</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">

        {/* Sidebar */}
        <aside className="fixed left-0 top-16 h-full w-64 glass border-r border-[#0ea5e9]/10 p-6 hidden md:block">
          <div className="space-y-2">
            {[
              { icon: '⬡', label: 'Overview', href: '/dashboard', active: true },
              { icon: '📋', label: 'Flight Logs', href: '/dashboard/flights' },
              { icon: '🛸', label: 'Drones', href: '/dashboard/drones' },
              { icon: '🔋', label: 'Batteries', href: '/dashboard/batteries' },
              { icon: '🔧', label: 'Maintenance', href: '/dashboard/maintenance' },
              { icon: '⚠️', label: 'Incidents', href: '/dashboard/incidents' },
              { icon: '📊', label: 'Analytics', href: '/dashboard/analytics' },
              { icon: '⚙️', label: 'Settings', href: '/dashboard/settings' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  item.active
                    ? 'bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 text-[#0ea5e9]'
                    : 'text-[#94a3b8] hover:bg-[#0ea5e9]/10 hover:text-white'
                }`}
              >
                <span>{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 md:ml-64 p-6">

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-['Orbitron'] text-2xl font-black text-white mb-2">
              FLEET OVERVIEW
            </h1>
            <p className="text-[#94a3b8] text-sm">
              Welcome back, Operator. Here is your fleet status.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, i) => (
              <div key={i} className="glass rounded-2xl p-5 border border-[#0ea5e9]/10 hover:border-[#0ea5e9]/30 transition-all duration-300">
                <div className="font-['Orbitron'] text-2xl font-black gradient-text mb-1">
                  {metric.value}
                </div>
                <div className="text-white text-sm font-medium mb-1">{metric.label}</div>
                <div className="text-[#94a3b8] text-xs">{metric.sub}</div>
              </div>
            ))}
          </div>

          {/* Drone Fleet Table */}
          <div className="glass rounded-2xl border border-[#0ea5e9]/10 overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-[#0ea5e9]/10">
              <h2 className="font-['Orbitron'] text-white font-bold">ACTIVE FLEET</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#0ea5e9]/10">
                    <th className="text-left px-6 py-3 text-[#94a3b8] text-xs font-medium">ID</th>
                    <th className="text-left px-6 py-3 text-[#94a3b8] text-xs font-medium">NAME</th>
                    <th className="text-left px-6 py-3 text-[#94a3b8] text-xs font-medium">STATUS</th>
                    <th className="text-left px-6 py-3 text-[#94a3b8] text-xs font-medium">BATTERY</th>
                    <th className="text-left px-6 py-3 text-[#94a3b8] text-xs font-medium">LOCATION</th>
                  </tr>
                </thead>
                <tbody>
                  {drones.map((drone, i) => (
                    <tr key={i} className="border-b border-[#0ea5e9]/5 hover:bg-[#0ea5e9]/5 transition-colors">
                      <td className="px-6 py-4 text-[#0ea5e9] text-sm font-mono">{drone.id}</td>
                      <td className="px-6 py-4 text-white text-sm font-medium">{drone.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          drone.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                          drone.status === 'Charging' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {drone.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 bg-[#1e293b] rounded-full h-2 w-20">
                            <div
                              className={`h-2 rounded-full ${
                                drone.battery > 60 ? 'bg-green-400' :
                                drone.battery > 30 ? 'bg-yellow-400' :
                                'bg-red-400'
                              }`}
                              style={{ width: `${drone.battery}%` }}
                            />
                          </div>
                          <span className="text-[#94a3b8] text-xs">{drone.battery}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#94a3b8] text-sm">{drone.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Back to Home */}
          <Link href="/" className="text-[#0ea5e9] text-sm hover:text-[#38bdf8] transition-colors">
            ← Back to Home
          </Link>

        </div>
      </div>
    </main>
  )
}
