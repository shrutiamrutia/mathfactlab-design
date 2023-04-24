require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `MathFactLab`,
    description: `Fact learning easy for students`,
    author: `@albetrios`,
    siteUrl: `https://mathfactlab.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
        implementation: require("node-sass"),
        sassOptions: {
          data: `@import "${__dirname}/src/styles/styles";`,
          includePaths: [`${__dirname}/src/assets/styles`],
          outputStyle: "compressed",
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mathfactlab`,
        short_name: `mathfactlab`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-512x512.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_TRACKING_ID,
        head: true,
        // other options
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["scss", "html", "js", "svg"],
      },
    },
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["scss", "html", "js", "svg"],
      },
    },
    `gatsby-remark-responsive-iframe`,
    {
      resolve: "gatsby-source-dropinblog",
      options: {
        id: "5133bdd5-87eb-4310-a80d-33156301c514",
      },
    },
  ],
}
