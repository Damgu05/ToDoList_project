import React, { useState } from "react";
import { useAuth } from "../api/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        login(data.token);
      } else {
        setError(data.message || "Identifiants invalides");
      }
    } catch (err) {
      setError("Une erreur est survenue. Vérifie ta connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} style={formStyle}>
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
        {loading ? "Connexion..." : "Se connecter"}
      </button>
    </form>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "100%",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
  width: "100%",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#dc3545",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "-5px",
  marginBottom: "10px",
};

export default Login;
