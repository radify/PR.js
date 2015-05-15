import Subject from "parsers/Subject";

describe("parsers/Subject", () => {
  it("should split valid subject lines into object hash", () => {
    let subject = "type(scope): summary summary summary";
    let pull = { commits: [{ commit: { message: subject } }] };

    expect((new Subject()).parse(pull)).toEqual({
      type: "type",
      scope: "scope",
      summary: "summary summary summary"
    });
  });

  it("should return object with null values on invalid message", () => {
    let subject = "type(scope) summary summary summary";
    let pull = { commits: [{ commit: { message: subject } }] };

    expect((new Subject()).parse(pull)).toEqual({
      type: null,
      scope: null,
      summary: null
    });
  });

  it("should parse subjects with special characters", () => {
    let subject = "type($state!): summary summary summary";
    let pull = { commits: [{ commit: { message: subject } }] };
    expect((new Subject()).parse(pull).scope).toBe("$state!");
  });
});