import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';import App from './entry/App';import { About, Todos, Dashboard, Blueprint } from './index';

export default () => {
  return (
    <Router history={browserHistory} >      <Route path="/" component={App}>        <IndexRoute component={Blueprint} />        <Route path="todos" component={Todos} />        <Route path="dashboard" component={Dashboard} />        <Route path="blueprint" component={Blueprint} />      </Route>    </Router >
  );
};
