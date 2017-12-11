import { Option, OptionKind } from "./option";
import { Functor } from "./functor";

export class OptionFunctor implements Functor<OptionKind> {
  map<A, B>(fa: Option<A>, f: (a: A) => B): Option<B> {
    return fa.then(f);
  }
}

declare module './functor' {
  interface FunctorOps {
    lift<F, A, B>(F: Functor<F>, f: (a: A) => B): (fa: Option<A>) => Option<B>;
  }
}
