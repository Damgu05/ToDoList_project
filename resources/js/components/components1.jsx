import React, { useState } from 'react';

const Formulaire = () => {
  const [register, setRegister] = useState({ name: '', email: '', password: '' });
  const [login, setLogin] = useState({ email: '', password: '' });
  const [task, setTask] = useState({ title: '', description: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Inscription :', register);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Connexion :', login);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log('Nouvelle tâche :', task);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Inscription</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nom" value={register.name} onChange={(e) => setRegister({ ...register, name: e.target.value })} />
        <input type="email" placeholder="Email" value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} />
        <input type="password" placeholder="Mot de passe" value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })} />
        <button type="submit">S'inscrire</button>
      </form>

      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
        <input type="password" placeholder="Mot de passe" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
        <button type="submit">Se connecter</button>
      </form>

      <h2>Ajouter une tâche</h2>
      <form onSubmit={handleAddTask}>
        <input type="text" placeholder="Titre" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
        <textarea placeholder="Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default Formulaire;