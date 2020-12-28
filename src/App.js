import React from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Gallery />
      <Footer />
      
    </div>
  );
}

export default App;
