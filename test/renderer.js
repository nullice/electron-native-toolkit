let os = require("os");
const path = require("path");

// 在不同系统载入不同模拟的模块目录
console.log("[os]", os.platform, os.platform == "win32" ? "windows" : "mac-os");
const PATH_APP_NODE_MODULES = path.join(
  __dirname,
  "..",
  os.platform == "win32" ? "windows" : "mac-os",
  "node_modules"
);
require("module").globalPaths.push(PATH_APP_NODE_MODULES);

// 载入本地模块

let sharp = require("sharp");
console.log("[sharp]", sharp);
global.sharp = sharp;

let sqlite3 = require("sqlite3");
console.log("[sqlite3]", sqlite3);
global.sqlite3 = sqlite3;

sharp(__dirname + "/input.jpg")
  .png()
  .toFile(__dirname + "/out.png");
