import axios from "axios";

export const GET_PLANETS = "GET_PLANETS";
export const GET_PEOPLE = "GET_PEOPLE";
export const GET_RESIDENTS = "GET_RESIDENTS";
export const GET_DETAILS = "GET_DETAILS";

async function apiPlanets() {
  try {
    let planets = [];
    let url = `https://swapi.dev/api/planets/?page=1`;
    while (url) {
      const { data } = await axios.get(url);
      data.results.forEach((planet) => planets.push(planet));
      url = data.next;
    }
    return planets;
  } catch (error) {
    console.log(error);
  }
}

export function getAllPlanets() {
  return async function (dispatch) {
    apiPlanets().then((planets) =>
      dispatch({ type: "GET_PLANETS", payload: planets })
    );
  };
}

async function apiPeople() {
  try {
    let people = [];
    let url = `https://swapi.dev/api/people/`;
    while (url) {
      const { data } = await axios.get(url);
      data.results.forEach((person) => people.push(person));
      url = data.next;
    }
    return people;
  } catch (error) {
    console.log(error);
  }
}

export function getAllPeople() {
  return async function (dispatch) {
    apiPeople().then((people) =>
      dispatch({ type: "GET_PEOPLE", payload: people })
    );
  };
}

export function getResidents(planetUrl) {
  return function (dispatch) {
    dispatch({ type: "GET_RESIDENTS", payload: planetUrl });
  };
}

export function getDetails(name) {
  return function (dispatch) {
    dispatch({ type: "GET_DETAILS", payload: name });
  };
}