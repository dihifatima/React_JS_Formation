import './App.css'
import ProductList from './LesBases/LesProps/ProductList'
import Card from './LesBases/Children/Card'
import Wrapper from './LesBases/Children/Wrapper'
import Compteur from './LesBases/State/Compteur'
import Compteur2 from './LesBases/State/MisAjourDeState'
import StateAvecTableau from './LesBases/State/StateAvecTableau'
import StateAvecObjet from './LesBases/State/StateAvecObjet'
function App() {
  const produits= [
    {id:1, name: "clavier", price: 100},
    {id:2, name: "clavier1", price: 10},
    {id:3 , name : "pc", price: 4000},
    {id:4 , name : "mac", price: 12000},

  ]

  return (
    <div> 
      <h1>les filter et map </h1>
     <ProductList  products={produits} maxPrice={400} />
     <h1>Les props</h1>
     <Card>
      <h2>Titre1</h2>
      <p>Ceci est le premier contenu</p>
     </Card>
     <Card>
       <h2>Titre 2</h2>
        <button>Clique ici</button>
     </Card>

     <h1>React.Children.toArray()</h1>
     <p>sert à transformer children en tableau pour pouvoir le manipuler en toute sécurité.</p>
      <Wrapper>
        <h2>le titre sera afficher React.Children.toArray(children)[0] </h2>
        <h2>hhh ne sera afficher</h2>
      </Wrapper>

      <Compteur/>
     <Compteur2/>
     <StateAvecTableau/>
     <StateAvecObjet/>
    </div>
    
  );
}

export default App
