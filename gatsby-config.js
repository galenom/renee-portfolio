module.exports = {
  siteMetadata: {
    title: `Renee Alvarez`,
    description: `Portfolio showcasing works of Graphic Designer, Renee Alvarez`,
    author: `@galenom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify-identity-widget',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `links`,
        path: `${__dirname}/src/data/navigation`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/data/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `illustrations`,
        path: `${__dirname}/src/data/illustrations`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Renee Alvarez`,
        short_name: `Renee Alvarez`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/graphic-renee.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
