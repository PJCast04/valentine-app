import { useState } from "react";
import valentinePhoto from "./assets/pic.png";

export default function Valentine() {
  const [accepted, setAccepted] = useState(false);
  const [sadLevel, setSadLevel] = useState(0);
  const [noMoved, setNoMoved] = useState(false);

  const [noPosition, setNoPosition] = useState({
    top: "50%",
    left: "50%",
  });


  const handleNoHover = () => {
    setSadLevel((prev) => Math.min(prev + 1, 5));
    setNoMoved(true);

    const padding = 5;
    const max = 100 - padding;

    setNoPosition({
      top: `${Math.random() * max + padding}%`,
      left: `${Math.random() * max + padding}%`,
    });
  };

  return (
    <div
      style={{
        ...styles.container,
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      }}
    >
      {!accepted ? (
        <>
          <h1 style={styles.title}>Will you be my Valentine? 💔</h1>

          <div style={styles.buttonContainer}>
            <button
              style={styles.yesButton}
              onClick={() => setAccepted(true)}
            >
              Yes 💕
            </button>

            <button
              style={{
                ...styles.noButton,
                position: noMoved ? "fixed" : "static",
                top: noMoved ? noPosition.top : undefined,
                left: noMoved ? noPosition.left : undefined,
                transform: noMoved ? "translate(-50%, -50%)" : "none",
                opacity: sadLevel === 6? 0.4 : 1,
              }}
              onMouseEnter={sadLevel < 6 ? handleNoHover : undefined}
              disabled={sadLevel === 6}
            >
              No {["💔", "😟", "😞", "😢", "😭", "😛"][sadLevel]}
            </button>
          </div>
        </>
      ) : (
        // 💖 VALENTINE REVEAL
        <div style={styles.card}>
          <img
            src={valentinePhoto}
            alt="Valentine moment"
            style={styles.image}
          />
          <h2>You said YES 💘</h2>
          <p>I love you so much baby</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    transition: "background 0.6s ease",
  },

  title: {
    marginBottom: "20px",
    color: "#333",
  },

  buttonContainer: {
    display: "flex",
    gap: "14px",
  },

  yesButton: {
    
    //position: "fixed",
    padding: "12px 26px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#ff4d6d",
    color: "white",
    cursor: "pointer",
  },

  noButton: {
    padding: "12px 26px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#555",
    color: "white",
    cursor: "pointer",
    transition: "top 0.15s ease, left 0.15s ease",
  },

  // 💝 CARD STYLES
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.6s ease",
  },

  image: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "12px",
    objectFit: "cover",
  },
};
