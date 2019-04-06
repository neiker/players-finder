import {
  LOAD_PLAYERS,
  SET_PLAYERS_FILTER,
} from './constants';

function getDefaultState() {
  return {
    filters: {
      name: undefined,
      position: undefined,
      age: undefined
    },
    data: undefined,
    error: false,
  }
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
      data: action.payload
    }
  }

}

function setPlayersFilter(state, action) {
  const {
    type, 
    value,
  } = action.payload;

  return {
    ...state,
    filters: {
      ...state.filters,
      [type]: value
    },
  };
}

export default (state = getDefaultState(), action) => {
  switch (action.type) {
    case LOAD_PLAYERS:
      return loadPlayersReducer(state, action);
    case SET_PLAYERS_FILTER:
      return setPlayersFilter(state, action);
    default:
      return state;
  }
}