import { useContext } from "react";
import { TaskContext } from "../Hooks/TaskContext";

const TaskList = () => {

  const { tasks, deleteTask, toggleTask, deleteCompletedTasks } = useContext(TaskContext);

  const remainingTasks = tasks.filter(task => !task.completed).length;
  const totalTasks = tasks.length;

  return (
    <>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label htmlFor={task.id}>
                <input
                  type="checkbox"
                  id={task.id}
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />

                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none"
                  }}
                >
                  {task.nom}
                </span>

              </label>

              <button onClick={() => deleteTask(task.id)}>
                Supprimer
              </button>

            </li>
          ))}
        </ul>

        <div style={{ marginTop: "10px" }}>
          <span>{remainingTasks} tâches restantes</span> |
          <span> {totalTasks} tâches au total</span>

          <button
            style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}
            onClick={deleteCompletedTasks}
          >
            Supprimer toutes les terminées
          </button>

        </div>
      </div>
    </>
  );
}

export default TaskList;