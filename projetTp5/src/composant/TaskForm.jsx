import { useState } from "react"

export default function TaskForm({addTask}) {
  const [task, setTask] = useState("");
  function handleChange(event) {
    
    setTask(event.target.value);
  }
  function handleSubmit(e){
     e.preventDefault();

    if(task.trim() === ""){
     alert("Veuillez saisir une tâche");

    return;
  }
     addTask(task);
    setTask("");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit" >Ajouter</button>
    </form>
  )
}