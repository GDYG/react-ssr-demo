const path = require("path");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

const serverConfig = {
  target: "node", // 指定打包的代码是在服务器端还是客户端
  mode: "production",
  entry: path.resolve(__dirname, "../server/index.js"),
  output: {
    path: path.resolve(process.cwd(), "build"),
    filename: "index.js",
    // libraryTarget: "commonjs2",
  },
  // externals: [
  //   nodeExternals({
  //     allowlist: ["node-fetch", "fetch-headers", "express"],
  //   }),
  // ],
};

module.exports = merge(common, serverConfig);
