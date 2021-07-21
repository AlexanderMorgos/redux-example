import { uuid } from 'uuidv4';

import { getTodos as _getTodos } from '../selectors/todos';
import { TODOS_ACTION_TYPES } from '../constants/todos';

export const addTodo = (text) => async (dispatch, getState) => { // async await
  const todo = {
    id: uuid(),
    text
  };

  await dispatch({
    type: TODOS_ACTION_TYPES.addTodo, 
    payload: todo
  });

  // moking create logic

  const { list } = _getTodos(getState());

  await dispatch({
    type: TODOS_ACTION_TYPES.setTodo,
    payload: [...list, todo]
  });
};

export const getTodos = () => (dispatch, getState) => {
  const { list } = _getTodos(getState());

  return list;
};