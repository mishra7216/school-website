import React from 'react';
import { Lightbulb, AlertTriangle, TrendingUp, Target } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const InsightsView = () => {
  const { studentData } = useAuth();
  const insights = studentData?.aiInsights || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 p-6 rounded-3xl bg-slate-900 border border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
          <Lightbulb className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">AI Insights & Academic Feed</h2>
          <p className="text-xs text-slate-400">Automated pattern detection, weak area alerts, and target recommendations.</p>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((ins) => (
          <div key={ins.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start space-x-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              ins.type === 'warning'
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                : ins.type === 'success'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
            }`}>
              {ins.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : ins.type === 'success' ? <TrendingUp className="w-5 h-5" /> : <Target className="w-5 h-5" />}
            </div>

            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">{ins.title}</h4>
                <span className="text-[11px] text-slate-500 font-mono">{ins.date}</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">{ins.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsView;
