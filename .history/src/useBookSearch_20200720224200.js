import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: ''
        })
        
    }, [query, pageNumber])
    return null
}
