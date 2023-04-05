// // // // Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

// import "./index"

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")

);