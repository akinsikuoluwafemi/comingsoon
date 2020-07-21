import React, { useState } from 'react';
import useBookSearch from './useBookSearch';

export default function Scroll() {
    const [query, setQuery] = useState('');
    const [pageNumber, setpageNumber] = useState(1);

    function handleSearch(e) {
        setQuery(e.target.value)
        setpageNumber(1);
    }


  const  useBookSearch(query, pageNumber)
    return (
        <div style={{margin: 'auto', textAlign: 'center'}}>
            <input type="text" onChange={handleSearch}/>
            <div>Title</div>
            <div>Title</div>
            <div>Title</div>
            <div>Title</div>
            <div>Loading</div>
            <div>Error</div>



        </div>
    )
}
