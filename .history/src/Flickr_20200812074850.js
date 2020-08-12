import React, { Component, useEffect, useState } from 'react';


class Flickr extends Component {
    state = {
        pictures: [],
        pageNumber: 1
    }
    componentDidMount() {

        this.LoadMorePictures()

    }

     LoadMorePictures = () => {
        const flickrapikey = '162e01778853d65e29516a0b540192d9';
        const flickrsecret = 'fd337bc310818cbb'
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + `&tags=cars&per_page=10&page=${this.state.pageNumber}&format=json&nojsoncallback=1`)
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
                this.setState({
                    pictures: pics
                })
            })
         console.log(this.state.pictures)
    }
    
      

 render(){
    //  console.log(this.state.pictures)
     
     return (
         <div>
             {this.state.pictures}
             <button onClick={ this.LoadMorePictures()} className="btn-primary btn-lg">LOAD MORE</button>
        </div>
     )
 }
}

export default Flickr;





const Flickr = () => {
    const [pictures,setPictures] = useState([])
    const [pageNumber,setPageNumber] = useState(1)
    
    useEffect(() => {
       
        LoadMorePictures()

    },[])


    const LoadMorePictures = () => {
        const flickrapikey = '162e01778853d65e29516a0b540192d9';
        const flickrsecret = 'fd337bc310818cbb'
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + `&tags=cars&per_page=10&page=${this.state.pageNumber}&format=json&nojsoncallback=1`)
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
               
                setPictures(pics)
            })
         console.log(pictures)
    }
    




    return (
        <div>



        </div>
    )
}



