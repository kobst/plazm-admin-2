

var webpack = require('webpack');

module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
    // config.plugins.push(new webpack.EnvironmentPlugin())
    const eplugin = new webpack.DefinePlugin({
        'REACT_APP_GOOGLE_API_STRING': JSON.stringify(process.env.REACT_APP_GOOGLE_API_STRING),
      });

    config.plugins.push(eplugin)
    return config
}