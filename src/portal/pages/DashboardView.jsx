import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Sparkles,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  PlusCircle,
  BarChart3,
  Award,
  AlertTriangle,
  Target,
  ArrowRight,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

const DashboardView = () => {
  const { studentData } = useAuth();
  const navigate = useNavigate();

  const profile = studentData?.profile || {};
  const metrics = studentData?.metrics || {};
  const subjects = studentData?.subjectPerformance || [];
  const insights = studentData?.aiInsights || [];
  const goals = studentData?.goals || {};

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Academic Pulse Greeting */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Little Kingdom AI Platform</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Good evening, {profile.name?.split(' ')[0] || 'Aradhya'}.
            </h1>
            <p className="text-slate-300 text-sm mt-1">Here is your live academic pulse and mastery trajectory.</p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('/student-ai/chat')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Talk to AI</span>
            </button>

            <button
              onClick={() => navigate('/student-ai/tests')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-bold text-xs transition-all flex items-center space-x-2"
            >
              <PlusCircle className="w-4 h-4 text-cyan-400" />
              <span>Add Test Result</span>
            </button>

            <button
              onClick={() => navigate('/student-ai/performance')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-bold text-xs transition-all flex items-center space-x-2"
            >
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              <span>View Analytics</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Overall Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Overall Score */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overall Performance</span>
            <div className="text-4xl font-extrabold text-white mt-2 font-mono">
              {metrics.overallScore}%
            </div>
            <div className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-400 mt-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ {metrics.scoreTrend}% this term</span>
            </div>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xl">
            78%
          </div>
        </div>

        {/* Strongest Subject */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between shadow-xl">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Strongest Area</span>
            <div className="text-2xl font-bold text-white mt-2">{metrics.strongestSubject}</div>
            <p className="text-xs text-emerald-400 mt-1 font-semibold">82% Mastery • Linear Algebra</p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Award className="w-7 h-7" />
          </div>
        </div>

        {/* Weakest Subject */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between shadow-xl">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Focus Priority</span>
            <div className="text-2xl font-bold text-white mt-2">Factorisation</div>
            <p className="text-xs text-red-400 mt-1 font-semibold">42% Mastery • Math Ch-3</p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
            <AlertTriangle className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* AI Insight Hero Box */}
      <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-cyan-500/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">AI Academic Insight</div>
            <p className="text-slate-100 text-sm sm:text-base font-medium mt-1 leading-relaxed">
              "{metrics.aiInsightSummary}"
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate('/student-ai/practice')}
          className="px-5 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-all flex-shrink-0 flex items-center space-x-2"
        >
          <span>Practice Weak Concept</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Subject Performance Grid & Goals Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Subject Performance Breakdown */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-wide">Subject Mastery Breakdown</h3>
            <button
              onClick={() => navigate('/student-ai/performance')}
              className="text-xs font-semibold text-cyan-400 hover:underline"
            >
              View Full Analytics
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            {subjects.map((sub) => {
              const target = goals[sub.subject.replace(/\s+/g, '')]?.target || 85;
              return (
                <div key={sub.subject} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-white">{sub.subject}</span>
                    <div className="flex items-center space-x-3">
                      <span className={`font-mono ${sub.trend === 'up' ? 'text-emerald-400' : sub.trend === 'down' ? 'text-red-400' : 'text-slate-400'}`}>
                        {sub.score}% ({sub.change})
                      </span>
                      <span className="text-slate-500 text-[10px]">Target: {target}%</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden relative">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        sub.score >= 80
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                          : sub.score >= 70
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                          : 'bg-gradient-to-r from-amber-500 to-red-400'
                      }`}
                      style={{ width: `${sub.score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Target Goals Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-wide">Target Academic Goals</h3>
            <button
              onClick={() => navigate('/student-ai/profile')}
              className="text-xs font-semibold text-cyan-400 hover:underline"
            >
              Edit Goals
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white">Mathematics</span>
                <p className="text-xs text-slate-400 mt-0.5">Current: 82% → Target: 90%</p>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                Gap: -8%
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white">Science</span>
                <p className="text-xs text-slate-400 mt-0.5">Current: 74% → Target: 85%</p>
              </div>
              <span className="text-xs font-mono font-bold text-indigo-400 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                Gap: -11%
              </span>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-900/30 to-purple-900/20 border border-indigo-500/30">
              <div className="flex items-center space-x-2 text-xs font-bold text-indigo-300">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>AI Projection Blueprint</span>
              </div>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                If you score 18/20 in your next two Mathematics tests, your Mathematics average will reach <strong className="text-cyan-400">86.5%</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
