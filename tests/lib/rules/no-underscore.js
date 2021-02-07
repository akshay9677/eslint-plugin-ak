"use strict";

var rule = require("../../../lib/rules/no-underscore"),
  RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

const parserOptions = {
  ecmaVersion: 2020,
  sourceType: "module",
};

ruleTester.run("no-underscore", rule, {
  valid: ["var a = 'underscore'"],

  invalid: [
    {
      code: "import _ from 'underscore'",
      errors: [
        {
          message: "Underscore package use is prohibited use Loadash instead",
          type: "Literal",
        },
      ],
      parserOptions,
    },
  ],
});
