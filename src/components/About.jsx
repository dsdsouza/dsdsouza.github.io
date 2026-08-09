import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-slate-900 border-b pb-2">About Me</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
          <img 
            src="/assets/danielarm1.jpg" 
            alt="Daniel D'Souza" 
            className="w-full h-full object-cover object-top"
          />
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