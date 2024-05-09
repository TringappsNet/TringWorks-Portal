/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import whyUsImage from '../assets/img/why-us.png';
import '../styles/Whyus.css';

export default function Whyus() {
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [isCollapsed2, setIsCollapsed2] = useState(false);
  const [isCollapsed3, setIsCollapsed3] = useState(false);

  const toggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
    setIsCollapsed2(false);
    setIsCollapsed3(false);
  };

  const toggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
    setIsCollapsed1(false);
    setIsCollapsed3(false);
  };

  const toggleCollapse3 = () => {
    setIsCollapsed3(!isCollapsed3);
    setIsCollapsed1(false);
    setIsCollapsed2(false);
  };

  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
              <h3>The Lifeblood of Cloud Services: <strong>Privacy and Security</strong></h3>
              <p>The dawn of cloud computing has reshaped the business landscape, offering unparalleled flexibility, scalability, and cost-effective IT solutions.</p>
            </div>
            <div className="accordion-list">
              <ul>
                <li>
                  <a className="collapse" onClick={toggleCollapse1}>
                    <span>01</span>How are partner integrations like Cloud Dataprep secured?{' '}
                    <i className={`bx ${isCollapsed1 ? 'bx-chevron-up icon-toggle' : 'bx-chevron-down icon-toggle'}`}></i>
                  </a>
                  <div className={`collapse ${isCollapsed1 ? 'show' : ''}`}>
                    <p>
                    Cloud Dataprep is a special service that is built in collaboration with the external company Trifacta. Trifacta runs, operates, and secures this service with support from Google. Cloud Dataprep is a different model from native services like Google Compute Engine that are fully managed and secured by Google.                    </p>
                  </div>
                </li>
                <li>
                  <a className="collapse" onClick={toggleCollapse2}>
                    <span>02</span> How are the partner services listed in the Cloud Launcher secured?{' '}
                    <i className={`bx ${isCollapsed2 ? 'bx-chevron-up icon-toggle' : 'bx-chevron-down icon-toggle'}`}></i>
                  </a>
                  <div className={`collapse ${isCollapsed2 ? 'show' : ''}`}>
                    <p>
                    Cloud Launcher contains many third party services that are easily launched in or integrated with your Google Cloud projects. Google does not currently secure these services and you must individually authorize them to run in your Google Cloud projects.
                    </p>
                  </div>
                </li>
                <li>
                  <a className="collapse" onClick={toggleCollapse3}>
                    <span>03</span> What steps does Google cloud take to protect my privacy?{' '}
                    <i className={`bx ${isCollapsed3 ? 'bx-chevron-up icon-toggle' : 'bx-chevron-down icon-toggle'}`}></i>
                  </a>
                  <div className={`collapse ${isCollapsed3 ? 'show' : ''}`}>
                    <p>
                    At Google, our highest priority is securing our customers’ data, and we implement rigorous contractual, technical and organizational measures to protect its confidentiality, integrity, and availability regardless of which Google Region a customer has selected.                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img why-us-image" style={{backgroundImage: `url(${whyUsImage})`}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>
      </div>
    </section>
  );
}
