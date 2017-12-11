import { Try, TryKind } from "./try";
import { Functor } from "./functor";

export class TryFunctor implements Functor<TryKind> {
  map<A, B>(fa: Try<A>): (f: (a: A) => B) => Try<B> {
    return (f: (a: A) => B) => fa.then(a => f(a));
  }

  lift<A, B>(f: (a: A) => B): (fa: Try<A>) => Try<B> {
    return fa => this.map<A, B>(fa)(f);
  }
}
