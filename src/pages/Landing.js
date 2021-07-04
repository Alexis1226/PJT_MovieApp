import axios from "axios";
import React, { useEffect } from "react";
import Movie from "../components/Movie";

function Landing() {
    const [state, setstate] = useState({
        isLoading: true,
        movies: [],
      };);

      const {isLoading, movies} = state;
  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    setState({ movies, isLoading: false });
    console.log(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div id="landing">
      {state.isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {state.movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Landing;
