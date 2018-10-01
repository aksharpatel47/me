import React from 'react'

export const Project = ({ project }) => (
  <>
    <h3>{project.title}</h3>
    <div>{project.description}</div>
    <div>Duration: {project.duration}</div>
    <div>Team Size: {project.team}</div>
    <div>Role: {project.role}</div>
    <div>Tech: {project.tech.join(', ')}</div>
    <br />
  </>
)
