import React from "react";
import "./Technology.css";
import html from '../../assets/htmll.png'
import react from '../../assets/REACT.png'
import js from '../../assets/JS.png'
import MIX from '../../assets/MIX.png'
import mongo from '../../assets/MONGO.png'
import tailwind from '../../assets/tailwind.png'
import docker from '../../assets/docker.png'
import express from '../../assets/EXPRESS.jpeg'
const Technology = () => {
  return (
    <div className="Scrollbarone">
<h1 className="text-blue-950 text-4xl font-bold lg:text-4xl lg:font-bold md:text-3xl md:font-semibold sm:text-2xl sm:font-semibold text-xl font-semibold">
  Technology We Use
</h1>
      <div className="wrapper">
        <div className="item item1"><img src={html} alt="" /></div>
        <div className="item item2"><img src={react} alt="" /></div>
        <div className="item item3"><img src={tailwind} alt="" /></div>
        <div className="item item4"><img src={express} alt=""  /></div>
        <div className="item item5"><img src={MIX} alt="" /></div>
        <div className="item item6"><img src={mongo} alt="" /></div>
        <div className="item item7"><img src={html} alt="" /></div>

        <div className="item item8"><img src={docker} alt="" /></div>
        <div className="item item9"><img src={MIX} alt="" /></div>
        <div className="item item10"><img src={express} alt="" /></div>
     
       

      </div>
    </div>
  );
};

export default Technology;
