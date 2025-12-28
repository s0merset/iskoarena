import React from "react";

export default function AnalyticsPage() {
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
                / ANALYTICS_MODULE / REPORTING
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase italic neon-text">
              Analytics &amp; Reporting
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
            <span className="material-symbols-outlined">picture_as_pdf</span>
            <span className="hidden md:inline">GENERATE_PDF</span>
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-6 lg:p-10 pb-20">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col xl:flex-row gap-5 justify-between items-start xl:items-center bg-cyber-dark/50 p-1 border-b border-slate-800 backdrop-blur-sm">
            <div className="flex gap-1 w-full xl:w-auto overflow-x-auto">
              <button className="px-6 py-3 bg-neon-blue/10 border-b-2 border-neon-blue text-neon-blue text-sm font-bold tracking-wide uppercase flex items-center gap-2 whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  monitoring
                </span>
                Overview
              </button>
              <button className="px-6 py-3 text-slate-500 hover:text-white text-sm font-bold tracking-wide uppercase flex items-center gap-2 transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  groups
                </span>
                Team Stats
              </button>
              <button className="px-6 py-3 text-slate-500 hover:text-white text-sm font-bold tracking-wide uppercase flex items-center gap-2 transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  directions_run
                </span>
                Player Metrics
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto px-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden sm:block mr-2">
                Data_Range:
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded hover:border-neon-blue/50 text-xs font-mono text-white transition-all">
                LAST_30_DAYS
                <span className="material-symbols-outlined text-sm text-slate-500">
                  expand_more
                </span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded hover:border-neon-blue/50 text-xs font-mono text-white transition-all">
                ALL_SPORTS
                <span className="material-symbols-outlined text-sm text-slate-500">
                  expand_more
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-cyber-dark/80 to-cyber-black border border-slate-700 backdrop-blur-sm relative overflow-hidden group hover:border-neon-blue/50 transition-all shadow-lg">
              <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <span className="material-symbols-outlined text-7xl text-neon-blue">
                  sports_basketball
                </span>
              </div>
              <div className="relative z-10">
                <p className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neon-blue rounded-full"></span>
                  Total_Games
                </p>
                <h3 className="text-3xl font-black text-white font-mono mt-2">
                  48<span className="text-lg text-slate-600 font-normal">/60</span>
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs bg-black/20 w-fit px-2 py-1 rounded border border-white/5">
                  <span className="text-neon-green font-bold flex items-center font-mono">
                    <span className="material-symbols-outlined text-sm mr-0.5">
                      trending_up
                    </span>{" "}
                    +12%
                  </span>
                  <span className="text-slate-500">vs last season</span>
                </div>
              </div>
            </div>
            {/* More stat cards */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-cyber-dark/80 to-cyber-black border border-slate-700 backdrop-blur-sm relative overflow-hidden group hover:border-neon-purple/50 transition-all shadow-lg">
              <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <span className="material-symbols-outlined text-7xl text-neon-purple">
                  group
                </span>
              </div>
              <div className="relative z-10">
                <p className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neon-purple rounded-full"></span>
                  Attendance
                </p>
                <h3 className="text-3xl font-black text-white font-mono mt-2">
                  12,450
                </h3>
                <div className="mt-3 flex items-center gap-2 text-xs bg-black/20 w-fit px-2 py-1 rounded border border-white/5">
                  <span className="text-neon-green font-bold flex items-center font-mono">
                    <span className="material-symbols-outlined text-sm mr-0.5">
                      trending_up
                    </span>{" "}
                    +5.4%
                  </span>
                  <span className="text-slate-500">participation</span>
                </div>
              </div>
            </div>
          </div>
          {/* Charts/Graphs Area */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 glass-panel rounded-xl overflow-hidden shadow-2xl flex flex-col">
              <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-neon-blue">
                    bar_chart
                  </span>
                  SCORING_TRENDS
                </h3>
                {/* Legend */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-neon-blue"></span>
                    <span className="text-slate-400">Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    <span className="text-slate-400">Avg. League</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-end min-h-[350px] relative">
                {/* Chart Background Lines */}
                <div className="absolute inset-x-6 inset-y-6 flex flex-col justify-between pointer-events-none z-0">
                  <div className="w-full h-px bg-slate-800 border-t border-dashed border-slate-700"></div>
                  <div className="w-full h-px bg-slate-800 border-t border-dashed border-slate-700"></div>
                  <div className="w-full h-px bg-slate-800 border-t border-dashed border-slate-700"></div>
                  <div className="w-full h-px bg-slate-800 border-t border-dashed border-slate-700"></div>
                  <div className="w-full h-px bg-slate-700"></div>
                </div>
                {/* Bars */}
                <div className="relative z-10 flex items-end justify-between h-64 w-full gap-2 px-2">
                  {[45, 55, 35, 70, 85, 60, 75, 90].map((val, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 group w-full h-full justify-end"
                    >
                      <div
                        className="w-full max-w-[40px] bg-gradient-to-t from-neon-blue/10 to-neon-blue/80 border-t border-x border-neon-blue/50 rounded-t-sm relative transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:bg-neon-blue"
                        style={{ height: `${val}%` }}
                      >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-cyber-black border border-neon-blue text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-neon">
                          <span className="font-mono font-bold">{val} PTS</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">
                        GM{i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Win Distribution & MVP */}
            <div className="flex flex-col gap-6">
              <div className="glass-panel rounded-xl overflow-hidden shadow-2xl p-6 flex flex-col items-center">
                <h4 className="text-neon-purple font-mono font-bold text-sm tracking-widest uppercase mb-6 self-start">
                  /// WIN_DISTRIBUTION
                </h4>
                <div
                  className="relative w-48 h-48 rounded-full mb-6 group cursor-pointer"
                  style={{
                    background:
                      "conic-gradient(#bc13fe 0% 55%, #ff8800 55% 85%, #0aff68 85% 100%)",
                    boxShadow: "0 0 30px rgba(188,19,254,0.2)",
                  }}
                >
                  <div className="absolute inset-4 bg-cyber-dark rounded-full flex items-center justify-center flex-col z-10">
                    <span className="text-3xl font-black text-white font-mono group-hover:text-neon-purple transition-colors">
                      55%
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                      Engineering
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-neon-purple/50 animate-spin"
                    style={{ animationDuration: "8s" }}
                  ></div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-neon-purple"></span>
                      <span className="text-slate-300 font-bold">
                        Engineering
                      </span>
                    </div>
                    <span className="font-mono text-neon-purple">55%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-neon-purple h-full w-[55%]"></div>
                  </div>
                  {/* ... other stats */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
