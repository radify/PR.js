export default class SquashedCommits {

  title() {
    return "Commits should be squashed";
  }

  info() {
    return `Pull requests should be a single commit.
    Use \`git rebase -i\` to
    [squash commits](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html).`;
  }

  check(pull) {
    return pull.commits.length === 1;
  }

  toJSON() {
    return { title: this.title(), info: this.info() };
  }
}