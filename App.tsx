
import React, { useState, useRef, useEffect } from 'react';
import TerminalHeader from './components/TerminalHeader';
import Sidebar from './components/Sidebar';
import ChatMessage from './components/ChatMessage';
import PipBoyFrame from './components/PipBoyFrame';
import { askOverseer } from './services/geminiService';
import { Message } from './types';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'VAULT-TEC OS v4.0.2 INITIALIZED. Scanning for survivors... Connection established. How can I assist you in Appalachia today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await askOverseer(text);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response.text,
        sources: response.sources
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "CRITICAL ERROR: Communication relay failure. Check external antenna."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PipBoyFrame>
      <div className="flex flex-col h-full overflow-hidden bg-black selection:bg-amber-500 selection:text-black">
        <TerminalHeader />
        
        <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
          <Sidebar onQuickAction={handleSend} />
          
          <main className="flex-1 flex flex-col relative bg-transparent">
            {/* Dark vignette to focus eye on center */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)] z-10"></div>
            
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 relative z-0"
            >
              {messages.map((msg, i) => (
                <ChatMessage key={i} message={msg} />
              ))}
              {isLoading && (
                <div className="flex justify-start mb-6">
                  <div className="bg-black/80 border border-amber-900 rounded p-4 animate-pulse">
                    <div className="pipboy-font text-amber-500 text-xs mb-1">ACCESSING ARCHIVES...</div>
                    <div className="h-1 w-32 bg-amber-950 rounded overflow-hidden">
                      <div className="h-full bg-amber-500 w-1/3 animate-[shimmer_1.5s_infinite]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-black/80 border-t border-amber-900/30 z-20">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="max-w-4xl mx-auto flex gap-3"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="QUERY COMMAND..."
                  className="flex-1 bg-black border-2 border-amber-900 rounded px-4 py-2 text-amber-400 placeholder-amber-900/50 focus:outline-none focus:border-amber-500 transition-all pipboy-font text-lg lg:text-xl"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-amber-600 text-black px-6 py-2 rounded font-bold hover:bg-amber-400 active:scale-95 disabled:opacity-50 transition-all uppercase pipboy-font text-lg lg:text-xl shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                >
                  Enter
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </PipBoyFrame>
  );
};

export default App;
