import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/shared/services/owner.service';
import { Owner } from 'src/app/shared/models/owner';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {

  owners: Owner[];

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.ownerService.getAll().subscribe(list => { this.owners = list });
  }

  delete(id: number) {
    this.ownerService.deleteOwner(id).subscribe(message => {
      console.log(message); this.refresh();
    });
  }

}
