import React from 'react';
import Hero from '../components/Hero';
import GalleryPreview from '../components/GalleryPreview';
import About from '../components/About';
import Features from '../components/Features';

const Home = () => {
  return (
    <>
      <Hero />
      <GalleryPreview />
      <About />
      <Features />
    </>
  );
};

export default Home;
