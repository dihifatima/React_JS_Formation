import React, { useState, useEffect } from "react";

function Exemple3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Exemple3 : useEffect déclenché car count a changé ! Valeur = " + count);
  }, [count]); // se déclenche seulement si count change

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Exemple3;