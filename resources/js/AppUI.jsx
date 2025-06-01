import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Inscription from "./pages/Register.jsx";
import Connexion from "./pages/Login.jsx";
import Taches from "./pages/Tasks.jsx"; // Assure-toi que le fichier s'appelle bien Taches.jsx

export default function AppUI() {
  return (
    <div className="min-h-screen bg-pink-100 text-gray-800">
      <nav className="flex justify-center gap-6 p-6 bg-white shadow">
        <Link to="/inscription" className="text-pink-600 hover:underline">
          Inscription
        </Link>
        <Link to="/connexion" className="text-pink-600 hover:underline">
          Connexion
        </Link>
        <Link to="/taches" className="text-pink-600 hover:underline">
          Tâches
        </Link>
      </nav>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/connexion" replace />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/taches" element={<Taches />} />
        </Routes>
      </main>
    </div>
  );
}


