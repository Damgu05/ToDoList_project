import React, { useState } from "react";
import { useAuth } from "../api/AuthContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/utilisateur", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });
    const data = await response.json();
    if (response.ok && data.token) {
      login(data.token);
    } else {
      alert("Échec lors de l'inscription");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Signup;
