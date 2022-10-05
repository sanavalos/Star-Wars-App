import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Card({ name, diameter, climate, terrain, population }) {
  const people = useSelector((state) => state.people);

  return (
    <div className="card_cardBorder">
      <h1 className="card_name">PLANET {name}</h1>
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
        <NavLink to={`/planet/${name}`} className="card_link">
          <h3 className="card_residents">See Residents</h3>
        </NavLink>
      ) : null}
    </div>
  );
}

export default Card;
