import React from 'react';

import google from "../assets/img/cloud/googlecloud.png";
import amazon from "../assets/img/cloud/a-w.webp";
import google1 from "../assets/img/cloud/g-w.webp";
import snowflake from "../assets/img/cloud/snowflake.jpg";
import azure from "../assets/img/cloud/a-w.jpg";

import '../styles/CloudPage.css';

export default function CloudPage() {
  return (
    <section id="cloudpage" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Cloud Computing</h2>
          <p>We provide a comprehensive suite of cutting-edge cloud solutions meticulously crafted to elevate operational efficiency and ignite business growth.
            
Our adept cloud computing experts are committed to guiding you through every phase of your digital journey, fostering innovation and propelling your business toward unparalleled success </p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="member d-flex align-items-start">
             
              <div className="member-info">
                <h4>CLOUD MIGRATION</h4>
                <span>MIGRATION</span>
                <p>Effortlessly shift your business to the cloud using our expert Cloud Migration Services. Streamline your operations seamlessly, optimize expenditure, and embrace the future of digital transformation with ease.</p>
           
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="member d-flex align-items-start">
              
              <div className="member-info">
                <h4>CLOUD MODERNIZATION</h4>
                <span>MODERNIZATION</span>
                <p>Transform your business with our Cloud Modernization Services. Embrace innovation, boost agility, and stay ahead in the dynamic world of digital evolution.  </p>
              
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="member d-flex align-items-start">
             
              <div className="member-info">
                <h4>CLOUD OPTMIZATION</h4>
                <span>OPTMIZATION</span>
                <p>Enhance your cloud infrastructure using our Cloud Optimization Services. Streamline performance, reduce expenses, and unleash the complete potential of your digital assets.</p>
              
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="member d-flex align-items-start">
     
              <div className="member-info">
                <h4>DATA INTEGRATION</h4>
                <span>INTEGRATION</span>
                <p>Leverage our customized solutions, advanced technology, and proven expertise in data integration to turn your data into actionable insights that drive enhanced business outcomes.</p>
          
              </div>


            </div>
          </div>
        </div>
        <div className=" col-md-12 GoogleImg">
        <img src={google1}  alt="" />
        <img src={amazon} alt="" />
        <img src={azure}   alt="" />
        <img src={snowflake}   alt="" />

        </div>
      
      </div>
    </section>
  );
}
