import React, { useState } from "react";

export default function Tasks() {
  const [task, setTask] = useState({ title: "", description: "" });
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title) {
      setTaskList([...taskList, task]);
      setTask({ title: "", description: "" });
    }
  };

  return (
    <div>
      <div style={cardStyle}>
        <h2>Ajouter une tâche</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Titre" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
          <textarea placeholder="Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
          <button type="submit">Ajouter</button>
        </form>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Liste des tâches</h3>
        {taskList.map((t, index) => (
          <div key={index} style={cardStyle}>
            <h4>{t.title}</h4>
            <p>{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "12px",
  marginBottom: "1rem",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};
