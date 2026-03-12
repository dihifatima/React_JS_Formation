import { useEffect } from "react";

const UseEffectExemple = ()=>{
  useEffect(()=>{
    alert("le composant est affiché");
  }, []); // le tableau vide = une seule fois au montage
  return(
   <h1>Bonjour 👋</h1>
  );
}
export default UseEffectExemple;
