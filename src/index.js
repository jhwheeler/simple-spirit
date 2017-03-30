import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import css from '../public/css/styles.css';
import grid from '../public/css/grid.css';

import App from './components/App';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import Archive from './components/Archive';
import ConsoleScreen from './components/ConsoleScreen';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/archive" component={Archive} />
        <Route path="/maxim/:maximId" component={App} />
        <Route path="/console" component={ConsoleScreen} />
      </Switch>
    </Router>
  )
}

render(<Root/>, document.querySelector("#main"));
