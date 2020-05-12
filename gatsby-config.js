module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-166236942-1",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Shane Jennings',
    description: 'Full stack software developer',
    keywords: 'full stack, software developer, portfolio, personal website',
    url: 'https://www.shanejennings.co.uk'
  }
};
