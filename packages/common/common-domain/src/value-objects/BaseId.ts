import { GenericId } from './common-types';

export abstract class BaseId<Id extends GenericId> {
  constructor(private readonly _value: Id) {}

  public get value(): Id {
    return this._value;
  }
}
