/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `http://gatsby.bitmyjob.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
       url: process.env.WPGRAPHQL_URL || `http://gatsby.bitmyjob.com/graphql`,
          },
        },
      },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    },
  ],
}
