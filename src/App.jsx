import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Component/Navbar/Navbar";
import Home from './pages/Home'
import Footer from "./Component/Footer/Footer";
import TermsandCondition from './pages/TermsandCondition'


const App = () => {
  return (
    <div>
      <Navbar />
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/terms-and-conditions' element={<TermsandCondition />}/>

     </Routes>
      
      <Footer />
    </div>
  );
};

export default App;