import { area, Shape } from "./Shape";
import "mocha";
import { expect } from "chai";

function anotherArea(s: Shape) {
  switch (s.kind) {
    case "square": return s.size * s.size;
    case "rectangle": return s.height * s.width;
    case "circle": return Math.PI * s.radius ** 2;
  }
}

describe("shape", () => {
  it("should permit exhaustive checking", () => {
    expect(area({kind: "square", size: 10})).to.equal(100);
  });

  it("should permit exhaustive checking (2)", () => {
    expect(anotherArea({kind: "square", size: 5})).to.equal(25);
  });
});
