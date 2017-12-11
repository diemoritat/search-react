import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Search from './Search'
import Profile from './Profile'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route path='/:username' component={Profile}/>
        </Switch>
      </main>
    );
  }
}

export default Main
