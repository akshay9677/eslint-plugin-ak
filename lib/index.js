/**
 * @fileoverview Tutorial for writing plugins in eslint
 * @author Akshay
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  rules: {
    "no-underscore": require("./rules/no-underscore"),
  },
  configs: {
    base: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      env: {
        browser: true,
        es6: true,
      },
      plugins: ["ak"],
      rules: {
        "ak/no-underscore": 2,
      },
    },
  },
};
