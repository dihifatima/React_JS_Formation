const Avatar = ({ url, alt, taille = 100 }) => {
  return (
    <img
      src={url}
      alt={alt}
      width={taille}
      height={taille}
    />
  );
};

const NomComplet = ({ prenom, nom }) => {
  return (
    <div>
      <p>{prenom} {nom.toUpperCase()}</p>
    </div>
  );
};

const BadgeNiveau = ({niveau }) =>{
  const couleurs = {
    "Débutant": "blue",
    "Intermédiaire": "orange",
    "Avancé": "green"
  }
  return(
    <>
    <h4 style={{
      backgroundColor: couleurs[niveau] || "gray",
      color: "white",
      padding: "5px 10px",
      borderRadius: "8px",
      display: "inline-block"

    }}
    >{niveau}</h4>
    </>
  );
};

const ListeCompetences = ({competences}) => {
  return (
    <div>
      <ul>
        {competences.map((competences, index) =>(
          <li key={index}>{competences}</li>
        ))}
      </ul>
    </div>
  );
};
 

const 