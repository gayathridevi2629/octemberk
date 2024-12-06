import React from "react";
import "./Quote.css";
import sqbuffet from "../../assets/squarebuffet.png";
const Quote = () => {
  return (
    <div className="quoteone">
      
      
      
      <div className="conte">
        <div className="head1">
          <h1>
            The <span className="span">BEST INVESTMENT</span>
            <br />
          </h1>
        </div>

        <div className="youmake">
          <h1>you make,</h1>
        </div>

        <div className="investment">
          <h1>
            is an <span>Investment in your Business...</span>
          </h1>
        </div>
        <div className="learn">
          <h1>The more you Put,</h1>
        </div>
        <div className="get">
          <h1>the more you'll Get</h1>
        </div>

        <div className="warren">
          <h1><span>- "Warren Buffet"</span></h1>
        </div>
      
      </div>

     
      <div className="buffetimg">
        <img src={sqbuffet} alt="" className="bimg"/>
      </div>
   
   
   
    </div>
  );
};

export default Quote;
