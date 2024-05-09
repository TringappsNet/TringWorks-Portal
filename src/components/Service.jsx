import React from 'react'
import '../styles/Service.css';

export default function Service() {
  return (

<section id="services" className="services section-bg">
  <div className="container" data-aos="fade-up">

    <div className="section-title">
    <h2>OUR TECH WHEELHOUSE
            OF SERVICES</h2>    
            <p>
            Tringapps provides on demand Cloud Computing, Data Engineering and Artificial Intelligence services to the financial institutions across the globe.


</p>
    </div>

    <div className="row">
      <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
        <div className="icon-box">
          <div className="icon"><i className="bx bxl-dribbble"></i></div>
          <h4><a href="#cloudpage">Cloud Computing
              </a></h4>
              	We provide a comprehensive suite of cutting-edge cloud solutions meticulously crafted to elevate operational efficiency and ignite business growth. 
                      </div>
      </div>

      <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
        <div className="icon-box">
          <div className="icon"><i className="bx bx-file"></i></div>
          <h4><a href="#team">Data Engineering
              </a></h4>
              Our suite of comprehensive data solutions caters to every aspect of the data lifecycle, ensuring that your organization maximizes its potential.
                      </div>

      </div>

      <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
        <div className="icon-box">
          <div className="icon"><i className="bx bx-tachometer"></i></div>
          <h4><a href="#artificial">Artificial Intelligence
              </a></h4>   
              <ul>
                <li> Tringapps team of data scientist apply inhouse patented technologies to provide cutting edge solutions for our clients. </li>


                </ul>      
        </div>
      </div>

      {/* <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
        <div className="icon-box">
          <div className="icon"><i className="bx bx-layer"></i></div>
          <h4><a href="">MEDIA & OTT
              </a></h4>        
              <p>We provide setup, customization, maintenance, and support for popular platforms like WordPress.</p>
        </div>
      </div> */}

    </div>

  </div>
</section>
  )
}
