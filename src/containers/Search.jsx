import React from 'react';
import PropTypes, { shape, string } from 'prop-types';
import { connect } from 'react-redux';

import { ShowCard } from './ShowCard';
import { Header } from './Header';

// import style from './Search.module.css';

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });
export const Search = connect(mapStateToProps)((props) => {
  const { shows, searchTerm } = props;
  return (
    <div className="search">
      {/* <header>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </header> */}
      <Header showSearch />
      <div>
        {shows
          .filter((show) =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .includes(searchTerm.toUpperCase()),
          )
          .map((show) => (
            <ShowCard key={show.imdbID} show={show} />
          ))}
      </div>
    </div>
  );
});

Search.propTypes = {
  shows: PropTypes.arrayOf(
    shape({
      poster: string.isRequired,
      title: string.isRequired,
      year: string.isRequired,
      description: string.isRequired,
      imdbID: string.isRequired,
      trailer: string.isRequired,
    }).isRequired,
  ).isRequired,
};
