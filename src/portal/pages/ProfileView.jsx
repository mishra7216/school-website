import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Target, Key, Save, CheckCircle2, Lock } from 'lucide-react';

const ProfileView = () => {
  const { studentData, updateStudentGoals, changePassword } = useAuth();
  const profile = studentData?.profile || {};
  const goals = studentData?.goals || {};

  const [targetMath, setTargetMath] = useState(goals.Mathematics?.target || 90);
  const [targetScience, setTargetScience] = useState(goals.Science?.target || 85);
  const [targetEnglish, setTargetEnglish] = useState(goals.English?.target || 85);
  const [savedGoalsMsg, setSavedGoalsMsg] = useState('');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  const handleSaveGoals = (e) => {
    e.preventDefault();
    updateStudentGoals({
      Mathematics: { ...goals.Mathematics, target: Number(targetMath) },
      Science: { ...goals.Science, target: Number(targetScience) },
      English: { ...goals.English, target: Number(targetEnglish) },
    });
    setSavedGoalsMsg('Academic target goals saved!');
    setTimeout(() => setSavedGoalsMsg(''), 3000);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      setPasswordMsg('Password must be at least 6 characters.');
      return;
    }
    await changePassword(oldPassword, newPassword);
    setPasswordMsg('Password updated successfully.');
    setOldPassword('');
    setNewPassword('');
    setTimeout(() => setPasswordMsg(''), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3 p-6 rounded-3xl bg-slate-900 border border-slate-800">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <User className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Student Profile & Academic Goals</h2>
          <p className="text-xs text-slate-400">Manage account information, subject targets, and security.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Profile Information */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Personal Details</span>
            </h3>

            <div className="flex items-center space-x-4">
              <img
                src={profile.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
                alt="Avatar"
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-cyan-500/40"
              />
              <div>
                <h4 className="text-lg font-bold text-white">{profile.name}</h4>
                <p className="text-xs text-cyan-400 font-mono">ID: {profile.studentId}</p>
                <span className="inline-block text-[10px] font-mono px-2 py-0.5 mt-1 rounded bg-slate-800 text-slate-300 font-bold">
                  Role: {profile.role || 'STUDENT'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block">Class & Section</span>
                <span className="font-bold text-white mt-0.5 block">{profile.class} - {profile.section}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block">Roll Number</span>
                <span className="font-bold text-white mt-0.5 block">{profile.rollNo}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block">Academic Year</span>
                <span className="font-bold text-white mt-0.5 block">{profile.academicYear}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block">School</span>
                <span className="font-bold text-white mt-0.5 block truncate">{profile.schoolName}</span>
              </div>
            </div>
          </div>

          {/* Change Password Form */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>Security & Password</span>
            </h3>

            {passwordMsg && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{passwordMsg}</span>
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Current Password</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-all"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Edit Academic Goals Form */}
        <div className="lg:col-span-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Target Academic Goals</span>
            </h3>

            {savedGoalsMsg && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{savedGoalsMsg}</span>
              </div>
            )}

            <form onSubmit={handleSaveGoals} className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                  <span>Mathematics Target (%)</span>
                  <span className="font-mono text-cyan-400">Current: 82%</span>
                </div>
                <input
                  type="number"
                  min="50"
                  max="100"
                  value={targetMath}
                  onChange={(e) => setTargetMath(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm font-mono text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                  <span>Science Target (%)</span>
                  <span className="font-mono text-indigo-400">Current: 74%</span>
                </div>
                <input
                  type="number"
                  min="50"
                  max="100"
                  value={targetScience}
                  onChange={(e) => setTargetScience(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm font-mono text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                  <span>English Target (%)</span>
                  <span className="font-mono text-purple-400">Current: 79%</span>
                </div>
                <input
                  type="number"
                  min="50"
                  max="100"
                  value={targetEnglish}
                  onChange={(e) => setTargetEnglish(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm font-mono text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Target Goals</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
