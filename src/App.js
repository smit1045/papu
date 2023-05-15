import './App.css';
import Header from './Components/Header';
// import Movie from './Components/Movie';
// import Movies from "./data.json";
import React, {useState} from 'react';

function App() {

  const [num , setNum] = useState(1);

  function inc(){
    setNum(num+1);
  }
  function dec(){
    setNum(num-1);
  }

  return (
    <div className="App">
      <Header />
      <div className='main'>
        <div>
          <h1 className='heading'>{num}</h1>
        </div>
        <div>
        <button className='btn' onClick={inc}>Increment</button>
        <button className='btn' onClick={dec}>Decrement</button>
        </div>









        {/* {
          Movies.map((element, index) => {
            return(
            <Movie 
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
            )
          })
        } */}

      </div>
    </div>
  );
}

export default App;
