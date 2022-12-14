import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlanets } from "../redux/actions/actions";
import Card from "./Card";
import PaginationList from "./Pagination";

function Cards() {
  const pageNumbers = [];
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets);
  const allPlanets = useSelector((state) => state.allPlanets);

  useEffect(() => {
    dispatch(getAllPlanets());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [planets]);

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
    <div>
      <PaginationList
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        planets={planets}
      />
      {allPlanets.length > 0 ? (
        <>
          {currentPlanets.length > 0 ? (
            <div className="cards_flex">
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
            <div className="card_cardBorder">
              THE PLANET YOU ARE LOOKING DOESN'T EXIST
            </div>
          )}
        </>
      ) : (
        <div className="cards_loading"></div>
      )}
    </div>
  );
}

export default Cards;
