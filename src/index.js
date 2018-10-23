
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import "./styles/index.styl"
import Main from "./views/Main"
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();