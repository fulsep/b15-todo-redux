import React, { Component } from 'react'
import {
  BrowserRouter, Router, Switch, Route
} from 'react-router-dom'

import history from './utils/history'

import Home from './pages/Home'
import Todo from './pages/Todo'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <Switch>
            <Route path='/' exact render={()=><Home/>} />
            <Route path='/todo' exact render={()=><Todo/>} />
          </Switch>
        </Router>
      </BrowserRouter>
    )
  }
}
