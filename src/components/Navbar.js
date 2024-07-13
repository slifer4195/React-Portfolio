// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faReact} className='navbar-icon' /> Porfolio
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href="#About" className='nav-links' onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a href="#Projects" className='nav-links' onClick={closeMobileMenu}>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a href="#Skills" className='nav-links' onClick={closeMobileMenu}>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a href="#Publication" className='nav-links' onClick={closeMobileMenu}>
                Publication
              </a>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
