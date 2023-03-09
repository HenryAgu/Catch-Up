import React from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { useSelector } from "react-redux";

const Dashboard = (props) => {
  const projects = useSelector(state => state.project.projects)
  return (
    <div
      className="dashboard"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="project_list">
        <ProjectList projects={projects}/>
      </div>
      <div className="notification">
        <Notifications />
      </div>
    </div>
  );
};




export default Dashboard;
