export default class Validator {

  constructor(rules) {
    Object.assign(this, { rules });
  }

  check(pull) {
    return this.rules.map(rule => rule.check(pull)).indexOf(false) === -1;
  }

  details(pull) {
    return this.rules.map(rule => ({ result: rule.check(pull), rule }));
  }
}