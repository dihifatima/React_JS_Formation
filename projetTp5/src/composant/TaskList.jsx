
const TaskList = ({ tasks, onDelete, onToggle }) => {


  return (
    <>
      <div>
        {
          tasks.map((task) => (
            <li key={task.id}>
              <label htmlFor={task.id}>
                <input type="checkbox" name={task.nom} id={task.id} value={task.nom} />
                {task.nom}
              </label>
              <button type="button" onClick={() => onToggle(task.id)}>Terminer</button>
              <button type="button" onClick={() => onDelete(task.id)}>Supprimer</button>

            </li>
          ))
        }
      </div>

    </>
  );
}
export default TaskList;