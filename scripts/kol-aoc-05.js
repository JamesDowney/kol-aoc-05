"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: function() {
    return main;
  }
});
module.exports = __toCommonJS(main_exports);

// kolmafia-polyfill.js
var kolmafia = require("kolmafia"), console = {
  log: kolmafia.print
};

// src/main.ts
var import_kolmafia = require("kolmafia");
function main() {
  var stacks = [["S", "C", "V", "N"], ["Z", "M", "J", "H", "N", "S"], ["M", "C", "T", "G", "J", "N", "D"], ["T", "D", "F", "J", "W", "R", "M"], ["P", "F", "H"], ["C", "T", "Z", "H", "J"], ["D", "P", "R", "Q", "F", "S", "L", "Z"], ["C", "S", "L", "H", "D", "F", "P", "W"], ["D", "S", "M", "P", "F", "N", "G", "Z"]], stacks2 = [["S", "C", "V", "N"], ["Z", "M", "J", "H", "N", "S"], ["M", "C", "T", "G", "J", "N", "D"], ["T", "D", "F", "J", "W", "R", "M"], ["P", "F", "H"], ["C", "T", "Z", "H", "J"], ["D", "P", "R", "Q", "F", "S", "L", "Z"], ["C", "S", "L", "H", "D", "F", "P", "W"], ["D", "S", "M", "P", "F", "N", "G", "Z"]], input = (0, import_kolmafia.fileToBuffer)("input.txt").trim().split(/\n/g).map(function(element) {
    return element.split(/(move|from|to)/g);
  }).map(function(element) {
    return [parseInt(element[2]), parseInt(element[4]), parseInt(element[6])];
  });
  input.forEach(function(element) {
    for (var i = 0; i < element[0]; i++)
      stacks[element[2] - 1].push(stacks[element[1] - 1].pop());
  }), input.forEach(function(element) {
    for (var subStack = [], i = 0; i < element[0]; i++)
      subStack.push(stacks2[element[1] - 1].pop());
    subStack.reverse().forEach(function(letter) {
      return stacks2[element[2] - 1].push(letter);
    });
  });
  var solution1 = stacks.map(function(element) {
    return element[element.length - 1];
  }).join(""), solution2 = stacks2.map(function(element) {
    return element[element.length - 1];
  }).join("");
  (0, import_kolmafia.print)(solution1), (0, import_kolmafia.print)(solution2);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
