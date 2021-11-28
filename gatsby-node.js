const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    });
};

exports.createPages = ({ actions }) => {
    actions.createPage({
        path: '/dsg',
        component: path.resolve('src/templates/dsg.tsx'),
        defer: true,
    });
};
