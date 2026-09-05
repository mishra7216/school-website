import React from 'react';
import { CalendarCheck, Sparkles } from 'lucide-react';

const StudyPlanView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 p-6 rounded-3xl bg-slate-900 border border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
          <CalendarCheck className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">7-Day Personalized AI Study Plan</h2>
          <p className="text-xs text-slate-400">Adaptive daily milestones customized to your chapter weak spots.</p>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 text-center space-y-4">
        <CalendarCheck className="w-10 h-10 text-indigo-400 mx-auto" />
        <h3 className="text-lg font-bold text-white">7-Day Study Planner Ready for Phase 5</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Dynamic study scheduling and task completion tracking will be integrated in Phase 5.
        </p>
      </div>
    </div>
  );
};

export default StudyPlanView;
