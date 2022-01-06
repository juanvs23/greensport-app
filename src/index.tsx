import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'


import App from './App';
import { store } from './app/store';
import  { GlobalStyles } from './styles/styles';

ReactDOM.render(
  
  <Provider store={store}>
    <Router basename={process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : '/'} >
    
        <GlobalStyles  />
        <App />
     
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
