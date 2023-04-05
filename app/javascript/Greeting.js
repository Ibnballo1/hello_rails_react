import React from "react";
import { useDispatch } from 'react-redux';
import { setGreeting } from "./features/greetingSlice";

function Greeting() {
  const dispatch = useDispatch();
  const greet = dispatch(setGreeting({ name: 'John Doe' }));

  return (
    <h3>This is from Greeting { greet }</h3>
  )
}

export default Greeting;
