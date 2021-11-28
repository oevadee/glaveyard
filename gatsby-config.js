const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Glaveyard`,
        description: `Easily progress your active lifestyle.`,
        author: `@oevadee`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
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
