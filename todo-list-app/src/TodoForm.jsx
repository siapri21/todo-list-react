import { useState } from 'react';


export default function TodoForm(props) {
    const [task , setTask] = useState('');

    // fct mettre de permettre à jour la variable contenant les entres de l'utilisateur
    function handTask(event) {
         // event.target.value récupère la valeur saisie dans le champ de saisie qui a déclenché l'événement
        setTask(event.target.value)
        
    }

    function validade() {
        props.addTask(task);
        
    }

    return (
        <div>
            <input type="text" placeholder="Entrez une tache "  onChange={handTask}/>
            {/* lier le clique de la fct  valide */}
            <button onClick={validade}>Ajouter la tache</button>

        </div>
    );
    
}