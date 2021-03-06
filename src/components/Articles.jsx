import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../utils/api';
import SortBy from '../components/SortBy';



function Articles({articles , setArticles}) {

    
    useEffect(() => {
        getArticles().then((ArticlesFromApi) => {
            setArticles(ArticlesFromApi);
        })
    }, [])   
    
    return (
        <div>
            <form className='search-box'>
                <SortBy setArticles={setArticles}/>
            </form>
            <main className='main-display'>
                {articles.map((article) => {
                    return (
                        <div className='card-box' key={article.article_id}>
                            <li className='card' >
                                <h2> <Link to={`articles/${article.article_id}`}> {article.title} </Link></h2>
                                <h3> Author: {article.author} </h3>
                                <h3> Topic: <Link to={`/topics/${article.topic}`}> {article.topic}</Link> </h3>
                                <h3> Votes: {article.votes} </h3>
                                <h3 > comments: {article.comment_count} </h3>
                                <p> created at: {article.created_at} </p>
                            </li>
                        </div>
                    )
                })}
            </main>
        </div>
        
    )
}

export default Articles