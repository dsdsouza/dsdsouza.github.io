import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Main Page Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import CommandPalette from './components/CommandPalette';
import NotFound from './components/NotFound';

// Detailed Experience Pages
import ReWildAI from './Experience/ReWildAI';
import ReWildVolunteer from './Experience/ReWildVolunteer';
import Designatronics from './Experience/Designatronics';
import RTX from './Experience/RTX';

// Detailed Project Pages
import LandcareHub from './Projects/LandcareHub';
import VolunteerSystem from './Projects/VolunteerSystem';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-slate-900 selection:text-white">
      {/* Navbar sits globally on all pages */}
      <Navbar />
      
      {/* CommandPalette sits globally so Ctrl+K / Cmd+K works everywhere */}
      <CommandPalette />
      
      {/* The Routes component handles switching pages */}
      <Routes>
        {/* The Main Portfolio Page */}
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Resume />
          </main>
        } />

        {/* The Detailed Experience Pages */}
        <Route path="/experience/rewild-ai" element={<ReWildAI />} />
        <Route path="/experience/rewild-volunteer" element={<ReWildVolunteer />} />
        <Route path="/experience/designatronics" element={<Designatronics />} />
        <Route path="/experience/rtx" element={<RTX />} />

        {/* The Detailed Project Pages */}
        <Route path="/projects/landcare-hub" element={<LandcareHub />} />
        <Route path="/projects/volunteer-management" element={<VolunteerSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Daniel D'Souza.</p>
      </footer>
    </div>
  );
}