import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  // We can use usePathname to highlight active links if we want to add that logic later
  // const pathname = usePathname();

  return (
    <aside className="w-20 xl:w-72 h-full flex flex-col border-r border-slate-800 bg-cyber-dark/90 backdrop-blur-xl shrink-0 z-30 transition-all duration-300 relative group hidden lg:flex">
      <div className="h-20 flex items-center justify-center xl:justify-start xl:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="flex items-center gap-3 z-10">
          <div className="w-10 h-10 relative flex items-center justify-center bg-slate-900 rounded border border-slate-700">
            <span className="material-symbols-outlined text-neon-blue">sports_esports</span>
          </div>
          <div className="hidden xl:block">
            <h1 className="text-xl font-bold tracking-tighter text-white italic">
              ISKO<span className="text-neon-blue">ARENA</span>
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-2">
        <div className="px-4 mb-2 hidden xl:block">
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Main_Menu</p>
        </div>

        <Link
          href="/dashboard"
          className="flex items-center gap-4 px-3 xl:px-4 py-3 rounded text-slate-400 hover:bg-white/5 hover:text-white transition-all group"
        >
          <span className="material-symbols-outlined group-hover:text-neon-blue transition-colors">grid_view</span>
          <span className="hidden xl:block text-sm font-medium tracking-wide">Dashboard</span>
        </Link>

        <Link
          href="/dashboard/schedule"
          className="flex items-center gap-4 px-3 xl:px-4 py-3 rounded text-slate-400 hover:bg-white/5 hover:text-white transition-all group"
        >
          <span className="material-symbols-outlined group-hover:text-neon-blue transition-colors">
            calendar_month
          </span>
          <span className="hidden xl:block text-sm font-medium tracking-wide">Schedule</span>
        </Link>

        {/* Standings Link with active style example (simulated with static classes for now) */}
        <div className="relative group">
          {/* Active indicator (optional, logic needed for dynamic) */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-neon-blue rounded-r shadow-[0_0_10px_#00f0ff]"></div> */}
          
          <Link
            href="/dashboard/standings"
            className="flex items-center gap-4 px-3 xl:px-4 py-3 rounded text-slate-400 hover:bg-white/5 hover:text-white transition-all group"
          >
            <span className="material-symbols-outlined group-hover:text-neon-blue transition-colors">leaderboard</span>
            <span className="hidden xl:block text-sm font-medium tracking-wide">Standings</span>
          </Link>
        </div>

        <Link
          href="/dashboard/scores"
          className="flex items-center gap-4 px-3 xl:px-4 py-3 rounded text-slate-400 hover:bg-white/5 hover:text-white transition-all group"
        >
          <span className="material-symbols-outlined group-hover:text-neon-blue transition-colors">scoreboard</span>
          <span className="hidden xl:block text-sm font-medium tracking-wide">Match Scores</span>
        </Link>

        <Link
          href="/dashboard/analytics"
          className="flex items-center gap-4 px-3 xl:px-4 py-3 rounded text-slate-400 hover:bg-white/5 hover:text-white transition-all group"
        >
          <span className="material-symbols-outlined group-hover:text-neon-blue transition-colors">monitoring</span>
          <span className="hidden xl:block text-sm font-medium tracking-wide">Analytics</span>
        </Link>
      </nav>

      <div className="p-4 border-t border-slate-800/50 bg-black/20">
        <div className="flex items-center gap-3 p-2 rounded border border-transparent hover:border-slate-700 hover:bg-slate-800/50 cursor-pointer transition-all group">
          <div className="w-9 h-9 rounded bg-slate-800 relative overflow-hidden">
            <img
              alt="User"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_J8klao_CN5SUb72tztSs0xRbyn4soYi1P0N-mDymn9mwRiQARyzkXSskAwzGPTTa4NSCs53PxKLxMVXoMrWW-wrx6sM_SvgLO1t3kt0-gxGeexVe_aS2754_bAvgNiPZk9xqWMK1_joqFNp-TySx6Td0K2rl6mefXKqqxfRRtXWorMhigOGaqsJQSqp6R2DC5wkBW_OrVwiCswUtVwG_Y2MrjbB-Wgi2Iseq_VxbzEATMRcwN2TYyVrqiYi_8qnVlHxDFxbjHD8"
            />
          </div>
          <div className="hidden xl:block flex-1 min-w-0">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Admin_User</p>
            <p className="text-[10px] text-neon-blue font-mono">ID: #8821</p>
          </div>
          <span className="material-symbols-outlined text-slate-500 text-lg hidden xl:block">settings</span>
        </div>
      </div>
    </aside>
  );
}
