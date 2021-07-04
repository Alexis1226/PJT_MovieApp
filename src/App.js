import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";

class App extends React.Component {

  render() {
    // console.log("I'm rendering");
    // return (
    // <div>
    //   <h1>The number is: {this.state.count}</h1>
    //   <button onClick={this.add}>Add</button>
    //   <button onClick={this.minus}>Minus</button>
    // </div>)
    const { isLoading, movies } = this.state;
    // JSX에서는 class의경우 객체인클래스와 혼동의 우려가 있어 className으로 작성
    return (
      <>
        <BrowserRouter>
        `<div className="App">
          <Header />
          </div>
          <section className="container">
            <Route path='/' component={Landing} />
            <Route path='/about' component={} />
            <Route path='/profile' component={Profile}} />
     
          </section>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
