import React, { useState, useEffect } from 'react';
import { FaFileAlt, FaTerminal } from 'react-icons/fa';

export default function Hero() {
  const phrases = [
    "Hi, I'm Daniel D'Souza",
    "Welcome to my website",
    "Scroll to explore!",
    "Open the terminal ;)"
  ];

  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(50);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed, phrases]);

  const handleOpenTerminal = () => {
    window.dispatchEvent(new CustomEvent('open-terminal'));
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-20">

      {/* Terminal Style Box Wrapper */}
      <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-10 max-w-3xl w-full text-left font-mono mb-8">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs text-slate-400">bash — daniel@portfolio:~</span>
          <div className="w-10"></div>
        </div>


        <div className="min-h-[70px] flex items-center text-xl md:text-3xl text-green-400 font-bold">
          <span className="mr-3 text-slate-500 select-none">&gt;</span>
          <span>{currentText}</span>
          <span className="animate-pulse ml-1 w-2.5 h-6 md:h-8 bg-green-400 inline-block"></span>
        </div>
      </div>

      <p className="text-xl md:text-2xl text-slate-600 mb-8">
        Computer Science Honors Student & Full-Stack Developer
      </p>

      {/* Action Row: Responsive Terminal Trigger & Resume CTA */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        
        {/* Desktop View Badge */}
        <div className="hidden md:inline-flex items-center bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm text-slate-700 shadow-sm font-sans">
          <span>Press</span>
          <kbd className="bg-slate-100 border border-slate-300 px-2 py-0.5 rounded mx-1.5 font-mono text-xs shadow-inner">Ctrl or Cmd</kbd>
          <span>+</span>
          <kbd className="bg-slate-100 border border-slate-300 px-2 py-0.5 rounded mx-1.5 font-mono text-xs shadow-inner">K</kbd>
          <span>to open interactive terminal</span>
        </div>

        {/* Mobile View Button / Badge */}
        <button 
          onClick={handleOpenTerminal}
          className="md:hidden inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm text-slate-700 shadow-sm font-sans active:scale-95 transition"
        >
          <span className="font-mono font-bold text-green-600">&gt;_</span>
          <span>Press to open terminal</span>
        </button>

        <a 
          href="/Daniel-DSouza-Resume.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition shadow-sm font-sans"
        >
          <FaFileAlt className="text-xs" /> Resume
        </a>
      </div>
    </section>
  );
}