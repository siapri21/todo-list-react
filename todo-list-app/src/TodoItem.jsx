 import React from 'react';
  // cette composant va permet d'affiche la date de la tache 

export default function TodoItem({task, onDelete, onValidade}) {
    // formater la date en HH:MM JJ/MM/AA
    // Crée un nouvel objet Date en utilisant la valeur de la propriété `date` de l'objet `task`.
        const dateObj = new Date(task.date);

// Extrait l'heure de l'objet Date.
        const heure = dateObj.getHours();

// Extrait les minutes de l'objet Date.
       const minutes = dateObj.getMinutes();

// Formate la date en utilisant la méthode toLocaleDateString avec l'option "fr-FR",
// qui spécifie la localisation à utiliser pour le formatage de la date.
       const dateFormatted = dateObj.toLocaleDateString("fr-FR");

// Crée une chaîne de caractères formattée qui combine l'heure et les minutes sous la forme "hh : mm".
// Les appels à `toString()` sont utilisés pour convertir les nombres en chaînes de caractères, si nécessaire.
       const heureFormatted = `${heure.toString()} : ${minutes.toString()}`;


return (
<div  style={{
        backgroundColor: task.completed
          ? "hsla(150, 90%, 70%, 0.4)"
          : "hsla(37, 100%, 80%, 0.6)",
        }}>
    <h3>{task.title}</h3>
    <p>Created on : {task.date}</p>
    {/* <p>{`${heureFormatted} - ${dateFormatted}`}</p> */}
    <button>Complete</button>
    <button onClick={onDelete}>Supprimer</button>

</div>

)


}