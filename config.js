System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "*Spec": "spec/*.js",
    "angular": "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.0-rc.1/angular.min.js",
    "uiRouter": "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.14/angular-ui-router.min.js",
    "ramda": "https://cdnjs.cloudflare.com/ajax/libs/ramda/0.14.0/ramda.min.js",
    "jasmineBoot": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.3/boot.js",
    "jasmineHtml": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.3/jasmine-html.js",
    "jasmine": "https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.3/jasmine.js",
    "*": "src/*.js"
  }
});

System.config({
  "meta": {
    "angular": {
      "format": "global"
    }
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.2.17",
    "babel-runtime": "npm:babel-runtime@5.2.17",
    "core-js": "npm:core-js@0.9.8",
    "marked": "npm:marked@0.3.3",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.9.8": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

