import { Owner } from "./owner";

export class Pet {
    id: number;
    name: string;
    type: string;
    birthdate: string;
    soldDate: string;
    color: string;
    previousOwner: Owner;
    price: number;
}