import React, { useState } from "react";
import { filterPlanets, cleanFilter } from "../redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";

function Searchbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets);
  const allPlanets = useSelector((state) => state.allPlanets);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterPlanets(search));
    setSearch("");
  };

  return (
    <div>
      {allPlanets?.length > 0 ? (
        <>
          <input
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button onClick={(e) => handleSubmit(e)}>SEARCH</button>

          {allPlanets !== planets ? (
            <div>
              <button
                onClick={(e) => dispatch(cleanFilter())}
                className="searchbar_clean"
              >
                CLEAN FILTER
              </button>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default Searchbar;
