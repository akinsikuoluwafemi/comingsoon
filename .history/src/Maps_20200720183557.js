import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap  } from 'react-google-maps';
import * as parksData from './data/'

function Map () {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.421532, lng: -75.697189}}/>

    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map));




export default class Maps extends Component {
    render() {
        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`}
                    loadingElement= {<div style={{height: '100%'}}/>}
                    containerElement={<div style={{height: '100%'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}
                />
            </div>
        )
    }
}
