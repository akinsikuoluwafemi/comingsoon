import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search'
        })
        
    }, [query, pageNumber])
    return null
}
