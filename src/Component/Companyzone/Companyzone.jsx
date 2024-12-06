import React from 'react'
import './Companyzone.css'
import razorpay from '../../assets/razorpay.png'
import Google from '../../assets/Google.png'
import asure from '../../assets/azure.png'
import yelp from '../../assets/yelp4.png'

const Companyzone = () => {
  return (
    

    <div className="company ">

       <div className="support">
        <h1> OUR GROWTH PARTNERS</h1>
       </div>

   
    
<div className="trustzone">

<div className="itemsss">
   <img src={Google}alt="" />
</div>

<div className="itemsss">
   <img src={razorpay}alt="" />
</div>

<div className="itemsss">
   <img src={asure}alt="" />
</div>

<div className="itemsss">
   <img src={yelp}alt="" />
</div>

</div>
</div>
  )
}

export default Companyzone