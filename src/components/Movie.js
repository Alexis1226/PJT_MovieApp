import React from 'react';
import PropTypes from 'prop-types';
import { RiStarLine, RiStarSmileFill } from 'react-icons/ri';

function Movie({ year, title, summary, poster, genres, selected }) {
  function onClick(e) {
    console.log(e);
  }
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <button onClick={onClick}>
        {selected ? (
          <RiStarLine style={{ fill: '#cfcfcf' }} />
        ) : (
          <RiStarSmileFill style={{ fill: 'gold' }} />
        )}
      </button>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
            // map의 경우 반드시 key값이 필요하기 때문에 map에 자동으로 전해지는 index이용
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
};

export default Movie;
