import React from "react"
import Link from "gatsby-link"
import hs from "./main-header.module.css"

export const MainHeader = () => (
  <header className={hs.header}>
    <Link className={hs.link} to="/">
      <h1>Akshar's Blog</h1>
    </Link>
    <ul>
      <li>
        <Link activeClassName={hs.activeLink} className={hs.link} to="/about">
          About
        </Link>
      </li>
    </ul>
  </header>
)
