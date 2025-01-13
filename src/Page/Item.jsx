import React from 'react'
import Products from '../Component/Products'
import Navbar from '../Component/Navbar'
import Footer from "../Component/Footer";
import Image1 from '../assets/tile-merchant-ireland-SXAgGV1Rw_E-unsplash.jpg';
export default function Item() {
    const products = [
        {
          id: 1,
          name: "Marble A",
          price: 50,
          category: "Marble",
          color: "White",
          description: "Premium quality white marble for luxurious interiors.",
          image: {Image1}, // Replace with actual image URL
        },
        {
          id: 6,
          name: "Tile B",
          price: 20,
          category: "Tile",
          color: "Black",
          description: "Durable black tiles for modern flooring.",
          image:  {Image1},
        },
        {
          id: 7,
          name: "Tile C",
          price: 25,
          category: "Tile",
          color: "Gray",
          description: "Stylish gray tiles for walls and floors.",
          image:  {Image},
        },
        {
          id: 8,
          name: "Marble D",
          price: 100,
          category: "Marble",
          color: "Cream",
          description: "Elegant cream marble for sophisticated designs.",
          image:  {Image},
        },
        {
            id: 2,
            name: "Marble A",
            price: 50,
            category: "Marble",
            color: "White",
            description: "Premium quality white marble for luxurious interiors.",
            image: {Image1}, // Replace with actual image URL
          },
          {
            id: 3,
            name: "Tile B",
            price: 20,
            category: "Tile",
            color: "Black",
            description: "Durable black tiles for modern flooring.",
            image:  {Image1},
          },
          {
            id: 4,
            name: "Tile C",
            price: 25,
            category: "Tile",
            color: "Gray",
            description: "Stylish gray tiles for walls and floors.",
            image:  {Image},
          },
          {
            id: 5,
            name: "Marble D",
            price: 100,
            category: "Marble",
            color: "Cream",
            description: "Elegant cream marble for sophisticated designs.",
            image:  {Image},
          },
      ];
      
  return (
    <div>
        <Navbar/>
        <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
        margin:"auto",
      }}
    > 
      {
products.map((pro)=>(
    <Products prod={pro} key={pro.id}/>
))
       } 
    </div>
    <Footer/>
     
       
    </div>
  )
}
