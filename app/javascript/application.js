// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function App() {
  console.log("MyApp rendered");
  return <h1>Hello World!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));



