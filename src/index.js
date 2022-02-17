import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyles} from './styles/GlobalStyles';
// GlobalStyles is component, must be added in document 

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
