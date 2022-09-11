import React from "react";
import { Routes, Route } from "react-router-dom";
import { Start, Income, Expenses } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Start />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </>
  );
}

export default App;
