// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/app";

// // Take this component's generated HTML and put it on the page (in the DOM)
// ReactDOM.render(<App />, document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));