import SubjectFormat from "rules/SubjectFormat";

describe("rules/SubjectFormat", () => {

  it("should validate formatted single-line messages", () => {
    let message = "feat(state): a feature";
    let pull = { commits: [{ commit: { message } }] };
    expect((new SubjectFormat()).check(pull)).toBe(true);
  });

  it("should validate formatted multi-line messages", () => {
    let message = "bug(state): a bug\nA detailed description";
    let pull = { commits: [{ commit: { message } }] };
    expect((new SubjectFormat()).check(pull)).toBe(true);
  });

  it("should reject improperly formatted messages", () => {
    [
      "feat(foo) bar",
      "(feat): foo bar",
    ].forEach(message => {
      expect((new SubjectFormat()).check({ commits: [{ commit: { message } }] })).toBe(false);
    });
  });
});