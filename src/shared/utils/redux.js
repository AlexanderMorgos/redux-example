export const createReducer = (initialState, reducerMap) => (state = initialState, action) => {
  const handle = reducerMap[action.type];

  if (typeof handle === 'function') {
    return handle(state, action.payload);
  }

  return state;
};