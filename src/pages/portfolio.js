import React from 'react'
import Portfolio from '../data/portfolio.json'
import { Project } from '../components/project'
import Layout from '../components/default-layout'

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
      <Layout style={{ textAlign: 'center', marginTop: '1rem' }}>
        <div>
          <h2>Portfolio</h2>
          {projects}
        </div>
      </Layout>
    )
  }
}
