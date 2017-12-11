import { HigherKindedType } from "./higherkindedtype";

export class Failure<A> implements HigherKindedType<TryKind.Failure, A> {
  readonly kind: TryKind.Failure = TryKind.Failure;
  readonly isDefined: Boolean = false;
  readonly error: Error;

  constructor(error: Error) {
    this.error = error;
  }

  then<B>(callback: (a: A) => B | Try<B>): Try<B> {
    return new Failure<B>(this.error);
  }

  orElse(defaultValue: A): A {
    return defaultValue;
  }
}

export class Success<A> implements HigherKindedType<TryKind.Success, A> {
  readonly kind: TryKind.Success = TryKind.Success;
  readonly isDefined: Boolean = true;
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  then<B>(f: (a: A) => B | Try<B>): Try<B> {
    return Try(() => f(this.value));
  }

  orElse(orElse: A): A {
    return this.value;
  }
}

export enum TryKind {
  Failure,
  Success
}

export type Try<A> = Failure<A> | Success<A>

export function Try<A>(a: () => A | Try<A>): Try<A> {
  try {
    const result = a();
    if (result instanceof Success || result instanceof Failure) {
      return result;
    } else {
      return new Success(result);
    }
  } catch(e) {
    if (e instanceof Error) {
      return new Failure(e);
    } else if (typeof e === `string`) {
      return new Failure(new Error(e));
    } else {
      return new Failure(new Error());
    }
  }
}
