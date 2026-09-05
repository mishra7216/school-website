import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStudentData, saveStudentData } from '../data/db';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize session & load persistent student database
    const savedUser = localStorage.getItem('lk_ai_current_user');
    const dbData = getStudentData();
    setStudentData(dbData);

    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved user session:', e);
      }
    }
    setLoading(false);
  }, []);

  // Login handler supporting student ID format (e.g., LK20261042)
  const login = (studentId, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const cleanId = studentId.trim().toUpperCase();
        // Allow valid student ID login with default or custom credentials
        if (cleanId === 'LK20261042' || cleanId.startsWith('LK')) {
          const userSession = {
            studentId: cleanId,
            name: studentData?.profile?.name || 'Aradhya Mishra',
            role: 'STUDENT', // Roles: STUDENT, TEACHER, ADMIN
            class: '10th',
            section: 'A',
            school: 'Little Kingdom Senior Secondary School, Baihar',
            lastLogin: new Date().toISOString(),
          };
          
          localStorage.setItem('lk_ai_current_user', JSON.stringify(userSession));
          setCurrentUser(userSession);
          resolve(userSession);
        } else {
          reject(new Error('Invalid Student ID or Password. Try LK20261042 / password123'));
        }
      }, 400);
    });
  };

  const logout = () => {
    localStorage.removeItem('lk_ai_current_user');
    setCurrentUser(null);
  };

  const changePassword = (currentPassword, newPassword) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Password updated successfully.' });
      }, 300);
    });
  };

  const updateStudentGoals = (newGoals) => {
    const updated = {
      ...studentData,
      goals: { ...studentData.goals, ...newGoals }
    };
    setStudentData(updated);
    saveStudentData(updated);
  };

  const refreshData = () => {
    const data = getStudentData();
    setStudentData(data);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        studentData,
        loading,
        login,
        logout,
        changePassword,
        updateStudentGoals,
        refreshData,
        isAuthenticated: !!currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
