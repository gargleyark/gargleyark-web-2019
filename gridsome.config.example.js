// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'gargleyark',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '%space%', // required
        accessToken: '%token%', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
};
