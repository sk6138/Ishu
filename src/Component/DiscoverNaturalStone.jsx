import React from 'react';
import stoneImage from '../assets/tile-merchant-ireland-SXAgGV1Rw_E-unsplash.jpg';

const DiscoverNaturalStone = () => {
  const containerStyle = {
   
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '1240px',
  };

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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // 4 columns for large screens, responsive
    gap: '20px',
    width: '100%',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  };

  const cardContentStyle = {
    padding: '15px',
    textAlign: 'center',
  };

  const cardTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
  };

  const cardDescriptionStyle = {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.5',
  };

  const viewAllStyle = {
    marginTop: '5px',
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
  };

  const cardData = [
    { id: 1, title: 'Marble ', description: 'Elegant marble  for a luxurious finish.' },
    { id: 2, title: 'Granite ', description: 'Durable granite  for any space.' },
    { id: 3, title: 'Slate ', description: 'Natural slate  for rustic charm.' },
    { id: 4, title: 'Limestone ', description: 'Soft limestone  for a modern touch.' },
    { id: 5, title: 'Travertine ', description: 'Classic travertine  with natural patterns.' },
    { id: 6, title: 'Quartzite ', description: 'Quartzite  for unmatched strength.' },
    { id: 7, title: 'Sandstone ', description: 'Warm sandstone  for a unique look.' },
    { id: 8, title: 'Onyx ', description: 'Stunning onyx  for a bold statement.' },
  ];

  return (
    <div style={containerStyle} id='Marble' data-aos="fade-up">
      <h1 style={title1} data-aos="fade-up">Discover Natural Stone</h1>
      <p data-aos="fade-up" style={description}>The uniqueness of materials such as marble, granite, onyx, and semi-precious stones, is transformed  into livable surfaces.</p>
      <div style={gridStyle}>
        {cardData.map((card) => (
          <div style={cardStyle} key={card.id} data-aos="fade-up">
            <img src={stoneImage} alt={card.title} style={imageStyle}  />
            <div style={cardContentStyle} >
              <h3 style={cardTitleStyle} >{card.title}</h3>
              <p style={cardDescriptionStyle} >{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button style={viewAllStyle} data-aos="fade-up" >View All Stones</button>
    </div>
  );
};

export default DiscoverNaturalStone;
