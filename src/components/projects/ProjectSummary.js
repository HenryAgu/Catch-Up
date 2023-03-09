import React from "react";

const ProjectSummary = ({project}) => {
  return (
    <div className="project_card">
      <span>{project.title}</span>
      <p>Posted by Henry Agu</p>
      <p>3rd September </p>
    </div> 
  );
};

export default ProjectSummary;
