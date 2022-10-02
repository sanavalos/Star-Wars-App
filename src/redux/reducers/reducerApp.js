import {
  GET_PLANETS,
  GET_PEOPLE,
  GET_RESIDENTS,
  GET_DETAILS,
} from "../actions/actions.js";

const initialState = {
  planets: [],
  people: [],
  residents: [],
  details: {},
};

export function reducerApp(state = initialState, action) {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        planets: action.payload,
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
    default:
      return state;
  }
}

export default reducerApp;
