import { useState } from "react";
import valentinePhoto from "./assets/pic.png";

export default function Valentine() {
  const [accepted, setAccepted] = useState(false);
  const [sadLevel, setSadLevel] = useState(0);
  const [noMoved, setNoMoved] = useState(false);

  const [noPosition, setNoPosition] = useState({
    top: "60%",
    left: "50%",
  });

  const handleNoTap = () => {
    setSadLevel((prev) => Math.min(prev + 1, 5));
    setNoMoved(true);

    const padding = 15; // safer on mobile
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
            {/* YES */}
            <button
              style={styles.yesButton}
              onClick={() => setAccepted(true)}
            >
              Yes 💕
            </button>

            {/* NO */}
            <button
              style={{
                ...styles.noButton,
                position: noMoved ? "fixed" : "static",
                top: noMoved ? noPosition.top : undefined,
                left: noMoved ? noPosition.left : undefined,
                transform: noMoved ? "translate(-50%, -50%)" : "none",
                opacity: sadLevel === 67 ? 0.4 : 1,
              }}
              onClick={sadLevel < 67 ? handleNoTap : undefined}
              disabled={sadLevel === 67}
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
          <p>I love you so much baby 💖</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    padding: "20px",
  },

  title: {
    marginBottom: "24px",
    color: "#333",
    textAlign: "center",
    fontSize: "clamp(22px, 6vw, 32px)",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "column", // mobile-first
    gap: "16px",
    width: "100%",
    maxWidth: "260px",
  },

  yesButton: {
    padding: "16px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#ff4d6d",
    color: "white",
    cursor: "pointer",
  },

  noButton: {
    padding: "16px",
    fontSize: "18px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#555",
    color: "white",
    cursor: "pointer",
    transition: "top 0.2s ease, left 0.2s ease",
  },

  // 💝 CARD
  card: {
    background: "white",
    borderRadius: "18px",
    padding: "20px",
    width: "100%",
    maxWidth: "340px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },

  image: {
    width: "100%",
    borderRadius: "14px",
    marginBottom: "14px",
    objectFit: "cover",
  },
};
