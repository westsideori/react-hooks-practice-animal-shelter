import React from "react";

function Pet({name, type, age, weight, gender, isAdopted, onAdoptPet, id}) {

  const handleAdopt = () => onAdoptPet(id)


  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {gender}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={handleAdopt} className="ui primary button">Adopt pet</button> }
        {/* <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button">Adopt pet</button> */}
      </div>
    </div>
  );
}

export default Pet;
