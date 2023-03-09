// stylesheet
import "./App.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route path="/project/:id" element={<ProjectDetails/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/create" element={<CreateProject/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
