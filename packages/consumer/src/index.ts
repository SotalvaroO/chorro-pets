import { CreatePetUseCase } from "@chorros-associated/chorro-pets-application";
import { BaseUseCase } from "@chorros-associated/chorro-pets-common-domain";
import { Pet, PetRepository } from "@chorros-associated/chorro-pets-domain";
import { PetId } from "@chorros-associated/chorro-pets-domain/";

class PetRepositoryImpl implements PetRepository {
  async save(entity: Pet): Promise<Pet> {
    console.log(`pet ${entity.name} was saved`);
    return await entity;
  }
  findById(id: PetId): Promise<Pet | null> {
    throw new Error("Method not implemented.");
  }
}

const repo: PetRepository = new PetRepositoryImpl();

const useCase: BaseUseCase<Pet, Pet> = new CreatePetUseCase(repo);

useCase.execute(new Pet("Frankini musolini", "Dictador", 29, "DOM"));
