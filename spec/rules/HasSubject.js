import HasSubject from "rules/HasSubject";

describe("rules/HasSubject", () => {

  it("should validate single-line commit messages", () => {
    let message = "Line 1";
    let pull = { commits: [{ commit: { message } }] };
    expect((new HasSubject()).check(pull)).toBe(true);
  });

  it("should validate multi-line messages with an empty line after the first", () => {
    let message = "Line 1\n\nLine 2";
    let pull = { commits: [{ commit: { message } }] };
    expect((new HasSubject()).check(pull)).toBe(true);
  });

  it("should reject multi-line messages with no gap", () => {
    let message = "Line 1\nLine 2";
    let pull = { commits: [{ commit: { message } }] };
    expect((new HasSubject()).check(pull)).toBe(false);
  });
});