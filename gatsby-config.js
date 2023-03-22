/**
 * @type {import('gatsby').GatsbyConfig}
 */
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
