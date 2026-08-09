import React, { useState, useEffect } from 'react';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <input
            type="text"
            placeholder="Type a section to jump to..."
            className="w-full outline-none text-slate-800 placeholder-slate-400 text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
        <div className="max-h-64 overflow-y-auto p-2 space-y-1">
          {[
            { name: 'About Me', id: 'about' },
            { name: 'Tech Stack', id: 'tech-stack' },
            { name: 'Experience', id: 'experience' },
            { name: 'Projects', id: 'projects' },
            { name: 'Resume', id: 'resume' },
          ]
            .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
            .map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-100 text-slate-700 font-medium text-sm flex justify-between items-center transition"
              >
                <span>{item.name}</span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Section</span>
              </button>
            ))}
        </div>
        <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 text-xs text-slate-400 flex justify-between">
          <span>Press ESC to close</span>
          <span>Navigation Quick Menu</span>
        </div>
      </div>
    </div>
  );
}