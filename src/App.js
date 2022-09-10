import React from "react";
import { Routes, Route } from "react-router-dom";
import { Start } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Start />} />
      </Routes>
    </>
  );
}

export default App;
