import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm, resetSearchTerm } from './actionCreators';

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  handleBrowseAllClick() {
    dispatch(resetSearchTerm());
  },
});

export const Landing = connect(
  mapStateToProps,
  mapDispatchToProps,
)(({ searchTerm, handleSearchTermChange, handleBrowseAllClick, history }) => {
  const goToSearch = (event) => {
    event.preventDefault();
    history.push('/search');
  };

  return (
    <div className="landing">
      <h1>svideo</h1>
      <form onSubmit={goToSearch}>
        <input
          onChange={handleSearchTermChange}
          value={searchTerm}
          type="text"
          placeholder="Search"
        />
      </form>
      <Link onClick={handleBrowseAllClick} to="/search">
        or Browse All
      </Link>
    </div>
  );
});
