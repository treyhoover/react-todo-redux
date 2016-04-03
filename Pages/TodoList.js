import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TodoFooter from '../components/TodoFooter'
import Header from '../components/Header'

const TodoList = () => (
  <div>
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <TodoFooter />
  </div>
);

export default TodoList;