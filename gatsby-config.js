const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Glaveyard`,
        description: `Easily progress your active lifestyle.`,
        author: `@oevadee`,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: ['Nosifer', 'cursive'],
                display: 'swap',
            },
        },
    ],
};
