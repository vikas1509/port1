
import React from 'react';

function Project({ projects }) {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.name}</h3>
          <p>Description: {project.description}</p>
          <p>Link: <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
        </div>
      ))}
    </div>
  );
}

export default Project;
