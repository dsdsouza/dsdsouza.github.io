import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [currentDir, setCurrentDir] = useState('~');
  const [isMaximized, setIsMaximized] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // File system map distinguishing files (sections/pages) from directories (folders)
  const fileSystem = {
    '~': [
      { name: 'about', type: 'file' },
      { name: 'tech-stack', type: 'file' },
      { name: 'experience', type: 'file' },
      { name: 'projects', type: 'file' },
      { name: 'resume', type: 'file' },
      { name: 'experience/', type: 'dir' },
      { name: 'projects/', type: 'dir' }
    ],
    '~/experience': [
      { name: 'rewild-ai', type: 'file' },
      { name: 'rewild-volunteer', type: 'file' },
      { name: 'designatronics', type: 'file' },
      { name: 'rtx', type: 'file' }
    ],
    '~/projects': [
      { name: 'landcare-hub', type: 'file' },
      { name: 'volunteer-system', type: 'file' }
    ]
  };

  const initialHistory = [
    { type: 'output', text: 'Welcome to the Portfolio Terminal v1.3.0' },
    { type: 'output', text: 'Type "ls" or "dir" to list contents. Type "open <file>" to open a section. Blue items ending with "/" are folders (use "cd"). White items are files/sections.' },
    { type: 'output', text: 'Tip: Type "help" or use [TAB] to auto-complete directory paths/files.' },
  ];
  
  const [history, setHistory] = useState(initialHistory);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener('keydown', handleGlobalKeyDown);
    window.addEventListener('open-terminal', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
      window.removeEventListener('open-terminal', handleCustomOpen);
    };
  }, [isOpen]);

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
    let customRenderNodes = null;

    switch (command) {
      case 'help':
        newOutput = [
          'Available commands:',
          '  help           - Show this message',
          '  ls / dir       - List directory contents (Cyan = Folders, White = Files)',
          '  cd <dir>       - Change directory into a folder (e.g., "cd experience/")',
          '  open <file>    - Opens a page/section',
          '  clear          - Clear terminal output',
          '  exit           - Close the terminal'
        ];
        break;

      case 'ls':
      case 'dir':
        const items = fileSystem[currentDir] || [];
        customRenderNodes = (
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {items.map((item, idx) => (
              <span 
                key={idx} 
                className={item.type === 'dir' ? 'text-cyan-400 font-bold' : 'text-slate-100'}
              >
                {item.name}
              </span>
            ))}
          </div>
        );
        break;

      case 'cd':
        if (!target || target === '~') {
          setCurrentDir('~');
          if (location.pathname !== '/') navigate('/');
        } else if (target === '..') {
          if (currentDir !== '~') {
            const parent = currentDir.substring(0, currentDir.lastIndexOf('/'));
            setCurrentDir(parent || '~');
          }
        } else {
          // Normalize target by adding or cleaning trailing slash
          const cleanTarget = target.endsWith('/') ? target : `${target}/`;
          const possibleDirName = `~/${cleanTarget.replace('/', '')}`;
          const currentItems = fileSystem[currentDir] || [];
          const foundDir = currentItems.find(i => i.name === cleanTarget && i.type === 'dir');

          if (fileSystem[possibleDirName]) {
            setCurrentDir(possibleDirName);
          } else if (foundDir) {
            setCurrentDir(`${currentDir}/${cleanTarget.replace('/', '')}`);
          } else {
            newOutput = [`cd: ${target}: No such directory or not a folder`];
          }
        }
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        setIsOpen(false);
        return;

      case '':
        break;

      case 'open':
        if (!target) {
          newOutput = ['Usage: open <file>'];
          break;
        }

        const openItems = fileSystem[currentDir] || [];
        const fileToOpen = openItems.find(i => i.name === target && i.type === 'file');

        if (fileToOpen) {
          newOutput = [`Opening ${target}...`];
          setTimeout(() => {
            setIsOpen(false);
            if (currentDir === '~') {
              navigate('/');
              setTimeout(() => {
                document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            } else {
              const routePath = currentDir.replace('~', '') + '/' + target;
              navigate(routePath);
            }
          }, 300);
        } else {
          // Check if they accidentally tried to open a directory
          const isDir = openItems.find(i => i.name === `${target}/` && i.type === 'dir');
          if (isDir) {
            newOutput = [`Cannot open a directory. Please use "cd ${target}/" instead.`];
          } else {
            newOutput = [`File not found: ${target}. Type "ls" to see available files.`];
          }
        }
        break;

      default:
        newOutput = [`Command not found: ${command}. Type "help" for instructions.`];
        break;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: `visitor@portfolio:${currentDir}$ ${cmdStr}` },
      customRenderNodes 
        ? { type: 'custom', node: customRenderNodes }
        : { type: 'output', text: newOutput.join('\n') }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      
      const args = input.trim().split(' ');
      const cmd = args[0] || 'cd';
      const target = args[1] || '';

      const available = fileSystem[currentDir] || [];
      const matches = available.filter((item) => item.name.startsWith(target.toLowerCase()));
      
      if (matches.length === 1) {
        setInput(`${cmd === 'cd' ? 'cd' : cmd} ${matches[0].name}`);
      } else if (matches.length > 1) {
        setHistory((prev) => [
          ...prev,
          { type: 'input', text: `visitor@portfolio:${currentDir}$ ${input}` },
          { type: 'output', text: matches.map(m => m.name).join('   ') }
        ]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className={`bg-slate-900 rounded-xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden font-mono text-sm transition-all duration-200 ${
          isMaximized 
            ? 'w-full h-full max-w-none max-h-none m-0 rounded-none' 
            : 'w-full max-w-2xl h-[480px]'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.focus();
        }}
      >
        {/* Terminal Header */}
        <div className="bg-slate-800 px-4 py-2.5 border-b border-slate-700 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsOpen(false)}
              className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition flex items-center justify-center group focus:outline-none"
              title="Close"
            >
              <span className="text-[9px] text-red-950 opacity-0 group-hover:opacity-100 font-bold leading-none">×</span>
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition flex items-center justify-center group focus:outline-none"
              title="Minimize"
            >
              <span className="text-[9px] text-yellow-950 opacity-0 group-hover:opacity-100 font-bold leading-none">-</span>
            </button>
            <button 
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-600 transition flex items-center justify-center group focus:outline-none"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              <span className="text-[9px] text-green-950 opacity-0 group-hover:opacity-100 font-bold leading-none">+</span>
            </button>
          </div>
          
          <span className="text-slate-400 text-xs">visitor@portfolio : {currentDir}</span>
          
          <div className="text-xs text-slate-500 font-sans hidden sm:block">
            Press <kbd className="bg-slate-700 px-1.5 py-0.5 rounded text-slate-300">ESC</kbd> to exit
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto text-slate-300 space-y-1.5">
          {history.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line.type === 'input' ? (
                <span className="text-green-400">{line.text}</span>
              ) : line.type === 'custom' ? (
                line.node
              ) : (
                <span className="text-slate-300">{line.text}</span>
              )}
            </div>
          ))}
          
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