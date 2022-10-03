import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions/actions.js";
import Breadcrumbs from "./Breadcrumbs";

function Details() {
  let { name } = useParams();
  const dispatch = useDispatch();
  let details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(name));
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <h1>{name}</h1>
      <p>Height: {details.height}</p>
      {details.birth_year !== "unknown" ? (
        <p>Birth year: {details.birth_year}</p>
      ) : (
        <p>We forgot his birth year!</p>
      )}

      <a href={details.url} target="_blank">
        More info
      </a>
    </div>
  );
}

export default Details;
