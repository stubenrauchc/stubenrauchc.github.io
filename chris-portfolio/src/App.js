import React, { useState } from 'react';
import Project1 from './StitchMarked';
//import Project2 from './Project2';
//import Project3 from './Project3';

const projects = [
  {
    name: 'StitchMarked',
    component: <Project1 />
  }
  // {
  //   name: 'Project 2',
  //   component: <Project2 />
  // },
  // {
  //   name: 'Project 3',
  //   component: <Project3 />
  // }
];

const Desktop = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (index) => {
    setSelectedProject(index);
  };

  return (
    <div style={styles.container}>
      {projects.map((project, index) => (
        <div key={index} style={styles.icon} onClick={() => handleClick(index)}>
          {project.name}
        </div>
      ))}
      {selectedProject !== null && (
        <div style={styles.window}>
          {projects[selectedProject].component}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f0f0f0'
  },
  icon: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    cursor: 'pointer'
  },
  window: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: 20
  }
};

export default Desktop;
