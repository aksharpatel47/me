import React from 'react'

import { StaticQuery, graphql, Link } from 'gatsby'

const staticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const renderLayout = (data, children) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      padding: '1rem',
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyItems: 'start',
      }}
    >
      <Link to="/" style={{ alignSelf: 'center' }}>
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      <Link to="/blog" style={{ alignSelf: 'center' }}>
        <h3>Blog</h3>
      </Link>
      <Link to="/portfolio" style={{ alignSelf: 'center' }}>
        <h3>Portfolio</h3>
      </Link>
    </div>
    {children}
  </div>
)

export default ({ children }) => (
  <StaticQuery
    query={staticQuery}
    render={data => renderLayout(data, children)}
  />
)
