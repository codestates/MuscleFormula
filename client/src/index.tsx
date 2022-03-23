import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
//provider로 리덕스 쓸 수 있다
import { Provider } from 'react-redux';
import {store} from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
