import React, { useState } from "react";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import TaskManager from "./TaskManager";

export default function App() {
  const [page, setPage] = useState("home"); // home | signup | login | tasks
  const [user, setUser] = useState(null);

  // Après inscription ou connexion réussie
  const onAuthSuccess = (username) => {
    setUser(username);
    setPage("tasks");
  };

  return (
    <div style={{ fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", backgroundColor: "#fff5f8", padding: 20 }}>
      {page === "home" && (
        <Home
          onSignup={() => setPage("signup")}
          onLogin={() => setPage("login")}
        />
      )}
      {page === "signup" && (
        <Signup
          onBack={() => setPage("home")}
          onAuthSuccess={onAuthSuccess}
        />
      )}
      {page === "login" && (
        <Login
          onBack={() => setPage("home")}
          onAuthSuccess={onAuthSuccess}
        />
      )}
      {page === "tasks" && user && (
        <TaskManager
          user={user}
          onLogout={() => {
            setUser(null);
            setPage("home");
          }}
        />
      )}
    </div>
  );
}
