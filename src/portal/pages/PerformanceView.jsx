import React from 'react';
import { TrendingUp, BarChart3, Sparkles } from 'lucide-react';

const PerformanceView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 p-6 rounded-3xl bg-slate-900 border border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Performance & Analytics</h2>
          <p className="text-xs text-slate-400">Subject mastery trends, time range filters, and mistake classification.</p>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 text-center space-y-4">
        <BarChart3 className="w-10 h-10 text-indigo-400 mx-auto" />
        <h3 className="text-lg font-bold text-white">Performance Analytics Ready for Phase 3</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Interactive trend graphs, subject drill-downs, and mistake breakdown will be enhanced in Phase 3.
        </p>
      </div>
    </div>
  );
};

export default PerformanceView;
