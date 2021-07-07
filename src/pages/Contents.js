import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Contents() {
  // API GET요청
  const [state, setState] = useState({
    isLoading: true,
    movies: [],
  });

  const { isLoading, movies } = state;

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    );

    await movies.map((a) => (a.select = 'false'));
    localStorage.setItem('movies', JSON.stringify(movies));
    setState({ movies, isLoading: false });
  };

  useEffect(() => {
    getMovies();
  }, []);

  // LocalStorage로부터 data 받기
  const [TheMovies, setTheMovies] = useState([]);
  const localMovies = JSON.parse(localStorage.getItem('movies'));

  useEffect(() => {
    setTheMovies(localMovies);
    console.log('set완료');
    return setTheMovies();
  }, [localMovies]);

  function changeSelect(key) {
    localMovies[key].select = 'true';
    localStorage.setItem('movies', JSON.stringify(localMovies));
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
