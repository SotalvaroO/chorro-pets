import { BaseRepository } from '@chorros-associated/chorro-pets-common-domain';
import { Pet } from '../entities/Pet';
import { PetId } from '../value-objects/PetId';

export interface PetRepository extends BaseRepository<Pet, PetId> {}
