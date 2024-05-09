import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>  
        <div className="row content">
          <div className="col-lg-6">
            <p>
              At Tringworks we are proud to serve a diverse range of clients from various industries. Our client base includes small startups, to large well-known corporations and organisations. We believe in building long-lasting relationships with our clients by providing exceptional solutions tailored to their specific requirements. Through our innovative services, we empower our clients to streamline their operations, increase productivity, and achieve their business goals.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i>The company had also established their first "Data Science Centre of Excellence".</li>
              <li><i className="ri-check-double-line"></i> Enormous Media Streaming Platforms including the first and several subsequent versions of HBO.</li>
              <li><i className="ri-check-double-line"></i>This led Tringworks to develop a "Preferred Channel Partnership" with AWS.</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Tringworks' commitment to providing cutting-edge solutions in the mobile development and media industry. With expertise and focus on innovation, Tringworks is sure to continue leading the way in these fields
            </p>
            <a href="/" className="btn-learn-more">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
