import React from 'react';
import useBookSearch from './useBookSearch';

export default function Scroll() {
    const [query, setQuery] = useState('');
    const [pageNumber, setpageNumber] = useState(1);

    function handleSearch(e) {
        setQuery(e.target.value)
    }


    useBookSearch(query, pageNumber)
    return (
        <>
            <input type="text" onChange={handleSearch}/>
            <div>Title</div>
            <div>Title</div>
            <div>Title</div>
            <div>Title</div>
            <div>Loading</div>
            <div>Error</div>



        </>
    )
}
