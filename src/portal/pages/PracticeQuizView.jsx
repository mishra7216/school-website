import React from 'react';
import { Target, Sparkles } from 'lucide-react';

const PracticeQuizView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 p-6 rounded-3xl bg-slate-900 border border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <Target className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Practice & Quiz Mode</h2>
          <p className="text-xs text-slate-400">Targeted AI quizzes focusing on weak concepts with live mastery updates.</p>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 text-center space-y-4">
        <Target className="w-10 h-10 text-cyan-400 mx-auto" />
        <h3 className="text-lg font-bold text-white">Practice Quiz Engine Ready for Phase 5</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Interactive AI question generator, hints, scoring, and dynamic chapter mastery updates will be integrated in Phase 5.
        </p>
      </div>
    </div>
  );
};

export default PracticeQuizView;
