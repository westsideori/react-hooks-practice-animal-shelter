import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  const petsList = pets.map((pet) => {
    return <Pet onAdoptPet={onAdoptPet} id={pet.id} key={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} gender={pet.gender === "male" ? "♂" : "♀"} isAdopted={pet.isAdopted} />
  })
  return <div className="ui cards">{petsList}</div>;
}

export default PetBrowser;
