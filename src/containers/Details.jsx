import React from 'react';
import { connect } from 'react-redux';
import { shape, string } from 'prop-types';
import { Header } from './Header';
import { Spinner } from './Spinner';

import { getAPIDetails } from './actionCreators';

const mapStateToProps = (state, ownProps) => ({
  rating:
    state.apiData[ownProps.show.imdbID] &&
    state.apiData[ownProps.show.imdbID].rating,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  },
});

export const Details = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class Details extends React.Component {
    componentDidMount() {
      const { rating, getAPIData } = this.props;

      if (!rating) {
        getAPIData();
      }
    }

    render() {
      const {
        show: { title, description, year, poster, trailer },
        rating,
      } = this.props;
      const ratingComponent = rating ? <h3>{rating}</h3> : <Spinner />;
      return (
        <div className="details">
          <Header />
          <section>
            <h1>{title}</h1>
            <h2>({year})</h2>
            {ratingComponent}
            <img
              src={`/public/img/posters/${poster}`}
              alt={`Poster for ${title}`}
            />
            <p>{description}</p>
          </section>
          <div>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;showinfo=0`}
              title={`Trailer for ${title}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      );
    }
  },
);

Details.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    imdbID: string.isRequired,
    trailer: string.isRequired,
  }).isRequired,
};
