import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted className='video'/>
      <div className='hello-world-container'>
        <h2 className='hello-world'>Hello World!</h2>
      </div>
      <div className='hero-text'>
        <h1>Sung Rung Yoo</h1>
        <p>A passionate developer with a knack for creating engaging web experiences.</p> <br/>
        <p>I like to eat sleep eat sleep and eat sleep while eating and sleep more while eating</p> 
      </div>
    </div>
  );
}

export default HeroSection;
