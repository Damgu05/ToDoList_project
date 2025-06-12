import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Welcome = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <div style={{ display: "inline-block", padding: 20, border: "1px solid #ccc", borderRadius: 10 }}>
        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setActiveTab("signup")} style={{ backgroundColor: activeTab === "signup" ? "#dc3545" : "#f0f0f0" }}>Inscription</button>
          <button onClick={() => setActiveTab("login")} style={{ backgroundColor: activeTab === "login" ? "#dc3545" : "#f0f0f0" }}>Connexion</button>
        </div>
        {activeTab === "signup" ? <Signup /> : <Login />}
      </div>
    </div>
  );
};

export default Welcome;
