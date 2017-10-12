import React from "react"

function renderTableOfContents(toc) {
  if (
    toc === null ||
    toc === undefined ||
    typeof toc !== "string" ||
    toc.length === 0
  ) {
    return null
  }

  return (
    <div>
      <h3>Table Of Contents</h3>
      <div dangerouslySetInnerHTML={{ __html: toc }} />
    </div>
  )
}

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(data)
  const tags = (post.frontmatter.tags || []).map(t => (
    <li
      style={{
        padding: "0.05rem 0.35rem",
        marginRight: "10px",
        background: "lightgrey",
        borderRadius: "5px",
      }}
      key={t}
    >
      {t}
    </li>
  ))
  const disqusShortname = "aksharpatel47-1"
  const disqusConfig = {
    url: "https://aksharpatel47.com/" + post.fields.slug,
    identifier: post.fields.slug,
    title: post.frontmatter.titles,
  }
  return (
    <div>
      <h2>{post.frontmatter.title}</h2>
      {renderTableOfContents(post.tableOfContents)}
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          margin: "0",
          padding: 0,
          fontSize: "0.75rem",
        }}
      >
        {tags}
      </ul>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        tags
      }
      fields {
        slug
      }
    }
  }
`
