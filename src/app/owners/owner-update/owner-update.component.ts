import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from 'src/app/shared/services/owner.service';
import { Owner } from 'src/app/shared/models/owner';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})
export class OwnerUpdateComponent implements OnInit {
  
  id: number;
  owner: Owner;
  ownerForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Address: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Email: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private ownerService: OwnerService, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwnerByID(this.id).subscribe(o => {
      this.ownerForm.patchValue({
        FirstName: o.firstName,
        LastName: o.lastName,
        Address: o.address,
        PhoneNumber: o.phoneNumber,
        Email: o.email,
      })
    });
  }

  save() {
    const owner = this.ownerForm.value;
    owner.id = this.id;
    this.ownerService.updateOwner(owner).subscribe(() => {
      this.router.navigateByUrl('/owners');
    });
  }

}
