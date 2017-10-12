import React from "react"
import { rhythm } from "../utils/typography"
import Link from "gatsby-link"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={node.fields.slug}>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </Link>
          </h3>
          <p>
            {node.excerpt}
            <Link to={node.fields.slug}>more.</Link>
          </p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
