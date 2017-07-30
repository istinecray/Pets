import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker'; 

import jQuery from 'jquery';
import tether from 'tether';

import Routes from './routes'

import configureStore from './store'

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

window.jQuery = jQuery; 
global.Tether = tether;

require('./../node_modules/bootstrap/dist/js/bootstrap.js');

const store = configureStore();

render (
  <Provider store={store}>
    <Routes />
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker(); 