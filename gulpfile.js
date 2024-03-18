const pkg = require("gulp");
const swc = require("gulp-swc");
const webpack = require("webpack-stream");
const concat = require("gulp-concat");
// import _swcrc from "./.swcrc";

// const _entry = ["./server/*.js"];
const _entry = ["./server/*.js"];
const { src, dest, watch, series, task } = pkg;

task("default", () => {
  return (
    src(_entry)
      .pipe(
        swc({
          cwd: process.cwd(),
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
            target: "esnext",
          },
          module: {
            type: "commonjs",
          },
        })
      )
      // .pipe(
      //   webpack({
      //     module: {
      //       rules: [
      //         {
      //           test: /\.(js|jsx|ts|tsx)$/,
      //           exclude: /node_modules/,
      //           use: {
      //             loader: "swc-loader",
      //           },
      //         },
      //       ],
      //     },
      //   })
      // )
      .pipe(concat("index.js"))
      .pipe(dest("dist"))
  );
});

task("watch", () => {
  watch(_entry, series("default"));
});
