import SquashedCommits from "rules/SquashedCommits";

describe("rules/SquashedCommits", () => {

  it("should validate commits", () => {
    expect((new SquashedCommits()).check({ commits: [{}] })).toBe(true);
  });

  it("should reject multiple commits", () => {
    expect((new SquashedCommits()).check({ commits: [{}, {}] })).toBe(false);
    expect((new SquashedCommits()).check({ commits: [{}, {}, {}] })).toBe(false);
  });
});