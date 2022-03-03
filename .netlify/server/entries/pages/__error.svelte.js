var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _error,
  load: () => load
});
var import_index_2dc61825 = require("../../chunks/index-2dc61825.js");
function load({ error, status }) {
  return { props: { error, status } };
}
const _error = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  let { status } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `
${$$result.head += `${$$result.title = `<title>Something wrong | NameAuditor</title>`, ""}<meta name="${"robots"}" content="${"noindex nofollow"}" data-svelte="svelte-r8odq2"><html lang="${"en"}" data-svelte="svelte-r8odq2"></html>`, ""}

<div class="${"flex h-screen bg-gray-100 justify-items-center"}">
	<div class="${"container m-auto px-4"}"><section class="${"py-8 px-4 text-center"}"><div class="${"max-w-auto mx-auto"}"><div class="${"md:max-w-lg mx-auto text-9xl font-bold"}">${(0, import_index_2dc61825.e)(status)}</div>
				<h2 class="${"mt-8 uppercase text-xl lg:text-5xl font-black"}">We are sorry, Somthing went wrong!
				</h2>
				<p class="${"mt-6 uppercase text-sm lg:text-base text-gray-900"}">${(0, import_index_2dc61825.e)(error.message)}</p>
				<a href="${"/"}" class="${"mt-6 bg-blue-500 hover:bg-blue-700 text-white font-light py-4 px-6 rounded-full inline-block uppercase shadow-md"}">Back To Homepage</a></div></section></div></div>`;
});
module.exports = __toCommonJS(stdin_exports);
