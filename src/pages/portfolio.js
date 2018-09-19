import React from 'react'
import Portfolio from '../data/portfolio.json'
import { Project } from '../components/project'

export default class PortfolioPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = Portfolio
  }

  render() {
    const projects = this.state.projects.map((proj, i) => (
      <Project project={proj} key={i} />
    ))
    return (
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <h2>Portfolio</h2>
        {projects}
      </div>
    )
  }
}
