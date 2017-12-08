import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import Header from './components/Header';
import User from './components/User';
import Footer from './components/footer';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Search />, document.getElementByTagname('body'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<User />, document.getElementById('content__container'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
