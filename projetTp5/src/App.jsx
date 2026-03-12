import { useState } from 'react'
import './App.css'
import TaskList from './composant/TaskList'
import TaskForm from './composant/TaskForm';
function App() {
const [tasks,setTasks]= useState([
  {id:1 , nom:"Apprendre React" , completed:false}
]);
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


/*
setTasks(function(prevTasks){
  return [...prevTasks, newTask];
}); prevTasks c est le parametre */
function addTask(nom){
  const newTask ={id:Date.now(),nom,completed:false};
  setTasks(prevTasks => [...prevTasks, newTask]);
}
  return (
    <>
    <h2>Gestionnaire de Taches</h2>
    <TaskForm addTask= {addTask} />
    <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} onDeleteCompleted={deleteCompletedTasks}/>
    </>
  );
}
export default App
