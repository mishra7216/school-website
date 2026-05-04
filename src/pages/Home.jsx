import React from 'react';
import Hero from '../components/Hero';
import GalleryPreview from '../components/GalleryPreview';
import About from '../components/About';
import Features from '../components/Features';
import InstagramShowcase from '../components/InstagramShowcase';

const Home = () => {
  return (
    <>
      <Hero />
      <GalleryPreview />
      <About />
      <Features />
      <InstagramShowcase />
    </>
  );
};

export default Home;
