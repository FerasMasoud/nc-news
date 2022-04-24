import './App.css';
import { Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';
import Topic from './components/Topic';
import SingleArticle from './components/SingleArticle';
import {useState} from 'react';
import Comments from './components/Comments';
import PageNotFound from './components/PageNotFound';

function App() {
  const [articles, setArticles] = useState([]);
  const [allComments, setAllComments] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
      <h2 className='logo'>  Feras Masoud </h2>
      <h1 className='title'> nc-news </h1>   
        
      </header> 
  
      <Routes>
        <Route path='/' element={<Articles articles={articles} setArticles={setArticles}/>} />
        <Route path='/topics/:topic' element={<Topic/>} />
        <Route path='/articles/:article_id' element={<SingleArticle/>}> </Route>
        <Route path='/articles/:article_id/comments' element={<Comments allComments={allComments} setAllComments={setAllComments} />} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
