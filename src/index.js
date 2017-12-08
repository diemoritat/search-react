import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Search />, document.getElementByTagname('body'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
