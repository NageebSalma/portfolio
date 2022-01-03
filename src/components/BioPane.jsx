import React from "react";
import Socials from "./Socials";
const BioPane = () => {
  return (
    <div className="bioPane">
      <img
        className="personalImg"
        alt="Girl in front of nile river"
src="https://scontent.fcai20-6.fna.fbcdn.net/v/t1.6435-9/177360721_3775820042528891_2796569488769963910_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=mm7y3nagxygAX-qbSs3&_nc_ht=scontent.fcai20-6.fna&oh=00_AT8UkCdGmTHjm584Z7uGEq9pHS9CcottVAFdAQqXljPbZA&oe=61F3C56E"      />

      {/* <div className="itMeHeader"> */}
        {/* <p>
          Hi, I'm
        </p> */}
        <h1> Salma Nageeb</h1>
      {/* </div> */}

      <div className="bio">
        {/* <img
          src="media/abstract2.png"
          
          alt="Abstract shapes"
          draggable="false"
        /> */}
        <p className="greetingMsg"> Hi there, thank you for visiting.</p>
         <p> I am a full stack developer and a data science enthusiast. I love programming because it's a giving field, and doesn't limit my most important assit: creativity.</p>
      </div>
     
 
    </div>
  );
};

export default BioPane;