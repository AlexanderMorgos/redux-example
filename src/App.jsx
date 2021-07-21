import React from 'react';
import { connect } from 'react-redux';

import { TodoManagement } from './components/TodoManagement';
import { TodoList } from './components/TodoList';
import { getTodos } from './selectors/todos';
import { addTodo } from './actions/todos';

const mapStateToProps = (state) => ({
  todos: getTodos(state)
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text))
  }
}

const AppComponent = ({ todos, addTodo }) => (
  <div>
    <TodoManagement addTodo={addTodo} />
    <TodoList todos={todos} />
  </div>
);

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
