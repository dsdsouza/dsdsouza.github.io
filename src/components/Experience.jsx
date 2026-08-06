import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "REWILD LONG ISLAND INCORPORATED",
      role: "Volunteer — ReWild Software Dev Team (AI Team)",
      period: "Jul 2026 - Present",
      location: "Remote",
      description: "Designing and building a multi-lingual, conversational AI platform that provides localized native plant guidance and encourages community-driven ecological action."
    },
    {
      company: "REWILD LONG ISLAND INCORPORATED",
      role: "Volunteer — ReWild Software Dev Team",
      period: "Sep 2025 - Present",
      location: "Remote",
      description: "Led a small team of interns to design, build, and scale a secure, full-stack volunteer and intern management platform on Vercel and Google Cloud Platform."
    },
    {
      company: "SDP/SI Mechanical Components (Designatronics)",
      role: "MIS (Management of Information Systems) Intern",
      period: "Jun 2025 - Aug 2025",
      location: "New York, United States",
      description: "Successfully completed the software migration of a legacy system to meet cybersecurity requirements set by the Department of Defense (DOD). This involved reverse engineering, redesigning, and redeploying architecture."
    },
    {
      company: "RTX",
      role: "Future Ready Engineer — Internship",
      period: "Jun 2024 - Jul 2024",
      location: "Remote",
      description: "Developed a prototype application that uses AI to aid the elderly in combating email phishing scams through detection and education."
    }
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-slate-900 border-b pb-2">Experience</h2>
      <div className="space-y-8 border-l-2 border-slate-200 pl-6 ml-2">
        {experiences.map((exp, index) => (
          <div key={index} className="relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover-lift">
            <span className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-slate-400 border-4 border-white"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{exp.company}</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">{exp.role}</h3>
            <p className="text-sm text-slate-500 mb-3">{exp.period} • {exp.location}</p>
            <p className="text-slate-700 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}