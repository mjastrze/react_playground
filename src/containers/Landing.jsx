import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => (
  <div className="landing">
    <h1>Movies</h1>
    <input type="text" placeholder="Search" />
    <Link alt="dsf" to="/search">
      or browse all
    </Link>
  </div>
);
