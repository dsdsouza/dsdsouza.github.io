import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-slate-900 border-b pb-2">About Me</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Blank Image Placeholder */}
        <div className="w-full h-80 bg-slate-200 border-2 border-dashed border-slate-400 rounded-xl flex items-center justify-center text-slate-500 font-medium">
          [ Insert Picture Here ]
        </div>
        {/* Blurb Text */}
        <div>
          <p className="text-slate-700 leading-relaxed text-lg">
            Incoming Computer Science Honors student at Stony Brook University with a background in full-stack development, legacy systems migration, and practical AI applications. Currently engineering an AI-driven Sustainable Landcare Hub for ReWild Long Island. I am focused on software engineering, secure computing, and applying AI to real-world infrastructure. Always open to connecting about software systems, cybersecurity, or math!
          </p>
        </div>
      </div>
    </section>
  );
}