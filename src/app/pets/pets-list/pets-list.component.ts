import { Component, OnInit } from '@angular/core';
import { Pet, Types } from 'src/app/shared/models/pet';
import { PetService } from 'src/app/shared/services/pet.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.pets = this.petService.getAll();
  }

  selectedPet: Pet;
  onSelect(pet: Pet): void {
    this.selectedPet = pet;
  }

}
