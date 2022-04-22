import React, { useState, useEffect } from 'react'
import { sorteArticlesBy } from '../utils/api';
import Articles from './Articles';

function SortBy({setArticles}) {

    const [ sortValue, setSortValue] = useState('');
    
    useEffect(() => {
        
    }, [])
    
    const handleSort = (e) => {
        let value = e.target.value;
        console.log(value, ' << value')

        sorteArticlesBy(value).then((response) => {
            console.log(response);
            setSortValue(response.data);
        })
        .catch((err) => {
            console.log(err, ' << the err');
        })
    }
    
    return (
        <div>
            <select className='sortby-box' value={sortValue} onChange={() => useEffect(() => handleSort )}> 
                <option> select sort preference </option>   
                <option value='votes'> votes </option>
                <option value='created_at'> ccreated_at </option>
                {/* <option value='votes'> votes </option>
                <option value='ASC'> ascending </option>
                <option value='DESC'> descending </option> */}
             </select>
        </div>
        
    )

}

export default SortBy