import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import { HttpClientModule } from '@angular/common/http';
import { OwnerAddComponent } from './owners/owner-add/owner-add.component';
import { OwnerDetailComponent } from './owners/owner-detail/owner-detail.component';
import { OwnerUpdateComponent } from './owners/owner-update/owner-update.component';
import { OwnersListComponent } from './owners/owners-list/owners-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    NavbarComponent,
    WelcomeComponent,
    PetDetailComponent,
    PetAddComponent,
    PetUpdateComponent,
    OwnerAddComponent,
    OwnerDetailComponent,
    OwnerUpdateComponent,
    OwnersListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
