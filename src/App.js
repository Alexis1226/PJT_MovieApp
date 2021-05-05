import React from "react";

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
  componentDidMount(){
    setTimeout(()=> {
      this.setState({ isLoading:false, book: true})
    },6000);
  }

  render(){
    // console.log("I'm rendering");
    // return (
    // <div>
    //   <h1>The number is: {this.state.count}</h1>
    //   <button onClick={this.add}>Add</button>
    //   <button onClick={this.minus}>Minus</button>
    // </div>)
    const { isLoading } = this.state;
    return <div>
      {isLoading ? 'Loading': 'We are ready'}
    </div>
  }
}

export default App;
