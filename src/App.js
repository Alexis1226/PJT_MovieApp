import React from "react";
import PropTypes from "prop-types";


function Food({fav, picture, rating}) { // props.fav = {fav}
  // console.log(props.fav); // props.fav =  kimchi 출력
  return (
    <div>
      <h3>I Love {fav}</h3>
      <img src={picture} alt={fav}></img>
      <h2>{rating}/5.0</h2>
    </div>
  );
}

// 아래 propTypes는 변경불가
Food.propTypes ={
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

const foodILike = [
  {
    id : 1,
    name: 'kimchi',
    image : 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating : 5,
  },
  {
    id : 2,
    name: 'ramen',
    image : 'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating : 4,
  },
  {
    id : 3,
    name: 'meat',
    image : 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
    rating : 3.3,
  },
  {
    id : 4,
    name: 'zzuccumi',
    image : 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating : 4.7,
  },
];

// function renderFood(dish){
//   console.log(dish);
//   return <Food name ={dish.name} picture={dish.image}/>
// }

function App() {
  return ( 
    <div >

    <h1 > Hello. </h1>

    {/* food component에 property:fav, value:kimchi로 줘서 
            food function component에 arguments로 넣음 */}
    {/* <Food fav = 'kimchi' />
    <Food fav = 'ramen' />
    <Food fav = 'meat' />
    <Food fav = 'zzuccumi' /> */}

    {
    foodILike.map(dish => ( 
      <Food 
      key={dish.id} 
      fav = {dish.name} 
      picture={dish.image} 
      rating={dish.rating}/>
    ))}

    {/* return <div>{foodILike.map(renderFood)}</div>; */}
    </div>
  );
}

export default App;
