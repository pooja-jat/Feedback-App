import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const ListItem = ({ feedback }) => {
  const { dispatch } = useContext(FeedbackContext);

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_FEEDBACK",
      payload: id,
    });
  };

  const handleEdit = (feedback) => {
    dispatch({
      type: "EDIT_FEEDBACK",
      payload: feedback,
    });
  };

  return (
    <li className="list-group-item">
      <h1>Rating: {feedback.rating} </h1>
      <p>Review: {feedback.review}</p>
      <span className="float-end">
        <button
          onClick={() => handleEdit(feedback)}
          className="btn btn-warning btn-sm mx-2 "
        >
          Edit
        </button>
        <button
          onClick={() => handleRemove(feedback.id)}
          className="btn btn-danger btn-sm mx-2 "
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
