import { useState } from 'react'
import './App.css'
import TaskList from './composant/TaskList'
import TaskForm from './composant/TaskForm';
function App() {
const [tasks,setTasks]= useState([
  {id:1 , nom:"Apprendre React" , completed:false}
]);
  function deleteTask(id){
 console.log(id)
}

function toggleTask(id){
 console.log(id)
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
    <TaskForm addTask= {addTask} />
    <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/>
    </>
  );
}
export default App
