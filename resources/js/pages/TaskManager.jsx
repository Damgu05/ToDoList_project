import React, { useState, useEffect } from "react";

export default function TaskManager() {
  const [task, setTask] = useState({ title: "", description: "" });
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:8000/api/task";
  const token = localStorage.getItem("token");

  // Récupérer les tâches de l'utilisateur connecté
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Erreur de chargement des tâches");
        const data = await response.json();
        setTaskList(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Ajouter une tâche
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.title || task.description.length < 8) {
      alert("Le titre est requis et la description doit faire au moins 8 caractères.");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert("Erreur lors de l'ajout : " + JSON.stringify(errorData.errors));
        return;
      }

      const newTask = await response.json();
      setTaskList((prevList) => [...prevList, newTask]);
      setTask({ title: "", description: "" });
    } catch (error) {
      console.error("Erreur réseau:", error);
      alert("Impossible de communiquer avec le serveur.");
    }
  };

  // Valider une tâche
  const validerTache = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}/valider`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        alert("Erreur : " + error.message);
        return;
      }

      const updatedTask = await response.json();
      setTaskList((prevList) =>
        prevList.map((t) => (t.id === id ? updatedTask : t))
      );
    } catch (err) {
      console.error("Erreur de validation :", err);
      alert("Impossible de valider la tâche.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <div style={cardStyle}>
        <h2>Ajouter une tâche</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titre"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            style={inputStyle}
            required
          />
          <textarea
            placeholder="Description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            style={textareaStyle}
            required
          ></textarea>
          <button type="submit" style={buttonStyle}>Ajouter</button>
        </form>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Liste des tâches</h3>
        {loading ? (
          <p>Chargement...</p>
        ) : taskList.length === 0 ? (
          <p>Aucune tâche disponible.</p>
        ) : (
          taskList.map((t, index) => (
            <div key={index} style={cardStyle}>
              <h4>{t.title}</h4>
              <p>{t.description}</p>
              <p style={{ fontSize: "0.85rem", color: "#888" }}>
                Statut :{" "}
                <strong style={{ color: t.status === "valide" ? "green" : "orange" }}>
                  {t.status}
                </strong>
              </p>
              {t.status === "en_attente" && (
                <button
                  onClick={() => validerTache(t.id)}
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.4rem 1rem",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Valider
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Styles
const cardStyle = {
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "12px",
  marginBottom: "1rem",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "0.5rem",
  marginBottom: "0.5rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  ...inputStyle,
  height: "100px",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
