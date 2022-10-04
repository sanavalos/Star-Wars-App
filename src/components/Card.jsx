import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Card({ name, diameter, climate, terrain, population, url }) {
  const people = useSelector((state) => state.people);

  return (
    <div className="card_cardBorder">
      <h1 className="card_name">PLANET {name.toUpperCase()}</h1>
      <p className="card_cardDetail">
        <span className="card_detailProp">Diameter</span>: {diameter}
      </p>
      <p className="card_cardDetail">
        <span className="card_detailProp">Climate</span>: {climate}
      </p>
      <p className="card_cardDetail">
        <span className="card_detailProp">Terrain</span>: {terrain}
      </p>
      <p className="card_cardDetail">
        <span className="card_detailProp">Population</span>: {population}
      </p>
      {people.length > 0 ? (
        <Link to={`/planet/${name}`}>
          <h3 className="card_residents">See Residents</h3>
        </Link>
      ) : null}
    </div>
  );
}

export default Card;
