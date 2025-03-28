import { useReducer, useState } from "react";
import { createContext } from "react";
import { feedbackReducer } from "./FeedbackReducer";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const initialState = {
    feedbacks: [{ id: 1, rating: 5, review: "I Am From Reducer" }],
    edit: { feedback: {}, isEdit: false },
  };

  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const addFeedback = (rating, review) => {};

  const removeFeedback = (id) => {};

  const editFeedback = (oldFeedback) => {};

  const updateFeedback = (updatedFeedback) => {};

  return (
    <FeedbackContext.Provider
      value={{ feedbacks: state.feedbacks, edit: state.edit }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
