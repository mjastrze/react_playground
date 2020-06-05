import React from 'react';
import PropTypes, { shape, string } from 'prop-types';
import { ShowCard } from './ShowCard';

// import style from './Search.module.css';

export class Search extends React.Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    const { searchTerm } = this.state;
    const { shows } = this.props;
    return (
      <div className="search">
        <header>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </header>
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
  }
}

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
