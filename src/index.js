import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './stylesheets/main.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('header-content'));
//ReactDOM.render(<Search />, document.getElementById('header-content'));
registerServiceWorker();
