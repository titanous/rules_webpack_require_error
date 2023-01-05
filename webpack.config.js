const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
    devtool: false,
    plugins: [new SourceMapDevToolPlugin({})],
}