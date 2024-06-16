const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      // name - only needed for remote repos. Added for clarity in container repo
      name: "container",
      // remote - list of projects that container looks for
      remotes: {
        // import "products/ProductsIndex"; when importing in a file the import statement looks for products inside node_modules
        // then check if we have defined a product remote key inside module federation
        // RHS - products has to match the name inside the remote repo
        products: "products@http://localhost:8081/remoteEntry.js",
        carts: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
