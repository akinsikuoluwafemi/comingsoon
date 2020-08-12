import React, { Component } from 'react';


class Flickr extends Component {
    state = {
        pictures: [],
        pageNumber: 2
    }
    componentDidMount() {

        LoadMorePictures()

    }

    const LoadMorePictures = 9

    
      

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