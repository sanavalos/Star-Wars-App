import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { getAllPlanets } from "../redux/actions/actions.js";

function Cards() {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets);
  const people = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(getAllPlanets());
  }, [dispatch]);

  return (
    <div>
      {planets.length > 0 && people?.length < 1 ? (
        <p className="alert">
          If you want to see planets' residents, wait a little bit more
        </p>
      ) : null}

      {planets.length > 0 ? (
        <div className="flexCards">
          {planets.map((p) => (
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
    </div>
  );
}

export default Cards;
