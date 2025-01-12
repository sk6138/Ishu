import React from 'react';
import  hero1 from '../assets/tile-merchant-ireland-SXAgGV1Rw_E-unsplash.jpg' 

const AboutBySpace = () => {
 
  const title1 = {
    letterSpacing:"6px",
    fontSize: "30px",
    fontWeight: "bold",
    margin: "20px 0 -20px 0 ",
    color: "#333",
    textAlign:"center",
  };
  const  description = {
    height:"18vh",
    padding:"5px",
    overflow:"hidden",
    letterSpacing:"3px",
    fontSize: "18px",
    fontWeight:"400",
    lineHeight: "1.5",
    color: "#666",
  };
  const containerStyle = {
    width:"1240px",
    margin:"auto",
    display: 'flex',
    flexDirection: 'column',
    gap: '30px', // Increased gap between rows
    justifyContent: 'center',
    alignItems: 'center',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageWrapperStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '375px',  // Increased image width
    height: '310px', // Increased image height
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  };

  const titleStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px',
    fontSize: '18px', // Increased font size
  };
  return (
    <div style={containerStyle}>
      <h1 style={title1}>Tiles by Space</h1>
      <p style={description}>Your spaces are a reflection of your tastes. Find design inspiration right here! <br />
          Whether you are looking 
        for Kitchen tiles, Bathroom tiles or tiles to spruce up your living room, <br />
         your search ends here. Explore a wide variety of tile designs that suit your requirements.</p>
      <div style={rowStyle}>
        <div style={colStyle}>
          <div style={imageWrapperStyle}>
            <img src={hero1} alt="Image 1" style={imageStyle} />
            <h3 style={titleStyle}>Image 1</h3>
          </div>
        </div>
        <div style={colStyle}>
          <div style={imageWrapperStyle}>
            <img src={hero1} alt="Image 2" style={imageStyle} />
            <h3 style={titleStyle}>Image 2</h3>
          </div>
        </div>
        <div style={colStyle}>
          <div style={imageWrapperStyle}>
            <img src={hero1} alt="Image 3" style={imageStyle} />
            <h3 style={titleStyle}>Image 3</h3>
          </div>
        </div>
      </div>
      <div style={rowStyle}>
        <div style={colStyle}>
          <div style={imageWrapperStyle}>
            <img src={hero1} alt="Image 4" style={imageStyle} />
            <h3 style={titleStyle}>Image 4</h3>
          </div>
        </div>
        <div style={colStyle}>
          <div style={imageWrapperStyle}>
            <img src={hero1} alt="Image 5" style={imageStyle} />
            <h3 style={titleStyle}>Image 5</h3>
          </div>
        </div>
        <div style={colStyle}>
          <div style={imageWrapperStyle}>
            <img src={hero1} alt="Image 6" style={imageStyle} />
            <h3 style={titleStyle}>Image 6</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBySpace;
