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
  Retirement,
  Finish,
} from "./components";
import Nav from "./components/Nav";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Nav />
      <div id="main-content">
          <ScrollToTop>
            <Routes>
              <Route index path="/" element={<Start />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/debts" element={<Debts />} />
              <Route path="/stop" element={<ExOverIn />} />
              <Route
                path="/initial-emergency-fund"
                element={<InitialEmergency />}
              />
              <Route path="/retirement-match" element={<RetirementMatch />} />
              <Route
                path="/high-interest-debt"
                element={<HighInterestDebt />}
              />
              <Route path="/emergency-fund" element={<Emergency />} />
              <Route
                path="/moderate-interest-debt"
                element={<ModerateInterestDebt />}
              />
              <Route path="/retirement" element={<Retirement />} />
              <Route path="/finish" element={<Finish />} />
            </Routes>
          </ScrollToTop>
      </div>
    </>
  );
}

export default App;
