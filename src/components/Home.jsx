import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPlanets,
  getAllPeople,
  clearState,
} from "../redux/actions/actions.js";
import Pagination from "./Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets);

  useEffect(() => {
    dispatch(getAllPlanets());
    dispatch(getAllPeople());
    dispatch(clearState());
    // if (planets.length > 0)
    //   localStorage.setItem("planets", JSON.stringify(planets));
  }, []);

  return (
    <div className="home">
      <h1>STAR WARS</h1>
      <Pagination />
    </div>
  );
};

export default Home;
