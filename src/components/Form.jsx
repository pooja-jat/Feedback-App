import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

const Form = () => {
  const { dispatch, edit } = useContext(FeedbackContext);

  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    !edit.isEdit
      ? dispatch({
          type: "ADD_FEEDBACK",
          payload: { id: crypto.randomUUID(), rating, review },
        })
      : dispatch({
          type: "UPDATE_FEEDBACK",
          payload: { id: edit.feedback.id, rating, review },
        });

    setRating(1);
    setReview("");
  };

  useEffect(() => {
    if (edit.isEdit) {
      setRating(edit.feedback.rating);
      setReview(edit.feedback.review);
    }
  }, [edit]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <select
        onChange={(e) => setRating(e.target.value)}
        value={rating}
        className="form-select mb-2"
        required
      >
        <option defaultValue={"#"}>Please Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <textarea
        onChange={(e) => setReview(e.target.value)}
        value={review}
        className="form-control my-2"
        placeholder="Enter Your Review"
        required
      ></textarea>
      <button type="submit" className="btn btn-success w-100 my-2">
        {edit ? "Update" : "Submit"} Review
      </button>
    </form>
  );
};

export default Form;
