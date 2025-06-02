import {CreatePetUseCase} from '@chorros-associated/chorro-pets-application';
import {BaseUseCase} from '@chorros-associated/chorro-pets-common-domain';
import {Pet, PetId, PetRepository} from '@chorros-associated/chorro-pets-domain';

class PetRepositoryImpl implements PetRepository {
    save(entity: Pet): Promise<Pet> {
        console.log(`pet ${entity.name} was saved`);
        return new Promise<Pet>((resolve) => {
            setTimeout(() => {
                resolve(entity);
            }, 1000);
        });
    }

    findById(id: PetId): Promise<Pet | null> {
        throw new Error('Method not implemented.');
    }
}

const repo: PetRepository = new PetRepositoryImpl();

const useCase: BaseUseCase<Pet, Pet> = new CreatePetUseCase(repo);

useCase.execute(
    new Pet({
        _name: 'Frankini musolini',
        _type: 'Dictador',
        _age: 29,
    }, 'DUn')
);
