import React from "react";

export default function ScoresPage() {
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
                / SCORES_MODULE / MANAGEMENT
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase italic neon-text">
              Game Scores Management
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
            <span className="material-symbols-outlined">save</span>
            <span className="hidden md:inline">SAVE_ALL_CHANGES</span>
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-6 lg:p-10 pb-20">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col xl:flex-row gap-5 justify-between items-start xl:items-center bg-cyber-dark/50 p-1 border-b border-slate-800 backdrop-blur-sm">
            <div className="flex gap-1 w-full xl:w-auto overflow-x-auto">
              <button className="px-6 py-3 bg-neon-blue/10 border-b-2 border-neon-blue text-neon-blue text-sm font-bold tracking-wide uppercase flex items-center gap-2 whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  sensors
                </span>
                Live Games
              </button>
              <button className="px-6 py-3 text-slate-500 hover:text-white text-sm font-bold tracking-wide uppercase flex items-center gap-2 transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  history
                </span>
                Recent Results
              </button>
              <button className="px-6 py-3 text-slate-500 hover:text-white text-sm font-bold tracking-wide uppercase flex items-center gap-2 transition-colors whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  calendar_month
                </span>
                Scheduled
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
                  placeholder="SEARCH_GAME_ID..."
                  type="text"
                />
              </div>
              <div className="h-8 w-px bg-slate-800 mx-2 hidden sm:block"></div>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded hover:border-neon-blue/50 text-xs font-mono text-white transition-all">
                SPORT: BASKETBALL
                <span className="material-symbols-outlined text-sm text-slate-500">
                  expand_more
                </span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded hover:border-neon-blue/50 text-xs font-mono text-white transition-all">
                DIV: MENS
                <span className="material-symbols-outlined text-sm text-slate-500">
                  expand_more
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            <div className="xl:col-span-8 flex flex-col gap-8">
              {/* Live Match Card */}
              <div className="w-full rounded-2xl bg-gradient-to-b from-cyber-dark/60 to-black/40 border border-neon-blue/20 overflow-hidden relative shadow-[0_0_30px_rgba(0,243,255,0.05)]">
                <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30 backdrop-blur-sm z-20">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-neon-green tracking-widest">
                    LIVE_MATCH // Q4 02:45
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 items-center relative z-10">
                  {/* Home Team */}
                  <div className="flex flex-col items-center gap-4 group">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 transform group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl group-hover:bg-yellow-500/30 transition-all"></div>
                      <div className="w-full h-full relative rounded-full overflow-hidden border-4 border-yellow-500 bg-black p-1 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                        <img
                          alt="Engineering Logo"
                          className="w-full h-full object-cover rounded-full"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKpYnicPaALsxvloy38Al8tjeTvBgZtidiq_H90AA3_W9MPohnqIfDuo8fQlZBv97exwzgqE-1i2j6bDNoF1sANByU4RsTempOljGUfSJ5ewBYmsMIQZjyc6uWQbODg0qLXdyf4hl1aDrUP1gquW6wob4qNPOcW1gIPH-14wwQLN6CoDHivO_7vipsNcp_04GsxiJQAkBl8FKPwsH88wZrP4LfCPTU9zee3cPpfPvtTjN_KBiprNFB06VaEmzAlrtbBt32unXU70s"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-black text-white italic">
                        Engineering
                      </h3>
                      <p className="text-xs text-yellow-500 font-mono font-bold tracking-widest bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20 inline-block mt-1">
                        HOME
                      </p>
                    </div>
                  </div>
                  {/* Score Control */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative group">
                          <input
                            className="w-20 md:w-28 h-20 md:h-24 bg-black/60 border-2 border-slate-700 focus:border-neon-blue rounded-xl text-4xl md:text-6xl font-mono font-bold text-white text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] outline-none focus:shadow-[0_0_25px_rgba(0,243,255,0.2)] transition-all z-10 relative"
                            type="text"
                            defaultValue="88"
                          />
                          <div className="absolute -right-3 top-0 bottom-0 flex flex-col justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="w-5 h-5 bg-slate-700 hover:bg-neon-blue hover:text-black text-white rounded flex items-center justify-center text-[10px] shadow-lg">
                              <span className="material-symbols-outlined text-sm">
                                keyboard_arrow_up
                              </span>
                            </button>
                            <button className="w-5 h-5 bg-slate-700 hover:bg-neon-blue hover:text-black text-white rounded flex items-center justify-center text-[10px] shadow-lg">
                              <span className="material-symbols-outlined text-sm">
                                keyboard_arrow_down
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <span className="text-4xl md:text-6xl font-black text-slate-700 pb-2">
                        :
                      </span>
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative group">
                          <input
                            className="w-20 md:w-28 h-20 md:h-24 bg-black/60 border-2 border-slate-700 focus:border-neon-purple rounded-xl text-4xl md:text-6xl font-mono font-bold text-white text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] outline-none focus:shadow-[0_0_25px_rgba(188,19,254,0.2)] transition-all z-10 relative"
                            type="text"
                            defaultValue="86"
                          />
                          <div className="absolute -right-3 top-0 bottom-0 flex flex-col justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="w-5 h-5 bg-slate-700 hover:bg-neon-purple hover:text-black text-white rounded flex items-center justify-center text-[10px] shadow-lg">
                              <span className="material-symbols-outlined text-sm">
                                keyboard_arrow_up
                              </span>
                            </button>
                            <button className="w-5 h-5 bg-slate-700 hover:bg-neon-purple hover:text-black text-white rounded flex items-center justify-center text-[10px] shadow-lg">
                              <span className="material-symbols-outlined text-sm">
                                keyboard_arrow_down
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <button className="flex items-center gap-2 px-5 py-2 bg-neon-blue text-black font-bold text-xs uppercase tracking-wider clip-corner hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-sm">
                          publish
                        </span>{" "}
                        Update
                      </button>
                      <button className="flex items-center gap-2 px-5 py-2 bg-slate-800/80 text-slate-300 font-bold text-xs uppercase tracking-wider rounded border border-slate-600 hover:bg-slate-700 hover:border-slate-500 transition-all">
                        <span className="material-symbols-outlined text-sm">
                          pause
                        </span>{" "}
                        Pause
                      </button>
                    </div>
                  </div>
                  {/* Away Team */}
                  <div className="flex flex-col items-center gap-4 group">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 transform group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-neon-purple/20 rounded-full blur-xl group-hover:bg-neon-purple/30 transition-all"></div>
                      <div className="w-full h-full relative rounded-full overflow-hidden border-4 border-neon-purple bg-black p-1 shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                        <img
                          alt="Arts Logo"
                          className="w-full h-full object-cover rounded-full"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoEVVvFCP3YpyJndZ3CKOfzybl6CS0KrThyhhdL5-6uW55z1f7ECkuhoeFULj-a28WhsS0kL4TlT1uPJEJl64SzlOkcvr6P29n7bwlWY5YQTrFBY5GZn86uXSaKBQk1a-_wTQkTLV_gwOxfL0sK0a_6QZmbpf3rD5HVZeeaNV5epRZfaKfDjnTZiWPr-GZwWVFhd4G8Oa_dzFuscriaXMGGuL4--Dj6bqxzg9TMQKeX2ZFkcmFckoCflv_cg2HgKYAwohux83B1M8"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-black text-white italic">
                        Arts
                      </h3>
                      <p className="text-xs text-neon-purple font-mono font-bold tracking-widest bg-neon-purple/10 px-2 py-0.5 rounded border border-neon-purple/20 inline-block mt-1">
                        AWAY
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 border-t border-white/5 bg-black/40 p-4 flex justify-center gap-8 text-[10px] md:text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 font-bold">FOULS:</span>
                    <span className="text-yellow-500">2</span> -{" "}
                    <span className="text-neon-purple">3</span>
                  </div>
                  <div className="w-px h-4 bg-slate-800"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 font-bold">TIMEOUTS:</span>
                    <span className="text-yellow-500">1</span> -{" "}
                    <span className="text-neon-purple">2</span>
                  </div>
                  <div className="w-px h-4 bg-slate-800"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 font-bold">
                      POSSESSION:
                    </span>
                    <span className="text-yellow-500 font-bold">ENG &gt;</span>
                  </div>
                </div>
              </div>
              {/* Game Registry */}
              <div className="glass-panel rounded-xl overflow-hidden shadow-2xl">
                <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                  <h3 className="font-bold text-lg text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-neon-blue">
                      toc
                    </span>
                    GAME_REGISTRY
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                    DISPLAYING 5 RECENT GAMES
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-black/40 border-b border-white/5">
                        <th className="py-4 px-6 w-32">Status</th>
                        <th className="py-4 px-6">Match Details</th>
                        <th className="py-4 px-6 text-center">Score</th>
                        <th className="py-4 px-6 text-center font-mono">
                          Date/Time
                        </th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm">
                      {/* Row 1 */}
                      <tr className="hover:bg-white/5 transition-colors group cursor-pointer">
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center gap-1 text-slate-300 bg-slate-800 px-2 py-1 rounded text-[10px] font-bold border border-slate-600 uppercase tracking-wide">
                            Final
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-start gap-6">
                            <div className="flex items-center gap-3 w-32 justify-end">
                              <span className="text-slate-200 font-bold text-right">
                                Science
                              </span>
                              <div className="w-8 h-8 rounded bg-slate-800 p-0.5 border border-slate-700">
                                <img
                                  alt="Science Logo"
                                  className="w-full h-full object-cover rounded-[2px]"
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDMmf_0UKVdKmTRfh9H0D8eDWMfNi1vUib8xzmWSSzHJi4DQBOD1RGuonCXpdBsDwTKmA9AA5eJxvwWC3EFoY_A3ZM8GAVGnc0e3biVGHMFCuUUEnXLAMxefqXrVYbR5eJEsvxZBbMTgy5xvPwYencrD5ZbB4ahtDGhUNNKYdqInm-7wjNMo5PitMk0-J9I-hafiZofg9GWhKVGCPrYKJRH2SspQ2nItyCcbMxISHRfbb-uE0bJkJoo7OGPj-7w2S2ZCkEWB6W8GU"
                                />
                              </div>
                            </div>
                            <span className="text-slate-600 font-mono text-xs">
                              VS
                            </span>
                            <div className="flex items-center gap-3 w-32 justify-start">
                              <div className="w-8 h-8 rounded bg-slate-800 p-0.5 border border-slate-700">
                                <img
                                  alt="Business Logo"
                                  className="w-full h-full object-cover rounded-[2px]"
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApzsxYnSF87EpGfNTrPhuD_5wOsXOAPIdb_5wK5EVqr_efZiibmVh0zKjkZLJZteMo5hf_6dfiw2f-DzOPkyOJRa4U7PzvgL_vEH1HvzIAiz3SepyqppU7VNzeHES6qupLCDP_xvxhXLFY2_2RKRR_iYQRem5JYvjbyE0x_y8ymOMX0cWdSFWTtqyivBa5psPlzUcsLddAH0xJYq21h83EhFrIuu_eQrbYEUbZGzGVJB5z1RyozANh3LYH-wm9weekZJXS_6BeNoE"
                                />
                              </div>
                              <span className="text-slate-200 font-bold">
                                Business
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center font-mono text-lg">
                          <span className="text-neon-orange font-bold">72</span>{" "}
                          - <span className="text-slate-400">68</span>
                        </td>
                        <td className="py-4 px-6 text-center font-mono text-slate-400 text-xs">
                          OCT 23, 18:00
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button className="p-2 hover:bg-white/10 rounded text-slate-400 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              edit_note
                            </span>
                          </button>
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
              <div className="flex items-center justify-between pb-2 border-b border-neon-blue/20">
                <h4 className="text-neon-blue font-mono font-bold text-sm tracking-widest uppercase">
                  /// SCORE_LOGS
                </h4>
                <span className="material-symbols-outlined text-neon-blue animate-pulse text-sm">
                  wifi_tethering
                </span>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyber-gray to-cyber-black border border-slate-700 hover:border-neon-purple/50 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-8xl text-neon-purple -rotate-12">
                    update
                  </span>
                </div>
                <div className="relative p-6 z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded bg-neon-purple/10 border border-neon-purple/30 text-neon-purple shadow-neon-purple">
                      <span className="material-symbols-outlined text-lg">
                        notifications_active
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase">
                      Pending_Review
                    </span>
                  </div>
                  <h5 className="text-xl font-bold text-white mb-1 group-hover:text-neon-purple transition-colors">
                    Volleyball (Women's)
                  </h5>
                  <div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
                    <span className="material-symbols-outlined text-base">
                      warning
                    </span>
                    Final score requires validation
                  </div>
                  <button className="mt-4 w-full py-2 bg-slate-800 hover:bg-neon-purple hover:text-white text-slate-300 text-xs font-bold rounded border border-slate-600 transition-colors">
                    REVIEW SCORECARD
                  </button>
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
