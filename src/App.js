import React from "react";
import { Routes, Route } from "react-router-dom";
import { Start, Income } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Start />} />
        <Route path="/income" element={<Income />} />
      </Routes>
    </>
  );
}

export default App;
