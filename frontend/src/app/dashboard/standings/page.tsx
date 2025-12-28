import React from "react";

export default function StandingsPage() {
  return (
    <main className="flex-1 h-full overflow-hidden flex flex-col relative z-10 grid-bg">
      {/* Header */}
      <header className="h-20 shrink-0 flex items-center justify-between px-6 lg:px-8 border-b border-slate-800 bg-cyber-dark/50 backdrop-blur-md z-20">
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-neon-blue hover:bg-white/5 rounded">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div>
            <div className="flex items-center gap-2 text-slate-500 mb-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neon-blue">
                System // Modules
              </span>
              <span className="material-symbols-outlined text-[10px]">
                chevron_right
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                Standings_View
              </span>
            </div>
            <h2 className="text-2xl font-black text-white italic tracking-tight uppercase flex items-center gap-2">
              Standings Overview{" "}
              <span className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_10px_#00ff9f]"></span>
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
            </span>
            <span className="text-[10px] font-mono font-bold text-slate-400">
              SERVER_LIVE
            </span>
          </div>
          <button className="clip-corner-br bg-neon-blue hover:bg-white text-cyber-black px-5 py-2 text-xs font-bold font-mono tracking-wider transition-all flex items-center gap-2 shadow-neon-glow">
            <span className="material-symbols-outlined text-lg">download</span>
            EXPORT_CSV
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Filters */}
          <div className="flex flex-col xl:flex-row gap-4 justify-between items-center bg-cyber-panel/40 border border-slate-700/50 p-2 rounded-lg backdrop-blur-sm">
            <div className="flex p-1 bg-black/40 rounded border border-slate-700/50">
              <button className="px-4 py-2 bg-slate-700/50 text-white rounded shadow-sm text-xs font-bold uppercase tracking-wide flex items-center gap-2 transition-all">
                <span className="material-symbols-outlined text-sm text-neon-blue">
                  table_view
                </span>{" "}
                Overview
              </button>
              <button className="px-4 py-2 text-slate-500 hover:text-white rounded text-xs font-bold uppercase tracking-wide flex items-center gap-2 transition-all">
                <span className="material-symbols-outlined text-sm">list</span>{" "}
                Detailed
              </button>
              <button className="px-4 py-2 text-slate-500 hover:text-white rounded text-xs font-bold uppercase tracking-wide flex items-center gap-2 transition-all">
                <span className="material-symbols-outlined text-sm">
                  history
                </span>{" "}
                History
              </button>
            </div>
            <div className="flex items-center gap-3 w-full xl:w-auto">
              <div className="relative group flex-1 xl:flex-none">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-500 group-focus-within:text-neon-blue text-lg">
                    search
                  </span>
                </div>
                <input
                  className="block w-full xl:w-64 pl-10 pr-3 py-2 bg-black/40 border border-slate-700 rounded text-xs text-white placeholder-slate-600 focus:border-neon-blue focus:ring-0 font-mono transition-all"
                  placeholder="SEARCH_TEAM..."
                  type="text"
                />
              </div>
              <div className="h-6 w-px bg-slate-700 mx-2 hidden md:block"></div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-slate-700 rounded hover:border-neon-blue/50 text-[10px] font-mono font-bold text-slate-300 uppercase whitespace-nowrap">
                  Season 24{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_drop_down
                  </span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-slate-700 rounded hover:border-neon-blue/50 text-[10px] font-mono font-bold text-slate-300 uppercase whitespace-nowrap">
                  Men's Div{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_drop_down
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-8 flex flex-col gap-6">
              {/* Podium Section */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/20 border border-slate-700 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-neon-blue/10 blur-[100px] pointer-events-none"></div>
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-30"></div>
                <div className="flex items-end justify-center gap-4 md:gap-8 min-h-[320px] pb-4 relative z-10">
                  {/* 2nd Place */}
                  <div className="flex flex-col items-center group cursor-pointer w-1/3 max-w-[180px]">
                    <div className="mb-3 relative transition-transform duration-300 group-hover:-translate-y-2">
                      <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-xl border-2 border-slate-600 bg-black overflow-hidden group-hover:border-neon-purple shadow-[0_0_20px_rgba(189,0,255,0.2)]">
                        <img
                          alt="Arts"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoEVVvFCP3YpyJndZ3CKOfzybl6CS0KrThyhhdL5-6uW55z1f7ECkuhoeFULj-a28WhsS0kL4TlT1uPJEJl64SzlOkcvr6P29n7bwlWY5YQTrFBY5GZn86uXSaKBQk1a-_wTQkTLV_gwOxfL0sK0a_6QZmbpf3rD5HVZeeaNV5epRZfaKfDjnTZiWPr-GZwWVFhd4G8Oa_dzFuscriaXMGGuL4--Dj6bqxzg9TMQKeX2ZFkcmFckoCflv_cg2HgKYAwohux83B1M8"
                        />
                        <div className="absolute top-0 left-0 px-2 py-0.5 bg-black/80 text-[10px] font-mono text-neon-purple font-bold border-b border-r border-slate-800">
                          #02
                        </div>
                      </div>
                    </div>
                    <div className="text-center mb-4 hidden md:block">
                      <h3 className="text-white font-bold text-sm uppercase">
                        College of Arts
                      </h3>
                      <p className="text-[10px] text-slate-500 font-mono">
                        2nd Seed
                      </p>
                    </div>
                    <div className="w-full h-32 bg-gradient-to-t from-neon-purple/20 to-transparent border-t-2 border-neon-purple/50 rounded-t flex flex-col items-center justify-end p-2 relative overflow-hidden">
                      <div className="text-center z-10">
                        <p className="text-2xl font-black text-white font-mono">
                          8W
                        </p>
                        <p className="text-[10px] text-neon-purple font-bold">
                          2L
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 1st Place */}
                  <div className="flex flex-col items-center group cursor-pointer w-1/3 max-w-[220px]">
                    <div className="mb-4 relative transition-transform duration-300 group-hover:-translate-y-3">
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-bounce">
                        <span className="material-symbols-outlined text-yellow-400 text-3xl drop-shadow-[0_0_10px_#fcee0a]">
                          emoji_events
                        </span>
                      </div>
                      <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full border-4 border-yellow-500 bg-black overflow-hidden shadow-[0_0_40px_rgba(252,238,10,0.3)] z-10">
                        <img
                          alt="Eng"
                          className="w-full h-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKpYnicPaALsxvloy38Al8tjeTvBgZtidiq_H90AA3_W9MPohnqIfDuo8fQlZBv97exwzgqE-1i2j6bDNoF1sANByU4RsTempOljGUfSJ5ewBYmsMIQZjyc6uWQbODg0qLXdyf4hl1aDrUP1gquW6wob4qNPOcW1gIPH-14wwQLN6CoDHivO_7vipsNcp_04GsxiJQAkBl8FKPwsH88wZrP4LfCPTU9zee3cPpfPvtTjN_KBiprNFB06VaEmzAlrtbBt32unXU70s"
                        />
                      </div>
                    </div>
                    <div className="text-center mb-4 hidden md:block">
                      <h3 className="text-yellow-400 font-bold text-base uppercase tracking-wider drop-shadow-sm">
                        Engineering
                      </h3>
                      <p className="text-[10px] text-yellow-600 font-mono font-bold uppercase border border-yellow-900/50 bg-yellow-900/20 px-2 py-0.5 rounded inline-block mt-1">
                        Champion
                      </p>
                    </div>
                    <div className="w-full h-48 bg-gradient-to-t from-yellow-500/20 to-transparent border-t-2 border-yellow-500 rounded-t flex flex-col items-center justify-end p-2 relative overflow-hidden shadow-[0_-10px_30px_rgba(252,238,10,0.1)]">
                      <div className="text-center z-10 pb-2">
                        <p className="text-4xl font-black text-white font-mono tracking-tighter">
                          10W
                        </p>
                        <p className="text-xs text-yellow-400 font-bold">
                          UNDEFEATED
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3rd Place */}
                  <div className="flex flex-col items-center group cursor-pointer w-1/3 max-w-[180px]">
                    <div className="mb-3 relative transition-transform duration-300 group-hover:-translate-y-2">
                      <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-xl border-2 border-slate-600 bg-black overflow-hidden group-hover:border-neon-yellow shadow-[0_0_20px_rgba(252,238,10,0.2)]">
                        <img
                          alt="Sci"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDMmf_0UKVdKmTRfh9H0D8eDWMfNi1vUib8xzmWSSzHJi4DQBOD1RGuonCXpdBsDwTKmA9AA5eJxvwWC3EFoY_A3ZM8GAVGnc0e3biVGHMFCuUUEnXLAMxefqXrVYbR5eJEsvxZBbMTgy5xvPwYencrD5ZbB4ahtDGhUNNKYdqInm-7wjNMo5PitMk0-J9I-hafiZofg9GWhKVGCPrYKJRH2SspQ2nItyCcbMxISHRfbb-uE0bJkJoo7OGPj-7w2S2ZCkEWB6W8GU"
                        />
                        <div className="absolute top-0 left-0 px-2 py-0.5 bg-black/80 text-[10px] font-mono text-neon-yellow font-bold border-b border-r border-slate-800">
                          #03
                        </div>
                      </div>
                    </div>
                    <div className="text-center mb-4 hidden md:block">
                      <h3 className="text-white font-bold text-sm uppercase">
                        College of Science
                      </h3>
                      <p className="text-[10px] text-slate-500 font-mono">
                        3rd Seed
                      </p>
                    </div>
                    <div className="w-full h-24 bg-gradient-to-t from-neon-yellow/20 to-transparent border-t-2 border-neon-yellow/50 rounded-t flex flex-col items-center justify-end p-2 relative overflow-hidden">
                      <div className="text-center z-10">
                        <p className="text-2xl font-black text-white font-mono">
                          7W
                        </p>
                        <p className="text-[10px] text-neon-yellow font-bold">
                          3L
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Section */}
              <div className="tech-border bg-cyber-dark/40 border border-slate-800 rounded-lg overflow-hidden backdrop-blur-sm">
                <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
                  <h3 className="font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-neon-blue text-lg">
                      view_list
                    </span>
                    Rankings Table
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-mono text-slate-400">
                      LIVE_UPDATES
                    </span>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-black/40 border-b border-slate-800">
                        <th className="py-3 px-6 text-center w-16">#</th>
                        <th className="py-3 px-6">Team Entity</th>
                        <th className="py-3 px-6 text-center text-neon-green">
                          W
                        </th>
                        <th className="py-3 px-6 text-center text-neon-red">
                          L
                        </th>
                        <th className="py-3 px-6 text-center text-slate-400">
                          D
                        </th>
                        <th className="py-3 px-6 text-center font-mono text-white">
                          PTS
                        </th>
                        <th className="py-3 px-6 text-center font-mono">
                          Diff
                        </th>
                        <th className="py-3 px-6 text-right">Trend</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50 text-sm">
                      <tr className="group hover:bg-neon-blue/5 transition-colors cursor-pointer relative">
                        <td className="py-4 px-6 text-center font-mono text-slate-500 group-hover:text-white">
                          04
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-slate-800 p-[1px] border border-slate-700 group-hover:border-neon-blue transition-colors">
                              <img
                                alt="Logo"
                                className="w-full h-full object-cover rounded-[1px]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApzsxYnSF87EpGfNTrPhuD_5wOsXOAPIdb_5wK5EVqr_efZiibmVh0zKjkZLJZteMo5hf_6dfiw2f-DzOPkyOJRa4U7PzvgL_vEH1HvzIAiz3SepyqppU7VNzeHES6qupLCDP_xvxhXLFY2_2RKRR_iYQRem5JYvjbyE0x_y8ymOMX0cWdSFWTtqyivBa5psPlzUcsLddAH0xJYq21h83EhFrIuu_eQrbYEUbZGzGVJB5z1RyozANh3LYH-wm9weekZJXS_6BeNoE"
                              />
                            </div>
                            <div>
                              <span className="block text-white font-bold text-xs group-hover:text-neon-blue transition-colors">
                                Business Ad.
                              </span>
                              <span className="block text-[9px] uppercase tracking-wide text-slate-600">
                                Tycoons
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center font-bold text-white bg-slate-800/30">
                          5
                        </td>
                        <td className="py-4 px-6 text-center font-medium text-slate-500">
                          5
                        </td>
                        <td className="py-4 px-6 text-center font-medium text-slate-600">
                          0
                        </td>
                        <td className="py-4 px-6 text-center font-mono font-bold text-neon-blue">
                          15
                        </td>
                        <td className="py-4 px-6 text-center font-mono text-red-400 text-xs">
                          -10
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="inline-flex items-center gap-1 bg-slate-800 px-2 py-0.5 rounded text-[9px] font-bold text-slate-400 border border-slate-700">
                            <span className="material-symbols-outlined text-xs">
                              remove
                            </span>{" "}
                            STABLE
                          </div>
                        </td>
                      </tr>
                      {/* More rows... */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="xl:col-span-4 flex flex-col gap-6">
              <div className="flex items-center justify-between pb-2 border-b border-neon-blue/30">
                <h4 className="text-neon-blue font-mono font-bold text-xs tracking-[0.2em] uppercase">
                  /// INTEL_FEED
                </h4>
                <span className="material-symbols-outlined text-neon-blue animate-pulse text-sm">
                  wifi_tethering
                </span>
              </div>
              <div className="clip-corner-tl-br bg-slate-900/50 border border-slate-700 p-5 relative overflow-hidden group hover:border-neon-purple/50 transition-colors">
                <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-8xl">
                    donut_large
                  </span>
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase mb-1">
                      Current_Season_Progress
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      Men's Basketball
                    </h3>
                  </div>
                  <span className="text-neon-purple material-symbols-outlined">
                    sports_basketball
                  </span>
                </div>
                <div className="relative pt-2">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-1">
                    <span>COMPLETED: 48 GAMES</span>
                    <span className="text-neon-purple">85%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-sm overflow-hidden">
                    <div className="h-full bg-neon-purple w-[85%] shadow-[0_0_10px_#bd00ff] relative overflow-hidden">
                      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* More widgets... */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
