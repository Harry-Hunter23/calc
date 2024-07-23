import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainCardPage from "./Pages/MainCardPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/calculator" element={<MainCardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
