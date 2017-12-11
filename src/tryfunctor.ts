import { Try, TryKind } from "./try";
import { Functor } from "./functor";

export class TryFunctor implements Functor<TryKind> {
  map<A, B>(fa: Try<A>, f: (a: A) => B): Try<B> {
    return fa.then(f);
  }
}

declare module './functor' {
  interface FunctorOps {
    lift<F, A, B>(F: Functor<F>, f: (a: A) => B): (fa: Try<A>) => Try<B>;
  }
}
