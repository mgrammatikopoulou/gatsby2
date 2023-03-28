/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
          wordPressUrl: `http://gatsby.bitmyjob.com/`,
        url: process.env.WPGRAPHQL_URL || `http://gatsby.bitmyjob.com/graphql/`,
      },
    },
  ],
}