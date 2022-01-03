import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import CarouselProps from "react-bootstrap/Carousel";
import BioPane from "./BioPane"
import PortfolioPane from "./PortfolioPane";
import ContactPane from "./ContactPane"
CarouselProps.defaultProps.interval = 20000;


const CarouselComp = () => {
  return (
    <Carousel className="carouselStyling">
      <Carousel.Item id="1">
        <BioPane />
      </Carousel.Item>
      <Carousel.Item id="2" > 
        <PortfolioPane />
      </Carousel.Item>
      <Carousel.Item id="2" > 
      <ContactPane />    
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
