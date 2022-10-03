import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlanets } from "../redux/actions/actions";
import Breadcrumbs from "./Breadcrumbs";
import Card from "./Card";

function Pagination() {
  const pageNumbers = [];
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets);

  useEffect(() => {
    dispatch(getAllPlanets());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  for (let i = 1; i <= Math.ceil(planets.length / 6); i++) {
    pageNumbers.push(i);
  }

  const indexOfLastPlanet = currentPage * 6;
  const indexOfFirstPlanet = indexOfLastPlanet - 6;
  const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet);

  for (let i = 1; i <= Math.ceil(planets / 6); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <ul className="paginationList">
        {pageNumbers.length > 0 &&
          pageNumbers.map((page) => (
            <li key={page}>
              <button onClick={() => setCurrentPage(page)}>{page}</button>
            </li>
          ))}
      </ul>

      <Breadcrumbs />
      {currentPlanets.length > 0 ? (
        <div className="flexCards">
          {currentPlanets.map((p) => (
            <Card
              name={p.name}
              diameter={p.diameter}
              climate={p.climate}
              terrain={p.terrain}
              population={p.population}
              url={p.url}
            />
          ))}
        </div>
      ) : (
        <p>LOADING...</p>
      )}
    </>
  );
}

export default Pagination;
