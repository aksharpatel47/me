import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  const tags = (post.frontmatter.tags || []).map(t => (
    <li
      style={{
        padding: "0.05rem 0.35rem",
        marginRight: "10px",
        background: "lightgrey",
        borderRadius: "5px"
      }}
      key={t}
    >
      {t}
    </li>
  ));
  return (
    <div>
      <h2>{post.frontmatter.title}</h2>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          margin: "0",
          padding: 0,
          fontSize: "0.75rem"
        }}
      >
        {tags}
      </ul>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`;
