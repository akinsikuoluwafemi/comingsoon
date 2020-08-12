import React, { useEffect, useState, useRef } from 'react';






const Flickr = () => {
    const [pictures,setPictures] = useState([])
    const [pageNumber,setPageNumber] = useState(1)
    
    useEffect(() => {
       
        LoadMorePictures()

    },[])


    const LoadMorePictures = () => {
        const flickrapikey = '162e01778853d65e29516a0b540192d9';
        const flickrsecret = 'fd337bc310818cbb'
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + `&tags=cars&per_page=10&page=${pageNumber}&format=json&nojsoncallback=1`)
            .then(function (response){
                return response.json();
            })
            .then((data) =>{
                let { pages, photo } = data.photos

                let pics = photo.map((pic) =>{
                    var srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg'
                    return (
                        <img alt="" src={srcPath} />
                    )
                })
               
                setPictures([...pictures, ...pics])
                setPageNumber(pageNumber + 1)
                console.log(pageNumber)
            })
         console.log(pictures)
    }
    




    return (
        <div>
            {pictures}
            <button onClick={() => LoadMorePictures()} className="btn-primary btn-lg">LOAD MORE</button>
        </div>
    )
}


export default Flickr;
