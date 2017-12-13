import { Option, OptionKind } from "./option";
import "mocha";
import { expect } from "chai";

export function print<A>(o: Option<A>): string {
  switch (o.kind) {
    case OptionKind.Some: return `Some(${o.value})`;
    case OptionKind.None: return "None";
  }
}

describe("option", () => {
  it("should be defined when passed a string", () => {
    expect(Option("12345").isDefined).to.be.true;
  });

  it("should not be defined when passed null", () => {
    expect(Option(null).isDefined).to.be.false;
  });

  it("should not be defined when passed undefined", () => {
    expect(Option(undefined).isDefined).to.be.false;
  });

  it("should be thenable when defined", () => {
    expect(Option("12345").isDefined).to.be.true;
    expect(Option("12345").then(a => 12345).isDefined).to.be.true;
  });

  it("should be thenable when not defined", () => {
    expect(Option(undefined).isDefined).to.be.false;
    expect(Option(undefined).then(a => 12345).isDefined).to.be.false;
  });

  it("should be thenable when defined, then undefined", () => {
    const inputA: string | undefined = true ? 'foo' : undefined;
    const inputB: string | undefined = true ? undefined : 'foo';
    const optionA = Option(inputA);
    const optionB = optionA.then(a => inputB);
    expect(optionA.isDefined).to.be.true;
    expect(optionB.isDefined).to.be.false;
  });

  it("should lift options on then", () => {
    const output = 'bar';
    const inputA: string = 'foo';
    const inputB: Option<string> = Option(output);
    const orElse = 'baz';
    const optionA = Option(inputA);
    const optionB = optionA.then(a => inputB);
    expect(optionA.isDefined).to.be.true;
    expect(optionB.isDefined).to.be.true;
    expect(optionB.orElse(orElse)).to.equal(output);
  });

  it("should not return the value passed toOrElse when defined", () => {
    const input = '123';
    const orElse = '456';
    const output = input;
    expect(Option(input).orElse(orElse)).to.equal(output);
  });

  it("should return the value passed to orElse when undefined", () => {
    const input: string | undefined = true ? undefined : 'foo';
    const orElse = '456';
    const output = orElse;
    expect(Option(input).orElse(orElse)).to.equal(output);
  });

  it("should return the value passed to orElse when null", () => {
    const input: string | null = true ? null : 'foo';
    const orElse = '456';
    const output = orElse;
    expect(Option(input).orElse(orElse)).to.equal(output);
  });

  it("should permit exhaustive checking", () => {
    const input = Option('foo');
    const output = 'Some(foo)';
    expect(print(input)).to.equal(output);
  });
});
