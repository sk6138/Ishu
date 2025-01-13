import React, { useRef, useState } from "react";

const OtpVerification = () => {
  const recapcharef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSendOtp = () => {
    console.log("Sending OTP to:", phoneNumber);
  };

  const verifyOtp = () => {
    console.log("Verifying OTP:", otp);
  };

  // CSS styles as JavaScript objects
  const styles = {
    container: {
      maxWidth: "400px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "1.8rem",
      color: "#333",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: "0.9rem",
      color: "#777",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "1rem",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "12px",
      margin:"auto",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    recapcha: {
      margin: "15px 0",
    },
    footer: {
      marginTop: "15px",
      fontSize: "0.85rem",
      color: "#aaa",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>OTP Verification</h2>
      <p style={styles.subtitle}>Securely login with your phone number</p>

      {/* ReCaptcha */}
      <div ref={recapcharef} style={styles.recapcha}></div>

      {/* Phone Number Input */}
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
        style={styles.input}
      />

      {/* Send OTP Button */}
      <button
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleSendOtp}
      >
        Send OTP
      </button>

      {/* OTP Input */}
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        style={styles.input}
      />

      {/* Verify OTP Button */}
      <button
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={verifyOtp}
      >
        Verify OTP
      </button>

      <p style={styles.footer}>Your phone number is safe with us. 😊</p>
    </div>
  );
};

export default OtpVerification;
