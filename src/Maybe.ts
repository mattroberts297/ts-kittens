export class Some<A> {
  readonly kind: "some";
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  then<B>(callback: (a: A) => B): Maybe<B> {
    return new Some<B>(callback(this.value)); // todo factory
  }
}

export class None<A> {
  readonly kind: "none";
  constructor() { }

  then<B>(callback: (a: A) => B): Maybe<B> {
    return new None<B>();
  }
}

export type Maybe<A> = Some<A> | None<A>;

export function print<A>(m: Maybe<A>) {
  switch (m.kind) {
    case "some": return `Some(${m.value})`;
    case "none": return "None";
  }
}
