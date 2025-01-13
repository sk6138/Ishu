import React from "react";
import { Link } from 'react-router-dom';

const HeaderWithMenu = () => {
  return (
    <div  data-aos="fade-down">
     

      {/* Second Row: Menu Items */}
      <div style={styles.menu}>
        <div style={styles.menuItem}>
          <a href="#Space">
          Space
          </a>
         </div>
        <div style={styles.menuItem}> 
        <a href="#Tiles">
        Tiles
          </a></div>
        <div style={styles.menuItem}>
        <a href="#Marble">
        Marble
          </a>
          </div>
        <div style={styles.menuItem}>
          <Link to="/store" >Store</Link>
          </div>
      </div>
    </div>
  );
};

const styles = {
  
  menu: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 20px",
    height:'7.5vh',
    backgroundColor: "#f4f4f4",
    maxWidth:"1240px",
    margin:"auto",
  },
  menuItem: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    cursor: "pointer",
    padding: "5px 10px",
  },
};

export default HeaderWithMenu;
