export type Primitive = string | number | boolean | bigint | symbol | null | undefined;
export type GenericId = Omit<Primitive, 'boolean' | 'undefined' | 'null'>;
