import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import LandingPagePage from "./pages/landingPage/LandingPagePage";
import './globalstyles.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<LandingPagePage />} /> 
      </Routes>
    </div>
  );
}
