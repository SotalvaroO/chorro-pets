import { CreatePetUseCase } from '@chorros-associated/chorro-pets-application'
import { Pet, PetId, PetRepository } from '@chorros-associated/chorro-pets-domain'

describe('CreatePetUseCase', () => {
  const mockPetRepository: jest.Mocked<PetRepository> = {
    save: jest.fn(),
    findById: jest.fn(),
  }
  const createPetUseCase = new CreatePetUseCase(mockPetRepository)

  it('should create a pet successfully', async () => {
    const petData = new Pet({
      _name: 'Frankini musolini',
      _type: 'Dictador',
      _age: 29,
      id: 'DOM',
    })

    mockPetRepository.save.mockResolvedValueOnce(petData)

    const result = await createPetUseCase.execute(petData)

    expect(result).toEqual(petData)
    expect(mockPetRepository.save).toHaveBeenCalledWith(petData)
  })
})
