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
    dispatch(filterPlanets(search.toLowerCase()));
    setSearch("");
  };

  return (
    <div className="searchbar_container">
      {allPlanets?.length > 0 ? (
        <>
          <div className="searchbar_group">
            <input
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button
              onClick={(e) => handleSubmit(e)}
              className="searchbar_search"
            >
              SEARCH
            </button>
          </div>

          {allPlanets !== planets ? (
            <div>
              <button
                onClick={() => dispatch(cleanFilter())}
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
