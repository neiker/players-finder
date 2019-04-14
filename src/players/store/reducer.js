import {
  LOAD_PLAYERS_ACTION,
  SET_PLAYERS_FILTERS_ACTION,
} from './constants';

function getDefaultState() {
  return {
    filters: {
      name: undefined,
      position: undefined,
      age: undefined,
    },
    data: undefined,
    error: false,
  };
}

function getAge(birthdayTimestamp, nowTimestamp = Date.now()) { 
  var ageDate = new Date(nowTimestamp - birthdayTimestamp); 

  return ageDate.getUTCFullYear() - 1970;
}

function loadPlayersReducer(state, action) {
  if (action.error) {
    return {
      ...state,
      // For simplicity proporces, 
      // we don't care about the error details.
      error: true,
      data: undefined
    };
  } else {
    return {
      ...state,
      error: false,
      data: action.payload.map(player => {
        const birthdayTimestamp = new Date(player.dateOfBirth).getTime();

        return ({
          ...player,
          age: getAge(birthdayTimestamp),
        });
      })
    };
  }

}

function setPlayersFilters(state, action) {
  return {
    ...state,
    filters: {
      name: action.payload.name,
      position: action.payload.position,
      age: action.payload.age,
    },
  };
}

export default function playersReducer (state = getDefaultState(), action) {
  switch (action.type) {
    case LOAD_PLAYERS_ACTION:
      return loadPlayersReducer(state, action);
    case SET_PLAYERS_FILTERS_ACTION:
      return setPlayersFilters(state, action);
    default:
      return state;
  }
}