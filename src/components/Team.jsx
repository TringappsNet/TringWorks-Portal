import React from 'react';
import team from '../assets/img/team/team-4.jpg';
import team1 from '../assets/img/team/team-1.jpg';
import team2 from '../assets/img/team/team-2.jpg';
import team3 from '../assets/img/team/team-3.jpg';

import '../styles/Team.css';

export default function Team() {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title1">
          <h2 className='heading'>Data Engineering</h2>
          <p className='heading'>Our offerings span the entire data lifecycle, from data architecture to enterprise data integration, data quality management, master data & metadata management, data governance and data security. </p>
        </div>
        <div className="row">
          <div className="col-lg-3 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="member d-flex align-items-start">
             
              <div className="member-info">
                <h4>DATA ASSESSMENT</h4>
                <span>ASSESSMENT</span>
                <p>Understanding the quality and potential of your data is fundamental. Our meticulous assessment processes uncover hidden opportunities and bottlenecks within your datasets, providing a roadmap for effective data utilization.</p>
              
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="member d-flex align-items-start">
          
              <div className="member-info">
                <h4>DATA MANAGEMENT</h4>
                <span>MANAGEMENT</span>
                <p>Efficiently organizing, storing, and safeguarding your data is our expertise. We implement robust data management strategies, ensuring that your information is accessible, secure, and optimized for performance. </p>
               
              </div>
            </div>
          </div> 
          <div className="col-lg-3 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="member d-flex align-items-start">
             
              <div className="member-info">
                <h4>DATA VISUALIZATION</h4>
                <span>VISUALIZATION</span>
                <p>Visual storytelling is key to comprehending complex data. Our visualization techniques translate intricate datasets into intuitive and actionable visual representations, enabling easier interpretation and decision-making.</p>
              
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="member d-flex align-items-start">
           
              <div className="member-info">
                <h4>DATA SCIENCE AND ANALYTICS</h4>
                <span>ANALYTICS</span>
                <p>Leveraging advanced algorithms and methodologies, our data scientists unravel profound insights from your data, enabling predictive analysis, pattern recognition, and invaluable recommendations.</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
