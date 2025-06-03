export interface BaseRequest {
  validate(): Promise<void>;
}
