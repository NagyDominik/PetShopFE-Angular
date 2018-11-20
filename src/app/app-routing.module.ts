import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import { OwnersListComponent } from './owners/owners-list/owners-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { OwnerDetailComponent } from './owners/owner-detail/owner-detail.component';
import { OwnerAddComponent } from './owners/owner-add/owner-add.component';
import { OwnerUpdateComponent } from './owners/owner-update/owner-update.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },

  { path: 'login', component: LoginComponent },

  { path: 'pets', component: PetsListComponent },
  { path: 'pets/:id', component: PetDetailComponent },
  { path: 'pet-add', component: PetAddComponent, canActivate: [AuthGuard] },
  { path: 'pet-update/:id', component: PetUpdateComponent, canActivate: [AuthGuard] },

  { path: 'owners', component: OwnersListComponent, canActivate: [AuthGuard] },
  { path: 'owners/:id', component: OwnerDetailComponent, canActivate: [AuthGuard] },
  { path: 'owner-add', component: OwnerAddComponent, canActivate: [AuthGuard] },
  { path: 'owner-update/:id', component: OwnerUpdateComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
