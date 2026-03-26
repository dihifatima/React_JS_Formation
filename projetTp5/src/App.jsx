import { useState, useEffect } from 'react'
import './App.css'
import TaskList from './composant/TaskList'
import TaskForm from './composant/TaskForm'
import { TaskContext } from './Hooks/TaskContext'

function App() {

const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
});
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

useEffect(() => {
  const fetchTasks = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      const data = await response.json();

      const tasksFromApi = data.map(task => ({
        id: task.id,
        nom: task.title,
        completed: task.completed
      }));

      setTasks(tasksFromApi);

    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  fetchTasks();
}, []);

function deleteTask(id){
  const newTasks = tasks.filter(task => task.id !== id);
  setTasks(newTasks);
}

function deleteCompletedTasks() {
  const newTasks = tasks.filter(task => !task.completed);
  setTasks(newTasks);
}

function toggleTask(id){
  const newTasks = tasks.map(task => {
    if(task.id === id){
      return {
        ...task,
        completed: !task.completed
      };
    }
    return task;
  });

  setTasks(newTasks);
}

function addTask(nom){
  const newTask ={id:Date.now(),nom,completed:false};
  setTasks(prevTasks => [...prevTasks, newTask]);
}

return (
  <TaskContext.Provider value={{
    tasks,
    deleteTask,
    toggleTask,
    deleteCompletedTasks,
    addTask
  }}>

    <h2>Gestionnaire de Taches</h2>
    <TaskForm />
    <TaskList />

  </TaskContext.Provider>
);
}

export default App;