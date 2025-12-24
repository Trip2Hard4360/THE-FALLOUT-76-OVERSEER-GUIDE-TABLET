
import React from 'react';

const TerminalHeader: React.FC = () => {
  return (
    <header className="border-b border-amber-900 bg-black/90 p-3 flex justify-between items-center relative z-20">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <svg 
            className="absolute w-full h-full text-amber-900 animate-spin-slow opacity-40" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.47,5.34 14.86,5.08L14.47,2.42C14.43,2.18 14.22,2 14,2H10C9.78,2 9.57,2.18 9.53,2.42L9.14,5.08C8.53,5.34 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.53,18.66 9.14,18.92L9.53,21.58C9.57,21.82 9.78,22 10,22H14C14.22,22 14.43,21.82 14.47,21.58L14.86,18.92C15.47,18.66 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
          </svg>
          <div className="relative z-10 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xs glow border border-black/20">
            76
          </div>
        </div>
        <div>
          <h1 className="pipboy-font text-xl tracking-[0.15em] text-amber-400 uppercase leading-none">Overseer Guide Tablet</h1>
        </div>
      </div>
      <div className="flex gap-4">
        <span className="pipboy-font text-amber-700 text-xs hidden sm:block uppercase">S.P.E.C.I.A.L. MODE</span>
        <div className="px-2 py-0.5 border border-amber-900 rounded bg-amber-900/20">
           <span className="pipboy-font text-amber-500 text-xs">SYS_ONLINE</span>
        </div>
      </div>
    </header>
  );
};

export default TerminalHeader;
