import React, { useEffect, useState, useRef } from 'react';


const Flickr = () => {
    let [pictures,setPictures] = useState([])
    let [pageNumber, setPageNumber] = useState(1)
    let [perPage, setPerPage] = useState(10);
    let [lastPicture, setLastPicture] = useState(null);
    let [isVisible, setIsVisible] = useState(false);
    let [observePictures, setObservePictures] = useState([]);
    const imageRef = useRef();
    useEffect(() => {
       
        LoadMorePictures()
        console.log(pictures)
        console.log(imageRef.current);
        


    },[])

    

    // const LoadMorePictures = () => {
    //     const flickrapikey = '162e01778853d65e29516a0b540192d9';
    //     const flickrsecret = 'fd337bc310818cbb'
    //     fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + `&tags=cars&per_page=${perPage}&page=${pageNumber}&format=json&nojsoncallback=1`)
    //         .then(function (response){
    //             return response.json();
    //         })
    //         .then((data) =>{
    //             let { pages, photo } = data.photos

    //             let pics = photo.map((pic) =>{
    //                 var srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg'
    //                 return (
    //                     <img ref={imageRef} alt="" src={srcPath} />
    //                 )
    //             })
               
    //             setPictures([...pictures, ...pics])
    //             setPageNumber(pageNumber + 1)
    //             setLastPicture(pics[pics.length - 1])
    //             console.log(lastPicture)
    //             console.log(pageNumber)
    //             console.log(imageRef);
    //         })
        
    //      console.log(pictures.length)
    // }
    
    

    const LoadMorePictures = async ()=> {
        const flickrapikey = '162e01778853d65e29516a0b540192d9';
        const flickrsecret = 'fd337bc310818cbb'


        let response = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + `&tags=sports&per_page=${perPage}&page=${pageNumber}&format=json&nojsoncallback=1`)
        
        let data = await response.json()

        let { pages, photo } = data.photos

        let pics = photo.map((pic) =>{
            var srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg'
            return (
                <img ref={imageRef} alt="" src={srcPath} />
            )
        })

        setPictures([...pictures, ...pics])
        setPageNumber(pageNumber + 1)
        // setLastPicture(pics[pics.length - 1])
        console.log(lastPicture)
        console.log(pageNumber)
        // console.log(imageRef.current);
        console.log(pictures)
        setLastPicture(imageRef.current)
        observer.observe(imageRef.current)

    }


    let observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting && entry.target){
                setIsVisible(entry.isIntersecting);
                console.log('visible')
                console.log(entry.isIntersecting)
                // console.log(entry.target)
                // setLastPicture(entry.target)
                console.log(lastPicture)
                LoadMorePictures()
                entry.target = image
            }else {
                setIsVisible(entry.isIntersecting);
                console.log(entry.isIntersecting)
                
                console.log('not visible')

                
                // return null;
            }
        })


    })


    


    





    return (
        <div>
            <div>
                {pictures}
                {pictures.length}

            </div>
            <button onClick={() => LoadMorePictures()} className="btn-primary btn-lg">LOAD MORE</button>
        </div>
    )
}


export default Flickr;
