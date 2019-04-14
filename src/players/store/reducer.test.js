import {
  LOAD_PLAYERS_ACTION,
  SET_PLAYERS_FILTERS_ACTION,
} from './constants';

import playersReducer from './reducer';

test('Players reducer should set a valid default value', () => {
  const state = playersReducer(undefined, {});

  expect(state).toEqual({
    data: undefined, 
    error: false, 
    filters: {
      age: undefined, 
      name: undefined, 
      position: undefined
    }
  });
});

describe('Succeful players load', () => {
  const action = {
    type: LOAD_PLAYERS_ACTION,
    payload: [
      {
        'contractUntil' : '2022-06-30',
        'dateOfBirth' : '1993-05-13',
        'jerseyNumber' : 9,
        'name' : 'Romelu Lukaku',
        'nationality' : 'Belgium',
        'position' : 'Centre-Forward'
      }, 
      {
        'contractUntil' : '2019-06-30',
        'dateOfBirth' : '1990-11-07',
        'jerseyNumber' : 1,
        'name' : 'David de Gea',
        'nationality' : 'Spain',
        'position' : 'Keeper'
      }
    ]
  };

  const state = playersReducer({
    error: true,
  }, action);

  test('Should reset error', () => {
    expect(state.error).toBe(false);
  });

  test('Should set players ages', () => {
    expect(state.data).toEqual([
      {
        ...action.payload[0],
        age: 25,
      },
      {
        ...action.payload[1],
        age: 28,
      }
    ]);
  });
});

describe('Failed players load', () => {
  const action = {
    type: LOAD_PLAYERS_ACTION,
    error: true,
  };

  const state = playersReducer({
    error: false,
    data: []
  }, action);

  test('Should reset data', () => {
    expect(state.data).not.toBeDefined();
  });

  test('Should set error', () => {
    expect(state.error).toBe(true);
  });
});

describe('Players filters', () => {
  const action = {
    type: SET_PLAYERS_FILTERS_ACTION,
    payload: {
      age: 30,
      name: 'Cosme Fulanito',
      position: 'Algo'
    }
  };

  const state = playersReducer(undefined, action);

  test('Should set valid filters', () => {
    expect(state.filters).toEqual({
      age: 30,
      position: 'Algo',
      name: 'Cosme Fulanito'
    });
  });
});