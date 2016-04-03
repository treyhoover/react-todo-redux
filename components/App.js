import React from 'react'
import TodoList from '../Pages/TodoList';
import Counter from '../Pages/Counter';
import Home from '../Pages/Home';
import NoMatch from '../Pages/NoMatch';
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
