import React from "react";
import ProjectsPane from "./ProjectsPane";
import projectsDone from "../projectsDone"

const generateProjectPane = (rowOfTwoProjs) => {
  return <ProjectsPane 
    projImg0 = {rowOfTwoProjs[0].projImg}
    projImg1= {rowOfTwoProjs[1].projImg}
    projTitle0= {rowOfTwoProjs[0].projTitle}
    projTitle1={rowOfTwoProjs[1].projTitle}
    projSummary0={rowOfTwoProjs[0].projSummary}
    projSummary1={rowOfTwoProjs[1].projSummary}
  />
}


const PortfolioPane = () => {
  return <div className="portfolioPane">
    <h1>My Portfolio</h1>
    {projectsDone.map( (eachRow) => generateProjectPane(eachRow))
}
  </div>;
};

export default PortfolioPane;
