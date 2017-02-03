var HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path");

module.exports = {
  entry: path.join(__dirname, "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.ejs")
    })
  ]
}
