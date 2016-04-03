import React from 'react'
import TodoList from '../pages/TodoList';
import Counter from '../pages/Counter';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';
import { Router, Route, Link, browserHistory } from 'react-router'

const App = () => (
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="todos" component={TodoList} />
      <Route path="counter" component={Counter} />
      <Route path="*" component={NoMatch} />
    </Router>
  </div>
);

export default App
