import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Articles from './components/Articles';
import Topic from './components/Topic';
import Nav from './components/Nav';
import SingleArticle from './components/SingleArticle';
import Comments from './components/Comments';
import PostComment from './components/PostComment';
import DisplayComments from './components/DisplayComments';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> nc-news </h1>   
      </header> 
      <Nav/>
      <form className='search-box'>
        <label > search </label> 
        <input placeholder='authors, topics' type='text'/> 
        <button> search </button>
        <label> sortby </label>
        <select className='sortby-box'>     
            <option> date </option>
            <option> votes </option>
            <option> comments </option>
        </select>
      </form>
 

      
      
      <Routes>
        <Route path='/' element={<Articles />}> </Route>
        <Route path='/topics/:topic' element={<Topic/>}> </Route>
        <Route path='/articles/:article_id' element={<SingleArticle/>}> </Route>
        <Route path='/articles/:article_id/comments' element={<Comments/>}> </Route>

      </Routes>

    </div>
  );
}

export default App;
