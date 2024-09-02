const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // exclude: /node_modules\/(?!node-fetch)/,
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
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: true,
    // }),
    new webpack.ProgressPlugin(),
    new Dotenv({ path: path.resolve("env", process.env.ENV) }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!public/**"],
    }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/[name].[hash:6].css",
      chunkFilename: "assets/styles/[id].[hash:6].css",
    }),
  ],
};
