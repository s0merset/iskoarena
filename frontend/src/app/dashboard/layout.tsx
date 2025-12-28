import React from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-cyber-black overflow-hidden font-display text-slate-300 selection:bg-neon-blue selection:text-black">
      {/* Background Grids */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
        style={{
            backgroundSize: "40px 40px",
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)"
        }}
      ></div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-cyber-black"></div>
      
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
        {children}
      </div>
    </div>
  );
}
