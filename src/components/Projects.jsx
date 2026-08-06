import React from 'react';

export default function Projects() {
  const sampleProjects = [
    {
      title: "Sustainable Landcare Hub",
      subtitle: "AI-Driven Environmental Guidance Platform",
      description: "Engineering an interactive platform incorporating localized AI models to supply native plant guidance and support ecological workflows.",
      tags: ["Python", "React", "GCP", "AI/NLP"]
    },
    {
      title: "Full-Stack Volunteer Management System",
      subtitle: "Internal Operations & Role-Based Platform",
      description: "Built and scaled a secure management system featuring authentication, live communication tools, and smooth deployments on Vercel.",
      tags: ["TypeScript", "Node.js", "PostgreSQL", "Vercel"]
    }
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-slate-900 border-b pb-2">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {sampleProjects.map((project, index) => (
          <div key={index} className="bg-white border-2 border-slate-900 rounded-xl p-6 flex flex-col justify-between hover-lift">
            <div>
              <div className="w-full h-44 bg-slate-100 border border-slate-300 rounded-lg mb-4 flex items-center justify-center text-slate-400 font-mono text-sm">
                [ Project Image Preview ]
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">{project.subtitle}</p>
              <p className="text-slate-700 text-sm mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-slate-100 border border-slate-300 text-slate-800 text-xs px-2.5 py-1 rounded font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}