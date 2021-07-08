import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Contents from './pages/Contents';
import Tick from './pages/Tick';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import axios from 'axios';

function App() {
  // API GET요청
  const [movies, setMovies] = useState([]);

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
    setMovies(movies);
  };

  useEffect(() => {
    getMovies();
    console.log('API 로딩');
  }, []);

  return (
    <>
      <BrowserRouter>
        <section className="App">
          <Header />
        </section>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route
            path="/movies"
            exact
            render={() => <Contents apiMovies={movies} />}
          />
          <Route path="/tick" exact component={Tick} />
          <Route path="/post/:id" exact component={Post} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
