import React from "react";

export default function Home({ onSignup, onLogin }) {
  return (
    <div style={styles.container}>
      <h1 style={{ color: "#ad5389" }}>Bienvenue</h1>
      <button style={styles.button} onClick={onSignup}>S'inscrire</button>
      <button style={styles.button} onClick={onLogin}>Se connecter</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 320,
    margin: "100px auto",
    padding: 30,
    backgroundColor: "white",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(173,83,137,0.3)",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#e9c2db",
    border: "none",
    padding: "12px 20px",
    margin: "10px 0",
    borderRadius: 6,
    width: "100%",
    fontWeight: "600",
    fontSize: 16,
    cursor: "pointer",
    color: "#5d2a4b",
  },
};
