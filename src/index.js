import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import "./styles/index.styl"
import Root from "./views/Root"

ReactDOM.render( <Root /> , document.getElementById('root'));
registerServiceWorker();