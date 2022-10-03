import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Card({ name, diameter, climate, terrain, population, url }) {
  const people = useSelector((state) => state.people);

  return (
    <div className="cardBorder">
      <h1>PLANET {name.toUpperCase()}</h1>
      <p className="cardDetail">
        <span className="detailProp">Diameter</span>: {diameter}
      </p>
      <p className="cardDetail">
        <span className="detailProp">Climate</span>: {climate}
      </p>
      <p className="cardDetail">
        <span className="detailProp">Terrain</span>: {terrain}
      </p>
      <p className="cardDetail">
        <span className="detailProp">Population</span>: {population}
      </p>
      {people.length > 0 ? (
        <Link to={`/planet/${name}`}>
          <h3>See Residents</h3>
        </Link>
      ) : null}
    </div>
  );
}

export default Card;
