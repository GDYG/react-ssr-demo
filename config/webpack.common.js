const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!node-fetch)/,
        use: {
          loader: "swc-loader",
        },
      },
      {
        test: /\.css|scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // 保持原始文件名
              outputPath: "assets/images/", // 输出到 public/images 目录
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new Dotenv({ path: path.resolve("env", ".dev.env") }),
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "./src/public/index.html",
    //   filename: "./index.html",
    // }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/[name].css",
      chunkFilename: "assets/styles/[id].css",
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "../src", "assets/images"),
    //       to: "assets/images",
    //     },
    //   ],
    // }),
    // new webpack.DefinePlugin({
    // "process.env": {
    //   NODE_ENV: JSON.stringify("production"),
    // },
    // }),
  ],
};
