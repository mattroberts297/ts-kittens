import { HigherKindedType } from "./higherkindedtype";

export interface Functor<F> {
  map<A, B>(fa: HigherKindedType<F, A>, f: (a: A) => B): HigherKindedType<F, B>;
}

// export abstract class BaseFunctor<F> {
//   constructor () { };
//   abstract map<A, B>(fa: HigherKindedType<F, A>, f: (a: A) => B): HigherKindedType<F, B>;
//   lift<F, A, B>(f: (a: A) => B): (fa: HigherKindedType<F, A>) => HigherKindedType<F, B> {
//     return this.map(fa, f);
//   }
// }

export class FunctorOps {
  lift<F, A, B>(F: Functor<F>, f: (a: A) => B): (fa: HigherKindedType<F, A>) => HigherKindedType<F, B> {
    return fa => F.map(fa, f);
  }
}
