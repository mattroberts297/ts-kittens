import { Option, OptionKind } from "./option";
import { Functor } from "./functor";

export class OptionFunctor implements Functor<OptionKind> {
  map<A, B>(fa: Option<A>): (f: (a: A) => B) => Option<B> {
    return (f: (a: A) => B) => fa.then(a => f(a));
  }

  lift<A, B>(f: (a: A) => B): (fa: Option<A>) => Option<B> {
    return fa => this.map<A, B>(fa)(f);
  }
}
