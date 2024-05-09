import React, { useEffect } from 'react';
import jpmorgan from '../assets/img/clients/jp morgan.svg';
import client1Img from '../assets/img/clients/client-1.png';
import client2Img from '../assets/img/clients/client-2.png';
import client3Img from '../assets/img/clients/client-3.png';
import client4Img from '../assets/img/clients/client-4.png';
import client5Img from '../assets/img/clients/client-5.png';
// import client6Img from '../assets/img/clients/client-6.png';

import '../styles/Client.css';

export default function Client() {
  useEffect(() => {
    const clientContainer = document.querySelector('.clients-container');

    const clientItems = clientContainer.querySelectorAll('.client-item');
    clientItems.forEach((item) => {
      const clone = item.cloneNode(true);
      clientContainer.appendChild(clone);
    });
  }, []);

  return (
    <section id="clients" className="clients section-bg">
      <div className="container clients-container">
        <div className="client-row" data-aos="zoom-in">
          <div className="client-item">
            <div className="client-wrapper">
              <img src={jpmorgan} className="img-fluid" alt="JP Morgan" />
            </div>
          </div>
          <div className="client-item">
            <div className="client-wrapper">
              <img src={client1Img} className="img-fluid" alt="Client 1" />
              
            </div>
          </div>
          <div className="client-item">
            <div className="client-wrapper">
              <img src={client2Img} className="img-fluid" alt="Client 2" />
              
            </div>
          </div>
          <div className="client-item">
            <div className="client-wrapper">
              <img src={client3Img} className="img-fluid" alt="Client 3" />
              
            </div>
          </div>
          <div className="client-item">
            <div className="client-wrapper">
              <img src={client4Img} className="img-fluid" alt="Client 4" />
              
            </div>
          </div>
          <div className="client-item">
            <div className="client-wrapper">
              <img src={client5Img} className="img-fluid" alt="Client 5" />
              
            </div>
          </div>
          <div className="client-item">
            <div className="client-wrapper">
              {/* <img src={client6Img} className="img-fluid" alt="Client 6" /> */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
