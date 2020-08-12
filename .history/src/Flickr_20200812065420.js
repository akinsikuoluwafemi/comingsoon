import React, { Component } from 'react';


class Flickr extends Component {
    state = {
        pictures: [],
        pageNumber: 1
    }
    componentDidMount(){
        const flickrapikey = '162e01778853d65e29516a0b540192d9';
        const flickrsecret = 'fd337bc310818cbb'
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + `&tags=cars&per_page=10&page=${this.state.pageNumber}&format=json&nojsoncallback=1`)
            .then(function (response)
            {
                return response.json();
            })
            .then((data) =>
            {
                let { pages, photo } = data.photos
                let pics = photo.map((pic, index) =>
                {
                    let srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
                    return (
                        <img alt="" src={srcPath} />

                    )

                })

            })
    }

    


 render(){
    //  console.log(this.state.pictures)
     
     return (
         <div>
             {this.state.pictures}
        </div>
     )
 }
}

export default Flickr;