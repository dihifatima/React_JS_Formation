//map() une fonction des tableaux en js permet de parcourir un tab et faire transformation et returner un nouveau tab  elle ne modifier pas le tab original
//syntaxe 
array.map((element) => {
   return transformation;
});
/// 
const nombres = [1,2,3,4];
const resultat = nombres.map((num)=> num *2);
console.log(resultat);

const noms = [fatima,hanane , khadija];
const message = noms.map((nom) => "Bonjour "+ nom);
console.log(message);
////Exemple en React 
const fruits =["Pomme", "Banane", "Orange"];
const FonctionMap = () =>{
  return(
   <ul>{fruits.map((fruit, index)=>(
      <li key={index}>{fruit}</li>

   ))} </ul>
  );
   
};
export default FonctionMap;


