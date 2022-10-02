import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPeople } from "../redux/actions/actions.js";

function Card({ name, diameter, climate, terrain, population, url }) {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(getAllPeople());
  }, [dispatch]);

  return (
    <div className="cardBorder">
      <h1>PLANET {name.toUpperCase()}</h1>
      <p>Climate: {climate}</p>
      <p>Terrain: {terrain}</p>
      <p>Population: {population}</p>
      {people.length > 0 ? (
        <Link to={`/planet/${name}`} state={{ planetUrl: url }}>
          <h3>See Residents</h3>
        </Link>
      ) : null}
    </div>
  );
}

export default Card;
