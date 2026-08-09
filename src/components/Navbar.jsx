import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-40 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <a href="https://github.com/dsdsouza" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-black flex items-center gap-2 font-semibold text-sm">
          <FaGithub className="text-lg" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/danielsdsouza/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-black flex items-center gap-2 font-semibold text-sm">
          <FaLinkedin className="text-lg" /> LinkedIn
        </a>
        <a href="mailto:danielsethdsouza@gmail.com" className="text-slate-700 hover:text-black flex items-center gap-2 font-semibold text-sm">
          <FaEnvelope className="text-lg" /> Email
        </a>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#projects" className="text-slate-700 hover:text-black font-medium text-sm">Projects</a>
        <a href="/Daniel-DSouza-Resume.pdf" target="_blank" rel="noreferrer" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition">
          Resume
        </a>
      </div>
    </nav>
  );
}