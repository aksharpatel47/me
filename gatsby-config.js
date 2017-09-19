const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Akshar's Blog`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, "src/pages"),
        name: `pages`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Akshar's Blog",
        short_name: "AksharPatel",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#3F51B5",
        display: "standalone",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/me-192.jpg`,
            sizes: `192x192`,
            type: `image/jpg`
          },
          {
            src: `/favicons/me-512.jpg`,
            sizes: `512x512`,
            type: `image/jpg`
          }
        ]
      }
    }
  ]
};
