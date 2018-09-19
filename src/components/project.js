import React from 'react'

export const Project = ({ project }) => (
  <div>
    <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
      {project.title}
    </h3>
    <div>{project.description}</div>
    <div>Team Size: {project.team}</div>
    <div>Duration: {project.duration}</div>
    <div>Role: {project.role}</div>
    <div>Tech Used: {project.tech.join(', ')}</div>
  </div>
)
