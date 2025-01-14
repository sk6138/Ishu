import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../assets/tile-merchant-ireland-SXAgGV1Rw_E-unsplash.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
  };

  return (
    <div style={styles.heroContainer} data-aos="fade-down">
      {/* Carousel */}
      <Slider {...settings} style={styles.slider}>
        {/* Slide 1 */}
        <div style={styles.slide}>
          <img
            src={hero1}
            alt="Marble Showcase"
            style={styles.image}
          />
          <div style={styles.overlay} data-aos="fade-right">
            <h1 style={styles.heading}>Luxurious Marble</h1>
            <p style={styles.description}>
              Elevate your space with our premium marble collection.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div style={styles.slide}>
          <img
            src={hero1}
            alt="Tiles Showcase"
            style={styles.image}
          />
          <div style={styles.overlay} data-aos="fade-right">
            <h1 style={styles.heading}>Elegant Wall Tiles</h1>
            <p style={styles.description}>
              Add sophistication to your walls with our designer tiles.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div style={styles.slide}>
          <img
            src={hero1}
            alt="Floor Tiles Showcase"
            style={styles.image}
          />
          <div style={styles.overlay} data-aos="fade-right">
            <h1 style={styles.heading}>Durable Floor Tiles</h1>
            <p style={styles.description}>
              Enhance your floors with our stylish and durable tiles.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

const styles = {
  heroContainer: {
    height:'90vh',
    position: "relative",
    
    overflow: "hidden",
    maxWidth:"1240px",
    margin:"auto",
   
  },
  slider: {
    height: "100%",
  },
  slide: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  },
  overlay: {
    
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "20px",
    borderRadius: "8px",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.5rem",
  },
};

export default Hero;
