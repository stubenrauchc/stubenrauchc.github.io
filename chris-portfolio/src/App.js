import React, { useState } from 'react';
import './App.css';
import Project1 from './StitchMarked';
import Project2 from './StitchMarked2';

const projects = [
  {
    name: 'StitchMarked',
    component: <Project1 />
  },
  {
    name: 'StitchMarked2',
    component: <Project2 />
  },
];

const Desktop = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (index) => {
    setSelectedProject(index);
  };

  return (
    <div className="container">
      {projects.map((project, index) => (
        <div key={index} style={iconStyles} onClick={() => handleClick(index)}>
          {project.name}
        </div>
      ))}
      {selectedProject !== null && (
        <div style={windowStyles}>
          <button style={closeButtonStyles} onClick={() => setSelectedProject(null)}>
            X
          </button>
          {projects[selectedProject].component}
        </div>
      )}
    </div>
  );
};

const iconStyles = {
  width: 100,
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  cursor: 'pointer'
};

const windowStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: 20,
  border: '2px solid blue',
  borderTop: '20px solid blue'
};

const closeButtonStyles = {
  position: 'absolute',
  top: '-18px',
  left: '-0px',
  width: '18px',
  height: '18px',
  borderRadius: '0%',
  backgroundColor: 'red',
  color: '#e6e6e6',
  textAlign: 'top',
  fontSize: '12px',
  cursor: 'pointer',
  paddingTop: '-1px',
  paddingLeft: '4px',
  paddingBottom: '4px'
  
};


export default Desktop;
