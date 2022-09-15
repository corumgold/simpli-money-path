import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Start,
  Income,
  Expenses,
  Debts,
  ExOverIn,
  InitialEmergency,
  RetirementMatch,
  HighInterestDebt,
  Emergency,
  ModerateInterestDebt,
} from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Start />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/debts" element={<Debts />} />
        <Route path="/stop" element={<ExOverIn />} />
        <Route path="/initial-emergency-fund" element={<InitialEmergency />} />
        <Route path="/retirement-match" element={<RetirementMatch />} />
        <Route path="/high-interest-debt" element={<HighInterestDebt />} />
        <Route path="/emergency-fund" element={<Emergency />} />
        <Route
          path="/moderate-interest-debt"
          element={<ModerateInterestDebt />}
        />
      </Routes>
    </>
  );
}

export default App;
