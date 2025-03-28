import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Average from "./components/Average";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <>
      <FeedbackProvider>
        <Navbar />

        <div className="container p-5">
          <Form />
          <Average />
          <ListGroup />
        </div>
      </FeedbackProvider>
    </>
  );
};

export default App;
