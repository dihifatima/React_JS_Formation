import {useState} from "react";
function Compteur2 (){
  const [compteur , setCompteur]= useState(0);
  function incrementer(){
    setCompteur(compteur+1);
  }
  return(
    <div>
      <hr />
      <p>{compteur}</p>
      <button onClick={incrementer}>+1</button>
      <button onClick={()=>setCompteur(0)}>Reset</button>
    </div>
  )

}export default Compteur2;