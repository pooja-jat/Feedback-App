import React from "react";
import ListItem from "./ListItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const ListGroup = () => {
  const { feedbacks } = useContext(FeedbackContext);

  if (feedbacks.length === 0) {
    return (
      <h1 className="my-5 text-center text-secondary">No Feedbacks Yet.</h1>
    );
  }
  return (
    <ul className="list-group my-2">
      {feedbacks.map((feedback) => (
        <ListItem key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};

export default ListGroup;
