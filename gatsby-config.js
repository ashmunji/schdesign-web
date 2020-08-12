module.exports = {
  siteMetadata: {
    title: 'Ashwini Munji Blog',
    description: 'Ashwini Munji Blog',
    language: 'en',
    email: 'hello@spacenarrative.com',
    siteBehanceURL: '',
    siteFacebookURL: '',
    siteInstagramURL: '',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        name: 'Ashwini Munji Blog',
        short_name: 'ashblog',
        start_url: '/',
        background_color: '#FDFFFC',
        theme_color: '#f8485e',
        display: 'standalone',
        icon: 'src/assets/favicon.png',
        legacy: true,
        /* eslint-enable */
      },
    },
    'gatsby-plugin-remove-serviceworker',
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};
