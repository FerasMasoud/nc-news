import './App.css';
import { Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> nc-news </h1>   
      </header> 
      <nav className='nav'>
          <ul className='nav-items'>
            <li> navbar link 1 to be added... </li>
            <li> navbar link 2 to be added... </li>
            <li> navbar link 3 to be added... </li>


          </ul>
      </nav>
      <form className='search-box'>
        <lable > search </lable> 
        <input placeholder='authors, topics' type='text'/> 
        <button> search </button>
        <lable> sortby </lable>
        <select className='sortby-box'>     
            <option> date </option>
            <option> votes </option>
            <option> comments </option>
        </select>
      </form>
 

      
      
      <Routes>
        <Route path='/' element={<Articles/>}> </Route>
      </Routes>

    </div>
  );
}

export default App;
