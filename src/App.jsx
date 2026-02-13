import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next"
import './styles-global.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;