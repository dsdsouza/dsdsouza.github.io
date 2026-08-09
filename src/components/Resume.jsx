import React from 'react';
import { FaExternalLinkAlt, FaDownload, FaFilePdf } from 'react-icons/fa';

export default function Resume() {
  const resumePath = "/Daniel-DSouza-Resume.pdf";

  return (
    <section id="resume" className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm text-center flex flex-col items-center">
        <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mb-4 text-xl">
          <FaFilePdf />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Resume</h2>
        <p className="text-slate-600 mb-6 text-sm md:text-base max-w-md">
          Kept current with recent software engineering roles, full-stack projects, and technical skills.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Open in Browser */}
          <a
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition shadow-sm"
          >
            <FaExternalLinkAlt className="text-xs" /> Open in Browser
          </a>

          {/* Download PDF */}
          <a
            href={resumePath}
            download="Daniel-DSouza-Resume.pdf"
            className="inline-flex items-center gap-2 bg-slate-100 border border-slate-300 text-slate-800 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-200 transition shadow-sm"
          >
            <FaDownload className="text-xs" /> Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}