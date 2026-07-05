import React from 'react';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Showreel from './sections/Showreel.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Method from './sections/Method.jsx';
import Contact from './sections/Contact.jsx';
import Header from './sections/Header.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Showreel />
        <Projects />
        <Skills />
        <Method />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
