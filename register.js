import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { setUncaughtExceptionCaptureCallback } from "node:process";
setUncaughtExceptionCaptureCallback((err) => {
  process.exit(1);
});
register("@swc-node/register/esm", pathToFileURL("./"));
// import module from "node:module";

// /**
//  * @typedef Version {[number, number, number]}
//  */

// /**
//  * @type {Version}
//  */
// const nodeVersion = process.versions.node.split(".").map(Number);

// /**
//  * @param {Version} version
//  * @return {number}
//  */
// const compareNodeVersion = (version) =>
//   nodeVersion[0] - version[0] ||
//   nodeVersion[1] - version[1] ||
//   nodeVersion[2] - version[2];

// export const supportsModuleRegister = compareNodeVersion([20, 6, 0]) >= 0;

// if (supportsModuleRegister) {
//   module.register("@swc-node/register/esm", {
//     parentURL: import.meta.url,
//   });
// }

// export * from "@swc-node/register/esm";
