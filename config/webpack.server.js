const path = require("path");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const serverConfig = {
  target: "node", // 指定打包的代码是在服务器端还是客户端
  mode: "development",
  entry: path.resolve(__dirname, "../server/index.ts"),
  output: {
    path: path.resolve("build"),
    filename: "index.js",
  },
  externals: [
    nodeExternals({
      // allowlist: ["node-fetch", "fetch-headers", "express"],
    }),
  ],
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src", "public"),
          to: "public",
          globOptions: {
            ignore: ["**/index.html"], // 忽略所有 index.html 文件
          },
        },
      ],
    }),
  ],
};
module.exports = merge(common, serverConfig);
