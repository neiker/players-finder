import axios from 'axios';

import {
  LOAD_PLAYERS_ACTION,
  SET_PLAYERS_FILTERS_ACTION,
  PLAYERS_ENDPOINT,
} from './constants';

function loadPlayersSuccess(players) {
  return {
    type: LOAD_PLAYERS_ACTION,
    payload: players
  };
}

function loadPlayersFails(error) {
  return {
    type: LOAD_PLAYERS_ACTION,
    payload: error,
    error: true,
  };
}

function fetchPlayers() {
  return async (dispatch, getStore) => {
    let result;

    try {
      result = await axios.get(PLAYERS_ENDPOINT);
      
    } catch (e) {
      dispatch(loadPlayersFails(e));

      return;
    }

    dispatch(loadPlayersSuccess(result.data));
  };
}

function setPlayersFilters(filters) {
  return {
    type: SET_PLAYERS_FILTERS_ACTION,
    payload: filters
  };
}

export default {
  fetchPlayers,
  setPlayersFilters,
};