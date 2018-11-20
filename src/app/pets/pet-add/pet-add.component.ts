import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/shared/services/pet.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Owner } from 'src/app/shared/models/owner';
import { OwnerService } from 'src/app/shared/services/owner.service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  owners: Owner[];

  petForm = new FormGroup({
    Name: new FormControl(''),
    Type: new FormControl(''),
    Birthdate: new FormControl(''),
    SoldDate: new FormControl(''),
    PreviousOwner: new FormControl(''),
    Color: new FormControl(''),
    Price: new FormControl('')
  });

  constructor(private petService: PetService, private ownerService: OwnerService, private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.ownerService.getAll().subscribe(list => { this.owners = list });
  }

  save() {
    const pet = this.petForm.value;
    const owner = new Owner();
    owner.id = this.petForm.get("PreviousOwner").value;
    pet.PreviousOwner = owner;
    this.petService.addPet(pet).subscribe(p => {
      this.router.navigateByUrl('/pets');
    });
  }

}
