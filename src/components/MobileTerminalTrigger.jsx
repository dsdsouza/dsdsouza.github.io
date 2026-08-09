import React from 'react';
import { FaTerminal } from 'react-icons/fa';

export default function MobileTerminalTrigger() {
  const handleOpenTerminal = () => {
    window.dispatchEvent(new CustomEvent('open-terminal'));
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <button
        onClick={handleOpenTerminal}
        className="bg-slate-900 text-green-400 border border-slate-700 p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-800 transition active:scale-95"
        aria-label="Open Terminal"
      >
        <FaTerminal className="text-xl" />
      </button>
    </div>
  );
}