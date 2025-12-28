import React from "react";

export default function Dashboard() {
  return (
    <main className="flex-1 h-full overflow-hidden flex flex-col relative z-10 grid-bg">
      <header className="h-24 shrink-0 flex items-center justify-between px-6 lg:px-10 z-10 bg-cyber-black/50 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-neon-blue hover:bg-white/5 rounded-lg">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex flex-col justify-center">
            <div className="hidden md:flex items-center gap-2 text-neon-blue/60 mb-1">
              <span className="material-symbols-outlined text-sm">grid_view</span>
              <span className="text-xs font-mono">/ ADMIN_PANEL / DASHBOARD</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase italic neon-text">
              System Overview
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded border border-neon-green/20 bg-neon-green/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
            </span>
            <span className="text-xs font-mono text-neon-green font-bold tracking-wider">
              SYSTEM ONLINE // LIVE
            </span>
          </div>
          <button className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-neon-blue text-black clip-corner font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] text-sm group">
            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">
              add
            </span>
            <span className="hidden md:inline">NEW_EVENT</span>
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-6 lg:p-10 pb-20">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col xl:flex-row gap-5 justify-between items-start xl:items-center bg-cyber-dark/50 p-2 border border-slate-800 backdrop-blur-sm rounded-lg">
            <div className="flex gap-1 w-full xl:w-auto overflow-x-auto">
              <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded text-sm font-bold tracking-wide uppercase flex items-center gap-2 transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  calendar_today
                </span>
                This Week
                <span className="material-symbols-outlined text-sm text-slate-500">
                  expand_more
                </span>
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto px-4">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-500 group-focus-within:text-neon-blue transition-colors text-lg">
                    search
                  </span>
                </div>
                <input
                  className="block w-full sm:w-64 pl-10 pr-3 py-2 bg-black/40 border border-slate-700 rounded text-white placeholder-slate-600 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all font-mono text-xs"
                  placeholder="SEARCH_DATABASE..."
                  type="text"
                />
              </div>
              <div className="h-6 w-px bg-slate-800 mx-2 hidden sm:block"></div>
              <button className="flex items-center gap-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded hover:bg-neon-purple/20 text-xs font-mono text-neon-purple transition-all shadow-[0_0_10px_rgba(188,19,254,0.15)]">
                <span className="material-symbols-outlined text-sm">
                  notifications
                </span>
                ALERTS: 2
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="relative group rounded-xl bg-cyber-dark border border-slate-700 p-6 overflow-hidden hover:border-neon-blue/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all">
                  <span className="material-symbols-outlined text-neon-blue text-2xl">
                    groups
                  </span>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-neon-green bg-neon-green/10 px-2 py-1 rounded border border-neon-green/20">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>{" "}
                  +12%
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white font-mono tracking-tighter">
                  24
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Total Teams
                </p>
              </div>
            </div>
            <div className="relative group rounded-xl bg-cyber-dark border border-slate-700 p-6 overflow-hidden hover:border-neon-purple/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-neon-purple group-hover:shadow-[0_0_15px_rgba(188,19,254,0.2)] transition-all">
                  <span className="material-symbols-outlined text-neon-purple text-2xl">
                    sports_basketball
                  </span>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                  SCHEDULED
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white font-mono tracking-tighter">
                  48
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Season Matches
                </p>
              </div>
            </div>
            <div className="relative group rounded-xl bg-cyber-dark border border-slate-700 p-6 overflow-hidden hover:border-neon-orange/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-neon-orange group-hover:shadow-[0_0_15px_rgba(255,136,0,0.2)] transition-all">
                  <span className="material-symbols-outlined text-neon-orange text-2xl">
                    person_add
                  </span>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-neon-green bg-neon-green/10 px-2 py-1 rounded border border-neon-green/20">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>{" "}
                  +5%
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white font-mono tracking-tighter">
                  312
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Active Players
                </p>
              </div>
            </div>
            <div className="relative group rounded-xl bg-cyber-dark border border-slate-700 p-6 overflow-hidden hover:border-white/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-white/50 transition-all">
                  <span className="material-symbols-outlined text-white text-2xl">
                    dns
                  </span>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-neon-green bg-neon-green/10 px-2 py-1 rounded border border-neon-green/20">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>{" "}
                  OPTIMAL
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white font-mono tracking-tighter">
                  99.9%
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  System Uptime
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-8 flex flex-col gap-6">
              <div className="glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/10 flex-1 min-h-[500px]">
                <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                  <h3 className="font-bold text-base text-white flex items-center gap-2 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-neon-blue text-lg">
                      history
                    </span>
                    Recent Activities
                  </h3>
                  <div className="flex gap-2">
                    <button className="text-[10px] font-mono text-slate-400 hover:text-white transition-colors bg-slate-800 border border-slate-700 px-3 py-1 rounded">
                      FILTER_LOGS
                    </button>
                    <button className="text-[10px] font-mono text-neon-blue hover:text-white transition-colors border border-neon-blue/30 px-3 py-1 rounded bg-neon-blue/5">
                      EXPORT_CSV
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-black/40 border-b border-white/5 font-mono">
                        <th className="py-3 px-6 w-24">Time</th>
                        <th className="py-3 px-6">User</th>
                        <th className="py-3 px-6">Action</th>
                        <th className="py-3 px-6">Target</th>
                        <th className="py-3 px-6 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm">
                      <tr className="hover:bg-white/5 transition-colors group cursor-pointer bg-white/[0.02]">
                        <td className="py-3 px-6 font-mono text-slate-500 text-xs">
                          10:42 AM
                        </td>
                        <td className="py-3 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold">
                              MA
                            </div>
                            <span className="text-slate-200 font-bold text-sm">
                              Marcus Admin
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-slate-300">
                          Updated Score
                        </td>
                        <td className="py-3 px-6 font-mono text-neon-blue text-xs">
                          MATCH_ID_#8842
                        </td>
                        <td className="py-3 px-6 text-right">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-neon-green/10 text-neon-green border border-neon-green/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-green"></span>{" "}
                            SUCCESS
                          </span>
                        </td>
                      </tr>
                      {/* More rows... */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Right column content */}
            <div className="xl:col-span-4 flex flex-col gap-6">
              {/* System Load */}
              <div className="rounded-xl border border-slate-700 bg-cyber-dark overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent pointer-events-none"></div>
                <div className="px-5 py-3 border-b border-white/5 flex justify-between items-center bg-slate-800/30">
                  <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-neon-blue text-base">
                      memory
                    </span>
                    System Load
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex items-end justify-between mb-1">
                    <span className="text-xs font-mono text-slate-400">
                      SERVER_CPU
                    </span>
                    <span className="text-xs font-mono text-neon-blue font-bold">
                      42%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-neon-blue h-1.5 rounded-full shadow-[0_0_10px_theme('colors.neon-blue')]"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                  {/* ... other metrics */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
