// stylesheet
import "./App.css";

// components
import Navbar from "./components/Navbar";

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
