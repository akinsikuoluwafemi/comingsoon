import React, { useState, useRef, useCallback } from 'react';
import useBookSearch from './useBookSearch';

export default function Scroll() {
    const [query, setQuery] = useState('');
    const [pageNumber, setpageNumber] = useState(1);

    const observer = useRef();
    const lastbookElementRef = useCallback(node => {
        if (loading) return
        if(observer)
        console.log(node)
    });

    function handleSearch(e) {
        setQuery(e.target.value)
        setpageNumber(1);
    }


    const {
        books,
        hasMore,
        loading,
        error
  } = useBookSearch(query, pageNumber)
    return (
        <div style={{margin: 'auto', textAlign: 'center'}}>
            <input type="text" value={query} onChange={handleSearch}/>
            {books.map((book,index) => {
                if(books.length === index + 1) {
                    return <div ref={lastbookElementRef} key={book}>{book}</div>
                } else {
                    return <div key={book}>{book}</div>
                    
                }
            })}
            <div>{loading && 'Loading' }</div>
            <div>{error && 'Error'}</div>



        </div>
    )
}
