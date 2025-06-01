import { Primitive } from '../valueobjects/common-types';
import { BaseId } from '../valueobjects/BaseId';

export abstract class BaseEntity<ID extends BaseId<Primitive>> {
  constructor(private _id: ID) {}

  public get id(): ID {
    return this._id;
  }
  public set id(id: ID) {
    this._id = id;
  }
}
