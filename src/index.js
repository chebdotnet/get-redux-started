// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
//

import { createStore } from 'redux';

function playlist(state = [], action){
  console.log(action);
  if (action.type === 'ADD_TRACK'){
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

console.log(store.getState())


store.subscribe(() => {
  console.log("subscibe1", store.getState())
})

store.dispatch({'type': "ADD_TRACK", "payload": "Smell like spirit"});
store.dispatch({'type': "ADD_TRACK", "payload": "Enter SandMan"});
