import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function LandcareHub() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 flex justify-center items-start">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-8 md:p-12 border-2 border-slate-900 shadow-sm relative">
        
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition mb-8 font-medium text-sm">
          <FaArrowLeft /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-2">Sustainable Landcare Hub</h1>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8 pb-6 border-b border-slate-100">
          AI-Driven Environmental Guidance Platform
        </p>

        <div className="w-full h-64 bg-slate-100 border border-slate-300 rounded-xl mb-8 flex items-center justify-center text-slate-400 font-mono text-base">
          [ Full Screen Project Image / GIF ]
        </div>

        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Project Architecture</h2>
        <ul className="list-disc list-outside ml-5 space-y-4 text-slate-700 text-base mb-10 leading-relaxed">
          <li>Architecting a multi-lingual, conversational Al platform using Python, TypeScript, JavaScript, HTML, and CSS to deliver localized native plant guidance and drive community ecological action.[cite: 1]</li>
          <li>Scaled backend engine capabilities by deploying containerized microservices via Docker on Google Cloud Platform and constructing RESTful APIs for cross-platform data delivery.[cite: 1]</li>
          <li>Engineered production-ready database schemas in PostgreSQL and managed codebase versioning with Git to facilitate API integration across partner non-profit networks.[cite: 1]</li>
        </ul>

        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "TypeScript", "Docker", "GCP", "PostgreSQL", "RESTful APIs", "Git"].map((tag, i) => (
            <span key={i} className="bg-slate-100 border border-slate-300 text-slate-800 text-sm px-3 py-1.5 rounded font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}