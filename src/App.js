import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Client from "./components/Client.jsx";
import About from "./components/Aboiut.jsx";
import Whyus from "./components/Whyus.jsx";
import Skills from "./components/Skills.jsx"
import Service from "./components/Service.jsx";
import Cta from "./components/Cta.jsx";
// import Portfolio from "./Portfolio.jsx";
import Team from "./components/Team.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import "../src/assets/vendor/aos/aos.css";
import "../src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/assets/vendor/boxicons/css/boxicons.min.css";
import "../src/assets/vendor/glightbox/css/glightbox.min.css";
import "../src/assets/vendor/remixicon/remixicon.css";
import "../src/assets/vendor/swiper/swiper-bundle.min.css";

import "../src/assets/img/favicon.png";
import "../src/assets/img/apple-touch-icon.png";
import "../src/assets/js/main.js";
import "../src/assets/vendor/glightbox/js/glightbox.min.js"
// import "bootstrap/dist/css/bootstrap.css";

import '../src/assets/css/style.css';
import '../src/styles/Main.css';


import googleFonts from "google-fonts";
import CloudPage from "./components/CloudPage.jsx";
import Artificial from "./components/Artificial.jsx";

googleFonts.add({
  "Open Sans": ["300", "300i", "400", "400i", "600", "600i", "700", "700i"],
  Jost: [
    "300",
    "300i",
    "400",
    "400i",
    "500",
    "500i",
    "600",
    "600i",
    "700",
    "700i",
  ],
  Poppins: [
    "300",
    "300i",
    "400",
    "400i",
    "500",
    "500i",
    "600",
    "600i",
    "700",
    "700i",
  ],
});

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Hero />
    
      <main id="main">
        <Client />
        <About />
        <Service />
        <Cta/>
        {/* <Portfolio/> */}
        <CloudPage/>
   
        <Team />
        <Artificial/>
        <Whyus />

        <Faq />
        {/* <Skills /> */}
  
        <Contact />
        <Footer />
      </main>

      {/* <div id="preloader"></div> */}
      {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}

      {/* <script src="../assets/vendor/aos/aos.js"></script>
      <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="../assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="../assets/vendor/waypoints/noframework.waypoints.js"></script>
      <script src="../assets/vendor/php-email-form/validate.js"></script> */}

           </div>
  );
}

export default App;
