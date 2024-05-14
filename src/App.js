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
} from "./components/simpli-path";
import Nav from "./components/Nav";
import Budget from "./components/Budget";
import ScrollToTop from "./ScrollToTop";
import DebtsCalc from "./components/DebtsCalc";
import NoDebt from "./components/simpli-path/NoDebt";
import EarlyRetirement from "./components/retire-early/EarlyRetirement";
import EarlyRetirementPlan from "./components/retire-early/EarlyRetirementPlan";

function App() {
  return (
    <>
      <Nav />
      <div id="main-content">
        <ScrollToTop>
          <Routes>
            <Route path="/budget" element={<Budget />} />
            <Route path="/debts-calc" element={<DebtsCalc />} />
            <Route index element={<Start />} />
            <Route path="/simpli-path/income" element={<Income />} />
            <Route path="/simpli-path/expenses" element={<Expenses />} />
            <Route path="/simpli-path/debts" element={<Debts />} />
            <Route path="/simpli-path/stop" element={<ExOverIn />} />
            <Route path="/simpli-path/no-debt" element={<NoDebt />} />
            <Route
              path="/simpli-path/initial-emergency-fund"
              element={<InitialEmergency />}
            />
            <Route
              path="/simpli-path/retirement-match"
              element={<RetirementMatch />}
            />
            <Route
              path="/simpli-path/high-interest-debt"
              element={<HighInterestDebt />}
            />
            <Route path="/simpli-path/emergency-fund" element={<Emergency />} />
            <Route
              path="/simpli-path/moderate-interest-debt"
              element={<ModerateInterestDebt />}
            />
            <Route path="/simpli-path/retirement" element={<Retirement />} />
            <Route path="/simpli-path/finish" element={<Finish />} />
            <Route
              path="/early-retirement/intro"
              element={<EarlyRetirement />}
            />
            <Route
              path="/early-retirement/plan"
              element={<EarlyRetirementPlan />}
            />
          </Routes>
        </ScrollToTop>
      </div>
    </>
  );
}

export default App;
