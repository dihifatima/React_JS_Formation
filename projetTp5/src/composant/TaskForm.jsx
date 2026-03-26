import { useState, useContext } from "react";
import { TaskContext } from "../Hooks/TaskContext";

export default function TaskForm() {

  const [task, setTask] = useState("");

  const { addTask } = useContext(TaskContext);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Veuillez saisir une tâche");
      return;
    }

    addTask(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
      />

      <button type="submit">
        Ajouter
      </button>
    </form>
  );
}