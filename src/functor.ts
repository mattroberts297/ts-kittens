import { HigherKindedType } from "./higherkindedtype";

export interface Functor<F> {
  map<A, B>(fa: HigherKindedType<F, A>): (f: (a: A) => B) => HigherKindedType<F, B>;
  lift<A, B>(f: (a: A) => B): (fa: HigherKindedType<F, A>) => HigherKindedType<F, B>;
}

export abstract class BaseFunctor<F> {
  constructor () { };
  abstract map<A, B>(fa: HigherKindedType<F, A>): (f: (a: A) => B) => HigherKindedType<F, B>;
  lift<A, B>(f: (a: A) => B): (fa: HigherKindedType<F, A>) => HigherKindedType<F, B> {
    return fa => this.map(fa)(f);
  }
}
