export default class ValidatorController {

  constructor(validator, pull) {
    var isValid = validator.check(pull),
        details = validator.details(pull);

    Object.assign(this, {
      get isValid() {
        return isValid;
      },
      get details() {
        return details;
      },
      get pull() {
        return pull;
      }
    });
  }
}