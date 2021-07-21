import { TODOS_ACTION_TYPES } from '../constants/todos';

export const todos = (state = [], action) => {
  const actions = {
    [TODOS_ACTION_TYPES.addTodo]: [
      ...state,
      {
        id: action.id,
        text: action.text
      }
    ]
  };

  return actions[action.type] || state;
};
