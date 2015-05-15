import Message from "./Message";

export default class Subject {

  constructor() {
    this.message = new Message();
  }

  parse(pull) {
    var [_, type, scope, summary] = this.message.parse(pull)[0].match(/^([^(]+)\(([^)]+)\): (.+)$/) || [
      null, null, null, null
    ];
    return { type, scope, summary };
  }
}