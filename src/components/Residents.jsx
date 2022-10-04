import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getResidents,
  getPlanet,
  getAllPlanets,
  getAllPeople,
} from "../redux/actions/actions.js";
import Breadcrumbs from "./Breadcrumbs.jsx";

function Residents() {
  let { name } = useParams();
  const planets = useSelector((state) => state.planets);
  const people = useSelector((state) => state.people);

  const planet = useSelector((state) => state.planet);
  const residents = useSelector((state) => state.residents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlanets());
    dispatch(getAllPeople());
    if (planets.length > 0) dispatch(getPlanet(name));
  }, [dispatch, people]);

  useEffect(() => {
    if (people.length > 0) dispatch(getResidents(planet?.url));
  }, [planet]);

  return (
    <div>
      <Breadcrumbs />
      <h1>PLANET {name.toUpperCase()}</h1>
      <h2>RESIDENTS</h2>
      {residents.length > 0 && planet.name ? (
        residents.map((r) => (
          <>
            <Link to={`/resident/${r.name}`}>
              <p>{r.name}</p>
            </Link>
          </>
        ))
      ) : (
        <p>No residents in this planet yet</p>
      )}
    </div>
  );
}

export default Residents;
