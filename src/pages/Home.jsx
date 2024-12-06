import React from 'react'
import Videosection from "../Component/Videosection/Videosection";
import Hero from "../Component/Hero/Hero";
import Actionsection from "../Component/Actionsection/Actionsection";
import Globe from "../Component/Globe/Globe";
import Companyzone from "../Component/Companyzone/Companyzone";
import Threeservice from "../Component/Threeservice/Threeservice";
import Testimonial from "../Component/Testimonial/Testimonial";
import Price from "../Component/Price/Price";
import ContactUs from "../Component/ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
       <Videosection />
      <Hero />
      <Threeservice />
      <Actionsection />
      <Globe />
     <Companyzone />
     <Testimonial />
      <Price />
     
     <ContactUs />
    </div>
  )
}

export default Home