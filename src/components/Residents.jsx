import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getResidents } from "../redux/actions/actions.js";

function Residents() {
  let { name } = useParams();
  let data = useLocation();
  const residents = useSelector((state) => state.residents);
  const dispatch = useDispatch(
    useEffect(() => {
      dispatch(getResidents(data?.state.planetUrl));
    }, [])
  );
  return (
    <div>
      <h1>PLANET {name.toUpperCase()}</h1>
      <h2>RESIDENTS</h2>
      {residents.length > 0 ? (
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
