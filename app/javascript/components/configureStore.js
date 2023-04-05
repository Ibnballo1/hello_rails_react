// Import configureStore() from Redux toolkit:
import { configureStore } from "@reduxjs/toolkit";

// import reducers
import greetingReducer from "./greetingSlice";

// Create Redux store:
const store = configureStore({
  reducer: {
    // Add greeting reducer
    greetingReducer,
  },
});

export default store;
