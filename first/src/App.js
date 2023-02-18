import './App.css';
import {useState, useEffect} from 'react'

function App() {

const [counter,setCounter] = useState(0)
const increment = ()=>{
    setCounter(counter +1)
}

useEffect(()=>{
  document.title = `clicked ${counter} times`
},[counter])
  return (
    <div className="App">
      
    <h1>trying react basic commands</h1>
      <h2>{counter}</h2>
    <button onClick={increment}>click here!</button>
    </div>
  );
}

export default App;
