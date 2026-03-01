/*
children est une prop

Elle est injectée automatiquement

Elle peut contenir :

un élément JSX

plusieurs éléments

du texte

un tableau d’éléments

null */
export default function Card({ children }) {
  return (
    <div style={{ border: "2px solid blue", padding: 15, margin: 10, borderRadius: 8, background: "white", color: "black" }}>
      {children}
    </div>
  );
}