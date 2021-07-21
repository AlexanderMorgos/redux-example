import { createSelector } from 'reselect';

const _getTodos = (state) => state.todos;

export const getTodos = createSelector([_getTodos], (todos) => todos); // some normalize