import React, { useEffect, useRef } from "react";
import "./Globe.css";
import videoSrc from "../../assets/VdoSection.mp4";

const Globe = () => {
  const videoRef = useRef(null); // Create a reference to the video element

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // Set playback rate to slow down the video
    }
  }, []);

  return (
    <div className="globe" id="aboutus">
      
     <div className="twobox">
    
    
    
      <div className="globesection-content">
        <h3>Define us!</h3>
        <div className="flex1">
          <h2>Welcome to Octemberk - The Best Web Development Company in India</h2>
        </div>
        <div className="flex2">
          
          <p>
          At Octemberk, we are a 100% trusted and registered web development company dedicated to delivering
           visually stunning, custom-made websites to Brands. With skill, we provide top-tier website development services
            tailored to meet the unique needs of our clients across India. Our expertise spans across Brand websites,
             e-commerce Websites, and customized websites for your need and Budget.
          </p>
           <br />
          <p>Project delivery on time with proper analysis and development of a schedule for project completion.</p>
          <br />
          <p className="everything">“EVERYTHING IS POSSIBLE IN OCTEMBERK”</p>
          <br />
          <div className="create">
            <h4>You Imagine.</h4>
            <h5>We Create</h5>
          </div>
        </div>
      </div>
     
      <div className="globesection-globe">
        <video ref={videoRef} autoPlay loop muted className="vdotrial">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      
      
      </div> 
    </div>
  );
};

export default Globe;
