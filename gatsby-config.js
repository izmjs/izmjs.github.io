module.exports = {
  siteMetadata: {
    siteTitle: `izmjs`,
    defaultTitle: `izmjs`,
    siteTitleShort: `izmjs`,
    siteDescription: `a Highly maintainable & modular NodeJS project architecture`,
    siteUrl: `https://github.com/izmjs/izmjs`,
    siteAuthor: "izmjs",
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#A16941`,
    basePath: `/`,
    footer: `izmjs ${new Date().getFullYear()}`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/izmjs/izmjs.github.io`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
