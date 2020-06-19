import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// //styled components
const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;

  & > h1 {
    color: red;
  }
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

export const ShowCard = ({
  show: { title, poster, year, description, imdbID },
}) => (
  <Wrapper to={`details/${imdbID}`}>
    <Image alt={`${title} Show Poster`} src={`/public/img/posters/${poster}`} />
    <div>
      <h3>{title}</h3>
      <h4>({year})</h4>
      <p>{description}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    imdbID: string.isRequired,
    trailer: string.isRequired,
  }).isRequired,
};
