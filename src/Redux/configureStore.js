import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
// import { themeReducer, InitialReducer } from '../services/commonReducer';
import thunk from 'redux-thunk'; 
import { authReducer } from './reducers/authReducers';
// import { authReducer } from './reducers/authReducers';

const initialState = {};
const reducer = combineReducers({
  authReducer: authReducer,
  // theme: themeReducer,
  // otherReducer: otherReducer,
});
export default function createStore() {
  let store = configureStore({
    reducer: reducer,
    initialState,
    applyMiddleware: [thunk],
  });
  return store;
}
