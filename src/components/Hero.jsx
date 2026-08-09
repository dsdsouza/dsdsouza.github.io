import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-20">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-4">
        Hi, I'm Daniel D'Souza
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 mb-8">
        Computer Science Honors Student & Full-Stack Developer
      </p>

      {/* Action Row: Ctrl+K badge & Resume CTA */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="inline-flex items-center bg-slate-100 border border-slate-300 px-4 py-2 rounded-lg text-sm text-slate-700 shadow-sm">
          <span>Press</span>
          <kbd className="bg-white border border-slate-300 px-2 py-0.5 rounded mx-1.5 font-mono text-xs shadow-inner">Ctrl or Cmd</kbd>
          <span>+</span>
          <kbd className="bg-white border border-slate-300 px-2 py-0.5 rounded mx-1.5 font-mono text-xs shadow-inner">K</kbd>
          <span>to open terminal and jump anywhere</span>
        </div>

        <a 
          href="/Daniel-DSouza-Resume.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition shadow-sm"
        >
          <FaFileAlt className="text-xs" /> Resume
        </a>
      </div>
    </section>
  );
}