
import  hero1 from '../assets/tile-merchant-ireland-SXAgGV1Rw_E-unsplash.jpg'
import React from 'react'

const ItemsAbout = ({image,title , desc}) => {
  return (
    <div>
       <div style={styles.column} >
              <img
              data-aos="fade-up"
                src={image}
                alt="Marble"
                style={styles.image}
              />
              <h2 data-aos="fade-up" style={styles.title}> {title}</h2>
              <p style={styles.description} data-aos="fade-up">
                {desc}
              </p>
              <button data-aos="fade-up" style={styles.tilemarbel}> {title}</button>
            </div>
    </div>
  )
}

const styles = {
    main:{
     
      maxWidth:"1240px",
      margin:"auto",
    },
    container: {
      
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "50px 0",
      gap: "30px",
      backgroundColor: "#f4f4f4",
    },
    column: {
      flex: 1,
      textAlign: "center",
      padding: " 0 0 30px 0",
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    image: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "8px 8px 0 0",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      letterSpacing:"6px",
      margin: "20px 0 10px",
      color: "#333",
    },
    title1: {
      letterSpacing:"6px",
      fontSize: "30px",
      fontWeight: "bold",
      margin: "20px 0 -20px 0 ",
      color: "#333",
      textAlign:"center",
    },
    description: {
      height:"18vh",
      padding:"5px",
      overflow:"hidden",
      letterSpacing:"3px",
      fontSize: "18px",
      fontWeight:"400",
      lineHeight: "1.5",
      color: "#666",
    },
    tilemarbel:{
      marginTop:"20px",
      padding: "8px 16px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      width: "50%",
    }
};
export default ItemsAbout

