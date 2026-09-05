import React from 'react';
import { Bot, Sparkles, MessageSquare } from 'lucide-react';

const AIChatView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 p-6 rounded-3xl bg-slate-900 border border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">AI Academic Companion Chat</h2>
          <p className="text-xs text-slate-400">Context-aware conversational interface with dual memory retention.</p>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 text-center space-y-4">
        <Sparkles className="w-10 h-10 text-cyan-400 mx-auto animate-pulse" />
        <h3 className="text-lg font-bold text-white">AI Chat Interface Ready for Phase 4 Integration</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Full persistent chat with tool calling (`get_chapter_mastery`, `get_recent_results`) and dual memory will be connected in Phase 4.
        </p>
      </div>
    </div>
  );
};

export default AIChatView;
