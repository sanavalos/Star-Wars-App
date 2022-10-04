import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPlanets,
  getAllPeople,
  clearState,
} from "../redux/actions/actions.js";
import Cards from "./Cards";
import Searchbar from "./Searchbar.jsx";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlanets());
    dispatch(getAllPeople());
    dispatch(clearState());
  }, []);

  return (
    <div className="home_container">
      <h1>STAR WARS</h1>
      <Searchbar />
      <Cards />
    </div>
  );
};

export default Home;
