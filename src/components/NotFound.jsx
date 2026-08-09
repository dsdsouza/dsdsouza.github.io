import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTerminal, FaHome } from 'react-icons/fa';

export default function NotFound() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Countdown timer for automatic redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 pt-16">
      <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-8 max-w-lg w-full text-center font-mono">
        
        {/* Terminal Window Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs text-slate-400">error — 404_not_found</span>
          <div className="w-10"></div>
        </div>

        {/* Error Code */}
        <div className="text-6xl font-extrabold text-red-500 mb-2">404</div>
        <h1 className="text-xl font-bold text-slate-100 mb-4">Directory / File Not Found</h1>
        
        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The path you are looking for does not exist in the filesystem or has been moved. 
          Redirecting back to home in <span className="text-green-400 font-bold">{countdown}s</span>...
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition"
          >
            <FaHome /> Return Home Now
          </Link>
          
          <button 
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
            className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm transition"
          >
            <FaTerminal /> Open Terminal
          </button>
        </div>

      </div>
    </div>
  );
}