import { Component, OnInit } from '@angular/core';
import { PetService } from '../shared/services/pet.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Welcome to the Petshop App!!';

  constructor(private petService: PetService) { }

  ngOnInit() {
  }

}
