export default class SearchController {

  constructor($state) {
    Object.assign(this, {
      name: "",
      go() {
      	$state.go("main.org", { name: this.name });
      }
    });
  }
}

SearchController.$inject = ['$state'];