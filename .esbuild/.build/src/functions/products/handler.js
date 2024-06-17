var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/functions/products/handler.ts
var handler_exports = {};
__export(handler_exports, {
  listProducts: () => listProducts
});
module.exports = __toCommonJS(handler_exports);
var listProducts = async (event) => {
  try {
    console.log("Hello, Lambda 1!");
    const params = JSON.parse(event.body);
    console.log("Hello-->>>", event.body);
    return {
      statusCode: 200,
      body: "Hola mundo"
    };
  } catch (error) {
    console.error("ERROR =>", error);
    throw new Error("Error", error);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  listProducts
});
