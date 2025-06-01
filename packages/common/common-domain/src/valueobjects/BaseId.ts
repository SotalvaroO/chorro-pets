import { Primitive } from './common-types';

export abstract class BaseId<T extends Primitive> {
  constructor(private readonly _value: T) {}

  public get value(): T {
    return this._value;
  }
}
