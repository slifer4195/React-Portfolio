import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Publication from './components/Publication'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Profile />
        <div className="profile-projects-divider" />
        <Projects />
        <div className="profile-projects-divider" />
        <Experience />
        <div className="profile-projects-divider" />
        <Skills />
        <div className="profile-projects-divider" />
        <Publication />
        <Contact />
    </div>
  );
}

export default App;
