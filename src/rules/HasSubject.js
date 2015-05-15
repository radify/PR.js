import Message from "../parsers/Message";

export default class HasSubject {

  constructor() {
    this.message = new Message();
  }

  title() {
    return "Subject line should be present";
  }

  info() {
    return `Commit message should be a single line, or should have a subject line separated by a space`;
  }

  check(pull) {
    var message = this.message.parse(pull);
    return message.length === 1 || (message[0] && !message[1]);
  }

  toJSON() {
    return { title: this.title(), info: this.info() };
  }
}