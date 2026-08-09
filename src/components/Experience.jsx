import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "REWILD LONG ISLAND INCORPORATED",
      role: "Software Development Intern (AI Team)",
      period: "Aug 2026 - Present",
      location: "Remote",
      logo: "/assets/rewildlogo.webp",
      link: "/experience/rewild-ai",
      description: "Architecting a multi-lingual, conversational AI platform using Python, TypeScript, JavaScript, HTML, and CSS to deliver localized native plant guidance and drive community ecological action. Scaled backend engine capabilities by deploying containerized microservices via Docker on Google Cloud Platform.",
      skills: ["Python", "TypeScript", "JavaScript", "HTML/CSS", "Docker", "GCP", "RESTful APIs", "PostgreSQL", "Git"]
    },
    {
      company: "REWILD LONG ISLAND INCORPORATED",
      role: "Software Development Intern (Volunteer Team)",
      period: "Sep 2025 - Aug 2026",
      location: "Remote",
      logo: "/assets/rewildlogo.webp",
      link: "/experience/rewild-volunteer",
      description: "Led a small development team to build a secure volunteer management platform with JWT authentication. Orchestrated frontend deployment to Vercel and backend migration to Google Cloud Platform, automating workflows with PowerShell.",
      skills: ["Node.js", "TypeScript", "JavaScript", "HTML/CSS", "Python", "JWT Auth", "Vercel", "GCP", "PowerShell", "PostgreSQL"]
    },
    {
      company: "SDP/SI Mechanical Components (Designatronics)",
      role: "MIS (Management of Information Systems) Intern",
      period: "Jun 2025 - Aug 2025",
      location: "Hicksville, NY",
      logo: "/assets/designatronicslogo.jpg",
      link: "/experience/designatronics",
      description: "Executed the full-scale software migration of a legacy enterprise engineering tool to comply with Department of Defense (DOD) cybersecurity mandates. Reverse-engineered internal infrastructure and managed system administration utilities.",
      skills: ["C#", "PHP", "Java", "JavaScript", "HTML/CSS", "Microsoft IIS", "MySQL", "PowerShell", "Active Directory", "Linux"]
    },
    {
      company: "RTX",
      role: "Future Ready Engineer Intern",
      period: "Jun 2024 - Jul 2024",
      location: "Remote",
      logo: "/assets/rtxlogo.jpg",
      link: "/experience/rtx",
      description: "Developed an AI-driven prototype application leveraging Python, JavaScript, HTML, and CSS designed to detect email phishing threats and protect elderly users. Streamlined feature delivery and UI layout.",
      skills: ["Python", "JavaScript", "HTML/CSS", "AI Phishing Detection", "UI/UX Design"]
    }
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-slate-900 border-b pb-2">Experience</h2>
      <div className="space-y-8 border-l-2 border-slate-200 pl-6 ml-2">
        {experiences.map((exp, index) => (
          <div key={index} className="relative bg-white rounded-xl border border-slate-200 shadow-sm hover-lift transition">
            <span className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-slate-400 border-4 border-white"></span>
            
            {/* Wrap the card content in an anchor tag to open in a new tab */}
            <a 
              href={exp.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 w-full h-full"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 flex-shrink-0 bg-slate-50 border border-slate-200 rounded-lg p-1 flex items-center justify-center overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="w-full h-full object-contain rounded-md"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    {exp.company}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{exp.role}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-500 mb-3">{exp.period} • {exp.location}</p>
              <p className="text-slate-700 text-sm mb-4">{exp.description}</p>

              {/* Skills Display */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="bg-slate-50 text-slate-600 text-xs px-2 py-0.5 rounded border border-slate-200 font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}