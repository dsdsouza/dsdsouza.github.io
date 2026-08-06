import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CreativeWorks from './components/CreativeWorks';
import CommandPalette from './components/CommandPalette';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-slate-900 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <CreativeWorks />
      <CommandPalette />
      
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Daniel D'Souza. Built for GitHub Pages.</p>
      </footer>
    </div>
  );
}