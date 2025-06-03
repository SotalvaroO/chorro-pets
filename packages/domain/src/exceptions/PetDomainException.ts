export class PetDomainException extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message);
    this.name = 'PetDomainException';
  }
}
