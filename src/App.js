import React from 'react'
import './App.scss';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'



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
