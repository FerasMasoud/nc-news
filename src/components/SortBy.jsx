import React, { useState, useEffect } from 'react'
import { sorteArticlesBy } from '../utils/api';

function SortBy({setArticles}) {
    const [ sortValue, setSortValue] = useState('');
    
    useEffect(() => {
        
    }, [])
    
    const handleSort = (e) => {
        let value = e.target.value;
        console.log(value, ' << value')

        sorteArticlesBy(value).then((response) => {
            setSortValue(response.data);
            setArticles(response);
        })
        .catch((err) => {
            console.log(err, ' << the err');
        })
    }
    
    return (
        <div>
            <select className='sortby-box' value={sortValue} onChange={handleSort}> 
                <option> select sort preference </option>   
                <option value='created_at'> created_at </option>
                <option value='votes'> votes </option>
             </select>
        </div>
        
    )

}

export default SortBy