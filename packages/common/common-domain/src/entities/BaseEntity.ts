import { BaseId } from '../value-objects/BaseId';
import { GenericId } from '../value-objects/common-types';

export abstract class BaseEntity<ID extends BaseId<GenericId>> {
  constructor(private _id: ID) {}

  public get id(): ID {
    return this._id;
  }
  public set id(id: ID) {
    this._id = id;
  }
}
