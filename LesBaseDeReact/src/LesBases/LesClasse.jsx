class Etudiant {
  constructor (nom, age){
    this.nom= nom;
    this.age= age;
  }
  info(){
    return 'Nom: ${this.nom}, Age: ${this.age}';
  }

}

class Stagiaire extends Etudiant{
  constructor(nom,age,stage){
    super(nom,age);
    this.stage= stage;
  }
}