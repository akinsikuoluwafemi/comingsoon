import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {
    
    useEffect(() => {
        let cancel;

        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data);
        })
        
    }, [query, pageNumber])
    return null
}
