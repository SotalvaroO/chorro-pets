import {BaseEntity} from '@chorros-associated/chorro-pets-common-domain';
import {PetId} from '../valueobjects/PetId';

interface PetProps {
    _name: string;
    _type: string;
    _age: number;
}

export class Pet extends BaseEntity<PetId> {
    constructor(
        private props: PetProps,
        id: string
    ) {
        super(new PetId(id));
    }

    public get age(): number {
        return this.props._age;
    }

    public set age(value: number) {
        this.props._age = value;
    }

    public get type(): string {
        return this.props._type;
    }

    public set type(value: string) {
        this.props._type = value;
    }

    public get name(): string {
        return this.props._name;
    }

    public set name(value: string) {
        this.props._name = value;
    }

    public sayName(): void {
        console.log(this.name);
    }
}
