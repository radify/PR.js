import Subject from "../parsers/Subject";

export default class ValidSubjectType {

  constructor() {
    this.subject = new Subject();
  }

  title() {
    return "Subject should have a valid type";
  }

  info() {
    return `- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug or adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation`;
  }

  check(pull) {
    return [
      'feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore'
    ].indexOf(this.subject.parse(pull).type) > -1;
  }
}