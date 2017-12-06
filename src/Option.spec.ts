import { option, Option /*, OptionKind*/ } from "./Option";
import "mocha";
import { expect } from "chai";

describe("option", () => {
  it("should be defined when passed a string", () => {
    expect(option("12345").isDefined).to.be.true
  });

  it("should not be defined when passed null", () => {
    expect(option(null).isDefined).to.be.false
  });

  it("should not be defined when passed undefined", () => {
    expect(option(undefined).isDefined).to.be.false
  });

  it("should be thenable when defined", () => {
    expect(option("12345").isDefined).to.be.true
    expect(option("12345").then(a => 12345).isDefined).to.be.true
  });

  it("should be thenable when not defined", () => {
    expect(option(undefined).isDefined).to.be.false
    expect(option(undefined).then(a => 12345).isDefined).to.be.false
  });

  it("should not return the value passed toOrElse when defined", () => {
    const input = '123';
    const orElse = '456';
    const output = input;
    expect(option(input).orElse(orElse)).to.equal(output);
  });

  it("should return the value passed to orElse when undefined", () => {
    const input: string | undefined = true ? undefined : 'foo';
    const orElse = '456';
    const output = orElse;
    expect(option(input).orElse(orElse)).to.equal(output);
  });

  it("should return the value passed to orElse when null", () => {
    const input: string | null = true ? null : 'foo';
    const orElse = '456';
    const output = orElse;
    expect(option(input).orElse(orElse)).to.equal(output);
  });

  it("should permit exhaustive checking", () => {
    const input = 123;
    const o = option(input);
    const output = `Some(${input})`;
    function asString<A>(o: Option<A>): string {
      console.log(`o.kind=${o.kind}`);
      switch (o.kind) {
        case "none": return 'a';//'None';
        case "some": return 'b';//`Some(${o.value})`;
        default: return 'c';
      }
    }
    expect(asString(o)).to.equal(output);
  });
});
