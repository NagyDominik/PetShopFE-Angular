import { Pet } from "./pet";

export class Owner {
    id: number;
    username: string;
    passwordHash: string;
    passwordSalt: string;
    isAdmin: boolean;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    email: string;
    pets: Pet[];
}