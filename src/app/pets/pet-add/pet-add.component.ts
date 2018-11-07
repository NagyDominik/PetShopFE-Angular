import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/shared/services/pet.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petForm = new FormGroup({
    Name: new FormControl(''),
    Type: new FormControl(''),
    Birthdate: new FormControl(''),
    SoldDate: new FormControl(''),
    Color: new FormControl(''),
    Price: new FormControl('')
  });

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    const pet = this.petForm.value;
    this.petService.addPet(pet).subscribe(p => {
      this.router.navigateByUrl('/pets');
    });
  }

}
