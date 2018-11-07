import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/shared/models/pet';
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
    this.refresh();
  }

  refresh() {
    this.petService.getAll().subscribe(list => { this.pets = list });
  }

  delete(id: number) {
    this.petService.deletePet(id).subscribe(message => {console.log(message)});
    this.refresh();
  }

}
