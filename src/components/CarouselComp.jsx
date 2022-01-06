import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselProps from "react-bootstrap/Carousel";
import BioPane from "./BioPane"
import PortfolioPane from "./PortfolioPane";
import ContactPane from "./ContactPane"
CarouselProps.defaultProps.interval = 20000;
// CarouselProps.defaultProps.controls="false"
console.log(CarouselProps)

const CarouselComp = () => {
  return (
    <Carousel indicators={false} className="carouselStyling">
      <Carousel.Item >
        <BioPane />
      </Carousel.Item>
      <Carousel.Item  > 
        <PortfolioPane />
      </Carousel.Item>
      <Carousel.Item > 
      <ContactPane />    
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
