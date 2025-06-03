import { Primitive } from '../valueobjects/common-types';
import { BaseId } from '../valueobjects/BaseId';
import { BaseRequest } from './BaseRequest';

export abstract class BaseEntity<ID extends BaseId<Primitive>> implements BaseRequest {
  constructor(private _id: ID) {}

  async validate(): Promise<void> {}

  public get id(): ID {
    return this._id;
  }
  public set id(id: ID) {
    this._id = id;
  }
}
