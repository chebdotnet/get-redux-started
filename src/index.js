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
const addTrackBtn = document.querySelector('.addTrack');
const list = document.querySelectorAll('.list')[0];
const trackInput = document.querySelector('.trackInput');

console.log(store.getState())


store.subscribe(() => {
  console.log("subscibe1", store.getState());
  list.innerHTML  = '';
  trackInput.value = '';
  store.getState().forEach(track => {
    const li = document.createElement('li');
    li.textContent = track;
    list.appendChild(li);
  });
});

addTrackBtn.addEventListener('click', () => {
  const trackName = trackInput.value;
  console.log("trackName", trackName);
  store.dispatch({'type': "ADD_TRACK", "payload": trackName});
});
