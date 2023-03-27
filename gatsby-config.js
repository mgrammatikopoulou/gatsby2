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
            // Specify the URL of the WordPress source
            baseUrl: `gatsby.bitmyjob.com/`,
            protocol: `http`,
            // Indicates if a site is hosted on WordPress.com
            hostingWPCOM: false,
            // Specify which URL structures to fetch
            includedRoutes: [
              '**/posts',
            ]
        }
    },
  ],
}
