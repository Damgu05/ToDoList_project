import React from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={{ color: "#3b82f6" }}>👋 Bienvenue sur ton espace personnel</h1>
      <p style={styles.subtitle}>
        Tu es maintenant connecté. Utilise la barre latérale pour accéder à tes fonctionnalités.
      </p>

      <div style={styles.section}>
        <h3>📋 Gestion des tâches</h3>
        <p>Ajoute, visualise et valide tes tâches du jour.</p>
      </div>

      <div style={styles.section}>
        <h3>⚙️ Paramètres (à venir)</h3>
        <p>Personnalise ton profil et tes préférences.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "60px auto",
    padding: 30,
    backgroundColor: "white",
    borderRadius: 12,
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  subtitle: {
    color: "#4b5563",
    fontSize: "16px",
    marginBottom: "24px",
  },
  section: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    textAlign: "left",
  },
};
