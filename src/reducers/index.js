import { combineReducers } from 'redux';
import notes from './notes';
import nextId from './nextId';
import currentFilter from './currentFilter';

const rootReducer = combineReducers({
  notes,
  nextId,
  currentFilter
});

export default rootReducer;
