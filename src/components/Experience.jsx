import React, { useState } from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      company: "REWILD LONG ISLAND INCORPORATED",
      role: "Software Development Intern (AI Team)",
      period: "Aug 2026 - Present",
      location: "Remote",
      logo: "/assets/rewildlogo.webp",
      description: "Architecting a multi-lingual, conversational AI platform to deliver localized native plant guidance and drive community ecological action.",
      skills: ["Python", "TypeScript", "JavaScript", "HTML/CSS", "Docker", "GCP", "RESTful APIs", "PostgreSQL", "Git"],
      details: [
        "Architecting a multi-lingual, conversational AI platform using Python, TypeScript, JavaScript, HTML, and CSS to deliver localized native plant guidance and drive community ecological action.",
        "Scaled backend engine capabilities by deploying containerized microservices via Docker on Google Cloud Platform and constructing RESTful APIs for cross-platform data delivery.",
        "Engineered production-ready database schemas in PostgreSQL and managed codebase versioning with Git to facilitate API integration across partner non-profit networks."
      ]
    },
    {
      company: "REWILD LONG ISLAND INCORPORATED",
      role: "Software Development Intern (Volunteer Team)",
      period: "Sep 2025 - Aug 2026",
      location: "Remote",
      logo: "/assets/rewildlogo.webp",
      description: "Led a team to build and scale a secure volunteer management platform with JWT authentication for orchestrating environmental action.",
      skills: ["Node.js", "TypeScript", "JavaScript", "HTML/CSS", "Python", "JWT Auth", "Vercel", "GCP", "RESTful APIs", "PowerShell", "Git", "PostgreSQL"],
      details: [
        "Led a small development team to build a secure volunteer management platform using Node.js, TypeScript, JavaScript, HTML, CSS, and Python with JWT authentication, for orchestrating community-driven environmental action.",
        "Orchestrated frontend deployment to Vercel and backend migration from Cloudflare to Google Cloud Platform connected via RESTful APIs.",
        "Automated backend administrative workflows using PowerShell, Git, and PostgreSQL to streamline scheduling, location tracking, and user profile management."
      ]
    },
    {
      company: "SDP/SI Mechanical Components (Designatronics)",
      role: "MIS (Management of Information Systems) Intern",
      period: "Jun 2025 - Aug 2025",
      location: "Hicksville, NY",
      logo: "/assets/designatronicslogo.jpg",
      description: "Executed full-scale software migration of a legacy enterprise engineering tool to comply with Department of Defense (DOD) cybersecurity mandates.",
      skills: ["C#", "PHP", "Java", "JavaScript", "HTML/CSS", "Microsoft IIS", "MySQL", "PowerShell", "Active Directory"],
      details: [
        "Executed the full-scale software migration of a legacy enterprise engineering tool using C#, PHP, Java, JavaScript, HTML, and CSS to comply with Department of Defense (DOD) cybersecurity mandates.",
        "Reverse-engineered and redeployed internal infrastructure hosted on outdated servers, utilizing Microsoft IIS, MySQL, and PowerShell across Windows environments.",
        "Standardized local hardware deployment, resolved network printer configurations, and managed system administration utilities using Active Directory Tools."
      ]
    },
    {
      company: "RTX",
      role: "Future Ready Engineer Intern",
      period: "Jun 2024 - Jul 2024",
      location: "Remote",
      logo: "/assets/rtxlogo.jpg",
      description: "Developed an AI-driven prototype application to detect email phishing threats and protect senior citizens.",
      skills: ["Python", "JavaScript", "HTML/CSS", "AI Phishing Detection", "UI/UX Design"],
      details: [
        "Developed an AI-driven prototype application leveraging Python, JavaScript, HTML, and CSS designed to detect email phishing threats and protect elderly users.",
        "Streamlined feature delivery and UI layout to make the user experience intuitive for senior citizens."
      ]
    }
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-slate-900 border-b pb-2">Experience</h2>
      <div className="space-y-8 border-l-2 border-slate-200 pl-6 ml-2">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedExp(exp)}
            className="relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-slate-400 hover:shadow-md cursor-pointer transition group"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-slate-400 border-4 border-white group-hover:bg-slate-900 transition"></span>
            
            {/* Header Area */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex-shrink-0 bg-slate-50 border border-slate-200 rounded-lg p-1 flex items-center justify-center overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="w-full h-full object-contain rounded-md"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    {exp.company}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition flex items-center gap-2">
                    {exp.role} <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition" />
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-500 mb-3">{exp.period} • {exp.location}</p>
            <p className="text-slate-700 text-sm mb-4">{exp.description}</p>

            {/* Skills Tag Cloud */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
              {exp.skills.map((skill, i) => (
                <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2 py-0.5 rounded border border-slate-200 font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal View for In-Depth Experience */}
      {selectedExp && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedExp(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 text-xl p-1"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex-shrink-0 bg-slate-50 border border-slate-200 rounded-lg p-1 flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedExp.logo} 
                  alt={`${selectedExp.company} logo`} 
                  className="w-full h-full object-contain rounded-md"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">{selectedExp.company}</span>
                <h3 className="text-2xl font-bold text-slate-900">{selectedExp.role}</h3>
              </div>
            </div>

            <p className="text-sm font-medium text-slate-500 mb-6">{selectedExp.period} • {selectedExp.location}</p>

            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 border-b pb-1">Key Achievements & Responsibilities</h4>
            <ul className="list-disc list-inside space-y-3 text-slate-700 text-sm mb-6 leading-relaxed">
              {selectedExp.details.map((bullet, index) => (
                <li key={index} className="pl-1">{bullet}</li>
              ))}
            </ul>

            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {selectedExp.skills.map((skill, i) => (
                <span key={i} className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-md border border-slate-200 font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}