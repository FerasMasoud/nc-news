import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleArticles, upVoteAnArticle } from '../utils/api';
import Comments from './Comments';
import DisplayComments from './DisplayComments';
// import { postCommentToExistingArticle } from '../utils/api';
import PostComment from './PostComment';

function SingleArticle() {

    const [allComments, setAllComments] = useState([]);
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({})
    const [upVote, setUpVote] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);
    const [error, setError] = useState('');

    //post comments states
    
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

                    <div className='comment-buttons'>
                        <>
                            <DisplayCommentForm>
                                <PostComment setAllComments={setAllComments}/>
                            </DisplayCommentForm>
                        </>
                        <section>
                            <DisplayComments>       
                                <Comments setAllComments={setAllComments} allComments={allComments}/>
                            </DisplayComments>
                        </section>  
                    </div>

                    <p> created at: {singleArticle.created_at} </p>

                </li>
            </div>
        </main>
    )

}

// move to a seperate file
function DisplayCommentForm ({children}) {
    const [form, setForm] = useState(false);

    const toggleForm = () => {
        setForm((currState) => !currState)     
    }

    return <div>
        {form ? children : null}
        <button onClick={toggleForm}> add comment </button>
    </div>
} 


export default SingleArticle