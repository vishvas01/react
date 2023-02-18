import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router,Routes,Link} from 'react-router-dom'
import contact from './components/contact';

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
       <Router>
    <nav>
      <Link to='/' className='text'>home</Link>
      <Link to='/contact' className='text'>contact</Link>
      <Link to='/about' className='text'>about</Link>
    </nav>
   
    <Routes exact path='/' render={()=>(
      <>
       <h1>trying react basic commands</h1>
      <h2>{counter}</h2>
    <button onClick={increment}>click here!</button>
      </>

    )} />
    <Routes path='/contact' component={contact} />
    </Router>
    </div>
  );
}

export default App;
