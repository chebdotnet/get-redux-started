import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from  'redux-devtools-extension';

import thunk from 'redux-thunk';
import { HashRouter, Route} from 'react-router-dom';


import './index.css';
import App from './App';
import About from './About';

import reducer from './reducers'

//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
       <div>
         <Route exact path="/" component={App}/>
         <Route path="/about" component={About}/>
       </div>
      </HashRouter>
  </Provider>,
  document.getElementById('root'));
