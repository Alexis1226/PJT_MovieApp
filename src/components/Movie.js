import React, { useEffect, useState } from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';
import { RiStarLine, RiStarSmileFill } from 'react-icons/ri';
import './Movie.css';

function Movie({ id, year, title, summary, poster, genres, selected }) {
  const [select, setSelect] = useState([]);
  // setSelect(select.push(selected));
  console.log(select);
  // setSelect(...select, (select[index] = selected.toString()));

  function onClick(e) {
    selected = 'true';
    setSelect('true');
    console.log(e);
    console.log(title, selected);
  }

  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <form>
        <button type="submit" onClick={onClick}>
          {select ? (
            <RiStarSmileFill className="click" style={{ fill: 'gold' }} />
          ) : (
            <RiStarLine className="non-click" style={{ fill: '#cfcfcf' }} />
          )}
        </button>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres
              .filter((e, i) => i < 4)
              .map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>

                // map의 경우 반드시 key값이 필요하기 때문에 map에 자동으로 전해지는 index이용
              ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 110)}...</p>
        </div>
      </form>
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
