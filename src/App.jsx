import React from 'react';
import { connect } from 'react-redux';

import { TodoManagement } from './components/TodoManagement';
import { TodoList } from './components/TodoList';
import { selectTodos } from './selectors/todos';
import { createTodo, getTodos } from './actions/todos';

const AppComponent = ({ todos, createTodo, getTodos }) => {
  const handleSubmit = React.useCallback(async (data) => {
    await createTodo(data);
    getTodos();
  }, [createTodo, getTodos]);

  return (
    <div>
      <TodoManagement onSubmit={handleSubmit} />
      <TodoList todos={todos} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state)
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos,
    createTodo: (text) => dispatch(createTodo(text)),
  };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
