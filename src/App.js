// stylesheet
import "./App.css";

// components
import Navbar from "./components/Navbar";

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home Component
import Home from "./Pages/Home";

// News Menu Pages
import AllCategories from "../src/Pages/NewsMenuPages/AllCategories";
import Tech from "./Pages/NewsMenuPages/Tech";
import Finance from "./Pages/NewsMenuPages/Finance";
import TopHeadlines from "./Pages/NewsMenuPages/TopHeadlines";
import NewsMenu from "./components/NewsMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Home />
          <Routes>
            <Route exact path="/all-categories" element={<AllCategories />} />
            <Route exact path="/tech" element={<Tech />} />
            <Route exact path="/finance" element={<Finance />} />
            <Route exact path="/top-headlines" element={<TopHeadlines />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
