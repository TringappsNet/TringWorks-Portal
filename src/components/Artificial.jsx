import React from "react";

import google from "../assets/img/cloud/googlecloud.png";
import amazon from "../assets/img/cloud/a-w.webp";
import google1 from "../assets/img/cloud/g-w.webp";
import snowflake from "../assets/img/cloud/snowflake.jpg";
import azure from "../assets/img/cloud/a-w.jpg";
import "../styles/Artificial.css";
import whyUsImage from '../assets/img/why-us.png';
import ai2 from '../assets/img/AI/ai.png';

import ai3 from '../assets/img/AI/ai3.png';
import ai4 from '../assets/img/AI/ai4.png';
import ai5 from '../assets/img/AI/ai5.png';

export default function Artificial() {
  return (
    <section id="artificial" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Artificial Intelligence</h2>
          <p>
            Unlocking value from data and AI faster to help you scale and
            transform your digital business{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="member d-flex align-items-start">
              <div className="member-info">
                <h4>DATA SERVICES</h4>
                <span>SERVICES</span>
                <p>
                Transform your organization’s data silos into a centralized data repository and get a 360-degree view of the entire organization.Our approach towards data engineering covers all aspects of data transformation, including, data lake, data warehouse, and data marts.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 mt-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
                          <img src={whyUsImage} className="img-fluid" alt="JP Morgan" />

                    </div>

                    <div
            className="col-lg-6 mt-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
                          <img src={ai2} className="img-fluid1" alt="JP Morgan" />

                    </div>

          <div
            className="col-lg-6 mt-4 "
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="member d-flex align-items-start">
              <div className="member-info">
                <h4>GENERATIVE AI</h4>
                <span>
                GENERATIVE                </span>
                <p>
                   Generative AI, securely and responsibly, can transform
                  your business—unleashing a new wave of human creativity and
                  productivity while delivering significant competitive
                  advantage.
                </p>
              </div>
            </div>
          </div>
     



          <div
            className="col-lg-6 mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="member d-flex align-items-start">
              <div className="member-info">
                <h4>RESPONSIBLE AI</h4>
                <span>
                RESPONSIBLE                </span>
                <p>
                  To get value from AI, you need to trust it. Take intentional
                  steps to operationalize responsible AI enterprise-wide, to
                  create value, build trust and protect your company from risk.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 mt-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
                          <img src={ai3} className="img-fluid" alt="JP Morgan" />

                    </div>

                    <div
            className="col-lg-6 mt-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
                          <img src={ai5} className="img-fluid1" alt="JP Morgan" />

                    </div>



          <div
            className="col-lg-6 mt-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="member d-flex align-items-start">
              <div className="member-info">
                <h4>AI STRATEGY AND VALUE</h4>
                <span>STRATEGY</span>
                <p>
                  Companies must embrace generative AI as a continuous
                  reinvention strategy, assessing their whole value chain to
                  understand where they can apply generative AI to deliver the
                  highest ROI.
                </p>
              </div>
            </div>
          </div>

          

       
 
        </div>
{/* 
        
        <div className="GoogleImg">
          <img src={google1} alt="" />
          <img src={amazon} alt="" />
          <img src={azure} alt="" />
          <img src={snowflake} alt="" />
        </div> */}
      </div>
    </section>
  );
}
