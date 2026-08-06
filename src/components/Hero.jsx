import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-20">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-4">
        Hi, I'm Daniel D'Souza
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 mb-8">
        Computer Science Honors Student & Full-Stack Developer
      </p>
      <div className="inline-flex items-center bg-slate-100 border border-slate-300 px-4 py-2 rounded-lg text-sm text-slate-700 shadow-sm">
        <span>Press</span>
        <kbd className="bg-white border border-slate-300 px-2 py-0.5 rounded mx-1.5 font-mono text-xs shadow-inner">Ctrl</kbd>
        <span>+</span>
        <kbd className="bg-white border border-slate-300 px-2 py-0.5 rounded mx-1.5 font-mono text-xs shadow-inner">K</kbd>
        <span>to jump anywhere</span>
      </div>
    </section>
  );
}