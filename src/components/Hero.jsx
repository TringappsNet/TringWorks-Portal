import React from 'react'
import heroImg from '../assets/img/hero-img.png';
import '../styles/Hero.css';

export default function Hero() {
  return (
   
  <section id="hero" className="d-flex align-items-center">

  <div className="container">
    <div className="row">
      <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>TOGETHER, WE DRIVE AN UNBEATABLE EXPERIENCE    </h1>
            <h2>THE MISSION
              OUR TECH WHEELHOUSE
              OF SERVICES</h2>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
          {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a> */}
        </div>
      </div>
    
  
      <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src={heroImg} alt="" className="img-fluid animated" />
      </div>
    </div>
  </div>
  
  </section>
  
  


  )
}
