import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const sampleProjects = [
    {
      title: "Sustainable Landcare Hub",
      subtitle: "Conversational AI Platform",
      picture: "/assets/SustainableLandcareHubImage.jpg",
      link: "/projects/landcare-hub",
      description: "Multi-lingual conversational AI platform delivering localized native plant guidance and ecological workflows. Containerized backend microservices using Docker and deployed on Google Cloud Platform with RESTful APIs.",
      tags: ["Python", "TypeScript", "Docker", "GCP", "PostgreSQL", "RESTful APIs", "Git"]
    },
    {
      title: "Full-Stack Volunteer Management System",
      subtitle: "Role-Based Operations Platform",
      picture: "/assets/VolunteerManagementImage.jpg",
      link: "/projects/volunteer-management",
      description: "Secure volunteer and intern management platform featuring JWT authentication, automated scheduling via PowerShell scripts, and cross-platform RESTful APIs hosted on Vercel and GCP.",
      tags: ["Node.js", "TypeScript", "JavaScript", "JWT Auth", "Vercel", "GCP", "PostgreSQL", "PowerShell"]
    }
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-slate-900 border-b pb-2">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {sampleProjects.map((project, index) => (
          <div key={index} className="bg-white border-2 border-slate-900 rounded-xl flex flex-col justify-between hover-lift transition">
            
            {/* Wrap the card content in a Link component to navigate within the app */}
            <Link 
              to={project.link} 
              className="block p-6 w-full h-full flex flex-col justify-between" 
            >
              
              <div>
                
                {/* <div className="w-full h-44 bg-slate-100 border border-slate-300 rounded-lg mb-4 flex items-center justify-center text-slate-400 font-mono text-sm">
                  <img 
                    src={project.picture} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div> */}
                
                <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">{project.subtitle}</p>
                <p className="text-slate-700 text-sm mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-slate-100 border border-slate-300 text-slate-800 text-xs px-2.5 py-1 rounded font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
            
          </div>
        ))}
      </div>
    </section>
  );
}