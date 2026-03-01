// Chaque fichier = un module
// export default: l’élément principal de ce fichier
//export: J’exporte aussi cette variable, mais ce n’est pas l’élément principal
export  class Etudiant {
 
} 
export const Etablissement = "Emsi";
//Il existe 2 façons valides
const FonctionMap = () => (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);


// on ne peut faire qu un seul export 
export default function FonctionMap() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}