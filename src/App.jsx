import React, { useState } from 'react';
import BlocklyEditor from './components/BlocklyEditor';

function App() {
  const [code, setCode] = useState('// Your config will appear here...');

  const downloadConfig = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "autoexec.cfg";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-slate-700 bg-slate-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          CS2 Autoexec Designer
        </h1>
        <button
          onClick={downloadConfig}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded shadow-lg transition-all"
        >
          Download .cfg
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor Area */}
        <div className="flex-1 relative">
          <BlocklyEditor onCodeChange={setCode} />
        </div>

        {/* Sidebar / Preview */}
        <div className="w-1/3 min-w-[300px] border-l border-slate-700 bg-slate-950 flex flex-col">
          <div className="p-3 bg-slate-900 border-b border-slate-800 font-semibold tracking-wider text-slate-400 text-xs uppercase">
            Generated Config
          </div>
          <textarea
            className="flex-1 w-full bg-slate-950 text-emerald-400 font-mono text-sm p-4 resize-none focus:outline-none scrollbar-thin scrollbar-thumb-slate-700"
            value={code}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
