import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OwnerService } from 'src/app/shared/services/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Address: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Email: new FormControl(''),
  });

  constructor(private ownerService: OwnerService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    const owner = this.ownerForm.value;
    this.ownerService.addOwner(owner).subscribe(p => {
      this.router.navigateByUrl('/owners');
    });
  }
  
}
