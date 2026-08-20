import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      // If we are on a subpage (e.g., /experience/rtx), navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      // If we are already on the home page, just smooth scroll to the section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-40 px-6 py-4 flex justify-between items-center">
      {/* Left side: Social Links */}
      <div className="flex items-center space-x-6">
        <a href="https://github.com/dsdsouza" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-black flex items-center gap-2 font-semibold text-sm">
          <FaGithub className="text-lg" /> <span className="hidden sm:inline">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/danielsdsouza/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-black flex items-center gap-2 font-semibold text-sm">
          <FaLinkedin className="text-lg" /> <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a href="https://www.youtube.com/@Firewallnut" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-black flex items-center gap-2 font-semibold text-sm">
          <FaYoutube className="text-lg" /> <span className="hidden sm:inline">YouTube</span>
        </a>
        <a href="mailto:danielsethdsouza@gmail.com" className="text-slate-700 hover:text-black flex items-center gap-2 font-semibold text-sm">
          <FaEnvelope className="text-lg" /> <span className="hidden sm:inline">Email</span>
        </a>
      </div>

      {/* Right side: Hamburger Menu Toggle Button */}
      <div className="relative">
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="p-2 text-slate-700 hover:text-black hover:bg-slate-100 rounded-lg transition"
        >
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>

        {/* Navigation Dropdown Drawer */}
        {isOpen && (
          <div className="absolute right-0 mt-3 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-2 flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            <button 
              onClick={() => handleNavClick('about')} 
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 font-medium transition"
            >
              About Me
            </button>
            <button 
              onClick={() => handleNavClick('tech-stack')} 
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 font-medium transition"
            >
              Tech Stack
            </button>
            <button 
              onClick={() => handleNavClick('experience')} 
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 font-medium transition"
            >
              Experience
            </button>
            <button 
              onClick={() => handleNavClick('projects')} 
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 font-medium transition"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('resume')} 
              className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 font-medium transition border-t border-slate-100"
            >
              Resume Section
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}