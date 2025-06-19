import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from './components/Footer';
import Header from './components/Header';
import Brands from './pages/Brands';
import Contact from './pages/Contact';
import ExpertsInfluencers from './pages/ExpertsInfluencers';
import Features from './pages/Features';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import Solutions from './pages/Solutions';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <ScrollToTop />
        
        <SpeedInsights />

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/experts-influencers" element={<ExpertsInfluencers />} />
          <Route path="/solutions/brands" element={<Brands />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;