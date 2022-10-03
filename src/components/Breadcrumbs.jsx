import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Breadcrumbs() {
  const planet = useSelector((state) => state.planet);
  const details = useSelector((state) => state.details);
  return (
    <div className="paginationList">
      <Link to="/">
        <p>Home</p>
      </Link>
      {planet?.name ? (
        <>
          <Link to={`/planet/${planet.name}`}>
            <p>/ {planet.name} / </p>
          </Link>

          <Link to={`/resident/${details.name}`}>
            <p>{details.name}</p>
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default Breadcrumbs;
