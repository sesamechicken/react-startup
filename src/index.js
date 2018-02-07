import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { middleware as reduxPack } from 'redux-pack';
import reducers from './redux/reducers';
import './index.css';
import App from './App/';
import registerServiceWorker from './registerServiceWorker';

const devTools =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxPack),
    devTools
  )
);

// We tell react to render the App component inside the div with the id of 'root'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root')); // eslint-disable-line no-undef

// Caching layer for prod deployment. https://goo.gl/KwvDNy
registerServiceWorker();
