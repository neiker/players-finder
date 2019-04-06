import axios from 'axios';

import {
  LOAD_PLAYERS,
  SET_PLAYERS_FILTERS,
} from './constants';

function loadPlayersSuccess(players) {
  return {
    type: LOAD_PLAYERS,
    payload: players
  }
}

function loadPlayersFails(error) {
  return {
    type: LOAD_PLAYERS,
    payload: error,
    error: true,
  }
}

function fetchPlayers() {
  return async (dispatch, getStore) => {
    let result;

    try {
      result = await axios.get('https://football-players-b31f2.firebaseio.com/players.json?print=pretty');
      
    } catch (e) {
      dispatch(loadPlayersFails(e));

      return;
    }

    dispatch(loadPlayersSuccess(result.data));
  }
}

function setPlayersFilters(filters) {
  return {
    type: SET_PLAYERS_FILTERS,
    payload: filters
  }
}

export default {
  fetchPlayers,
  setPlayersFilters,
}