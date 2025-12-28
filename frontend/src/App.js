import React, { useEffect } from "react";
import "@/App.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

function App() {
  
  // Checking for api connection - keeping the pattern from original App.js
  useEffect(() => {
    // console.log("Frontend loaded");
  }, []);

  return (
    <div className="bg-cyber-black text-slate-300 font-display overflow-hidden flex h-screen w-full selection:bg-neon-blue selection:text-black">
        {/* Background Grids */}
        <div 
            className="fixed inset-0 pointer-events-none z-0 opacity-20" 
            style={{
                backgroundImage: "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)", 
                backgroundSize: "40px 40px"
            }}
        ></div>
        <div className="fixed inset-0 pointer-events-none z-0 bg-cyber-grid"></div>

        {/* Main Content */}
        <main className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 grid-bg">
            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[128px] pointer-events-none animate-pulse-slow"></div>
            <div 
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-[96px] pointer-events-none animate-pulse-slow" 
                style={{animationDelay: "1s"}}
            ></div>

            <div className="max-w-3xl w-full relative flex flex-col items-center">
                
                {/* Logo Section */}
                <div className="text-center mb-12 relative z-20 animate-float">
                    <div className="inline-flex items-center justify-center relative mb-8">
                        <div className="absolute inset-0 bg-neon-blue blur-[60px] opacity-20 animate-pulse"></div>
                        <div className="absolute inset-0 border border-neon-blue/20 rounded-full w-[160%] h-[160%] -translate-x-[18%] -translate-y-[18%] border-dashed animate-spin-slow pointer-events-none"></div>
                        <div className="w-32 h-32 relative flex items-center justify-center border-4 border-neon-blue/30 rounded-full bg-cyber-dark z-10 shadow-[0_0_30px_rgba(0,243,255,0.2)] clip-path-circle">
                            <span className="material-symbols-outlined text-7xl text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,1)]">sports_basketball</span>
                        </div>
                    </div>
                    
                    <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white uppercase italic transform -skew-x-6 drop-shadow-2xl">
                        Isko<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple neon-text">Arena</span>
                    </h1>
                    
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <span className="h-0.5 w-16 bg-gradient-to-r from-transparent to-neon-blue"></span>
                        <p className="text-base md:text-lg font-mono text-neon-blue tracking-[0.3em] uppercase font-bold text-shadow-sm">Admin Control Center</p>
                        <span className="h-0.5 w-16 bg-gradient-to-l from-transparent to-neon-blue"></span>
                    </div>
                    
                    <p className="mt-6 text-slate-400 font-mono text-sm max-w-lg mx-auto leading-relaxed">
                        The advanced intramurals management system. Monitor schedules, track live scores, and analyze game statistics in real-time.
                    </p>
                </div>

                {/* Control Panel */}
                <div className="glass-panel backdrop-blur-2xl rounded-3xl p-1.5 border border-white/10 shadow-[0_0_60px_-15px_rgba(0,243,255,0.1)] relative overflow-hidden group hover:border-white/20 transition-all duration-500 w-full max-w-lg">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
                    
                    <div className="bg-cyber-dark/80 rounded-[20px] p-8 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                                </span>
                                <span className="text-[10px] font-mono text-neon-green font-bold tracking-widest uppercase">System Operational</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[10px] font-mono text-slate-500 hover:text-neon-blue transition-colors cursor-help" title="Scheduling Module">SCH</span>
                                <span className="text-[10px] font-mono text-slate-500 hover:text-neon-blue transition-colors cursor-help" title="Live Scores">SCR</span>
                                <span className="text-[10px] font-mono text-slate-500 hover:text-neon-blue transition-colors cursor-help" title="Analytics">ANL</span>
                            </div>
                        </div>
                        
                        <button className="w-full py-5 bg-neon-blue text-cyber-black clip-corner font-black text-lg hover:bg-white transition-all shadow-[0_0_25px_rgba(0,243,255,0.3)] hover:shadow-[0_0_40px_rgba(0,243,255,0.6)] group uppercase tracking-widest relative overflow-hidden mb-4" type="button">
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Enter Portal
                                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform font-bold">arrow_forward</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                        </button>
                        
                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 py-3 bg-slate-800/50 hover:bg-slate-700 text-slate-400 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors text-xs font-bold font-mono tracking-wide group" type="button">
                                <span className="material-symbols-outlined text-base group-hover:text-neon-purple transition-colors">how_to_reg</span>
                                <span className="group-hover:text-white transition-colors">REQUEST ACCESS</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 bg-slate-800/50 hover:bg-slate-700 text-slate-400 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors text-xs font-bold font-mono tracking-wide group" type="button">
                                <span className="material-symbols-outlined text-base group-hover:text-neon-green transition-colors">leaderboard</span>
                                <span className="group-hover:text-white transition-colors">LIVE STANDINGS</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] text-slate-600 font-mono uppercase tracking-[0.2em] mb-2">
                        Powered by IskoSports Tech
                    </p>
                    <div className="flex justify-center gap-4 text-[10px] text-slate-700 font-mono">
                        <a className="hover:text-neon-blue transition-colors" href="#">Privacy Policy</a>
                        <span>//</span>
                        <a className="hover:text-neon-blue transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
}

export default App;
