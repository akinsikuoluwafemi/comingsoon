import React, { Component, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker  } from 'react-google-maps';
import * as parksData from './data/skateboard-parks.json';



function Map () {
    const [selectedPark, setSelectedPark] = useState(null);

    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.421532, lng: -75.697189 }}>

            {parksData.features.map(park => (
                <Marker key={park.properties.PARK_ID} position={{ lat: park.geometry.coordinates[1], lng: park.geometry.coordinates[0] }}
                onClick={()}
                
                
                />
            ))}
        
        </GoogleMap>

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
