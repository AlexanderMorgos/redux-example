import { TODOS_ACTION_TYPES } from '../constants/todos';

const defaultState = {
  list: []
};

export const todos = (state = defaultState, action) => {
  const actions = {
    [TODOS_ACTION_TYPES.setTodo]: {
      ...state,
      list: action.payload
    }
  };

  return actions[action.type] || state;
};