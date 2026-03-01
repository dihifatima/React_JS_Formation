import React from "react";

/*
React.Children.toArray() sert à transformer children en tableau
pour pouvoir le manipuler en toute sécurité.
*/
const Wrapper = ({ children }) => {
  const premier = React.Children.toArray(children)[1];

  return (
    <div>
      <h3>Premier enfant</h3>
      {premier}
    </div>
  );
};

export default Wrapper;