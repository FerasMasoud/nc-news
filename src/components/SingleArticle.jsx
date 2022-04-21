import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getSingleArticles, upVoteAnArticle } from '../utils/api';
import Comments from './Comments';
import { displayCommentsOfSelectedArticle } from '../utils/api';



function SingleArticle() {

    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({})
    const [upVote, setUpVote] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        getSingleArticles(article_id).then((article) => {
            setSingleArticle(article);
        })
    }, [])

    //vote
    const handleVote = (e) => {
        if(hasVoted) return;
        else {
            e.preventDefault();
            setUpVote((currVotes) =>  currVotes + 1);

            upVoteAnArticle(article_id).then(() => {  
                setHasVoted(true);
            })
            .catch(() => {
                
                setUpVote((currVotes => currVotes - 1))
                setError('vote failed, please try again')

            })
        }    
    }


    return (
        <main className='main-display'>
            <div className='card-box'> 
                <li className='card'> 
                    <h2> Title: {singleArticle.title} </h2>
                    <h3> Author: {singleArticle.author} </h3>
                    <h3> Topic: {singleArticle.topic} </h3> 
                    <h3> Votes: {singleArticle.votes + upVote} <button onClick={handleVote}> vote </button> </h3> 
                    <p> {error} </p>
                    <h3> comments: {singleArticle.comment_count} </h3> 
                    <section>
                        <DisplayComments>       
                            <Comments/>
                        </DisplayComments>
                    </section>                
                    <p> created at: {singleArticle.created_at} </p>

                </li>
            </div>
        </main>
    )

}


function DisplayComments ({children}) {
    const [showComments, setShowComments] = useState(false);

    const toggleShow = () => {
        setShowComments((currState) => !currState)     
    }

    return <div>
            {showComments ? children : null}
            {console.log(showComments)}
            <button onClick={toggleShow}> Show Comments </button>
    </div>   
}

export default SingleArticle