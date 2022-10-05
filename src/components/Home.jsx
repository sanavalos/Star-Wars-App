import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllPlanets,
  getAllPeople,
  clearState,
} from "../redux/actions/actions.js";
import Cards from "./Cards";
import Navbar from "./Navbar.jsx";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPlanets());
    dispatch(getAllPeople());
    dispatch(clearState());
  }, [dispatch]);

  return (
    <div className="home_container">
      <Navbar />
      <Cards />
    </div>
  );
};

export default Home;
