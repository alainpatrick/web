var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["Box-7.png", "box-8.jpg", "box-blue-bg.jpeg", "box-on-table.png", "favicon.ico", "green.mp4", "hero.jpg", "meet_box.jpg", "modular.webp", "own-your-data-b.jpg", "partners/contango.png", "partners/crust.png", "partners/cudos.png", "partners/dark/contango.png", "partners/dark/crust.png", "partners/dark/cudos.png", "partners/dark/delta-fund.png", "partners/dark/dfinity.png", "partners/dark/dora-hacks.png", "partners/dark/filecoin.png", "partners/dark/master-ventures.png", "partners/dark/max-stealth.png", "partners/dark/meta-edge-ventures.png", "partners/dark/mkd.png", "partners/dark/odd-gems.png", "partners/dark/outlier-ventures.png", "partners/dark/pinnacle.png", "partners/dark/power-one.png", "partners/dark/protocol-labs.png", "partners/dark/tenzor-capital.png", "partners/delta-fund.png", "partners/dfinity.png", "partners/dora-hacks.png", "partners/filecoin.png", "partners/master-ventures.png", "partners/max-stealth.png", "partners/meta-edge-ventures.png", "partners/mkd.png", "partners/odd-gems.png", "partners/outlier-ventures.png", "partners/pinnacle.png", "partners/power-one.png", "partners/protocol-labs.png", "partners/tenzor-capital.png", "partners/white/contango.png", "partners/white/crust.png", "partners/white/cudos.png", "partners/white/delta-fund.png", "partners/white/dfinity.png", "partners/white/dora-hacks.png", "partners/white/filecoin.png", "partners/white/master-ventures.png", "partners/white/max-stealth.png", "partners/white/meta-edge-ventures.png", "partners/white/mkd.png", "partners/white/odd-gems.png", "partners/white/outlier-ventures.png", "partners/white/pinnacle.png", "partners/white/power-one.png", "partners/white/protocol-labs.png", "partners/white/tenzor-capital.png", "pre-order.jpg", "preorder-poster.jpg", "robots.txt"]),
  _: {
    mime: { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".ico": "image/vnd.microsoft.icon", ".mp4": "video/mp4", ".webp": "image/webp", ".txt": "text/plain" },
    entry: { "file": "start-67157a9c.js", "js": ["start-67157a9c.js", "chunks/vendor-6a864dc9.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      }
    ]
  }
};
module.exports = __toCommonJS(stdin_exports);
