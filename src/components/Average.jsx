import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const Average = () => {
  const { feedbacks } = useContext(FeedbackContext);

  const averageRatings = feedbacks.reduce(
    (p, c) => p + c.rating / feedbacks.length,
    0
  );

  return (
    <div className="my-2 d-flex items-center justify-content-between">
      <p>Total Review : {feedbacks.length}</p>
      <p>Average Rating: {averageRatings.toFixed(2)} </p>
    </div>
  );
};

export default Average;
