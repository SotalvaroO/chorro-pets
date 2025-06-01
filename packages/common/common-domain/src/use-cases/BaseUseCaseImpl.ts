import { BaseUseCase } from './BaseUseCase';

export abstract class BaseUseCaseImpl<Request, Response> implements BaseUseCase<Request, Response> {
  public async execute(request: Request): Promise<Response> {
    await this.validateRequest(request);
    await this.preProcess(request);
    const response = await this.executeUseCase(request);
    await this.postProcess(request, response);
    return response;
  }

  protected abstract executeUseCase(request: Request): Promise<Response>;

  protected async validateRequest(request: Request): Promise<void> {}

  protected async preProcess(request: Request): Promise<void> {}

  protected async postProcess(request: Request, response: Response): Promise<void> {}
}
