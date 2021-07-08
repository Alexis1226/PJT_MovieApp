import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Movie from '../components/Movie';

function Contents(apiMovies) {
  const history = useHistory();

  // LocalStorage로부터 data 받기
  const [theMovies, setTheMovies] = useState({
    isLoading: true,
    movies: apiMovies,
  });

  const { isLoading, movies } = theMovies;
  const localMovies = JSON.parse(localStorage.getItem('movies'));

  useEffect(() => {
    setTimeout(() => {
      setTheMovies({
        isLoading: false,
        movies: localMovies,
      });
    }, 1000);
    return clearTimeout();
  }, [localMovies]);

  function changeSelect(key) {
    localMovies[key].select = 'true';
    localStorage.setItem('movies', JSON.stringify(localMovies));
    // setTimeout(() => {
    // history.push({ pathname: '/tick' });
    // }, 1000);
  }

  return (
    <div id="contents">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {localMovies.map((movie, i) => {
            return (
              <Movie
                key={i}
                index={i}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                selected={movie.select}
                changeSelect={changeSelect}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Contents;
