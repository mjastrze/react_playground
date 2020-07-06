import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function resetSearchTerm() {
  return { type: SET_SEARCH_TERM, payload: '' };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getAPIDetails(imdbID) {
  return (dispatch) => {
    fetch(`http://localhost:3000/${imdbID}`)
      .then((response) => response.json())
      .then((data) => dispatch(addAPIData(data)))
      .catch(console.error); // eslint-disable-line no-console
  };
}
