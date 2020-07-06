import React from 'react';
import PropTypes, { shape, string } from 'prop-types';
import { connect } from 'react-redux';
import { ShowCard } from './ShowCard';
import { Header } from './Header';

// import style from './Search.module.css';

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });

class UnwrappedSearch extends React.Component {
  render() {
    const { shows, searchTerm } = this.props;
    return (
      <>
        <div className="search">
          <Header showSearch />
          <div>
            {shows
              .filter((show) =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .includes(searchTerm.toUpperCase()),
              )
              .map((show) => (
                <ShowCard show={show} key={show.imdbID} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export const Search = connect(mapStateToProps)(UnwrappedSearch);

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

export { UnwrappedSearch };
