import React from "react";
import "./styles.css";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src="slid1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="slid2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="slid3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
