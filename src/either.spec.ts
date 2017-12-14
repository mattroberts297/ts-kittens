import { Either, left, right } from "./either";
import "mocha";
import { expect } from "chai";

describe("either", () => {
  it("should support then and fold", () => {
    const either: Either<string, number> = right(1);
    expect(either.then(x => x + 1).fold(s => 0, i => i)).to.equal(2);
  });
});
