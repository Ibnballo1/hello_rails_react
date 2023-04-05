import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./components/configureStore";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
