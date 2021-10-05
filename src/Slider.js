import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import Carousel1 from "./Images/Carousel1.png";
import Carousel2 from "./Images/Carousel2.png";
import Carousel3 from "./Images/Carousel3.png";

import React from "react";

function Slider() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img className="slider-logo1" src={Carousel1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider-logo2" src={Carousel2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider-logo3" src={Carousel3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
