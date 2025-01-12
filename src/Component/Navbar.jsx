import React from "react";

import logoImage from "/src/assets/png/logo-no-background.png"; // Correct import
import HeaderWithMenu from "./Navbar/HeaderWithMenu";

const Navbar = () => {
  return (
    <div  data-aos="fade-down">
    <div style={styles.container}>
      {/* Logo */}
      <img src={logoImage} alt="Logo" style={styles.logo} />

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        style={styles.searchBar}
      />

      {/* Login Button */}
      <button style={styles.loginButton}>Login</button>
      </div>
      <HeaderWithMenu/>
    </div>
  );
};

const styles = {
  container: {
    maxWidth:"1240px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#f4f4f4",
    margin:"auto",
  },
  logo: {
    width: "150px", // Adjust the width as needed
    height: "auto",
  },
  searchBar: {
    flex: 1,
    margin: "0 20px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    maxWidth:"500px",
  },
  loginButton: {
    padding: "8px 16px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "150px",
  },
};

export default Navbar;
