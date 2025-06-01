import { BaseEntity } from "@chorros-associated/chorro-pets-common-domain";
import { PetId } from "../valueobjects/PetId";

export class Pet extends BaseEntity<PetId> {
  constructor(
    private _name: string,
    private _type: string,
    private _age: number,
    id: string
  ) {
    super(new PetId(id));
  }

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public sayName(): void {
    console.log(this.name);
  }
}
