import React from 'react';
import hero1 from '../assets/tile-merchant-ireland-SXAgGV1Rw_E-unsplash.jpg';

const AboutBySpace = () => {
  const title1 = {
    letterSpacing: '6px',
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '20px 0 -20px 0',
    color: '#333',
    textAlign: 'center',
  };

  const description = {
    padding: '10px',
    overflow: 'hidden',
    letterSpacing: '3px',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#666',
    textAlign: 'center',
  };

  const containerStyle = {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Three columns by default
    gap: '20px',
    width: '100%',
    maxWidth: '1240px',
  };

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    borderRadius: '8px',
    aspectRatio: '4 / 3', // Keeps a consistent aspect ratio for images
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
    fontSize: '16px',
    borderRadius: '4px',
  };

  const viewallStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={title1}>Tiles by Space</h1>
      <p style={description}>
        Your spaces are a reflection of your tastes. Find design inspiration right here! <br />
        Whether you are looking for Kitchen tiles, Bathroom tiles, or tiles to spruce up your living room, <br />
        your search ends here. Explore a wide variety of tile designs that suit your requirements.
      </p>
      <div style={gridStyle}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div style={cardStyle} key={num}>
            <img src={hero1} alt={`Image ${num}`} style={imageStyle} />
            <h3 style={titleStyle}>{`Image ${num}`}</h3>
          </div>
        ))}
      </div>
      <button style={viewallStyle}>View All Tiles</button>
    </div>
  );
};

export default AboutBySpace;
