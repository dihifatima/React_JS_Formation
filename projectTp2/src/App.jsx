import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0);
function incrementer() {
  setCount(count+1);
}
  return (
    <>
     <Affichage valeur ={count}></Affichage> 
      <Bouton onClick={incrementer}></Bouton>
    </>
  )
}

export default App
