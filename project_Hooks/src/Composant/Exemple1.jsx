import React, { useState, useEffect } from "react";

function Exemple1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Exemple1 : useEffect déclenché !");
  }); // PAS de tableau []

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Exemple1;