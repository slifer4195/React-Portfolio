import React from 'react'
import HeroSection from '../HeroSection'
import Profile from '../Profile'
import Projects from '../Projects'
import Skills from '../Skills'

function Home() {
  return (
    <>
        <HeroSection />
        <Profile />
        <div className="profile-projects-divider" />
        <Projects />
        <div className="profile-projects-divider" />
        <Skills />
    </>
  )
}

export default Home