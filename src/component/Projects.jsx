/* eslint-disable no-unused-vars */
import React from 'react'
import projects from './Projects.json'

const Projects = () => {
  return (
    <div className='projects-content'>
        {projects.map((project) => (
            <div key={project.id} className='projects'>
                <h3>{project.name}</h3>
                <img src={project.image} alt={project.name} className='project-image' />
                <p>{project.description}</p>
                <div className="project-link">
                    <a href={project.github} target='blank'>GitHub</a>
                    <a href={project.deploy} target='blank'>Live Demo</a>
                </div>
                <p><strong>Skills</strong> {project.skills}</p>
            </div>
        ))}
    </div>
  )
}

export default Projects