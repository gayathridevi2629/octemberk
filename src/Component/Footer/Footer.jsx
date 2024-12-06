import React from "react";
import "./Footer.css";
import logo from '../../assets/roof.png'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="Footer">
    
     
      <div className="toppfooter">
       
      <div className="pirst">
      <div className="logoo">
          <img src={logo} alt="O" className="logos" />
          <h1>OCTEMBERK</h1>
        </div>
        <div className="cont">
         
          <h1>
          Gayathri Founder/CEO
          </h1>
          <h1>service@octemberk.com</h1>
          <h1>+91 9789489114</h1>
          <h1>India</h1>
        </div>
        
    
       <div></div></div> 
        <div className="secondfooter">
          <h1>Navigations</h1>
          <ul>
            <li>
            <a href="#video">HOME</a>
            </li>
            <li>
              <a href="">SERVICE</a>
            </li>
            <li>
              <a href="#aboutus">ABOUT-US</a>
            </li>
            <li>
              <a href="#review">OUR HAPPY CLIENTS</a>
            </li>
          </ul>
        </div>

        <div className="thirdfooter">
        <h1>WE CREATE</h1>
        <ul>
          <li>E-COMMERCE WEBSITES</li>
          <li> BUSINESS WEBSITES</li>
          <li>CUSTOMISABLE  WEBSITES</li>
        </ul>
       
      </div>
      </div>
<div className="bottomdivv">
      <div className="termsdiv">
       
        <Link to='/terms-and-conditions'> <p> Terms and Conditions</p></Link> 

      </div>
      <div className="copywritr">
        <hr />
        <h1>© 2024 OCTEMBERK™. ALL COPYRIGHTS RESERVED®</h1>
      </div>
    </div>
    </div>
  );
}

export default Footer;
