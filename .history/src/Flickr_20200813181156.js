import React, { useEffect, useState, useRef } from 'react';






const Flickr = () => {
    const [pictures,setPictures] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [perPage, setPerPage] = useState(10);
    let [lastPicture, setLastPicture] = useState(null);
    let [isVisble, setIsVisible] = useState(false);
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


        let response = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + `&tags=cars&per_page=${perPage}&page=${pageNumber}&format=json&nojsoncallback=1`)
        
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
        console.log(imageRef.current);
        console.log(pictures)
        setLastPicture(imageRef.current)
        observer.observe(imageRef.current)


    }

    let observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting === true || entry.intersectionRatio > 1){
                setIsVisible(true);
               
                console.log('visible')
                console.log(isVisble)
                // console.log(entry.target)
                // setLastPicture(entry.target)
                console.log(lastPicture)
            }else {
                setIsVisible(false);
                
                console.log('not visible')
                console.log(isVisble)

                
                return null;
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
