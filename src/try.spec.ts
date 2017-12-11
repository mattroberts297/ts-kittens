import { Try, TryKind } from "./try";
import "mocha";
import { expect } from "chai";

describe("Try", () => {
  const abc = "abc";
  const def = "def";

  it("should be a success", () => {
    const t = Try(() => abc);
    expect(t.isDefined).to.be.true;
    expect(t.orElse(def)).to.equal(abc);
  });

  it("should handle failure", () => {
    const t = Try<string>(() => { throw abc; });
    expect(t.isDefined).to.be.false;
    expect(t.orElse(def)).to.equal(def);
  });
});
