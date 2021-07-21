const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `About.me`,
        short_name: `About.me`,
        start_url: `/`,
        background_color: `#E5E7EB`,
        theme_color: `#6D28D9`,
        display: `standalone`,
        icon: 'src/assets/images/icon.png'
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Escolha a cor da barra de carregamento(opicional).
        color: `violet`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Poppins`,
            variants: [`400`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    `gatsby-plugin-offline`,
  ]
};
