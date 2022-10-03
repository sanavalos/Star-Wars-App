import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPlanets, getAllPeople } from "../redux/actions/actions.js";
import Pagination from "./Pagination";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlanets());
    dispatch(getAllPeople());
  }, []);

  return (
    <div className="home">
      <h1>STAR WARS</h1>
      <Pagination />
    </div>
  );
};

export default Home;
