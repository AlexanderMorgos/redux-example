import { uuid } from 'uuidv4';

import { getTodos as _getTodos } from '../selectors/todos';
import { TODOS_ACTION_TYPES } from '../constants/todos';

export const addTodo = (text) => async (dispatch, getState) => { // async await
  const todo = {
    id: uuid(),
    text
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const todos = _getTodos(getState());

  await dispatch({
    type: TODOS_ACTION_TYPES.setTodo,
    payload: [...todos.list, todo]
  });
};

export const getTodos = () => (dispatch, getState) => {
  const todos = _getTodos(getState());

  return todos;
};