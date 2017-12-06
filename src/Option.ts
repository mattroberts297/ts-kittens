class None<A> {
  readonly kind: "none"; //OptionKind.None;
  readonly isDefined: Boolean = false;

  constructor() { }

  then<B>(callback: (a: A) => B): Option<B> {
    return new None<B>();
  }

  orElse(defaultValue: A): A {
    return this.withDefault(defaultValue);
  }

  withDefault(defaultValue: A): A {
    return defaultValue;
  }
}

class Some<A> {
  readonly kind: "some"; //OptionKind.Some;
  readonly isDefined: Boolean = true
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  then<B>(callback: (a: A) => B): Option<B> {
    return option(callback(this.value));
  }

  orElse(defaultValue: A): A {
    return this.withDefault(defaultValue);
  }

  withDefault(defaultValue: A): A {
    return this.value;
  }
}

export type Option<A> = None<A> | Some<A>

// export enum OptionKind {
//   Some,
//   None
// }

export function option<A>(a: A | null | undefined): Option<A> {
  if (a == null) {
    return new None<A>();
  } else if (a == undefined) {
    return new None<A>();
  } else {
    return new Some<A>(a);
  }
}
