// Make sure to import the CSS file
import "../assets/Css/Hero.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/images/Welcome.gif";
import img2 from "../assets/images/Eventhome.jpg";
import img3 from "../assets/images/navimage.jpg";
const Hero = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={1000}
      showThumbs={false}
    >
      <div>
        <div
          className="carouselimg"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        ></div>
      </div>
      <div>
        <div
          className="carouselimg"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        ></div>
      </div>
      <div>
        <div
          className="carouselimg"
          style={{
            backgroundImage: `url(${img3})`,
          }}
        ></div>
      </div>
    </Carousel>
  );
};

export default Hero;
