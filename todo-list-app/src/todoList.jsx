import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

import React, { useState, useEffect } from "react";

export default function TodoList() {
  // Déclaration de localStorageTodos avec une valeur par défaut vide
  const localStorageTodos = JSON.parse(localStorage.getItem("todos"));

  const [tasks, setTasks] = useState(localStorageTodos);

  //1. Utiliser le hook useState pour charger la liste depuis le localStorage
  //1. Le tableau de dépendances est vide car nous voulons l'executer qu'une seule fois
  useEffect(() => {
    // 1. Récuperer et mettre à jour la liste depuis le localStorage
    const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTasks(localStorageTodos);
  }, []);

  // 2. Fonction pour mettre à jour le local storage
  function updateLocalStorage(newTasks) {
    localStorage.setItem("todos", JSON.stringify(newTasks));
  }

  // la fct addTask permet d'ajouter une tache
  const addTask = (task) => {
    // on declare une varialbe newTask qui est objet  et qui contient 3 key
    const newTask = { title: task, date: Date.now(), completed: false };
    //  tableau qui contient tout les taches et les nouvelles
    const newTasks = [...tasks, newTask];
    //  on le met à jour
    setTasks(newTasks);

    // 3. Utiliser la fonction pour mettre a jour la liste
    updateLocalStorage(newTasks);
  };

  // supprimer la tache  de la liste
  const removeTask = (position) => {
    const newTasks = [...tasks];
    // LA fct splice va nous permmetre de pourvoir supprimer la nouvelle liste
    newTasks.splice(position, 1);
    setTasks(newTasks);

    // 3. Utiliser la fonction pour mettre a jour la liste
    updateLocalStorage(newTasks);
  };

  function validateTask(position) {
    const newTasks = [...tasks];
    newTasks[position].completed = true;
    setTasks(newTasks);

    // 3. Utiliser la fonction pour mettre a jour la liste
    updateLocalStorage(newTasks);
  }
    return (
      <div>
        <h1> Todo List</h1>
        {/* affiche le composant qui permet d'ajouter la tache */}
        <TodoForm addTask={addTask} />

        <div>
          {/* transformation de la liste de tache en une liste JSX */}
          {/* map() itere sur un tableau retourne une lite pour chaque nom , avec une clé (key{}) */}
          {tasks.map((task) => (
            <TodoItem
              key={task.date}
              task={task}
              onDelete={() => removeTask(position)}
              onValidade={() => {
                validadeTask(position);
              }}
            />
          ))}
        </div>
      </div>
    );
  }

