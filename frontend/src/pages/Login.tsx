import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="bg-cyber-black text-slate-300 font-display overflow-hidden flex h-screen w-full selection:bg-neon-blue selection:text-black">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" style={{backgroundImage: "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-cyber-grid"></div>
      <main className="relative z-10 w-full h-full flex items-center justify-center p-6 grid-bg">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[128px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-[96px] pointer-events-none animate-pulse-slow" style={{animationDelay: "1s"}}></div>
        <div className="max-w-md w-full relative">
          <div className="text-center mb-8 relative">
            <div className="inline-flex items-center justify-center relative mb-4">
              <div className="absolute inset-0 bg-neon-blue blur-xl opacity-30 animate-pulse"></div>
              <div className="w-20 h-20 relative flex items-center justify-center border-2 border-neon-blue/30 rounded-full bg-cyber-dark z-10">
                <span className="material-symbols-outlined text-5xl text-neon-blue drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">stadium</span>
              </div>
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">Isko<span className="text-neon-blue neon-text">Arena</span></h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-slate-500"></span>
              <p className="text-xs font-mono text-neon-blue tracking-[0.2em] uppercase">Admin Access Portal</p>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-slate-500"></span>
            </div>
          </div>
          <div className="glass-panel backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            <div className="absolute inset-0 border border-neon-blue/20 rounded-2xl pointer-events-none group-hover:border-neon-blue/40 transition-colors duration-500"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"></div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2 px-2 py-1 rounded bg-neon-green/10 border border-neon-green/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                </span>
                <span className="text-[10px] font-mono text-neon-green font-bold tracking-wider">SECURE_CONNECTION</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">V.2.4.0</span>
            </div>
            <form className="flex flex-col gap-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1" htmlFor="username">Admin ID / Email</label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-500 group-focus-within/input:text-neon-blue transition-colors text-lg">person</span>
                  </div>
                  <input className="block w-full pl-10 pr-3 py-3 bg-cyber-black/60 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all font-mono text-sm shadow-inner hover:border-slate-600" id="username" placeholder="ENTER_USERNAME" type="text" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-600 rounded-tr-sm group-focus-within/input:border-neon-blue transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-600 rounded-bl-sm group-focus-within/input:border-neon-blue transition-colors"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1" htmlFor="password">Password</label>
                  <a className="text-[10px] text-neon-blue hover:text-white transition-colors font-mono hover:underline decoration-neon-blue/50" href="#">FORGOT_PASSWORD?</a>
                </div>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-500 group-focus-within/input:text-neon-blue transition-colors text-lg">lock</span>
                  </div>
                  <input className="block w-full pl-10 pr-3 py-3 bg-cyber-black/60 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all font-mono text-sm shadow-inner hover:border-slate-600" id="password" placeholder="••••••••••••" type="password" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-600 rounded-tr-sm group-focus-within/input:border-neon-blue transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-600 rounded-bl-sm group-focus-within/input:border-neon-blue transition-colors"></div>
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-3">
                <button className="w-full py-3 bg-neon-blue text-black clip-corner font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] text-sm group uppercase tracking-widest relative overflow-hidden" type="button">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-lg">login</span>
                    Initiate Session
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-slate-700"></div>
                  <span className="flex-shrink-0 mx-4 text-slate-600 text-[10px] uppercase tracking-widest">Or access with</span>
                  <div className="flex-grow border-t border-slate-700"></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 hover:border-slate-500 transition-colors text-xs font-bold group" type="button">
                    <span className="material-symbols-outlined text-lg group-hover:text-white transition-colors">mail</span>
                    <span className="group-hover:text-white transition-colors">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 hover:border-slate-500 transition-colors text-xs font-bold group" type="button">
                    <span className="material-symbols-outlined text-lg group-hover:text-white transition-colors">fingerprint</span>
                    <span className="group-hover:text-white transition-colors">SSO</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500">
                New administrator? 
                <Link className="text-neon-blue font-bold hover:text-white transition-colors ml-1 uppercase tracking-wide text-[10px]" to="/signup">Request Access</Link>
              </p>
            </div>
          </div>
          <div className="mt-8 text-center opacity-60">
            <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">
              Authorized Personnel Only<br />
              System Monitored
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
