📝 ToDoList Project
 Description
ToDoList_project est une application web de gestion de tâches (ToDo List) développée dans le cadre d’un projet académique. Elle permet aux utilisateurs de créer, consulter, modifier et supprimer des tâches de manière intuitive via une interface simple et réactive.
Architecture du project
L’application suit une architecture full-stack répartie comme suit:
- Frontend : React.js
- Backend API : Laravel (PHP)
- Base de données : MySQL
- Proxy inverse : Nginx (via Docker)
- Conteneurisation : Docker & Docker Compose
Le système utilise un reverse proxy Nginx dans un conteneur Docker, servant à rediriger les requêtes vers les services frontend et backend de manière fluide et sécurisée.
 Fonctionnalités principales
- Création de tâches avec titre et description
- Visualisation de toutes les tâches
- Mise à jour et suppression de tâches
- Statut des tâches (en attente / validée)
- Interface utilisateur réactive avec React
- API REST sécurisée avec Laravel Sanctum
- Reverse proxy avec Nginx pour la gestion centralisée du trafic
Technologies utilisées
Frontend: React.js, Vite, CSS
Backend: Laravel 11
Base de données: MySQL 
Proxy: Nginx
Environnement : Docker, Docker Compose
 Installation & Lancement
Pré-requis: Docker & Docker Compose installés sur votre machine.
1. Cloner le dépôt :
   git clone https://github.com/Damgu05/ToDoList_project.git
   cd ToDoList_project
2. Lancer les conteneurs :
   docker-compose up --build
3. Accéder à l’application :
- Frontend (React/Vite) : http://localhost:5173
- Backend API (Laravel): http://localhost:8080
Arborescence 
ToDoList_project/
├── app/                 # Frontend React
├── backend/             # Backend Laravel
├── docker/              # Fichiers Dockerfile
├── docker/nginx/        # Configuration du proxy Nginx
├── docker-compose.yml   # Configuration Docker multi-service
