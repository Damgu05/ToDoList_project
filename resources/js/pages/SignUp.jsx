import React, { useState } from "react";
import { useAuth } from "../api/AuthContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/utilisateur", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        login(data.token); 
      } else {
        setError(data.message || "Échec de l'inscription");
      }
    } catch (err) {
      setError("Une erreur réseau est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} style={formStyle}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom complet"
        required
        style={inputStyle}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Adresse e-mail"
        required
        style={inputStyle}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
        required
        style={inputStyle}
      />

      {error && <p style={errorStyle}>{error}</p>}

      <button type="submit" disabled={loading} style={buttonStyle}>
        {loading ? "Inscription..." : "S'inscrire"}
      </button>
    </form>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#dc3545",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "-5px",
  marginBottom: "10px",
};

export default Signup;