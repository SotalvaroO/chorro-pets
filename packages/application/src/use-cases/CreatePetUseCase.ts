import { Pet, PetRepository } from "@chorros-associated/chorro-pets-domain";
import { BaseUseCaseImpl } from "@chorros-associated/chorro-pets-common-domain";

export class CreatePetUseCase extends BaseUseCaseImpl<Pet, Pet> {
  constructor(private readonly _petRepository: PetRepository) {
    super();
  }

  protected async executeUseCase(request: Pet): Promise<Pet> {
    return await this._petRepository.save(request);
  }
}
