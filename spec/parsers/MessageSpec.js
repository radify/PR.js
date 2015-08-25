import Message from "../../src/parsers/Message";

describe("parsers/Message", () => {
  it("should pull the first commit message from a PR, split into lines", () => {
    let pull = { commits: [{ commit: { message: "Foo\nBar" } }] };
    expect((new Message()).parse(pull)).toEqual(["Foo", "Bar"]);
  });
});