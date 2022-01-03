import React from "react";
import Background from "./Background";
import BioPane from "./BioPane";
import PortfolioPane from "./PortfolioPane";
import CarouselComp from "./CarouselComp";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="appDiv">

      <Background  />
      <CarouselComp />
      

    </div>
  );
};
export default App;
