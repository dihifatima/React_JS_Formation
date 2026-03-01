import {useState} from "react";
const Compteur = () =>{
  const [valeur ,setValeur]= useState(0);
  const incrementer = () =>{ 
    setValeur(valeur + 1);
  }
  return(
    <div>
      <p>Valeur: {valeur}</p>
      <button onClick={incrementer}>+</button>
    </div>
  )
};
export default Compteur;