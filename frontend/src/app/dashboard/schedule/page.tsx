import React from "react";

export default function SchedulingPage() {
  return (
    <main className="flex-1 h-full overflow-hidden flex flex-col relative z-10">
      <header className="h-24 shrink-0 flex items-center justify-between px-6 lg:px-10 z-10">
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-neon-blue hover:bg-white/5 rounded-lg">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex flex-col justify-center">
            <div className="hidden md:flex items-center gap-2 text-neon-blue/60 mb-1">
              <span className="material-symbols-outlined text-sm">home</span>
              <span className="text-xs font-mono">
                / SCHEDULING_MODULE / CALENDAR
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase italic neon-text">
              Game Scheduling
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
          <button className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-neon-blue text-black clip-corner font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] text-sm">
            <span className="material-symbols-outlined">add_circle</span>
            <span className="hidden md:inline">NEW_EVENT</span>
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-6 lg:p-10 pb-20">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col xl:flex-row gap-5 justify-between items-start xl:items-center bg-cyber-dark/50 p-1 border-b border-slate-800 backdrop-blur-sm">
            <div className="flex gap-1 w-full xl:w-auto overflow-x-auto">
              <button className="px-6 py-3 bg-neon-blue/10 border-b-2 border-neon-blue text-neon-blue text-sm font-bold tracking-wide uppercase flex items-center gap-2 whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  calendar_view_month
                </span>
                Month View
              </button>
              <button className="px-6 py-3 text-slate-500 hover:text-white text-sm font-bold tracking-wide uppercase flex items-center gap-2 transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  calendar_view_week
                </span>
                Week View
              </button>
              <button className="px-6 py-3 text-slate-500 hover:text-white text-sm font-bold tracking-wide uppercase flex items-center gap-2 transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  view_list
                </span>
                List View
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto px-4">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-500 group-focus-within:text-neon-blue transition-colors">
                    search
                  </span>
                </div>
                <input
                  className="block w-full sm:w-64 pl-10 pr-3 py-2 bg-black/40 border border-slate-700 rounded text-white placeholder-slate-600 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all font-mono text-sm"
                  placeholder="SEARCH_MATCH_ID..."
                  type="text"
                />
              </div>
              <div className="h-8 w-px bg-slate-800 mx-2 hidden sm:block"></div>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded hover:border-neon-blue/50 text-xs font-mono text-white transition-all">
                SPORT: ALL
                <span className="material-symbols-outlined text-sm text-slate-500">
                  expand_more
                </span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded hover:border-neon-blue/50 text-xs font-mono text-white transition-all">
                VENUE: MAIN GYM
                <span className="material-symbols-outlined text-sm text-slate-500">
                  expand_more
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            <div className="xl:col-span-8 flex flex-col gap-6">
              <div className="glass-panel rounded-2xl p-1 flex-1 flex flex-col h-[800px] border border-slate-700/50 shadow-2xl">
                <div className="px-6 py-4 flex items-center justify-between border-b border-white/5 bg-white/5">
                  <h2 className="text-xl font-black text-white italic tracking-wider uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-neon-blue">
                      calendar_month
                    </span>
                    October <span className="text-slate-500 not-italic">
                      2023
                    </span>
                  </h2>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors">
                      <span className="material-symbols-outlined">
                        chevron_left
                      </span>
                    </button>
                    <button className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-mono font-bold rounded uppercase hover:bg-neon-blue/20 transition-colors">
                      Today
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
                {/* Calendar Grid Header */}
                <div className="grid grid-cols-7 border-b border-slate-800 bg-cyber-dark/50">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="py-3 text-center text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
                {/* Calendar Days */}
                <div className="grid grid-cols-7 grid-rows-5 flex-1 bg-cyber-dark/30">
                  {/* Previous month days */}
                  {[29, 30].map((d) => (
                    <div
                      key={d}
                      className="border-b border-r border-slate-800/50 bg-slate-900/40 p-2 relative opacity-50"
                    >
                      <span className="text-slate-600 font-mono text-xs font-bold">
                        {d}
                      </span>
                    </div>
                  ))}
                  {/* Current month days (partial) */}
                  <div className="border-b border-r border-slate-800/50 p-2 relative group hover:bg-white/5 transition-colors">
                    <span className="text-slate-300 font-mono text-xs font-bold group-hover:text-white">
                      01
                    </span>
                    <div className="mt-2 p-1.5 rounded-sm bg-neon-orange/10 border-l-2 border-neon-orange cursor-pointer hover:bg-neon-orange/20 transition-colors group/event">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] font-bold text-neon-orange tracking-wider">
                          M_BK
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">
                          14:00
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-300 font-bold truncate">
                        Eng vs Arts
                      </div>
                    </div>
                  </div>
                  {/* ... fill with other days logic or loop */}
                  {[
                    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                    19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                  ].map((d) => (
                    <div
                      key={d}
                      className="border-b border-r border-slate-800/50 p-2 relative group hover:bg-white/5 transition-colors"
                    >
                      <span className="text-slate-300 font-mono text-xs font-bold group-hover:text-white">
                        {d < 10 ? `0${d}` : d}
                      </span>
                      {d === 7 && (
                        <div className="mt-2 p-1.5 rounded-sm bg-neon-purple/10 border-l-2 border-neon-purple cursor-pointer hover:bg-neon-purple/20 transition-colors group/event">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[9px] font-bold text-neon-purple tracking-wider">
                              W_VB
                            </span>
                            <span className="text-[9px] font-mono text-slate-400">
                              09:00
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-300 font-bold truncate">
                            Sci vs BusAd
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 flex flex-col gap-6">
              {/* Quick Scheduler Widget */}
              <div className="glass-panel rounded-xl p-6 relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-8xl text-neon-blue -rotate-12">
                    edit_calendar
                  </span>
                </div>
                <h4 className="relative z-10 text-neon-blue font-mono font-bold text-sm tracking-widest uppercase mb-6 border-b border-neon-blue/20 pb-2">
                  /// QUICK_SCHEDULER
                </h4>
                <form className="relative z-10 flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-slate-500 font-mono uppercase mb-1">
                        Date
                      </label>
                      <input
                        className="w-full bg-black/40 border border-slate-700 rounded text-xs text-white p-2 focus:border-neon-blue outline-none font-mono placeholder-slate-600"
                        type="date"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-500 font-mono uppercase mb-1">
                        Time
                      </label>
                      <input
                        className="w-full bg-black/40 border border-slate-700 rounded text-xs text-white p-2 focus:border-neon-blue outline-none font-mono placeholder-slate-600"
                        type="time"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-500 font-mono uppercase mb-1">
                      Sport Category
                    </label>
                    <select className="w-full bg-black/40 border border-slate-700 rounded text-xs text-slate-300 p-2 focus:border-neon-blue outline-none">
                      <option>Basketball (Men's)</option>
                      <option>Volleyball (Women's)</option>
                      <option>Football (Men's)</option>
                    </select>
                  </div>
                  <button
                    className="mt-2 w-full py-3 bg-neon-blue text-black font-bold clip-corner text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]"
                    type="button"
                  >
                    CONFIRM_MATCH_ENTRY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
