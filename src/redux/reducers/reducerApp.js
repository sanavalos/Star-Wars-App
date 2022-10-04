import {
  GET_PLANETS,
  GET_PEOPLE,
  GET_RESIDENTS,
  GET_DETAILS,
  GET_PLANET,
  CLEAR_STATE,
  GET_FILTERED_PLANETS,
  CLEAN_FILTER,
} from "../actions/actions.js";

const initialState = {
  planets: [],
  allPlanets: [],
  planet: {},
  people: [],
  residents: [],
  details: {},
  filteredPlanets: [],
};

export function reducerApp(state = initialState, action) {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        planets: action.payload,
        allPlanets: action.payload,
      };

    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };

    case GET_RESIDENTS:
      let planetResidents = state.people.filter(
        (p) => p.homeworld === action.payload
      );
      return {
        ...state,
        residents: planetResidents,
      };

    case GET_DETAILS:
      let details = state.people.find((p) => p.name === action.payload);
      return {
        ...state,
        details: details,
      };

    case GET_PLANET:
      let planet = state.planets.find((p) => {
        if (p.name === action.payload) return p;
      });
      return {
        ...state,
        planet: planet,
      };

    case CLEAR_STATE:
      return {
        ...state,
        planet: {},
        residents: [],
        details: {},
      };

    case GET_FILTERED_PLANETS:
      let newPlanets = state.planets.filter((p) =>
        p.name.toLowerCase().startsWith(action.payload)
      );
      return {
        ...state,
        planets: newPlanets,
      };

    case CLEAN_FILTER:
      return {
        ...state,
        planets: state.allPlanets,
      };
    default:
      return state;
  }
}

export default reducerApp;
