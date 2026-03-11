import {useState} from "react";
function StateAvecTableau(){
  const [items ,setItems]= useState(["html","css","react js"]);
  function ajouterItem(){
    setItems([...items,"javaScript"]);
  }
  return(
    <div>
      <hr />
      <h3>liste des technologies: </h3>
      <ul>
        {items.map((item,index)=>(
          <li key={index}>
            {item}
          </li>
          
        ))}
      </ul>
      <button onClick={ajouterItem}>ajouter js</button>
    </div>
  );

}
export default StateAvecTableau;