import { createSelector } from 'reselect';

const getTodos = (state) => state.todos;

export const selectTodos = createSelector([getTodos], (todos) => todos);