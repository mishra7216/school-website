import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  MessageSquare,
  TrendingUp,
  Network,
  FileSpreadsheet,
  Target,
  CalendarCheck,
  Lightbulb,
  User,
  LogOut,
  Bot,
  Bell,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';

const PortalLayout = () => {
  const { currentUser, studentData, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/student-ai/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/student-ai', icon: LayoutDashboard, exact: true },
    { label: 'AI Chat', path: '/student-ai/chat', icon: MessageSquare },
    { label: 'Performance', path: '/student-ai/performance', icon: TrendingUp },
    { label: 'Knowledge Map', path: '/student-ai/knowledge-map', icon: Network },
    { label: 'Tests History', path: '/student-ai/tests', icon: FileSpreadsheet },
    { label: 'Practice & Quiz', path: '/student-ai/practice', icon: Target },
    { label: 'Study Plan', path: '/student-ai/study-plan', icon: CalendarCheck },
    { label: 'AI Insights', path: '/student-ai/insights', icon: Lightbulb },
    { label: 'Profile & Goals', path: '/student-ai/profile', icon: User },
  ];

  const notifications = studentData?.notifications || [];
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
          >
            {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/student-ai" className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-sm text-white tracking-wide uppercase">Little Kingdom AI</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold">
                  v2.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Sr. Sec. School, Baihar</p>
            </div>
          </Link>
        </div>

        {/* Header Right User Controls */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 relative transition-all"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-cyan-400 rounded-full ring-2 ring-slate-900 animate-pulse" />
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 z-50">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Notifications</h4>
                  <span className="text-[10px] text-cyan-400 font-mono">{notifications.length} alerts</span>
                </div>
                <div className="divide-y divide-slate-800/60 max-h-64 overflow-y-auto mt-2">
                  {notifications.map((n) => (
                    <div key={n.id} className="py-2.5 px-1 hover:bg-slate-800/40 rounded-lg transition-colors">
                      <p className="text-xs text-slate-200">{n.text}</p>
                      <span className="text-[10px] text-slate-500 mt-1 block">{n.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Student Info Pill */}
          <div className="flex items-center space-x-3 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
            <img
              src={studentData?.profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
              alt="Avatar"
              className="w-7 h-7 rounded-full object-cover ring-2 ring-cyan-500/40"
            />
            <div className="hidden sm:block text-left">
              <div className="text-xs font-bold text-white leading-tight">{studentData?.profile?.name || 'Aradhya'}</div>
              <div className="text-[10px] text-cyan-400 font-mono">
                {studentData?.profile?.studentId || 'LK20261042'} • Class {studentData?.profile?.class || '10th'}
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            title="Logout"
            className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Body Grid */}
      <div className="flex-grow flex relative">
        {/* Left Sidebar Desktop Navigation */}
        <aside className="hidden lg:flex flex-col w-64 bg-slate-900/60 border-r border-slate-800/80 p-4 space-y-1 flex-shrink-0">
          <div className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
            Academic Suite
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3.5 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/30 to-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`
                }
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <div className="mt-auto pt-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-slate-900 border border-indigo-500/20 text-center">
              <Sparkles className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
              <h5 className="text-xs font-bold text-white">AI Learning Companion</h5>
              <p className="text-[11px] text-slate-400 mt-1">Continuous chapter-level analysis active.</p>
            </div>
          </div>
        </aside>

        {/* Mobile Left Drawer Navigation */}
        {mobileNavOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-md flex">
            <div className="w-72 bg-slate-900 border-r border-slate-800 p-4 flex flex-col h-full space-y-1">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Navigation Menu</span>
                <button onClick={() => setMobileNavOpen(false)} className="p-1 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.exact}
                    onClick={() => setMobileNavOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}

        {/* Main View Area */}
        <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;
