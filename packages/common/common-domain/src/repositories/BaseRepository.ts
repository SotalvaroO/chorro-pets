import { BaseEntity } from '../entities/BaseEntity';
import { BaseId } from '../value-objects/BaseId';
import { GenericId } from '../value-objects/common-types';

export interface BaseRepository<T extends BaseEntity<ID>, ID extends BaseId<GenericId>> {
  save(entity: T): Promise<T>;
  findById(id: ID): Promise<T | null>;
}
