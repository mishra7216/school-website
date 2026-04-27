import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
