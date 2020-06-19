import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { string, bool } from 'prop-types';
import { connect } from 'react-redux';

import { setSearchTerm } from './actionCreators';

// //w nawiasach żeby interpreter nie brał jako ciało funkcji
const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

const getUtilSpace = (
  showSearch = false,
  searchTerm = '',
  handleSearchTermChange = () => {},
) =>
  showSearch ? (
    <input
      value={searchTerm}
      onChange={handleSearchTermChange}
      type="text"
      placeholder="Search"
    />
  ) : (
    <h2>
      <Link to="/search">Back</Link>
    </h2>
  );

const HeaderInternal = ({ showSearch, searchTerm, handleSearchTermChange }) => (
  <header>
    <Link to="/">
      <h1>video</h1>
    </Link>
    {getUtilSpace(showSearch, searchTerm, handleSearchTermChange)}
  </header>
);

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderInternal);

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: () => {},
  searchTerm: '',
};

Header.propTypes = {
  showSearch: bool,
  handleSearchTermChange: PropTypes.func,
  searchTerm: string,
};
