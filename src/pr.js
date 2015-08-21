import angular  from "angular";
import uiRouter from "angular-ui-router";
import marked   from "marked";

import Validator from "Validator";
import HasSubject from "rules/HasSubject";
import SubjectFormat from "rules/SubjectFormat";
import SquashedCommits from "rules/SquashedCommits";
import ValidSubjectType from "rules/ValidSubjectType";

import RootController from "ui/RootController";
import SearchController from "ui/SearchController";
import ValidatorController from "ui/ValidatorController";

import states from "ui/states";

var prjs = (angular.angular || angular).module("prjs", ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    (angular.angular || angular).forEach(states, (state, name) => $stateProvider.state(name, state));
    $urlRouterProvider.otherwise('/');
  }])
  .controller("RootController", RootController)
  .controller("SearchController", SearchController)
  .controller("ValidatorController", ValidatorController)
  .filter("md", ['$sce', $sce => { return (text, opts) => $sce.trustAsHtml(marked(text, opts || {})); }])
  .filter("valid", ['$sce', $sce => { return (val) => $sce.trustAsHtml((val && '&#10004;') || '&#10008;'); }])
  .provider("validator", () => {
    let inst = new Validator([
      new HasSubject(),
      new SubjectFormat(),
      new ValidSubjectType(),
      new SquashedCommits()
    ]);
    return { $get: () => inst };
  })
  .run(['$rootScope', $rootScope => $rootScope.$on("$stateChangeError", console.log.bind(console))]);

export default prjs;