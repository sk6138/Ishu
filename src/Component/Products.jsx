import React, { useState } from "react";
import Image1 from '../assets/tile-merchant-ireland-SXAgGV1Rw_E-unsplash.jpg';
import { useNavigate } from "react-router-dom";


const Product = ({ prod }) => {
  const styles = {
    card: {
      position: "relative",
      backgroundColor: "#fff",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    imageContainer: {
      position: "relative",
      overflow: "hidden",
      height: "200px",
      backgroundColor: "#f4f4f4",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s",
    },
    imageHover: {
      transform: "scale(1.1)",
    },
    content: {
      padding: "20px",
      textAlign: "center",
    },
    title: {
      fontSize: "1.5rem",
      margin: "10px 0",
      color: "#333",
      fontWeight: "bold",
    },
    description: {
      fontSize: "0.9rem",
      color: "#555",
      marginBottom: "10px",
    },
    category: {
      fontSize: "0.9rem",
      color: "#777",
      marginBottom: "10px",
    },
    price: {
      fontSize: "1.2rem",
      color: "#000",
      fontWeight: "bold",
      margin: "10px 0",
    },
    button: {
        padding: "8px 16px",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        
      fontSize: "1rem",
      margin: "10px",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#333",
    },
  };

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    // navigate("/details", { state: { product: prod } });
    
  };
  
  return (
   <>
    

    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div style={styles.imageContainer} onClick={handleMoreDetails}>
        <img
          src={Image1}
          alt={Image1}
          style={{
            ...styles.image,
            ...(isHovered ? styles.imageHover : {}),
          }}
        />
      </div>

      {/* Product Details */}
      <div style={styles.content}>
        <div  >
        
        <h3 style={styles.title}>{prod.name}</h3>
        <p style={styles.category}>
          Category: {prod.category} | Color: {prod.color}
        </p>
        <p style={styles.description}>{prod.description}</p>
        <p style={styles.price}>${prod.price}</p>
        
        </div>
        <button
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {}),
          }}
        >
          Add to Cart
        </button>
        <button
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {}),
          }}
          onClick={handleMoreDetails} >
          More Details
        </button>
      </div>
    </div>

    </>
  );
};

export default Product;
