import axios from 'axios';

import {
  LOAD_PLAYERS,
  SET_PLAYERS_FILTER,
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

// Public actions
export function fetchPlayers() {
  return async (dispatch, getStore) => {
    let result;

    try {
      result = await axios.get('https://football-players-b31f2.firebaseio.com/players.json?print=pretty');
      
    } catch (e) {
      return dispatch(loadPlayersFails(e));
    }

    if (result) {
      dispatch(loadPlayersSuccess(result.data));
    }
  }
}

export function setPlayersFilter(type, value) {
  return {
    type: SET_PLAYERS_FILTER,
    payload: {
      type,
      value,
    }
  }
}