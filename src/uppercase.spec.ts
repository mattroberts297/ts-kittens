import { Option } from "./option";
import { OptionFunctor } from "./optionfunctor";
import { Try } from "./try";
import { TryFunctor } from "./tryfunctor";
import { Functor } from "./functor";
import { uppercase } from "./uppercase";
import "mocha";
import { expect } from "chai";

describe("higher order uppercase", () => {
  it("should work with option", () => {
    const o = Option("abc");
    const f = new OptionFunctor();
    const lifted = f.lift(uppercase);
    const r = lifted(o);
    expect(r.isDefined).to.be.true;
  });

  it("should work with try", () => {
    const o = Try(() => "abc");
    const f = new TryFunctor();
    const lifted = f.lift(uppercase);
    const r = lifted(o);
    expect(r.isDefined).to.be.true;
  });
});
