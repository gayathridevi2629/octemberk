import React from "react";
import "./threeservice.css";
import cardimage from "../../assets/ecomimg.png";
import llpimage from "../../assets/company.png";
import customimage from "../../assets/custom.png";

const threeservice = () => {
  return (
    <div className="container" >
      <div className="cards grid">


        <div className="carding">
          
          <div className="img-box">
            <img src={llpimage} alt="" className="img1" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Business Website</h1>
            <p className="card-text">
              {" "}
              "Elevate your brand with a stunning online presence that builds
              trust and credibility. With a professional brand website, you can
              showcase your unique identity and impress your audience, leaving a
              lasting impact. example of Brand website is this Website"{" "}
            </p>

            <h2 className="viewprice">
              <a href="#Bservices">View Price</a>
            </h2>
          </div>
        </div>

        <div className="carding">
          <div className="img-box">
            <img src={cardimage} alt="" className="img2" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">E-Commerce Website</h1>
            <p className="card-text">
              "Sell with confidence and control—your store, your way. Unlock
              24/7 sales with an easy-to-use online store that turns visitors
              into loyal customers through a seamless shopping experience."
            </p>

            <h2 className="viewprice">
              <a href="#services">View Price</a>
            </h2>
          </div>
        </div>

        <div className="carding">
          <div className="img-box">
            <img src={customimage} alt="" className="img3" />
          </div>
          <div className="card-content">
            <h1 className="card-heading">Customise Website</h1>
            <p className="card-text">
              "Tailor your online presence with a customized website that fits
              your unique needs and Budget. "
            </p>

            <h2 className="viewprice">
              <a href="#services">View Price</a>
            </h2>
          </div>
        </div>
 
 
      </div>
    </div>
  );
};

export default threeservice;
