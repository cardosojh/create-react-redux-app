import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';
import { changeValueReducer } from './changeValueReducer';

export const Reducers = combineReducers({
  clickState: clickReducer,
  changeValueState: changeValueReducer
});