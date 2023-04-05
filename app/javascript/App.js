import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Greeting from "./Greeting";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
