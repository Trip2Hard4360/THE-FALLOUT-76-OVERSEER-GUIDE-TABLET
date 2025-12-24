
import React, { useState, useEffect } from 'react';

interface PipBoyFrameProps {
  children: React.ReactNode;
}

const PipBoyFrame: React.FC<PipBoyFrameProps> = ({ children }) => {
  const [needlePos, setNeedlePos] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setNeedlePos(Math.floor(Math.random() * 20) + 30);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-zinc-950">
      <div className="pipboy-case w-full max-w-[1400px] h-[90vh] flex relative overflow-hidden">
        
        {/* Main Monitor Section */}
        <div className="flex-1 p-8 flex flex-col relative">
          <div className="crt-container flex-1 border-[16px] border-[#2d2d25] shadow-2xl relative">
            <div className="glass-reflection"></div>
            <div className="screen-curvature"></div>
            <div className="scanline-overlay"></div>
            
            {/* The Actual App Content */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-[24px]">
              {children}
            </div>
          </div>
          
          {/* Bottom Bezel Info */}
          <div className="mt-4 flex justify-between items-center px-6">
            <div className="flex items-center">
               <div className="bg-amber-500 px-3 py-0.5 rounded-sm flex items-center shadow-md border border-amber-600">
                  <span className="pipboy-font text-black tracking-[0.3em] text-sm font-black uppercase">Rob-Co</span>
               </div>
            </div>
            <div className="bg-black/80 px-4 py-1 border border-amber-900/30 rounded">
                <span className="pipboy-font text-amber-600 text-lg tracking-widest">23 OCT 2077 // 09:14</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-10 h-2 bg-amber-950 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-2/3 animate-pulse"></div>
               </div>
               <span className="pipboy-font text-amber-800 text-xs">SIGNAL</span>
            </div>
          </div>
        </div>

        {/* Right Controls Section */}
        <div className="w-[340px] border-l-[10px] border-[#2a2a22] bg-[#35352b] p-6 flex flex-col gap-6 shadow-inner relative">
          {/* Gauge Section */}
          <div className="bg-[#1a1a14] p-4 rounded-xl border-4 border-[#25251e] relative overflow-hidden group">
            <div className="flex justify-between items-start mb-2">
              <span className="pipboy-font text-amber-700 text-xs uppercase">Rads / Hr</span>
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
            </div>
            <div className="h-24 w-full flex items-end justify-center relative">
               <svg viewBox="0 0 100 50" className="w-full h-full text-amber-900/40">
                 <path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="4 2" />
               </svg>
               <div 
                 className="absolute bottom-0 w-1 h-20 bg-amber-500 origin-bottom gauge-needle shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                 style={{ transform: `rotate(${needlePos - 45}deg)` }}
               ></div>
            </div>
            <div className="text-center mt-2">
              <span className="pipboy-font text-amber-500 text-2xl glow">{needlePos.toFixed(1)}</span>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="grid grid-cols-1 gap-3">
             {['STAT', 'ITEM', 'DATA'].map((label) => (
               <button key={label} className="bg-[#444438] border-b-8 border-r-8 border-[#22221a] hover:bg-[#55554a] active:border-b-2 active:border-r-2 active:translate-y-1 active:translate-x-1 p-3 rounded transition-all group">
                 <span className="pipboy-font text-amber-800 group-hover:text-amber-500 text-xl tracking-[0.3em] font-bold">{label}</span>
               </button>
             ))}
          </div>

          {/* Vacuum Tubes Hardware */}
          <div className="mt-auto bg-black/40 p-4 rounded-xl border-2 border-amber-950/20 flex justify-around items-end h-32 relative">
             <div className="absolute top-2 left-1/2 -translate-x-1/2 pipboy-font text-[10px] text-amber-900 uppercase tracking-widest">Processing Core</div>
             <div className="vacuum-tube"></div>
             <div className="vacuum-tube h-48 -mb-4 scale-110"></div>
             <div className="vacuum-tube"></div>
          </div>

          {/* Speaker Grill area */}
          <div className="grid grid-cols-4 gap-1 h-16 opacity-40 mt-4">
             {Array.from({length: 12}).map((_, i) => (
               <div key={i} className="bg-black/60 rounded-full w-full h-1"></div>
             ))}
          </div>
          
          <div className="absolute bottom-4 right-4 flex flex-col items-end opacity-20 pointer-events-none">
             <span className="text-[10px] font-bold text-amber-900 uppercase">Prop of Vault-Tec</span>
             <span className="text-[10px] font-bold text-amber-900">Model 2000 MK VI</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PipBoyFrame;
