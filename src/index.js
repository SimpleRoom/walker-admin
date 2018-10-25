import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import "./styles/index.styl"
// import App from "./views/App"
import Home from "./views/Home"
// import AuthExample from "./views/AuthExample"

ReactDOM.render( <Home /> , document.getElementById('root'));
registerServiceWorker();