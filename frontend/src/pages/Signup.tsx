import React from "react";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <div className="bg-cyber-black text-slate-300 font-display overflow-hidden flex h-screen w-full relative selection:bg-neon-blue selection:text-black">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" style={{backgroundImage: "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-cyber-grid"></div>
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-cyber-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden group animate-fade-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
          <div className="p-8 pb-4 flex flex-col items-center relative z-10">
            <div className="w-16 h-16 relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-neon-blue blur-xl opacity-30 rounded-full animate-pulse"></div>
              <div className="relative z-10 bg-cyber-black border border-neon-blue/30 rounded-full p-3 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                <span className="material-symbols-outlined text-3xl text-neon-blue">stadium</span>
              </div>
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic mb-1">Isko<span className="text-neon-blue neon-text">Arena</span></h1>
            <p className="text-slate-400 text-xs font-mono uppercase tracking-widest bg-white/5 px-3 py-1 rounded border border-white/5">Admin Registration Module</p>
          </div>
          <form className="px-8 pb-8 space-y-5 relative z-10">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 font-mono pl-1">Full Name</label>
              <div className="relative group/input">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-neon-blue transition-colors material-symbols-outlined text-lg">badge</span>
                <input className="w-full bg-black/40 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-mono text-sm" placeholder="ENTER_FULL_NAME" type="text" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 font-mono pl-1">Email Credentials</label>
              <div className="relative group/input">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-neon-blue transition-colors material-symbols-outlined text-lg">mail</span>
                <input className="w-full bg-black/40 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-mono text-sm" placeholder="admin@iskoarena.edu" type="email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 font-mono pl-1">Password</label>
                <div className="relative group/input">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-neon-blue transition-colors material-symbols-outlined text-lg">lock</span>
                  <input className="w-full bg-black/40 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-mono text-sm" placeholder="••••••••" type="password" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 font-mono pl-1">Confirm</label>
                <div className="relative group/input">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-neon-blue transition-colors material-symbols-outlined text-lg">lock_reset</span>
                  <input className="w-full bg-black/40 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all font-mono text-sm" placeholder="••••••••" type="password" />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 py-2">
              <div className="relative flex items-start">
                <input className="h-4 w-4 rounded border-slate-700 bg-black/40 text-neon-blue focus:ring-neon-blue focus:ring-offset-0" id="terms" type="checkbox" />
              </div>
              <label className="text-xs text-slate-400" htmlFor="terms">
                I agree to the <a className="text-neon-blue hover:underline decoration-neon-blue/50" href="#">Terms of Service</a> and <a className="text-neon-blue hover:underline decoration-neon-blue/50" href="#">Privacy Policy</a> regarding admin data usage.
              </label>
            </div>
            <button className="w-full bg-neon-blue text-black font-bold py-3.5 rounded-none clip-corner uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all mt-4 flex items-center justify-center gap-2 group/btn relative overflow-hidden" type="button">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">Initialize Account</span>
              <span className="material-symbols-outlined group-hover/btn:rotate-12 transition-transform relative z-10">rocket_launch</span>
            </button>
          </form>
          <div className="p-6 text-center border-t border-white/5 bg-black/20 relative z-10">
            <p className="text-sm text-slate-400">
              Existing Administrator? 
              <Link className="text-neon-blue hover:text-white font-bold transition-colors ml-1 inline-flex items-center gap-1 group/link" to="/login">
                Access Terminal
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">login</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-end gap-2 opacity-50 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            <span className="text-[10px] font-mono text-neon-green">SYSTEM STATUS: ONLINE</span>
          </div>
          <span className="text-[10px] font-mono text-slate-600">V.2.0.4 // SECURE CONNECTION</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
