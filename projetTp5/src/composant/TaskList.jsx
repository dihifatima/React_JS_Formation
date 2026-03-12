const TaskList = ({ tasks, onDelete, onToggle, onDeleteCompleted }) => {

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
                  name={task.nom}
                  id={task.id}
                  checked={task.completed}
                  onChange={() => onToggle(task.id)}
                />
                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.nom}
                </span>
              </label>

              <button type="button" onClick={() => onDelete(task.id)}>
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
            onClick={onDeleteCompleted}
          >
            Supprimer toutes les terminées
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskList;