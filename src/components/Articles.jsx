import React, { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';

function Articles() {

    const [articles, setArticles] = useState([]);
    //use effect 
    useEffect(() => {
        getArticles().then((ArtilesFromApi) => {
            console.log(ArtilesFromApi, ' << articles');
            setArticles(ArtilesFromApi);
        })
    }, [])   
    
    return (
        <main className='main-display'>
            {articles.map((article) => {
                return (
                    <div className='card-box'>
                        <li className='card' key={article.article_id}>
                            <h2> {article.title} </h2>
                            <h3> Author: {article.author} </h3>
                            <h3> Topic: {article.topic} </h3>
                            <h3> Votes: {article.votes} </h3>
                            <h3> comments: {article.comment_count} </h3>

                        </li>
                    </div>
                )
            })}
        </main>
    )
}

export default Articles