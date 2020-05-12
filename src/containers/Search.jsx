import React from 'react';
import data from '../data.json';
import { ShowCard } from './ShowCard';

// import style from './Search.module.css';

export class Search extends React.Component {
  state = {
    searchTerm: 'dupa',
  };

  handleSearchTermChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    const { searchTerm } = this.state;
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
          {data.shows.map((show) => (
            <ShowCard key={show.imdbID} show={show} />
          ))}
        </div>
      </div>
    );
  }
}
