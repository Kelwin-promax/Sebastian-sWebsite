import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import Tools from './components/Tools';
import Demo from './components/Demo';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <Tools />
      <Demo />
      <Download />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
