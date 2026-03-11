import { useState } from "react";
function ExemplesState(){
  const [age,setAge]= useState(25);
  const [nom,setNom]= useState("Amine");
  const [estConnecte,setConnecte]= useState(false);
  const [fruits, setFruits]= useState(["pomme","banane"]);
  const [utilisateur, setutilisateur]= useState({
    nom:"ben",
    prenom:"Nasser",
    age:23
  });
}