const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Akshar's Blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, "src/pages"),
        name: `pages`,
      }
    },
    `gatsby-transformer-remark`
  ],
}
