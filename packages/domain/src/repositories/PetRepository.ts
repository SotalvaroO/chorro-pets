import { BaseRepository } from '@chorros-associated/chorro-pets-common-domain'
import { Pet } from '../entities/Pet'
import { PetId } from '../valueobjects/PetId'

export interface PetRepository extends BaseRepository<Pet, PetId> {}
