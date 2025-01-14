import React, { useState } from "react";
import logoImage from "/src/assets/png/logo-no-background.png"; // Correct import
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HeaderWithMenu from "./HeaderWithMenu";
const Navbar = ({handlesearch , searchvisible}) => {
  const [search,setsearch] = useState("")
   const navigate = useNavigate();

  function handlesubmit (e){
     e.preventDefault();
     handlesearch(search)
     
  }
  function handlehome (){
    navigate("/")
 }
  return (
    <div  data-aos="fade-down">
    <div style={styles.container}>
      {/* Logo */}
      <img src={logoImage} alt="Logo"  style={styles.logo} onClick={handlehome} />
     

 {
  (searchvisible) ? 
 
    
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
       :
       <div style={styles.link} >
        <HeaderWithMenu/>
        </div>
       
      
}

      {/* Login Button */}
      {/* <Link to="/login"> */}
    <button style={styles.button}>
    <Link to="/login" style={styles.loginButton}>Login</Link>
    </button>
      
      
      {/* </Link> */}
     
      </div>
      
    </div>
  );
};

const styles = {
  container: {
    // position: "sticky",
    maxWidth:"1240px",
    height:'10vh',
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
  button:{
    border:"none",
  },
  link:{
    width:"100%"
  }
};

export default Navbar;
