import R from "ramda";
let { pipe, prop, sortBy, reverse } = R;

var config = {
  url: {
    repos:   data => `https://api.github.com/users/${data.name}/repos`,
    pulls:   data => `https://api.github.com/repos/${data.name}/${data.repo}/pulls`,
    pull:    data => `https://api.github.com/repos/${data.name}/${data.repo}/pulls/${data.id}`,
    commits: data => `https://api.github.com/repos/${data.name}/${data.repo}/pulls/${data.id}/commits`
  },
  pipe: {
    repos:   pipe(prop("data"), sortBy(prop("pushed_at")), reverse),
    pulls:   pipe(prop("data"), sortBy(prop("updated_at")), reverse),
    pull:    prop("data"),
    commits: prop("data")
  }
};

var resolve = (name) => ($http, $stateParams) => $http.get(config.url[name]($stateParams)).then(config.pipe[name]);

export default {
  "home": {
    url: "/",
    templateUrl: "partials/home.html",
    controller: "SearchController as search"
  },
  "main": {
    abstract: true,
    url: "/{name}",
    resolve: {
      repos: resolve("repos"),
      owner: (repos) => repos[0].owner
    },
    templateUrl: "partials/layout.html",
    controller: ($scope, repos, owner) => Object.assign($scope, { repos, owner })
  },
  "main.org": {
    url: "",
    views: {
      "repos@main": {
        templateUrl: "partials/repos.html"
      },
      "repos@pulls": {
        templateUrl: "partials/pulls.html"
      }
    }
  },
  "main.org.repo": {
    url: "/{repo}",
    resolve: {
      pulls: resolve("pulls")
    },
    views: {
      "pulls@main": {
        templateUrl: "partials/pulls.html",
        controller: ($scope, pulls) => Object.assign($scope, { pulls })
      }
    }
  },
  "main.org.repo.pull": {
    url: "/pulls/{id}",
    resolve: {
      _pull:   resolve("pull"),
      commits: resolve("commits"),
      pull:    (_pull, commits) => Object.assign(_pull, { commits })
    },
    views: {
      "pull@main": {
        templateUrl: "partials/pull.html",
        controller: ($scope, pull) => Object.assign($scope, { pull })
      },
      "results@main": {
        templateUrl: "partials/results.html",
        controller: "ValidatorController as validator"
      }
    }
  }
};