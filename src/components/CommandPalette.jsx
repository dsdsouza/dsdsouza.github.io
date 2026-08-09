import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [currentDir, setCurrentDir] = useState('~');
  
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Simulated File System matching your portfolio structure
  const fileSystem = {
    '~': ['about', 'tech-stack', 'experience', 'projects', 'resume'],
    '~/experience': ['rewild-ai', 'rewild-volunteer', 'designatronics', 'rtx'],
    '~/projects': ['landcare-hub', 'volunteer-system']
  };

  const initialHistory = [
    { type: 'output', text: 'Welcome to the Portfolio Terminal v1.0.0' },
    { type: 'output', text: 'Type "help" to see available commands.' },
  ];
  
  const [history, setHistory] = useState(initialHistory);

  // Toggle Palette with Ctrl+K
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen]);

  // Keep input focused and scroll to bottom
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: 'auto' });
    }
  }, [isOpen, history]);

  const handleCommand = (cmdStr) => {
    const args = cmdStr.trim().split(' ').filter(Boolean);
    const command = args[0]?.toLowerCase();
    const target = args[1]?.toLowerCase();

    let newOutput = [];

    switch (command) {
      case 'help':
        newOutput = [
          'Available commands:',
          '  help     - Show this message',
          '  ls / dir - List directory contents',
          '  cd <dir> - Change directory or navigate to a page',
          '  clear    - Clear terminal output',
          '  exit     - Close the terminal'
        ];
        break;

      case 'ls':
      case 'dir':
        const contents = fileSystem[currentDir] || [];
        newOutput = [contents.join('   ')];
        break;

      case 'cd':
        if (!target || target === '~') {
          setCurrentDir('~');
          // If returning to root, go to home page
          if (location.pathname !== '/') navigate('/');
        } else if (target === '..') {
          if (currentDir !== '~') {
            const parent = currentDir.substring(0, currentDir.lastIndexOf('/'));
            setCurrentDir(parent || '~');
          }
        } else {
          // Check if target is a subdirectory in current path
          const possibleDir = `${currentDir}/${target}`;
          if (fileSystem[possibleDir]) {
            setCurrentDir(possibleDir);
          } 
          // Check if it's a file/section in current directory
          else if (fileSystem[currentDir]?.includes(target)) {
            newOutput = [`Navigating to ${target}...`];
            
            setTimeout(() => {
              setIsOpen(false);
              // Routing Logic
              if (currentDir === '~') {
                // It's a homepage section
                navigate('/');
                setTimeout(() => {
                  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                // It's a nested page route (e.g., ~/experience/rewild-ai)
                const routePath = currentDir.replace('~', '') + '/' + target;
                navigate(routePath);
              }
            }, 500);
          } else {
            newOutput = [`cd: ${target}: No such file or directory`];
          }
        }
        break;

      case 'clear':
        setHistory([]);
        return; // Skip adding the command to history

      case 'exit':
        setIsOpen(false);
        return;

      case '':
        break; // Empty enter press

      default:
        newOutput = [`Command not found: ${command}. Type "help" for a list of commands.`];
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: `visitor@portfolio:${currentDir}$ ${cmdStr}` },
      ...newOutput.map((text) => ({ type: 'output', text }))
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'Tab') {
      e.preventDefault(); // Prevent moving focus
      
      const args = input.trim().split(' ');
      const cmd = args[0];
      const target = args[1] || '';

      if (cmd === 'cd' || cmd === 'ls') {
        const available = fileSystem[currentDir] || [];
        // Find matching files/directories
        const matches = available.filter((item) => item.startsWith(target.toLowerCase()));
        
        if (matches.length === 1) {
          // Auto-complete if there's exactly one match
          setInput(`${cmd} ${matches[0]}`);
        } else if (matches.length > 1) {
          // Show possibilities if multiple matches exist
          setHistory((prev) => [
            ...prev,
            { type: 'input', text: `visitor@portfolio:${currentDir}$ ${input}` },
            { type: 'output', text: matches.join('   ') }
          ]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setIsOpen(false)} // Close on outside click
    >
      <div 
        className="bg-slate-900 rounded-xl shadow-2xl border border-slate-700 w-full max-w-2xl h-[450px] flex flex-col overflow-hidden font-mono text-sm"
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing when clicking inside
          inputRef.current?.focus();
        }}
      >
        {/* Terminal Header */}
        <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center justify-between select-none">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-slate-400 text-xs">visitor@portfolio ~ bash</span>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto text-slate-300 space-y-1">
          {history.map((line, i) => (
            <div key={i} className={`${line.type === 'input' ? 'text-green-400' : 'text-slate-300'}`}>
              {line.text}
            </div>
          ))}
          
          {/* Active Input Line */}
          <div className="flex items-center text-green-400 mt-2">
            <span className="mr-2 whitespace-nowrap">visitor@portfolio:{currentDir}$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-slate-100 placeholder-slate-600"
              spellCheck="false"
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}