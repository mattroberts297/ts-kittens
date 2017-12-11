import { HigherKindedType } from "./higherkindedtype";

export class None<A> implements HigherKindedType<OptionKind.None, A> {
  readonly kind: OptionKind.None = OptionKind.None;
  readonly isDefined: Boolean = false;

  constructor() { }

  then<B>(callback: (a: A) => B | Option<B> | void | null | undefined): Option<B> {
    return Option<B>(null);
  }

  orElse(defaultValue: A): A {
    return defaultValue;
  }
}

export class Some<A> implements HigherKindedType<OptionKind.Some, A> {
  readonly kind: OptionKind.Some = OptionKind.Some;
  readonly isDefined: Boolean = true;
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  then<B>(f: (a: A) => B | Option<B> | void | null | undefined): Option<B> {
    return Option(f(this.value));
  }

  orElse(orElse: A): A {
    return this.value;
  }
}

export enum OptionKind {
  None,
  Some
}

export type Option<A> = None<A> | Some<A>

export function Option<A>(a: A | Option<A> | void | null | undefined): Option<A> {
  if (a == null || a == undefined) {
    return new None<A>();
  } else if (a instanceof Some || a instanceof None) {
    return a;
  } else {
    return new Some<A>(a);
  }
}
