import React from 'react';

export default function CreativeWorks() {
  return (
    <section id="creative" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-slate-900 border-b pb-2">Creative Works</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border-2 border-slate-900 rounded-xl p-6 hover-lift">
          <h3 className="text-xl font-bold text-slate-900 mb-1">Digital Art & Design</h3>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Illustration & Perspective Studies</p>
          <p className="text-slate-700 text-sm">Exploring organic forms, structural environments, and digital canvas workflows using tools like Krita.</p>
        </div>
        <div className="bg-white border-2 border-slate-900 rounded-xl p-6 hover-lift">
          <h3 className="text-xl font-bold text-slate-900 mb-1">Experimental Audio</h3>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Math Rock & Digital Production</p>
          <p className="text-slate-700 text-sm">Producing guitar-driven tracks, multi-track audio layering, and algorithmic composition concepts.</p>
        </div>
      </div>
    </section>
  );
}