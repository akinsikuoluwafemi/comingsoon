import React from 'react';
import useBookSearch from './useBookSearch';

export default function Scroll() {
    const [query, setQuery] = useState('');
    const [page, setpage] = useState('');


    useBookSearch(query, pageNumber)
    return (
        <>
            <input type="text" />
            <div>Title</div>
            <div>Title</div>
            <div>Title</div>
            <div>Title</div>
            <div>Loading</div>
            <div>Error</div>



        </>
    )
}
