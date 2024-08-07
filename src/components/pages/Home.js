import React from 'react'
import Contact from '../Contact'
import HeroSection from '../HeroSection'
import Profile from '../Profile'
import Projects from '../Projects'
import Skills from '../Skills'
import Experience from '../Experience'
import Publication from '../Publication'

function Home() {
  return (
    <>  
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
    </>
  )
}

export default Home