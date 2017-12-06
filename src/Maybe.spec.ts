import { print, Maybe } from "./Maybe";
import "mocha";
import { expect } from "chai";

export function anotherPrint(m: Maybe) {
  switch (m.kind) {
    case "some": return `Some(${m.value})`;
    case "none": return "None";
  }
}

describe("maybe", () => {
  it("should permit exhaustive checking", () => {
    expect(print({kind: "some", value: 10})).to.equal("Some(10)");
    expect(anotherPrint({kind: "none"})).to.equal("None");
  });

  it("should permit exhaustive checking (2)", () => {
    expect(print({kind: "some", value: 10})).to.equal("Some(10)");
    expect(anotherPrint({kind: "none"})).to.equal("None");
  });
});
