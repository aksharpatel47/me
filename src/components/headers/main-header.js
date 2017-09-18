import React from "react";
import Link from "gatsby-link";
import hs from "./main-header.module.css";

export const MainHeader = () => (
  <header className={hs.header}>
    <ul>
      <li>
        <Link activeClassName={hs.activeLink} className={hs.link} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link
          exact={true}
          activeClassName={hs.activeLink}
          className={hs.link}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClassName={hs.activeLink}
          className={hs.link}
          to="/projects"
        >
          Projects
        </Link>
      </li>
    </ul>
  </header>
);
