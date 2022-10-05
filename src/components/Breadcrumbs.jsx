import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Breadcrumbs() {
  const planet = useSelector((state) => state.planet);
  const details = useSelector((state) => state.details);
  return (
    <div className="breadcrumbs_list">
      <Link to="/">
        <h4>Home </h4>
      </Link>
      <p> &gt; </p>
      {planet?.name ? (
        <>
          <Link to={`/planet/${planet.name}`}>
            <h4>{planet.name} </h4>
          </Link>
          <p> &gt; </p>
          <Link to={`/resident/${details.name}`}>
            <h4>{details.name}</h4>
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default Breadcrumbs;
