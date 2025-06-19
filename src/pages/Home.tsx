import React from 'react';
import Hero from '../components/Hero';
import VideoExplainer from '../components/VideoExplainer';
import PersonaBenefits from '../components/PersonaBenefits';
import FeaturedCreators from '../components/FeaturedCreators';
import CTAFooter from '../components/CTAFooter';

const Home = () => {
  return (
    <>
      <Hero />
      <VideoExplainer />
      <PersonaBenefits />
      <FeaturedCreators />
      <CTAFooter />
    </>
  );
};

export default Home;