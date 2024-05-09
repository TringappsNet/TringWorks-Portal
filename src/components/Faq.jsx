/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../styles/Faq.css';

export default function Faq() {
  const [faqOpen, setFaqOpen] = useState({
    'faq-list-1': true,
    'faq-list-2': false,
    'faq-list-3': false,
    'faq-list-4': false,
    'faq-list-5': false,
  });

    const toggleFaq = (id) => {
      setFaqOpen((prevState) => {
        const newState = {};
        for (const key in prevState) {
          newState[key] = key === id ? !prevState[id] : false;
        }
        return newState;
      });
    };


  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Over the years, the role of the FAQ page has changed substantially, and now an FAQ.</p>
        </div>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i> 
              <a onClick={() => toggleFaq('faq-list-1')} className={faqOpen['faq-list-1'] ? '' : 'collapsed'}>1.Does Tingworks help companies address the risks associated with adopting new technologies?
 <i className={`bx ${faqOpen['faq-list-1'] ? 'bx-chevron-up icon-close' : 'bx-chevron-down icon-show'}`}></i></a>
              <div id="faq-list-1" className={`collapse ${faqOpen['faq-list-1'] ? 'show' : ''}`} style={{ maxHeight: faqOpen['faq-list-1'] ? '1000px' : '0', transition: 'max-height 0.3s ease' }}>
                <p>
                Yes. This is why Tringworks R&D department is constantly testing new tech and determining how to implement it in the safest way possible for our clients. Our digital strategy services will help you pick the tools that are both cutting-edge and well-tested.                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i> <a onClick={() => toggleFaq('faq-list-2')}  className={faqOpen['faq-list-2'] ? '' : 'collapsed'}>2.What are the typical barriers for becoming a digital company?
 <i className={`bx ${faqOpen['faq-list-2'] ? 'bx-chevron-up icon-close' : 'bx-chevron-down icon-show'}`}></i></a>
              <div id="faq-list-2" className={`collapse ${faqOpen['faq-list-2'] ? 'show' : ''}`} style={{ maxHeight: faqOpen['faq-list-2'] ? '1000px' : '0', transition: 'max-height 0.3s ease' }}>
                <p>
                The lack of internal resources and skill sets are among the top blockers of digital transformation. As an experienced technical partner, we can supply the needed expertise and skills to help your organization accelerate their journey to becoming digital.                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i> <a onClick={() => toggleFaq('faq-list-3')} className={faqOpen['faq-list-3'] ? '' : 'collapsed'}>3.What industries do you specialize in?<i className={`bx ${faqOpen['faq-list-3'] ? 'bx-chevron-up icon-close' : 'bx-chevron-down icon-show'}`}></i></a>
              <div id="faq-list-3" className={`collapse ${faqOpen['faq-list-3'] ? 'show' : ''}`} style={{ maxHeight: faqOpen['faq-list-3'] ? '1000px' : '0', transition: 'max-height 0.3s ease' }}>
                <p>
                Tringworks digital strategy consultants, business analysts, project managers, and software engineers have plenty of experience working with organizations from various fields, helping them to embrace a digital-first and customer-centric approach to building business models, operating processes, and building customer experiences.                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i> <a onClick={() => toggleFaq('faq-list-4')} className={faqOpen['faq-list-4'] ? '' : 'collapsed'}>4. What benefits can tringworks IT consulting strategy bring to our organisation? <i className={`bx ${faqOpen['faq-list-4'] ? 'bx-chevron-up icon-close' : 'bx-chevron-down icon-show'}`}></i></a>
              <div id="faq-list-4" className={`collapse ${faqOpen['faq-list-4'] ? 'show' : ''}`} style={{ maxHeight: faqOpen['faq-list-4'] ? '1000px' : '0', transition: 'max-height 0.3s ease' }}>
                <p>
                Our versatile expertise can help you accelerate your business transformation.                </p>
              </div>
            </li>
            {/* <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a onClick={() => toggleFaq('faq-list-5')} className={faqOpen['faq-list-5'] ? '' : 'collapsed'}>5.Do you offer customer support?
 <i className={`bx ${faqOpen['faq-list-5'] ? 'bx-chevron-up icon-close' : 'bx-chevron-down icon-show'}`}></i></a>
              <div id="faq-list-5" className={`collapse ${faqOpen['faq-list-5'] ? 'show' : ''}`} style={{ maxHeight: faqOpen['faq-list-5'] ? '1000px' : '0', transition: 'max-height 0.3s ease' }}>
                <p>
Explain your customer support options, including availability hours, channels of communication, and response times.                </p>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}
