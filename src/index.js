import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import css from '../public/css/styles.css';

import App from './components/App';
import LoginScreen from './components/LoginScreen';
import Archive from './components/Archive';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/archive" component={Archive} />
        <Route path="/maxim/:maximId" component={App} />
      </Switch>
    </Router>
  )
}

render(<Root/>, document.querySelector("#main"));
