import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux';

import './index.css';
import App from './App';


const initialState = [
  "People are strange",
  "Alabama song ",
  "Riders on the storm"
];

function playlist(state = initialState, action){
  console.log(action);
  if (action.type === 'ADD_TRACK'){
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
