import React from 'react';
import { shape, string } from 'prop-types';
import { Header } from './Header';
import { Spinner } from './Spinner';

export class Details extends React.Component {
  state = {
    rating: '',
  };

  componentDidMount() {
    const {
      show: { imdbID },
    } = this.props;

    fetch(`http://localhost:3000/${imdbID}`)
      .then((response) => response.json())
      .then(({ rating }) => this.setState({ rating }));
  }

  render() {
    const {
      show: { title, description, year, poster, trailer },
    } = this.props;

    const { rating } = this.state;
    const ratingComponent = rating ? <h3>{rating}</h3> : <Spinner />;
    return (
      <div className="details">
        {/* <header>
          <h1>video</h1>
        </header> */}
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} alt="ssds" />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}/rel=0&amp;showinfo=0`}
            title={`Trailer for ${title}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

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
