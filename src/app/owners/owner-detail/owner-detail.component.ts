import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/shared/models/owner';
import { ActivatedRoute } from '@angular/router';
import { OwnerService } from 'src/app/shared/services/owner.service';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  owner: Owner;

  constructor(private route: ActivatedRoute, private ownerService: OwnerService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwnerByID(id).subscribe(o => {
      this.owner = o;
    });
  }
}
