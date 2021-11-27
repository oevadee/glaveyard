module.exports = {
    siteMetadata: {
        title: `Glaveyard`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                jsxPragma: `jsx`,
                allExtensions: true,
            },
        },
    ],
};
