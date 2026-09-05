import React from 'react';
import { FileSpreadsheet, PlusCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const TestsView = () => {
  const { studentData } = useAuth();
  const assessments = studentData?.assessments || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-900 border border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Assessment & Test History</h2>
            <p className="text-xs text-slate-400">Uploaded report cards, question paper analyses, and scores.</p>
          </div>
        </div>

        <button className="px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 transition-all">
          <PlusCircle className="w-4 h-4" />
          <span>Add Test Result</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assessments.map((ast) => (
          <div key={ast.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{ast.subject}</span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {ast.date}
              </span>
            </div>

            <h4 className="text-base font-bold text-white">{ast.title}</h4>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <span className="text-xs text-slate-400">Score: <strong className="text-white font-mono">{ast.marksObtained}/{ast.maxMarks}</strong> ({ast.percentage}%)</span>
              <span className="text-xs text-slate-400">Chapters: {ast.chaptersCovered.join(', ')}</span>
            </div>

            <p className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60 italic">
              "{ast.aiSummary}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestsView;
