const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  // mode: "production",
  // watch: true,
  // devtool: "inline-source-map",
  entry: path.resolve(__dirname, "../src/client.entry.tsx"),
  output: {
    path: path.resolve("build/public"),
    filename: "bundle.js",
    // publicPath: "/",
    // chunkFilename: "scripts/[name].[hash:5].js",
    // assetModuleFilename: "images/[name].[hash:5][ext]",
  },
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, "..", "public"),
  //   },
  //   hot: true,
  //   port: process.env.PORT || 3000,
  //   historyApiFallback: {
  //     disableDotRule: true,
  //   },
  // },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "./src/public/index.html",
    //   filename: "./index.html",
    // }),
  ],
});
