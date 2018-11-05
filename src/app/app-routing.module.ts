import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetsListComponent} from './pets/pets-list/pets-list.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';

const routes: Routes = [
  { path: 'pets', component: PetsListComponent },
  { path: 'pets/:id', component: PetDetailComponent },
  { path: 'pet-add', component: PetAddComponent },
  { path: 'pet-update/:id', component: PetUpdateComponent },
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
