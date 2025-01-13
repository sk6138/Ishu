import React from 'react';
import contactImage from '../assets/tile-merchant-ireland-SXAgGV1Rw_E-unsplash.jpg'; // Replace with your image path
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  const containerStyle = {
    
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', // Ensures responsiveness
    padding: '40px 20px',
    maxWidth: '1240px',
    margin: 'auto',
    borderRadius: '16px',
    overflow: 'hidden',
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0, // Send the image to the background
     opacity:0.5,// Makes the image subtle for text visibility
  };

  const contentStyle = {
    zIndex: 1, // Brings content above the image
    backgroundColor: 'transparent', 
    borderRadius: '16px',
    padding: '20px',
    maxWidth: '600px',
    textAlign: 'center',

  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#000',
  };

  const subtitleStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#000',
  };

  const contactListStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const iconStyle = {
    fontSize: '20px',
    color: '#000',
  };


  return (
    <div style={containerStyle} id='Store' data-aos="flip-up">
      {/* Background Image */}
      <img src={contactImage} alt="Contact Us" style={imageStyle} />

      {/* Content */}
      <div style={contentStyle}>
        <h1 style={titleStyle}>Contact Us</h1>
        <p style={subtitleStyle}>
          We'd love to hear from you! Reach out to us using any of the methods below.
        </p>
        <ul style={contactListStyle}>
          <li style={contactItemStyle}>
            <FaPhoneAlt style={iconStyle} />
            <span>+123 456 7890</span>
          </li>
          <li style={contactItemStyle}>
            <FaWhatsapp style={iconStyle} />
            <span>+123 456 7890 (WhatsApp)</span>
          </li>
          <li style={contactItemStyle}>
            <FaEnvelope style={iconStyle} />
            <span>owner@example.com</span>
          </li>
        </ul>
       
      </div>
    </div>
  );
};

export default ContactUs;
