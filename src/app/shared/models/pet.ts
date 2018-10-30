export enum Types {
    Cat = "Cat", Dog = "Dog", Snake = "Snake", Goat = "Goat",
    Fish = "Fish", Turtle = "Turtle", Hamster = "Hamster",
    Parrot = "Parrot", Rabbit = "Rabbit", Hedgehog = "Hedgehog",
}

export class Pet {
    ID: number;
    Name: string;
    Type: Types;
    Birthdate: string;
    SoldDate: string;
    Color: string;
    Price: number;
}