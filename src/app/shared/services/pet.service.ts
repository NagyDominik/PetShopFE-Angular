import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets: Pet[];
  
  getAll(): Pet[] {
    return this.pets;
  }

  getPetByID(id: number): Pet {
    return this.pets.find(pet => pet.ID === id);
  }

  constructor() {
    this.pets = [
      {ID: 1, Name: "Bob", Type: "Dog", Color: "Black", Price: 50.0, Birthdate: "2018-01-01", SoldDate: "2018-02-02"},
      {ID: 2, Name: "Rob", Type: "Cat", Color: "Black", Price: 55.0, Birthdate: "2018-01-01", SoldDate: "2018-02-02"},
      {ID: 3, Name: "Pet3", Type: "Fish", Color: "Black", Price: 50.0, Birthdate: "2018-01-01", SoldDate: "2018-02-02"},
      {ID: 4, Name: "Pet4", Type: "Goat", Color: "Black", Price: 50.0, Birthdate: "2018-01-01", SoldDate: "2018-02-02"},
      {ID: 5, Name: "Pet5", Type: "Hedgehog", Color: "Black", Price: 50.0, Birthdate: "2018-01-01", SoldDate: "2018-02-02"}, 
    ]
  }
}
