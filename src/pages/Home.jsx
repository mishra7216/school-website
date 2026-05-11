import React from 'react';
import Hero from '../components/Hero';
import GalleryPreview from '../components/GalleryPreview';
import About from '../components/About';
import Features from '../components/Features';
import InstagramShowcase from '../components/InstagramShowcase';
import PageSEO from '../components/PageSEO';

const Home = () => {
  return (
    <>
      <PageSEO
        title="Little Kingdom Senior Secondary School, Baihar | Best School in Balaghat District"
        description="Little Kingdom Senior Secondary School (LKPS), Baihar - Largest school in Baihar, Balaghat district, Madhya Pradesh. Quality education since 2009 with district toppers, modern infrastructure, computer lab, sports facilities, and the biggest annual function in the district. Admissions open."
        keywords="Little Kingdom School, LKPS Baihar, school in Baihar, best school in Baihar, best school Balaghat, top school Baihar, best kindergarten Baihar"
        canonicalUrl="https://www.littlekingdombaihar.in"
      />
      <Hero />
      <GalleryPreview />
      <About />
      <Features />
      <InstagramShowcase />
    </>
  );
};

export default Home;
