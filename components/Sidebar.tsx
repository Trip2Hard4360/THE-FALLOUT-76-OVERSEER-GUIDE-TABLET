
import React from 'react';

interface SidebarProps {
  onQuickAction: (query: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onQuickAction }) => {
  const quickLinks = [
    { label: "Top 5 Weapons", query: "What are the 5 best weapons in Fallout 76 today?" },
    { label: "Bloodied Build", query: "Quick Bloodied Stealth Commando perk list" },
    { label: "Armor Guide", query: "Best armor in Fallout 76 and how to get it" },
    { label: "Lead Locations", query: "Short list of best lead farming spots" },
    { label: "Caps & Scrip", query: "Best way to farm caps and scrip daily" },
    { label: "Recent Events", query: "What is the current Fallout 76 seasonal event?" }
  ];

  return (
    <div className="w-full lg:w-72 border-r border-amber-900 h-full overflow-y-auto p-4 bg-black/50">
      <h2 className="pipboy-font text-amber-400 text-lg mb-4 border-b border-amber-800 pb-1 uppercase tracking-widest">Wasteland Intel</h2>
      <nav className="space-y-2">
        {quickLinks.map((link, idx) => (
          <button
            key={idx}
            onClick={() => onQuickAction(link.query)}
            className="w-full text-left p-3 border border-amber-900/50 rounded hover:bg-amber-900/40 hover:border-amber-400 transition-all text-sm text-amber-600 group"
          >
            <span className="pipboy-font group-hover:text-amber-400 transition-colors uppercase tracking-wider text-base">
              {link.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
