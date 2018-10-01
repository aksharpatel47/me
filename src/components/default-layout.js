import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

const staticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ children }) => <>{children}</>
