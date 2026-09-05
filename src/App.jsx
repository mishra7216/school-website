import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GalleryDetail from './pages/GalleryDetail';
import AboutPage from './pages/AboutPage';
import PrePrimaryPage from './pages/PrePrimaryPage';
import TeachersPage from './pages/TeachersPage';
import AnnualFunctionPage from './pages/AnnualFunctionPage';
import AdmissionPage from './pages/AdmissionPage';
import PlaygroundPage from './pages/PlaygroundPage';
import ExhibitionPage from './pages/ExhibitionPage';
import ArtEventGalleryPage from './pages/ArtEventGalleryPage';
import AcademicResultPage from './pages/AcademicResultPage';
import SchoolAssemblyPage from './pages/SchoolAssemblyPage';
import ComputerLabPage from './pages/ComputerLabPage';
import RepublicDayPage from './pages/RepublicDayPage';
import ResultPopup from './components/ResultPopup';

// Student AI Portal Imports
import { AuthProvider } from './portal/context/AuthContext';
import ProtectedRoute from './portal/components/ProtectedRoute';
import LoginPage from './portal/pages/LoginPage';
import PortalLayout from './portal/pages/PortalLayout';
import DashboardView from './portal/pages/DashboardView';
import AIChatView from './portal/pages/AIChatView';
import PerformanceView from './portal/pages/PerformanceView';
import KnowledgeMapView from './portal/pages/KnowledgeMapView';
import TestsView from './portal/pages/TestsView';
import PracticeQuizView from './portal/pages/PracticeQuizView';
import StudyPlanView from './portal/pages/StudyPlanView';
import InsightsView from './portal/pages/InsightsView';
import ProfileView from './portal/pages/ProfileView';

// Layout switcher wrapper to hide main public website nav/footer inside /student-ai routes
function MainContent() {
  const location = useLocation();
  const isPortalRoute = location.pathname.startsWith('/student-ai');

  if (isPortalRoute) {
    return (
      <Routes>
        <Route path="/student-ai/login" element={<LoginPage />} />
        <Route
          path="/student-ai/*"
          element={
            <ProtectedRoute>
              <PortalLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardView />} />
          <Route path="chat" element={<AIChatView />} />
          <Route path="performance" element={<PerformanceView />} />
          <Route path="knowledge-map" element={<KnowledgeMapView />} />
          <Route path="tests" element={<TestsView />} />
          <Route path="practice" element={<PracticeQuizView />} />
          <Route path="study-plan" element={<StudyPlanView />} />
          <Route path="insights" element={<InsightsView />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="*" element={<Navigate to="/student-ai" replace />} />
        </Route>
      </Routes>
    );
  }

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <ResultPopup />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admissions" element={<AdmissionPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/gallery/annual-function" element={<AnnualFunctionPage />} />
          <Route path="/gallery/playground" element={<PlaygroundPage />} />
          <Route path="/gallery/pre-primary-wing" element={<PrePrimaryPage />} />
          <Route path="/exhibition" element={<ExhibitionPage />} />
          <Route path="/art-event-gallery" element={<ArtEventGalleryPage />} />
          <Route path="/academic-results" element={<AcademicResultPage />} />
          <Route path="/school-assembly" element={<SchoolAssemblyPage />} />
          <Route path="/computer-lab" element={<ComputerLabPage />} />
          <Route path="/republic-day" element={<RepublicDayPage />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
