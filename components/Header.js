import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

const Header = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/todos">Todo</Link></li>
    <li><Link to="/counter">Counter</Link></li>
  </ul>
);

export default Header
