import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Contents from './pages/Contents';
import Tick from './pages/Tick';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <section className="App">
            <Header />
          </section>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/movies" exact component={Contents} />
            <Route path="/tick" exact component={Tick} />
            <Route path="/post/:id" exact component={Post} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
