import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import '../styles/Main.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    closeMenu();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest('#navbar')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div>
       <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="#hero">TringWorks</a>
          </h1>
          <nav id="navbar" className={`navbar ${isMenuOpen ? 'navbar-mobile' : ''}`}>
            <i className={`bi bi-list mobile-nav-toggle ${isMenuOpen ? 'bi-x' : ''}`} onClick={toggleMenu}></i>
            <ul className={`nav-menu ${isMenuOpen ? 'mobile-nav-show' : ''}`}>
              <li><a className={`nav-link scrollto ${activeNavItem === 'home' ? 'active' : ''}`} href="#hero" onClick={() => handleNavItemClick('home')}>Home</a></li>
              <li><a className={`nav-link scrollto ${activeNavItem === 'about' ? 'active' : ''}`} href="#about" onClick={() => handleNavItemClick('about')}>About</a></li>
              {/* <li><a className={`nav-link scrollto ${activeNavItem === 'services' ? 'active' : ''}`} href="#services" onClick={() => handleNavItemClick('services')}>Services</a></li> */}
              {/* <li><a className={`nav-link scrollto ${activeNavItem === 'portfolio' ? 'active' : ''}`} href="#portfolio" onClick={() => handleNavItemClick('portfolio')}>Portfolio</a></li> */}
              {/* <li><a className={`nav-link scrollto ${activeNavItem === 'team' ? 'active' : ''}`} href="#team" onClick={() => handleNavItemClick('team')}>Team</a></li> */}
              <li className="dropdown">
                <a href="#services">
                  <span>Services</span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li><a href="#cloudpage" onClick={closeMenu}>Cloud Computing</a></li>
                
                  <li><a href="#team" onClick={closeMenu}>Data Engineering</a></li>
                  <li><a href="#artificial" onClick={closeMenu}>Artificial Intelligence</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact" onClick={closeMenu}>Contact</a></li>
              <li><a className="getstarted scrollto" href="#about" onClick={closeMenu}>Get Started</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
