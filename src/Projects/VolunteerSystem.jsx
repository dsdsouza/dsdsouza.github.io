import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function VolunteerSystem() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 flex justify-center items-start">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-8 md:p-12 border-2 border-slate-900 shadow-sm relative">
        
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition mb-8 font-medium text-sm">
          <FaArrowLeft /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-2">Full-Stack Volunteer Management System</h1>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8 pb-6 border-b border-slate-100">
          Internal Operations & Role-Based Platform
        </p>

        <div className="w-full h-64 bg-slate-100 border border-slate-300 rounded-xl mb-8 flex items-center justify-center text-slate-400 font-mono text-base">
          [ Full Screen Project Image / GIF ]
        </div>

        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Project Architecture</h2>
        <ul className="list-disc list-outside ml-5 space-y-4 text-slate-700 text-base mb-10 leading-relaxed">
          <li>Led a small development team to build a secure volunteer management platform using Node.js, TypeScript, JavaScript, HTML, CSS, and Python with JWT authentication, for orchestrating community-driven environmental action.</li>
          <li>Orchestrated frontend deployment to Vercel and backend migration from Cloudflare to Google Cloud Platform connected via RESTful APIs.</li>
          <li>Automated backend administrative workflows using PowerShell, Git, and PostgreSQL to streamline scheduling, location tracking, and user profile management.</li>
        </ul>

        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["Node.js", "TypeScript", "JavaScript", "JWT Auth", "Vercel", "GCP", "PostgreSQL", "PowerShell", "Python", "Git"].map((tag, i) => (
            <span key={i} className="bg-slate-100 border border-slate-300 text-slate-800 text-sm px-3 py-1.5 rounded font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}