import{useState,useEffect} from 'react';
import './App.css';

function App() {
  const[quotes, setQuotes]=useState();
  //get quote
  const getQuote=()=>{
    fetch('https://type.fit/api/quotes')
    .then((res)=>res.json())
    .then((data)=>{
      let randomNum=Math.floor(Math.random()*data.length)
      setQuotes(data[randomNum])

    });
  }
  
  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
    
    </div>
  );
}

export default App;
