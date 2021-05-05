import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   console.log("hello");
  // }

  // // state는 object
  // state ={
  //   count:0
  // }

  // add =() =>{
  //   // state는 바로 변경하지 않고 setState이용 > 아래 render을 바뀐 state로 refresh하지 않기 때문
  //   // setState를 호출할 때마다 react는 새로운 state와 함께 render function 호출
  //   this.setState(current=> ({count: current.count +1 }));
  // };
  // minus =() =>{
  //   this.setState(current => ({count: current.count -1}));
  // };
  // componentDidMount(){
  //   console.log("component rendered");
  // }
  // componentDidUpdate(){
  //   console.log("I just updated");
  // }
  // componentWillUnmount(){
  //   console.log("Goodbye, cruel world");
  // }
  state ={
    isLoading :true,
    movies :[],
  };

  // axios가 끝날 때까지 기다림
  getMovies = async()=>{
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    // 위의 식을 ES6에서는 아래와 같이 사용가능
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false});
    console.log(movies);
  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
    // console.log("I'm rendering");
    // return (
    // <div>
    //   <h1>The number is: {this.state.count}</h1>
    //   <button onClick={this.add}>Add</button>
    //   <button onClick={this.minus}>Minus</button>
    // </div>)
    const { isLoading, movies } = this.state;
    // JSX에서는 class의경우 객체인클래스와 혼동의 우려가 있어 className으로 작성
    return <section className="container" > { 
        isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : 
        <div className="movies">
          {movies.map(movie => {
            return (
            <Movie
            key = {movie.id}
            id = {movie.id}
            year = {movie.year}
            title = { movie.title}
            summary = { movie.summary}
            poster = { movie.medium_cover_image}
            genres ={movie.genres}
            />);
          })}
        </div>
      } 
      </section>
  }
}

export default App;
