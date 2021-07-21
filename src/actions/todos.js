import { uuid } from 'uuidv4';

import { TODOS_ACTION_TYPES } from '../constants/todos';

export const createTodo = (text) => async (dispatch, getState) => {
  const todo = {
    id: uuid(),
    text
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));

  await dispatch({
    type: TODOS_ACTION_TYPES.setTodo,
    payload: todo
  });
};

// Mocked retrieving data from API

export const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};