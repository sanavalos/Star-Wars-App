import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetails,
  getAllPeople,
  clearDetails,
  getAllPlanets,
} from "../redux/actions/actions.js";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar.jsx";

function Details() {
  let { name } = useParams();
  const dispatch = useDispatch();
  let details = useSelector((state) => state.details);
  let people = useSelector((state) => state.people);
  let planets = useSelector((state) => state.allPlanets);

  useEffect(() => {
    if (planets.length < 1) dispatch(getAllPlanets());
    dispatch(getAllPeople());
    if (people.length > 0) dispatch(getDetails(name));
    return () => {
      dispatch(clearDetails());
    };
  }, [people]);

  return (
    <>
      <div className="home_container">
        <Navbar />
        <Breadcrumbs />
        <div className="card_cardBorder">
          <h1 className="card_name">{name}</h1>
          {details.name ? (
            <>
              <p>
                <span className="card_detailProp">Height</span>:{" "}
                {details.height}
              </p>
              <p>
                <span className="card_detailProp">Gender</span>:{" "}
                {details.gender}
              </p>
              {details.birth_year !== "unknown" ? (
                <p>
                  <span className="card_detailProp">Birth year</span>:{" "}
                  {details.birth_year}
                </p>
              ) : (
                <p>We forgot the birth year!</p>
              )}

              <a href={details.url} target="_blank" className="card_name">
                <h3>More info</h3>
              </a>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Details;
