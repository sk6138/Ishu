import React from "react";

const HeaderWithMenu = () => {
  return (
    <div  data-aos="fade-down">
     

      {/* Second Row: Menu Items */}
      <div style={styles.menu}>
        <div style={styles.menuItem}>Space</div>
        <div style={styles.menuItem}> Tiles</div>
        <div style={styles.menuItem}>Marble</div>
        <div style={styles.menuItem}>Products</div>
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
