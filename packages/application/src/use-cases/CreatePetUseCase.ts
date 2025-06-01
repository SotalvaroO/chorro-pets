import { Pet, PetRepository } from "@chorros-associated/chorro-pets-domain";
import { BaseUseCaseImpl } from "../../../common/common-domain/dist";

export class CreatePetUseCase extends BaseUseCaseImpl<Pet, Pet> {
  constructor(private readonly _petRepository: PetRepository) {
    super();
  }

  protected async executeUseCase(request: Pet): Promise<Pet> {
    return await this._petRepository.save(request);
  }
}
