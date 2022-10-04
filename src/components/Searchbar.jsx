import React, { useState } from "react";
import { filterPlanets, cleanFilter } from "../redux/actions/actions.js";
import { useDispatch } from "react-redux";

function Searchbar() {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterPlanets(search));
  };

  return (
    <div>
      <input
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button onClick={(e) => handleSubmit(e)}>SEARCH</button>
      <div>
        <button onClick={(e) => dispatch(cleanFilter())}>CLEAN FILTER</button>
      </div>
    </div>
  );
}

export default Searchbar;
