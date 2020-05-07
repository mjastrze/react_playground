import React from 'react';
import data from '../data.json';

export const Search = () => (
  <div className="search">
    <header>
      <input type="text" placeholder="Search" />
    </header>
    <div>
      {data.shows.map((show) => (
        <div>
          <img
            alt={`${show.title} Show Poster`}
            src={`/public/img/posters/${show.poster}`}
          />
          <div>
            <h3>{show.title}</h3>
            <h4>{show.year}</h4>
            <p>{show.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
