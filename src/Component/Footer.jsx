import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "40px 20px",
    marginTop: "40px",
  };

  const footerContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1240px",
    margin: "auto",
    gap: "30px",
  };

  const columnStyle = {
    flex: "1",
    minWidth: "250px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#f4f4f4",
  };

  const linkStyle = {
    color: "#ddd",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
    cursor: "pointer",
  };

  const linkHoverStyle = {
    color: "#fff",
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
  };

  const socialIconStyle = {
    fontSize: "18px",
    color: "#ddd",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  const socialIconHoverStyle = {
    color: "#fff",
  };

  const bottomStyle = {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#bbb",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        {/* Quick Links Section */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>Quick Links</h3>
          <a
            href="#space"
            style={linkStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          >
            Space
          </a>
          <a
            href="#wall-tiles"
            style={linkStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          >
            Wall Tiles
          </a>
          <a
            href="#floor-tiles"
            style={linkStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          >
            Floor Tiles
          </a>
          <a
            href="#marble"
            style={linkStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          >
            Marble
          </a>
          <a
            href="#products"
            style={linkStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, linkStyle)}
          >
            Products
          </a>
        </div>

        {/* Contact Information Section */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p>
            <FaPhoneAlt /> +123 456 7890
          </p>
          <p>
            <FaWhatsapp /> +123 456 7890 (WhatsApp)
          </p>
          <p>
            <FaEnvelope /> owner@example.com
          </p>
        </div>

        {/* Social Media Section */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>Follow Us</h3>
          <div style={socialIconsStyle}>
            <FaFacebookF
              style={socialIconStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, socialIconHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, socialIconStyle)}
            />
            <FaInstagram
              style={socialIconStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, socialIconHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, socialIconStyle)}
            />
            <FaTwitter
              style={socialIconStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, socialIconHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, socialIconStyle)}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={bottomStyle}>
        &copy; {new Date().getFullYear()} Tile Merchant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
