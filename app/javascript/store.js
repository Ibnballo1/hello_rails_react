import { configureStore } from '@reduxjs/toolkit';
import { reducer as greetingReducer } from './features/greetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});