import {
  LOAD_PLAYERS,
  SET_PLAYERS_FILTERS,
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
  }
}

function getAge(birthdayTimestamp, nowTimestamp = Date.now()) { 
  var ageDate = new Date(nowTimestamp - birthdayTimestamp); 

  return ageDate.getUTCFullYear() - 1970;
}

function loadPlayersReducer(state, action) {
  if (action.error) {
    return {
      ...state,
      error: true,
      data: undefined
    }
  } else {
    return {
      ...state,
      error: false,
      data: action.payload.map(player => {
        return ({
          ...player,
          age: getAge(new Date(player.dateOfBirth).getTime()),
        })
      })
    }
  }

}

function setPlayersFilters(state, action) {
  return {
    ...state,
    filters: {
      name: action.payload.name,
      position: action.payload.position,
      age: action.payload.age ? parseInt(action.payload.age, 10) : undefined,
    },
  };
}

export default function playersReducer (state = getDefaultState(), action) {
  switch (action.type) {
    case LOAD_PLAYERS:
      return loadPlayersReducer(state, action);
    case SET_PLAYERS_FILTERS:
      return setPlayersFilters(state, action);
    default:
      return state
  }
}