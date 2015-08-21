System.config({
  baseURL: "src/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "*Spec": "../spec/*.js",
    "jasmineBoot": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.3/boot.js",
    "jasmineHtml": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.3/jasmine-html.js",
    "jasmine": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.3/jasmine.js"
  },

  map: {
    "angular": "npm:angular@1.4.0-rc.2",
    "angular-ui-router": "npm:angular-ui-router@0.2.15",
    "babel": "npm:babel-core@5.8.22",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@1.1.1",
    "marked": "npm:marked@0.3.3",
    "ramda": "npm:ramda@0.14.0",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:angular-ui-router@0.2.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular@1.4.0-rc.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:ramda@0.14.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
