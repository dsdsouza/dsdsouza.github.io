import React, { useState } from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const sampleProjects = [
    {
      title: "Sustainable Landcare Hub",
      subtitle: "Conversational AI Platform",
      description: "Multi-lingual conversational AI platform delivering localized native plant guidance and ecological workflows built for non-profit networks.",
      tags: ["Python", "TypeScript", "Docker", "GCP", "PostgreSQL", "RESTful APIs", "Git"],
      details: [
        "Architecting a multi-lingual, conversational AI platform delivering localized native plant guidance and encouraging community ecological action.",
        "Containerized backend microservices using Docker and deployed on Google Cloud Platform with RESTful APIs.",
        "Engineered production-ready PostgreSQL database schemas and integrated Git version control for cross-organization distribution."
      ]
    },
    {
      title: "Full-Stack Volunteer Management System",
      subtitle: "Role-Based Operations Platform",
      description: "Secure volunteer and intern management platform featuring JWT authentication, automated administrative scheduling, and automated workflows.",
      tags: ["Node.js", "TypeScript", "JavaScript", "JWT Auth", "Vercel", "GCP", "PostgreSQL", "PowerShell"],
      details: [
        "Led a team of developers to build and scale a secure volunteer management system for orchestrating environmental action.",
        "Configured frontend hosting on Vercel and connected RESTful API backend microservices migrated to Google Cloud Platform.",
        "Automated administrative scheduling, user management, and location tracking using PowerShell scripts and PostgreSQL queries."
      ]
    }
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-slate-900 border-b pb-2">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {sampleProjects.map((project, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedProject(project)}
            className="bg-white border-2 border-slate-900 rounded-xl p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-200 cursor-pointer group"
          >
            <div>
              <div className="w-full h-44 bg-slate-100 border border-slate-300 rounded-lg mb-4 flex items-center justify-center text-slate-400 font-mono text-sm group-hover:bg-slate-200 transition">
                [ Project Image Preview ]
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition flex items-center gap-2">
                {project.title} <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition" />
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">{project.subtitle}</p>
              <p className="text-slate-700 text-sm mb-4">{project.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-slate-100 border border-slate-300 text-slate-800 text-xs px-2 py-0.5 rounded font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay for Detailed View */}
      {selectedProject && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 text-xl p-1"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <h3 className="text-2xl font-bold text-slate-900 mb-1">{selectedProject.title}</h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">{selectedProject.subtitle}</p>

            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 border-b pb-1">Overview & Implementation</h4>
            <ul className="list-disc list-inside space-y-3 text-slate-700 text-sm mb-6 leading-relaxed">
              {selectedProject.details.map((bullet, index) => (
                <li key={index} className="pl-1">{bullet}</li>
              ))}
            </ul>

            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-md border border-slate-200 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}