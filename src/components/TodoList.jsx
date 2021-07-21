import React from 'react';

import { Todo } from './Todo';

export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
}