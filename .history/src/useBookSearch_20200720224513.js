import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: {q: query, page: pageNumber }
        }).then
        
    }, [query, pageNumber])
    return null
}
