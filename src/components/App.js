import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType = (type) => {
    setFilters((filters) => filters = { type: type })
  }

  const onFindPetsClick = (e) => {
    e.preventDefault()
    if (filters.type === "all") {
      console.log(filters.type)
      return fetch(`http://localhost:3001/pets`)
        .then(resp => resp.json())
          .then(petsArray => {
            setPets(petsArray)
          })
    } else {
      console.log(filters.type)
      return fetch(`http://localhost:3001/pets?type=${filters.type}`)
        .then(resp => resp.json())
          .then(filteredPetsArray => {
            setPets(filteredPetsArray)
          })
    }
  }

  const onAdoptPet = (id) => {
    const updatedPets = pets.map((pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    }))
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
