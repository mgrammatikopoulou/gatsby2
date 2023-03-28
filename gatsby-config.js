/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Your Site Title Here",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://gatsby.bitmyjob.com/graphql",
        httpOptions: {
            verify: false
}
        schema: {
          perPage: 100,
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
