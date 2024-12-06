import React from 'react';
import logo from '../../assets/roof.png'
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar   sm:p-3 md:p-3 flex items-center justify-between p-4 bg-[#334961]">
      <div className="logos   ">
       <Link to='/'> <img src={logo} alt="" className='logoimg'  /> </Link>
       <Link to='/'> <h4 className="text-white text-2xl font-bold md:text-3xl">Octemberk</h4></Link>
      </div>

      <ul className="navlist hidden sm:hidden md:flex space-x-8 ">
       <Link to='/'> <li><a href="#top" className="text-white hover:underline">HOME</a></li></Link> 
      
        <li><a href="#aboutus" className="text-white hover:underline">ABOUT US</a></li>
        <li><a href="#services" className="text-white hover:underline">SERVICES</a></li>
        <li><a href="#review" className="text-white hover:underline">REVIEW</a></li>
       
      </ul>

      <div className="nav-btn  ">
        <a href="#contact" className="text-[#334961] text-base  bg-white px-3 py-1    text-nowrap rounded-lg font-bold hover:bg-[#334961] hover:text-white border border-transparent hover:border-white">
        CONTACT US
        </a>
      </div>
    </div>
  );
};

export default Navbar;
