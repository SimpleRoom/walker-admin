import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import "./styles/index.styl"
import App from "./views/App"
// import AuthExample from "./views/AuthExample"

ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();