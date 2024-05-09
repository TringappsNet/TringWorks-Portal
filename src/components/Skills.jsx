import React from 'react';
import skills from '../assets/img/skills.png';
import '../styles/Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src={skills} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>JOIN OUR TEAM TO MAKE A DIFFERENCE!</h3>
            <p className="fst-italic">
              Simply have them send their resumes to (2 copies) HR, Tringworks Inc. 100 Park Avenue, 16th Floor, New York, NY 10017.
            </p>
            <div className="skills-content">
              <div className="progress">
                <span className="skill">Cloud Computing <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">Data Engineering <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">Artificial Intelligence <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" style={{ width: '105%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">Research <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
