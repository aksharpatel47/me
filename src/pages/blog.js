import React from 'react'
import Layout from '../components/default-layout'
import { graphql, Link } from 'gatsby'

export default ({ data }) => (
  <Layout>
    <h2>Blog</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
        </Link>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___update, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            update
            published
            _PARENT
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
