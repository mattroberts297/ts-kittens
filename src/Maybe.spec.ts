import { print, Maybe, Some, None } from "./Maybe";
import "mocha";
import { expect } from "chai";

export function anotherPrint<A>(m: Maybe<A>) {
  switch (m.kind) {
    case "some": return `Some(${m.value})`;
    case "none": return "None";
  }
}

describe("maybe", () => {
  it("should permit exhaustive checking", () => {
    expect(print(new Some(10))).to.equal("Some(10)");
    expect(anotherPrint(new None<number>())).to.equal("None");
  });

  it("should permit exhaustive checking (2)", () => {
    expect(print(new Some(10))).to.equal("Some(10)");
    expect(anotherPrint(new None<number>())).to.equal("None");
  });
});
