import { Option, OptionKind } from "./option";
import { OptionFunctor } from "./optionfunctor";
import { Functor, FunctorOps } from "./functor";
import { uppercase } from "./uppercase";
import "mocha";
import { expect } from "chai";

describe("higher order uppercase", () => {
  it("should work with option", () => {
    const o = Option("abc");
    const f = new OptionFunctor();
    const fo = new FunctorOps();
    const lifted = fo.lift(f, uppercase);
    const r = lifted(o);
    expect(r.isDefined).to.be.true;
  });
});
