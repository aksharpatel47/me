import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { MainHeader } from "../components/headers/main-header";

const Header = () => (
  <div
    style={{
      backgroundColor: "#3F51B5",
      marginBottom: "1.45rem"
    }}
  >
    <MainHeader />
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
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
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
