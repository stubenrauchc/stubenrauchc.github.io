import React, { useState } from 'react';
import './App.css';
import Project1 from './StitchMarked';
import Project2 from './StitchMarked2';
import Project3 from './LibraryOfChris';

const projects = [
  {
    name: 'StitchMarked',
    component: <Project1 />
  },
  {
    name: 'StitchMarked2',
    component: <Project2 />
  },
  {
    name: 'LibraryOfChris',
    component: <Project3 />
  },
];

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  borderBottom: '25px solid blue',
  width: '100vw',
  padding: 0,
  position: 'relative',
};

const Desktop = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [startButtonClicked, setStartButtonClicked] = useState(false);

  const handleClick = (index) => {
    setSelectedProject(index);
  };
  const handleStartButtonClick = () => {
    setStartButtonClicked(!startButtonClicked);
  };

  return (
    <div className="container" style={containerStyles}>
      <div style={startButtonContainerStyles} onClick={handleStartButtonClick}>
        WIP
      </div>
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
       {startButtonClicked && (
        <div style={startMenuStyles}>
          <button>Log In</button>
          <button>Register</button>
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
  top: '55%',
  left: '50%',
  
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  paddingBottom: 20,
  paddingTop: 10,
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

const startButtonContainerStyles = {
  position: 'absolute',
  top: '100%',
  left: '-0px',
  width: '100px',
  height: '25px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#00ff00',
  borderRight: '2px solid blue',
  cursor: 'pointer'
};

const startMenuStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '0',
  left: '0',
  backgroundColor: '#fff',
  border: '2px solid blue',
  padding: '10px'
};

export default Desktop;