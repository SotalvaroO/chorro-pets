import { BaseRequest } from '../entities/BaseRequest';

export interface BaseUseCase<Request extends BaseRequest, Response> {
  execute(request: Request): Promise<Response>;
}
