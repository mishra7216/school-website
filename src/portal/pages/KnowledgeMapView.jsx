import React from 'react';
import { Network, Sparkles } from 'lucide-react';

const KnowledgeMapView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 p-6 rounded-3xl bg-slate-900 border border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Network className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Academic Knowledge Map</h2>
          <p className="text-xs text-slate-400">Visual node hierarchy of prerequisites and chapter mastery status.</p>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 text-center space-y-4">
        <Network className="w-10 h-10 text-cyan-400 mx-auto" />
        <h3 className="text-lg font-bold text-white">Visual Knowledge Graph Ready for Phase 3</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Interactive concept dependencies and prerequisite linkages (🟢 🟡 🔴) will be built in Phase 3.
        </p>
      </div>
    </div>
  );
};

export default KnowledgeMapView;
