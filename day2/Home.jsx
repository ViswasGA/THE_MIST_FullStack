import Navbar from "./admin/Navbar";
import Services from "./Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import { useEffect } from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import About from "./About";
// import Qoutes from "./Qoutes";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div data-aos="fade-left">
        <Services />
      </div>
      <div data-aos="fade-right">
        <About />
      </div>
      <div data-aos="fade-left">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

//Navbar
//rest of the component
//footer
