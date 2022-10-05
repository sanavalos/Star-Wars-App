import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getResidents,
  getPlanet,
  getAllPlanets,
  getAllPeople,
} from "../redux/actions/actions.js";
import Breadcrumbs from "./Breadcrumbs.jsx";
import Navbar from "./Navbar.jsx";

function Residents() {
  let { name } = useParams();
  const planets = useSelector((state) => state.allPlanets);
  const people = useSelector((state) => state.people);

  const planet = useSelector((state) => state.planet);
  const residents = useSelector((state) => state.residents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlanets());
    dispatch(getAllPeople());
    if (planets.length > 0) dispatch(getPlanet(name));
  }, [dispatch, people, planets]);

  useEffect(() => {
    if (people.length > 0) dispatch(getResidents(planet?.url));
  }, [planet]);

  return (
    <div className="home_container">
      <Navbar />
      <Breadcrumbs />
      <div className="card_cardBorder">
        <h1 className="card_name">PLANET {name.toUpperCase()}</h1>
        <h2 className="card_name">RESIDENTS</h2>
        {residents.length > 0 && planet.name ? (
          residents.map((r) => (
            <>
              <NavLink to={`/resident/${r.name}`}>
                <h3 className="card_name">{r.name}</h3>
              </NavLink>
            </>
          ))
        ) : (
          <p>No residents in this planet yet</p>
        )}
      </div>
    </div>
  );
}

export default Residents;
