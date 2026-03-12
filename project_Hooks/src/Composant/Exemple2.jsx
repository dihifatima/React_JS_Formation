import React, { useState, useEffect } from "react";

function Exemple2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Exemple2 : useEffect déclenché UNE seule fois !");
  }, []); // tableau vide = une seule fois

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Exemple2;