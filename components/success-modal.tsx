import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.header}>Submission Successful</h2>
        <p style={styles.message}>Thank you! An agent will reach out to you shortly.</p>
        <button style={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

// Internal styles
const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
  },
  header: {
    margin: "0 0 10px 0",
    fontSize: "1.5rem",
    color: "#222",
  },
  message: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#222",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default SuccessModal;
