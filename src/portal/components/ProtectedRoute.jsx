import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-cyan-400 flex items-center justify-center font-mono text-sm">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 rounded-full bg-cyan-400 animate-ping" />
          <span>Authenticating Student AI Session...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/student-ai/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
