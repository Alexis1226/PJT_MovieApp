import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Tick() {
  const [theMovies, setTheMovies] = useState({
    isLoading: true,
    movies: [],
  });

  const { isLoading, movies } = theMovies;
  const localMovies = JSON.parse(localStorage.getItem('movies'));

  useEffect(() => {
    setTheMovies({
      isLoading: false,
      movies: localMovies,
    });
  }, []);

  return (
    <div id="tick">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {localMovies
            .filter((movie) => movie.select === 'true')
            .map((movie, i) => {
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
                />
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Tick;
