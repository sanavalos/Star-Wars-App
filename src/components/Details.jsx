import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, getAllPeople } from "../redux/actions/actions.js";
import Breadcrumbs from "./Breadcrumbs";

function Details() {
  let { name } = useParams();
  const dispatch = useDispatch();
  let details = useSelector((state) => state.details);
  let people = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(getAllPeople());
    if (people.length > 0) dispatch(getDetails(name));
  }, [dispatch, people]);

  return (
    <div className="home_container">
      <Breadcrumbs />
      <div className="card_cardBorder">
        <h1 className="card_name">{name}</h1>
        {details.name ? (
          <>
            <p>Height: {details.height}</p>
            {details.birth_year !== "unknown" ? (
              <p>Birth year: {details.birth_year}</p>
            ) : (
              <p>We forgot the birth year!</p>
            )}

            <a href={details.url} target="_blank" className="card_name">
              More info
            </a>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Details;
