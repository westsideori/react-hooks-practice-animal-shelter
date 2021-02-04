import React, {useState} from "react";

function Filters({onChangeType, onFindPetsClick}) {

  const [type, setType] = useState("all")

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select value={type} name="type" id="type" onChange={(e) => {
          // setType((type) => type = e.target.value)
          setType(e.target.value)
          onChangeType(e.target.value) 
        } }>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick={onFindPetsClick} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
