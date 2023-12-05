export const todoReducer = (states, action) => {
  switch (action.type) {
    case "add":
      return [...states, action.payload];

    case "delete":
      return states.filter((state) => state.id !== action.payload);

    case "edit":
      return states.map((state) => {
        if (state.id === action.payload.id) {
          return {
            ...state,
            description: action.payload.description,
          };
        }
      });

    default:
      return states;
  }
};
