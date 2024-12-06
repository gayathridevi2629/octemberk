import React from "react";
import "./Price.css";
import art1 from "../../assets/Artboard-1.webp";
import art2 from "../../assets/Artboard-2.webp";
import art3 from "../../assets/Artboard-3.webp";
import art4 from "../../assets/yeni.webp";
import art5 from "../../assets/rocket.webp";
import art6 from "../../assets/phoneyeni.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Price = () => {
  return (
    <div className="price" id="services">
      <h1 className="pricetopheading">Web Development and Website Design</h1>
      <h1 className="pricingheading"> Plans & Pricing</h1>

      <div className="pricebox">
      


      
      <div className="boxone">
          <div className="websitename">
            <h1>Basic E-Com Website </h1>
          </div>

          <div className="priceimage">
            <img src={art6} alt="" className="pricepicimg"/>
          </div>

          <div className="amount">
            <h1 className="oldamount">₹24,999</h1>
            <h1 className="newamount">₹19,999</h1>
            <p className="gst">Offer Price</p>
          </div>
          <p className="Featureheading">Feature included</p>

          <ul className="ulli">
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>3 pages Website</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Domain Name  (.shop .in .org etc)</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Hosting ( Unlimited Space )</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Dynamic Website (Basic Design )</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Admin Access</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Very Limited Product Upload</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Safe Payment Integration</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Payment Verification</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free SSL Certificates</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>SEO Friendly Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>100% Responsive Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>One Time Free Hosting</li>
            </div>
          </ul>

          <button className="ctnow"> <a href="#contact">Contact Now</a></button>
        </div>

        <div className="boxone">
          <div className="websitename">
            <h1>Standard E-Com Website </h1>
          </div>

          <div className="priceimage">
            <img src={art3} alt="" className="pricepicimg"/>
          </div>

          <div className="amount">
            <h1 className="oldamount">₹34,999</h1>
            <h1 className="newamount">₹27,999</h1>
            <p className="gst">Offer Price</p>
          </div>
          <p className="Featureheading">Feature included</p>

          <ul className="ulli">
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>30 pages Website </li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Domain Name  (.shop .in .org etc..)</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Hosting ( Unlimited Space )</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Dynamic Website ( Basic Design )</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Safe Integrated Payment</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Auto Invoice Bill Generator</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Proper Customer Payment Verification</li>
            </div>


            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Admin Access</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>One click order status Update</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li> Seperate Admin Login/Logout</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li> Seperate Admin DashBoard</li>
            </div>
           
       

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li> Limited Product Upload</li>
            </div>


            <div className="cmmt">
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Unlimited Images & Videos Upload</li>
            </div> 

            
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free SSL Certificates</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free Hosting Support </li>
            </div>
             
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Technical Support For Website</li>
            </div>

        

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>SEO Friendly Website</li>
            </div>

 
        
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Premium Ecommece Features</li>
            </div>


            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>SEO Friendly Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>100% Responsive Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free Hosting worth ₹1000</li>
            </div>
          </ul>

          <button className="ctnow"> <a href="#contact">Contact Now</a></button>
        </div>

        <div className="boxone boxthree">
          <div className="websitename">
            <h1>Premium E-Com Website </h1>
          </div>

          <div className="priceimage">
            <img src={art2} alt="" className="pricepicimg"/>
          </div>

          <div className="amount">
            <h1 className="oldamount">₹39,999</h1>
            <h1 className="newamount">₹29,999</h1>
            <p className="gst">Offer Price</p>
     
          </div>
          <p className="Featureheading">Feature included</p>

          <ul className="ulli">
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li><span className="spanss">UnLimited</span> pages Website</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Domain Name (.shop .in .org etc)</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Hosting ( Unlimited Space )</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Dynamic Website ( Premium Design )</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Safe Integrated Payement </li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Auto Invoice Bill Generator</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Proper Customer Payment Verification</li>
            </div>


            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li> Admin Access</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>One click order status Update</li>
            </div>


            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li> Seperate Admin Login/LogOut</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li> Seperate Admin Dashboard</li>
            </div>
   
   
       

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li><span className="spanss">UnLimited</span> Product upload</li>
            </div>
       
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              
              <li><span className="spanss">UnLimited</span> Product Images Upload </li>
            </div>
         
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free SSL Certificates</li>
            </div>


            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free Hosting Support</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Technical Support For Website</li>
            </div>


            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>SEO Friendly Website</li>
            </div>
           
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Premium Ecommerce Features</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>All Device Friendly Website</li>
            </div>
           
           
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>100% Responsive Website</li>
            </div>
        

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free Hosting Worth ₹3000</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Browser Friendly</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Large Cloud Storage</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Premium Ecommerce Design</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Website Security Audit</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Website Route Security</li>
            </div>

       </ul>

       <button className="ctnow"> <a href="#contact">Contact Now</a></button>
        </div>

       
      <div className="boxone" id="Bservices">
          <div className="websitename">
            <h1>Basic Business Website </h1>
          </div>

          <div className="priceimage">
            <img src={art1} alt="" className="pricepicimg" />
          </div>

          <div className="amount">
            <h1 className="oldamount">₹10,999</h1>
            <h1 className="newamount">₹7,999</h1>
            <p className="gst">Offer Price</p>
          </div>
          <p className="Featureheading">Feature included</p>

          <ul className="ulli">
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Single page Website</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Domain Name (.com .in .org etc)</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Hosting </li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Static Website ( Basic Design )</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Basic 3D Animation</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Contact Button Integration</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Technical Support For Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free SSL Certificates</li>
            </div>

          
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>SEO Friendly Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>100% Responsive Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free Hosting worth ₹2000</li>
            </div>
          </ul>

          <button className="ctnow"> <a href="#contact">Contact Now</a></button>
        </div>

      
        <div className="boxone">
          <div className="websitename ">
            <h1>Standard Business Website</h1>
          </div>

          <div className="priceimage">
            <img src={art4} alt=""  className="pricepicimg"/>
          </div>

          <div className="amount">
            <h1 className="oldamount">₹17,999</h1>
            <h1 className="newamount">₹ 12,999</h1>
            <p className="gst">Offer Price</p>
          </div>
          <p className="Featureheading">Feature included</p>

          <ul className="ulli">
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>2 pages Website</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Domain Name</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Hosting </li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Dynamic Website ( Basic Design )</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Inquiry Form Integration</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Admin Access</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li> Free Hosting Support</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Technical Support For Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free SSL Certificates</li>
            </div>
        
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>SEO Friendly Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>100% Responsive Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li> Free  Hosting worth{" "}
              <span className="spanss">₹2000</span></li>
            </div>
          </ul>
          <button className="ctnow"> <a href="#contact">Contact Now</a></button>
        </div>

        <div className="boxone boxthree">
          <div className="websitename">
            <h1>Premium Business Website</h1>
          </div>

          <div className="priceimage">
            <img src={art5} alt="" className="pricepicimg"/>
          </div>

          <div className="amount">
            <h1 className="oldamount">₹21,000</h1>
            <h1 className="newamount">₹ 14,999</h1>
            <p className="gst">Offer Price</p>
          
          </div>
          <p className="Featureheading">Feature included</p>

          <ul className="ulli">
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Multiple page Website</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>1 Year Free Domain Name (.in .org .shop etc)</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>
                1 Year Free Hosting ( <span className="spanss">UnLimited</span>{" "}
                Space )
              </li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>
                Dynamic Website ( <span className="spanss">Premium</span> Design
                )
              </li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Inquiry Form Integration</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Admin Access</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li> Free Hosting Support</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>
                <span className="spanss">1 Year</span> Free Technical Support
                For Website
              </li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Free SSL Certificates</li>
            </div>

        

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>SEO Friendly Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>100% Responsive Website</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>
                Free  Hosting worth{" "}
                <span className="spanss">₹2000</span>
              </li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li> Premium Visual Effects</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Premium 3D Animation Integration</li>
            </div>

            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Browser Friendly</li>
            </div>


            
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Website Security Audit</li>
            </div>
            <div className="cmmt">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#221992" }}
                className="icontic"
              />
              <li>Website Route Security</li>
            </div>
          </ul>
          <button className="ctnow"> <a href="#contact">Contact Now</a></button>
        </div>


 


      
      </div>
    </div>
  );
};

export default Price;
