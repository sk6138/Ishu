import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import AboutTilesMarbel from './Component/AboutTilesMarbel'
import AboutBySpace from './Component/AboutBySpace'
import ContactUs from './Component/ContactUs'
import DiscoverNaturalStone from './Component/DiscoverNaturalStone'


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
      delay: 50, // Delay before animation starts
      offset:100,
      mirror: true, // Repeat animation when scrolling backs
    });
  }, []);
  return (
    <div>
      <div >
      <Navbar/>
      </div>
     <div >
     <Hero/>
     </div>
     
      <div >
      <AboutTilesMarbel/>
      </div>
      
      <AboutBySpace/>
      <DiscoverNaturalStone/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
