// With pure React
// input -> eventHandler -> setState (updates a state) -> kicks off re-render
import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

// With Redux
// input ->kicks off an event -> event is gonna call the handler ->
// the handler is going to dispatch an action to a Redux via action creator ->
// which is then going to get called into the reducer ->
// the reducer is then going to modify its state ->
// once a state's been modified, it's going to notify React which is a subscriber ->
// which is then going to kick off a re-render
// const DEFAULT_STATE = {
//   searchTerm: ' ',
// };
const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action) => {
  if (action.type === ADD_API_DATA) {
    return { ...state, ...{ [action.payload.imdbID]: action.payload } };
  }
  return state;
};

// const rootReducer = (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case SET_SEARCH_TERM:
//       return { ...state, searchTerm: action.payload };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
