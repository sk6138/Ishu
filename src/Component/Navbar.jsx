import React, { useState } from "react";
import logoImage from "/src/assets/png/logo-no-background.png"; // Correct import
import HeaderWithMenu from "./Navbar/HeaderWithMenu";

const Navbar = () => {
  const [search,setsearch] = useState("")

  function handlesubmit (e){
     e.preventDefault();
     console.log(search)
  }
  return (
    <div  data-aos="fade-down">
    <div style={styles.container}>
      {/* Logo */}
      <img src={logoImage} alt="Logo" style={styles.logo} />

      {/* Search Bar */}
      <form style={styles.form} onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e)=>{
          setsearch(e.target.value)
        }}
        style={styles.searchBar}
      />
      </form>
      

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
    width: "20%", // Adjust the width as needed
    height: "auto",
  },
  form:{
    width:"50%",
  },
  searchBar: {
    flex: 1,
    margin: "auto",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width:"100%",
  },
  loginButton: {
    padding: "8px 16px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "20%",
  },
};

export default Navbar;
