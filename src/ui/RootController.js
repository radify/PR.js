export default class RootController {

  constructor() {
    var title = "";

    Object.assign(this, {
      get title() { return "PR.js " + title },
      set title(val) { title = val || "" }
    });
  }
}