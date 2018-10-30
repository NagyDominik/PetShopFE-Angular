import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/shared/models/pet';
import { PetService } from 'src/app/shared/services/pet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: Pet;

  constructor(private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pet = this.petService.getPetByID(id);
  }

}
