// Import createSlice() from Redux toolkit:
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for Redux store:
const initialState = {
  greetings: [],
  isLoading: true,
  status: "idle",
  error: "",
};

export const fetchGreetings = createAsyncThunk(
  "greetings/fetchGreetings",
  async () => {
    const response = await fetch("http://[::1]:3000/api/greetings/random");
    const greetings = await response.json();
    return greetings;
  }
);

// Create Redux state slice
const greetingSlice = createSlice({
  name: "greetings",
  initialState, // Define initial state
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.isLoading = true;
        state.status = "loading";
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greetings = action.payload;
        state.status = "succeeded";
        state.content = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
