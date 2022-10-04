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
  }, [people]);

  return (
    <div>
      <Breadcrumbs />
      <h1>{name}</h1>
      {details.name ? (
        <>
          <p>Height: {details.height}</p>
          {details.birth_year !== "unknown" ? (
            <p>Birth year: {details.birth_year}</p>
          ) : (
            <p>We forgot his birth year!</p>
          )}

          <a href={details.url} target="_blank">
            More info
          </a>
        </>
      ) : null}
    </div>
  );
}

export default Details;
