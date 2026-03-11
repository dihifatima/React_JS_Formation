import { useState } from "react"; // <-- CORRECT

function StateAvecObjet() {
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    age: 0
  });

  function modifierChamp(champ, valeur) {
    setUser({ ...user, [champ]: valeur });
  }

  return (
    <div>
      <input
        type="text"
        value={user.nom}
        onChange={(e) => modifierChamp("nom", e.target.value)}
        placeholder="Nom"
      />
      <input
        type="text"
        value={user.prenom}
        onChange={(e) => modifierChamp("prenom", e.target.value)} // <-- changer onClick en onChange
        placeholder="Prénom"
      />
      <p>Nom complet: {user.nom} {user.prenom}</p>
    </div>
  );
}

export default StateAvecObjet;