export const feedbackReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FEEDBACK":
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload],
      };

    case "REMOVE_FEEDBACK":
      return {
        ...state,
        feedbacks: state.feedbacks.filter((item) => item.id !== action.payload),
      };
    case "EDIT_FEEDBACK":
      return {
        ...state,
        edit: { feedback: action.payload, isEdit: true },
      };
    case "UPDATE_FEEDBACK":
      console.log("pooja", action);
      return {
        ...state,
        feedbacks: state.feedbacks.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        edit: { feedback: {}, isEdit: false },
      };

    default:
      return state;
  }
};
