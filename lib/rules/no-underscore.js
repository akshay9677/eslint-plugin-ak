/**
 * @fileoverview Avoiding the use of underscore package in repo
 * @author Akshay
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Avoiding the use of underscore package in repo",
      category: "Fill me in",
      recommended: false,
    },
    fixable: null,
  },

  create: function (context) {
    return {
      Literal: function (node) {
        const isUnderscore =
          node.value === "underscore" &&
          node.parent.type === "ImportDeclaration";
        if (isUnderscore) {
          context.report({
            node,
            message: "Underscore package use is prohibited use Loadash instead",
          });
        }
      },
    };
  },
};
