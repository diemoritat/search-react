import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import Search from './components/Search';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Search />, document.getElementByTagname('body'));
ReactDOM.render(<Search />, document.getElementById('header-content'));
registerServiceWorker();
