module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
    config.plugins.push(new webpack.EnvironmentPlugin(['REACT_APP_GOOGLE_API_STRING']))
    return config
}