const webpack = require('webpack')
module.exports = {
  plugins: {
    autoprefixer: {}
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
}
