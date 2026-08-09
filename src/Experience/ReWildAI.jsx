import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function ReWildAI() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 flex justify-center items-start">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-8 md:p-12 border border-slate-200 shadow-sm relative">
        
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition mb-8 font-medium text-sm">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 flex-shrink-0 bg-slate-50 border border-slate-200 rounded-lg p-1.5 flex items-center justify-center overflow-hidden">
            <img 
              src="/assets/rewildlogo.webp" 
              alt="ReWild Long Island logo" 
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              ReWild Long Island Incorporated
            </span>
            <h1 className="text-3xl font-bold text-slate-900">Software Development Intern (AI Team)</h1>
          </div>
        </div>

        <p className="text-base font-medium text-slate-500 mb-8 pb-6 border-b border-slate-100">
          Aug 2026 - Present • Remote
        </p>

        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Overview & Impact</h2>
        <ul className="list-disc list-outside ml-5 space-y-4 text-slate-700 text-base mb-10 leading-relaxed">
          <li>Architecting a multi-lingual, conversational Al platform using Python, TypeScript, JavaScript, HTML, and CSS to deliver localized native plant guidance and drive community ecological action.</li>
          <li>Scaled backend engine capabilities by deploying containerized microservices via Docker on Google Cloud Platform and constructing RESTful APIs for cross-platform data delivery.</li>
          <li>Engineered production-ready database schemas in PostgreSQL and managed codebase versioning with Git to facilitate API integration across partner non-profit networks.</li>
        </ul>

        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "TypeScript", "JavaScript", "HTML/CSS", "Docker", "GCP", "RESTful APIs", "PostgreSQL", "Git"].map((skill, i) => (
            <span key={i} className="bg-slate-100 text-slate-800 text-sm px-3 py-1.5 rounded-md border border-slate-200 font-mono">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}