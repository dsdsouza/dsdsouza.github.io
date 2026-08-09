import React from 'react';
import { FaTerminal } from 'react-icons/fa';

export default function TerminalTrigger() {
  const handleOpenTerminal = () => {
    window.dispatchEvent(new CustomEvent('open-terminal'));
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleOpenTerminal}
        className="bg-slate-900 text-green-400 border border-slate-700 p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-800 hover:scale-105 transition active:scale-95 group relative"
        aria-label="Open Terminal"
      >
        <FaTerminal className="text-xl" />
        
        {/* Tooltip on hover for desktop users */}
        <span className="absolute right-full mr-3 bg-slate-900 text-slate-200 text-xs px-2.5 py-1 rounded-md border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none font-mono shadow-md">
          Open Terminal (~/CLI)
        </span>
      </button>
    </div>
  );
}