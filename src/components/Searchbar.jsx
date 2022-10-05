import React, { useState } from "react";
import { filterPlanets, cleanFilter } from "../redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

function Searchbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets);
  const allPlanets = useSelector((state) => state.allPlanets);
  let { name } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterPlanets(search.toLowerCase()));
    setSearch("");
  };

  return (
    <div className="searchbar_container">
      {allPlanets?.length > 0 ? (
        <>
          {!name ? (
            <div className="searchbar_group">
              <input
                name="search"
                value={search}
                placeholder="Search planet..."
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <button
                onClick={(e) => handleSubmit(e)}
                className="searchbar_search"
              >
                SEARCH
              </button>
            </div>
          ) : (
            <div className="searchbar_group">
              <NavLink to={"/"} className="searchbar_home">
                <h3>HOME</h3>
              </NavLink>
            </div>
          )}

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
