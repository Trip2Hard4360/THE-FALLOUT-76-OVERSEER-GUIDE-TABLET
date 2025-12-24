
import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAssistant = message.role === 'assistant';

  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[92%] rounded p-3 border ${
        isAssistant 
          ? 'bg-amber-950/5 border-amber-900/50 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.05)]' 
          : 'bg-amber-900/15 border-amber-600/40 text-amber-100'
      }`}>
        <div className="flex items-center gap-2 mb-1 opacity-50">
          <span className="pipboy-font text-[10px] uppercase tracking-[0.2em]">
            {isAssistant ? 'OS_TERMINAL' : 'USER_ID_076'}
          </span>
          <div className="h-[1px] flex-grow bg-amber-900/20"></div>
        </div>
        
        <div className="whitespace-pre-wrap leading-tight text-sm lg:text-base tracking-wide font-medium">
          {message.content}
        </div>

        {message.sources && message.sources.length > 0 && (
          <div className="mt-3 pt-2 border-t border-amber-900/30">
            <div className="flex flex-wrap gap-1">
              {message.sources.map((source, idx) => (
                <a
                  key={idx}
                  href={source.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] bg-amber-900/40 border border-amber-800/50 px-1.5 py-0.5 rounded text-amber-600 hover:text-amber-400 transition-colors max-w-[120px] truncate"
                >
                  {source.title || 'SRC_REF'}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
