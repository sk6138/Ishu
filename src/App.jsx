import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route, Router } from "react-router-dom";

import OtpVerification from "./Component/OtpVerification";
import Home from "./Component/Home";
import Item from "./Component/Item";
import DetailPage from "./Component/DetailPage";



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
      delay: 50, // Delay before animation starts
      offset: 100,
      mirror: true, // Repeat animation when scrolling backs
    });
  }, []);

  return (
    
    
    <Routes>
          <Route path="/login" element={<OtpVerification />} />
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Item />} />
          <Route path="/details" element={<DetailPage />} />
        </Routes>
    
       

      
       
      
     
    
  );
};

export default App;
