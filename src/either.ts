export class Left<A, B> {
  readonly kind: EitherKind.Left = EitherKind.Left;
  readonly isLeft: Boolean = true;
  readonly isRight: Boolean = false;
  readonly left: A;

  constructor(left: A) {
    this.left = left;
  }

  then<C>(f: (b: B) => C | Either<A, C>): Either<A, C> {
    return left(this.left);
  }

  fold<C>(lf: (a: A) => C, rf: (b: B) => C): C {
    return lf(this.left);
  }
}

export class Right<A, B> {
  readonly kind: EitherKind.Right = EitherKind.Right;
  readonly isLeft: Boolean = false;
  readonly isRight: Boolean = true;
  readonly right: B;

  constructor(right: B) {
    this.right = right;
  }

  then<C>(f: (b: B) => C | Either<A, C>): Either<A, C> {
    const c = f(this.right);
    if (c instanceof Left || c instanceof Right) {
      return c;
    } else {
      return right(c);
    }
  }

  fold<C>(lf: (a: A) => C, rf: (b: B) => C): C {
    return rf(this.right);
  }
}

export enum EitherKind {
  Left,
  Right
}

export type Either<A, B> = Left<A, B> | Right<A, B>

export function left<A, B>(a: A): Either<A, B> {
  return new Left<A, B>(a);
}

export function right<A, B>(b: B): Either<A, B> {
  return new Right<A, B>(b);
}
