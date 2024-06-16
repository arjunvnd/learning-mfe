const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      // The name used by container app to identify remote
      name: "products",
      // filename is a manifest file. Convention is to keep it as remoteEntry.js
      filename: "remoteEntry.js",
      exposes: {
        // List of the files I want to expose
        "./ProductsIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
