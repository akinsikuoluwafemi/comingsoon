import React from 'react';
import useBookSearch from './useBookSearch';

export default function Scroll() {
    useBookSearch(query, pageN )
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
