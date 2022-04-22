import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { displayCommentsOfSelectedArticle } from '../utils/api';
import DeleteComment from './DeleteComment';



function Comments({ allComments, setAllComments}) {
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
                            { comment.author === 'jessjelly' ?   
                                <DeleteComment allComments={allComments} setAllComments={setAllComments} comment_id={comment.comment_id}/>
                            : null}
                        </li>

                })}
            </ul>
        </section>
    )
}

export default Comments