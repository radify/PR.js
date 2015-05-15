import Subject from  "../parsers/Subject";

export default class SubjectFormat {

  constructor() {
    Object.assign(this, { subject: new Subject() });
  }

  title() {
    return "Subject should be formatted correctly";
  }

  info() {
    return "Subject lines should be formatted per the following structure: `<type>(<scope>): <summary>`.";
  }

  check(pull) {
    var subject = this.subject.parse(pull);
    return !!(subject.type && subject.scope && subject.summary);
  }
}