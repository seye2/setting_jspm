System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "src/js/lib/library.js",
      "npm:lodash-node@3.10.2/modern/lang/isEqual.js",
      "npm:jquery@1.12.0.js",
      "npm:lodash-node@3.10.2/modern/internal/baseIsEqual.js",
      "npm:lodash-node@3.10.2/modern/internal/bindCallback.js",
      "npm:jquery@1.12.0/dist/jquery.js",
      "npm:lodash-node@3.10.2/modern/internal/isObjectLike.js",
      "npm:lodash-node@3.10.2/modern/utility/identity.js",
      "npm:lodash-node@3.10.2/modern/internal/baseIsEqualDeep.js",
      "npm:lodash-node@3.10.2/modern/lang/isObject.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "npm:lodash-node@3.10.2/modern/internal/equalObjects.js",
      "npm:lodash-node@3.10.2/modern/lang/isArray.js",
      "npm:lodash-node@3.10.2/modern/lang/isTypedArray.js",
      "npm:lodash-node@3.10.2/modern/internal/equalByTag.js",
      "npm:lodash-node@3.10.2/modern/internal/equalArrays.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:lodash-node@3.10.2/modern/internal/arraySome.js",
      "npm:lodash-node@3.10.2/modern/object/keys.js",
      "npm:lodash-node@3.10.2/modern/internal/getNative.js",
      "npm:lodash-node@3.10.2/modern/internal/isLength.js",
      "npm:process@0.11.2.js",
      "npm:lodash-node@3.10.2/modern/internal/shimKeys.js",
      "npm:lodash-node@3.10.2/modern/lang/isNative.js",
      "npm:process@0.11.2/browser.js",
      "npm:lodash-node@3.10.2/modern/internal/isArrayLike.js",
      "npm:lodash-node@3.10.2/modern/internal/isIndex.js",
      "npm:lodash-node@3.10.2/modern/lang/isFunction.js",
      "npm:lodash-node@3.10.2/modern/lang/isArguments.js",
      "npm:lodash-node@3.10.2/modern/object/keysIn.js",
      "npm:lodash-node@3.10.2/modern/internal/getLength.js",
      "npm:lodash-node@3.10.2/modern/internal/baseProperty.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "jquery1.12.0": "npm:jquery@1.12.0",
    "lodash-node": "npm:lodash-node@3.10.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery@1.12.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash-node@3.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
