// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
