import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { displayCommentsOfSelectedArticle } from '../utils/api';



function Comments({setAllComments, allComments}) {
    const { article_id } = useParams();
    
    
    useEffect(() => {
        displayCommentsOfSelectedArticle(article_id).then((comments) => {
            setAllComments(comments);
        })
        .catch((err) => {
            console.log(err, ' err');
        })           
    }, [])  

    return (
        <section>
            <ul className='comments-box'> 
                {allComments.length === 0 ? <p> no comments on this article </p> :allComments.map((comment) => {
                    return <li className='comments' key={comment.comment_id}> 
                           {comment.body}; 
                    </li>
                })}
            </ul>
        </section>
    )
}

export default Comments