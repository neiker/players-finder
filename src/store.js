import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import players from './players/store/reducer';

export default function configureStore() {
  const reducer = combineReducers({
    players
  });

  const middlewares = [
    thunkMiddleware,
    createLogger({
      duration: true,
      diff: true,
    })
  ];


  return createStore(
    reducer, 
    undefined, 
    applyMiddleware(...middlewares)
  )
}