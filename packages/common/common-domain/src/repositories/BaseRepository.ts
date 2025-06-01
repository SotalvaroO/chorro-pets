import { BaseEntity } from '../entities/BaseEntity';
import { BaseId } from '../valueobjects/BaseId';
import { Primitive } from '../valueobjects/common-types';

export interface BaseRepository<T extends BaseEntity<ID>, ID extends BaseId<Primitive>> {
  save(entity: T): Promise<T>;
  findById(id: ID): Promise<T | null>;
}
