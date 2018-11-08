import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/shared/services/pet.service';
import { Pet } from 'src/app/shared/models/pet';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MaterializeModule } from 'ngx-materialize';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {

  id: number;
  pet: Pet;
  petForm = new FormGroup({
    Name: new FormControl(''),
    Type: new FormControl(''),
    Birthdate: new FormControl(''),
    SoldDate: new FormControl(''),
    Color: new FormControl(''),
    Price: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPetByID(this.id).subscribe(p => {
      this.petForm.patchValue({
        Name: p.name,
        Type: p.type,
        Birthdate: p.birthdate.substring(0, 10),
        SoldDate: p.soldDate.substring(0, 10),
        Color: p.color,
        Price: p.price
      })
    });
  }

  save() {
    const pet = this.petForm.value;
    pet.id = this.id;
    this.petService.updatePet(pet).subscribe(() => {
      this.router.navigateByUrl('/pets');
    });
  }
}
