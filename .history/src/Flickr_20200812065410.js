import React, { Component } from 'react';


class Flickr extends Component {
    state = {
        pictures: [],
        pageNumber: 1
    }
    componentDidMount(){

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