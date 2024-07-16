export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'add':
      return [...initialState, action.payload];

    case 'delete':
      return initialState.filter((state) => state.id !== action.payload);

    case 'edit':
      return initialState.map((state) => {
        if (state.id === action.payload.id) {
          return {
            ...state,
            description: action.payload.description,
          };
        }

        return state;
      });

    default:
      return initialState;
  }
};
