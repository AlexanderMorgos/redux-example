import { uuid } from 'uuidv4';

import { TODOS_ACTION_TYPES } from '../constants/todos';

export const createTodo = (text) => async (dispatch, getState) => {
  const todo = {
    id: uuid(),
    text
  };

  await new Promise((resolve) => setTimeout(resolve, 100));

  // Mocked retrieving data from API

  await dispatch({
    type: TODOS_ACTION_TYPES.setTodo,
    payload: todo
  });
};


export const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
};