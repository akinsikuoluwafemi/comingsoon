import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: {}
        })
        
    }, [query, pageNumber])
    return null
}
