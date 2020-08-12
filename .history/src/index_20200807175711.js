import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Flickr from './Flickr';
import Maps from './Maps';
import NewMap from './NewMap';
import Scroll from './Scroll';
import Infinite from './infinite';




ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Flickr />
    <Infinite/>
    {/* <Maps /> */}
    {/* <Scroll /> */}

    {/* <NewMap /> */}


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
