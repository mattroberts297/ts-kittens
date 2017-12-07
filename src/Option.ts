export class None<A> {
  readonly isDefined: Boolean = false;

  constructor() { }

  then<B>(callback: (a: A) => B | null | undefined | Option<B>): Option<B> {
    return Option<B>(null);
  }

  orElse(defaultValue: A): A {
    return this.withDefault(defaultValue);
  }

  withDefault(defaultValue: A): A {
    return defaultValue;
  }
}

export class Some<A> {
  readonly isDefined: Boolean = true
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  then<B>(f: (a: A) => B | null | undefined | Option<B>): Option<B> {
    return Option(f(this.value));
  }

  orElse(orElse: A): A {
    return this.value;
  }
}

export type Option<A> = None<A> | Some<A>

export function Option<A>(a: A | null | undefined | Option<A>): Option<A> {
  if (a == null || a == undefined) {
    return new None<A>();
  } else if (a instanceof Some || a instanceof None) {
    return a;
  } else {
    return new Some<A>(a);
  }
}
