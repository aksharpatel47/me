import React from "react";
import Helmet from "react-helmet";
import { MainHeader } from "../components/headers/main-header";
require("prismjs/themes/prism-solarizedlight.css");

const Header = () => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <MainHeader />
  </div>
);

export default ({ children }) => (
  <div style={{ maxWidth: "700px", margin: "0 auto" }}>
    <Helmet
      title="Akshar's Blog"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <div
      style={{
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);
