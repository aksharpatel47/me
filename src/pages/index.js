import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => (
  <div style={{ textAlign: 'center', marginTop: '1rem' }}>
    <title>Akshar Patel</title>
    <h1>Akshar Patel</h1>
    <h2>Full Stack Dev</h2>
    <h3>AI & ML Student</h3>
    <div>
      <Link to="blog">Blog</Link>
      &nbsp;
      <Link to="portfolio">Portfolio</Link>
    </div>
    <div>
      <a
        href="https://twitter.com/aksharpatel47"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      &nbsp;
      <a
        href="https://github.com/aksharpatel47"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      &nbsp;
      <a
        href="https://linkedin.com/in/aksharpatel47"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      &nbsp;
      <a href="mailto:me@aksharpatel.com">Email</a>
    </div>
  </div>
)

export default IndexPage
