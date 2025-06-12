import React, { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";

const Welcome = () => {
  const [activeTab, setActiveTab] = useState("signup");

  const tabStyle = (tab) => ({
    padding: "10px 20px",
    margin: "0 5px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: activeTab === tab ? "#dc3545" : "#e0e0e0",
    color: activeTab === tab ? "#fff" : "#333",
    cursor: "pointer",
    fontWeight: "bold",
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ margin: 0, color: "#343a40" }}>Bienvenue sur Ma To-Do List</h1>
        <p style={{ color: "#6c757d" }}>Gérez vos tâches facilement, chaque jour.</p>
      </div>

      <div style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px"
      }}>
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
          <button style={tabStyle("signup")} onClick={() => setActiveTab("signup")}>Inscription</button>
          <button style={tabStyle("login")} onClick={() => setActiveTab("login")}>Connexion</button>
        </div>

        {activeTab === "signup" ? <Signup /> : <Login />}
      </div>

      <footer style={{ marginTop: "30px", color: "#adb5bd", fontSize: "14px" }}>
        © 2025 Ma To-Do List
      </footer>
    </div>
  );
};

export default Welcome;