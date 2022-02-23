import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home";
import Location from "../Location";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
