import mockAxios from 'jest-mock-axios';

import actions from './actions';

import {
  LOAD_PLAYERS_ACTION,
  SET_PLAYERS_FILTERS_ACTION,
  PLAYERS_ENDPOINT
} from './constants';

describe('fetchPlayers action', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('Should dispatch LOAD_PLAYERS_ACTION action', (done) => {
    const dispatch = jest.fn();
    const action = actions.fetchPlayers();
    const response = [
      {
        name: ''
      }
    ];
    
    action(dispatch).then(() => {
      expect(mockAxios.get).toHaveBeenCalledWith(PLAYERS_ENDPOINT);

      expect(dispatch.mock.calls.length).toBe(1);
  
      const dipatched= dispatch.mock.calls[0][0];
  
      expect(dipatched.type).toBe(LOAD_PLAYERS_ACTION);
      expect(dipatched.payload).toEqual(response);
  
      done();
    });

    mockAxios.mockResponse({ data: response });    
  });

  test('Should dispatch LOAD_PLAYERS_ACTION action with error', (done) => {
    const dispatch = jest.fn();
    const action = actions.fetchPlayers();
    const error = { status: 404 };

    action(dispatch).then(() => {
      expect(mockAxios.get).toHaveBeenCalledWith(PLAYERS_ENDPOINT);

      expect(dispatch.mock.calls.length).toBe(1);
  
      const dipatched= dispatch.mock.calls[0][0];
  
      expect(dipatched.type).toBe(LOAD_PLAYERS_ACTION);
      expect(dipatched.error).toBe(true);
      expect(dipatched.payload).toEqual(error);
      
      done();
    });

    mockAxios.mockError(error);    
  });
});

describe('setPlayersFilters action', () => {
  

  test('Should dispatch SET_PLAYERS_FILTERS_ACTION', () => {
      const filters = { age: 25};
      const action = actions.setPlayersFilters(filters); 
      
      expect(action).toEqual({
        type: SET_PLAYERS_FILTERS_ACTION,
        payload: filters
      });
  });
});