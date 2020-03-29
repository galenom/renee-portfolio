const ImageRemarkPlugins = [
  {
    resolve: `gatsby-remark-relative-images`,
    options: {
      name: 'assets'
    }
  },
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 590
    }
  }
]

module.exports = {
  siteMetadata: {
    title: `Renee Alvarez`,
    description: `Portfolio showcasing works of Graphic Designer, Renee Alvarez`,
    author: `@galenom`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-identity-widget`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-projects`,
        path: `${__dirname}/src/data/projects`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [...ImageRemarkPlugins]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-menu`,
        path: `${__dirname}/src/data/menu`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [...ImageRemarkPlugins]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-gallery-homepage`,
        path: `${__dirname}/src/data/galleries/homepage`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [...ImageRemarkPlugins]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-gallery-illustrations`,
        path: `${__dirname}/src/data/galleries/illustrations`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [...ImageRemarkPlugins]
      }
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
        icon: `static/assets/graphic-renee.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
