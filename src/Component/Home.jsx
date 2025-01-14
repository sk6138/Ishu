import React from 'react'
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import AboutTilesMarbel from "../Component/AboutTilesMarbel";
import AboutBySpace from "../Component/AboutBySpace";
import ContactUs from "../Component/ContactUs";
import DiscoverNaturalStone from "../Component/DiscoverNaturalStone";
import HeaderWithMenu from '../Component/HeaderWithMenu';



const Home = () => {
  return (
    <div>
       <Navbar searchvisible={false} />
       {/* <HeaderWithMenu/> */}
        <Hero />
        <AboutTilesMarbel />
        <AboutBySpace />
        <DiscoverNaturalStone />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Home
