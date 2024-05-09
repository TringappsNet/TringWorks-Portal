import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Tringworks</h3>
              <p>
              Ocean Trinity, 1st Floor,
 <br />
 Block no.5,Plot, 7B, Main Rd, South Phase, Ambedkar Nagar,
<br />
SIDCO Industrial Estate, Gandhi Nagar,
Chennai 600032, TN, India <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> tringworks@gmail.com<br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>WHEELHOUSE</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/">Data Engineering</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">Cloud Computing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">Artificial Intelligence</a></li>
                {/* <li><i className="bx bx-chevron-right"></i> <a href="/">Marketing</a></li> */}
                {/* <li><i className="bx bx-chevron-right"></i> <a href="/">Graphic Design</a></li> */}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>If you have any questions about these Terms and Conditions, You can contact us:
</p>
              <div className="social-links mt-3">
                <a href="/"  target='_blank' className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="https://www.facebook.com/tringsocial/" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/tringapps/?hl=en" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="https://www.linkedin.com/company/tringapps-inc?originalSubdomain=in" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright <strong><span>Tringworks</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
         
        </div>
      </div>
    </footer>
  );
}
