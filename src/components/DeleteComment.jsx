import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { deleteCommentFromArticle } from '../utils/api';

function DeleteComment() {

    const {article_id} = useParams();
    const [deletedMsg, setDeletedMsg] = useState('');
    const [deleteErr, setDeleteErr] = useState('');

    const handleDelete = (e) => {
        e.preventDefault();

        deleteCommentFromArticle(article_id).then(() => {
            setDeletedMsg('comment deleted.')
        })
        .catch(() => {
            setDeleteErr(' something went wrong, please try again.')
        })
    }

    return (
        <div>
            <button onClick={handleDelete}></button>
            <p> 
                {deletedMsg}
                {deleteErr}
             </p>
        </div>
    )
}

export default DeleteComment