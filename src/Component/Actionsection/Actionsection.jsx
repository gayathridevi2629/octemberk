import React from "react";
import "./Actionsection.css";
import bulb from '../../assets/bulbii.png'
import tel from '../../assets/mailwhite.png'
import graph from '../../assets/growgraph.png'
const Actionsection = () => {
  return (
    <div className="actionsection">
                 <h1 className="actu">THREE STEP ACTION</h1>
      
      <div className="card-container">
       
        <div className="card">
          <img src={tel} alt="" className="teleicon"/>
          <h1>Step 1: Contact Us</h1>
          <p>Reach out via email or phone, and share your vision for your website.</p>
          
        </div>

        <div className="card">
        <img src={bulb} alt="" className="bulb"/>
         <h1>Step 2: Collaborate & Customize</h1>
         <p>We’ll provide website models for you to explore and customize according to your preferences.</p>
        </div>

        <div className="card">
        <img src={graph} alt="" className="graph"/>
          <h1>Step 3: Launch & Grow</h1>
          <p>Get your fully developed website, elevate your brand, boost sales, and unlock more business opportunities!</p>
        </div>

        
      </div>
    </div>
  );
};

export default Actionsection;
