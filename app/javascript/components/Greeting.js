import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreetings } from "./greetingSlice";

const Greeting = () => {
  //  Get greetings from Redux store:
  const greeting = useSelector((state) => state.greetingReducer);
  const greetingsStatus = useSelector((state) => state.greetingReducer.status);

  console.log("data", greeting);
  console.log("status", greetingsStatus);

  // Prepare Redux dispatch method:
  const dispatch = useDispatch();

  useEffect(() => {
    if (greetingsStatus === "idle") {
      dispatch(fetchGreetings());
    }
  }, [greetingsStatus, dispatch]);

  let content;

  if (greetingsStatus === "succeeded") {
    content = <p>{greeting.greetings.content}</p>;
  } else if (greetingsStatus === "failed") {
    content = (
      <>
        <h1>message not found</h1>
        <p>{error}</p>
      </>
    );
  }

  return <div>{content}</div>;
};

export default Greeting;
