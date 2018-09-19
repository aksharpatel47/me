import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => (
  <div>
    <title>Akshar Patel</title>
    <h1>Akshar Patel</h1>
    <h2>Full Stack Dev</h2>
    <h2>AI & ML Student</h2>
    <div>
      <Link to="blog">Blog</Link>
      &nbsp;
      <Link to="portfolio">Portfolio</Link>
    </div>
    <div>
      <a href="https://twitter.com/aksharpatel47" target="_blank">
        Twitter
      </a>
      &nbsp;
      <a href="https://github.com/aksharpatel47" target="_blank">
        Github
      </a>
      &nbsp;
      <a href="https://linkedin.com/in/aksharpatel47" target="_blank">
        Linkedin
      </a>
      &nbsp;
      <a href="mailto:me@aksharpatel.com">Email</a>
    </div>
  </div>
)

export default IndexPage
