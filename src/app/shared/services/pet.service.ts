import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: Pet[];
  id = 1;
  apiURL = 'https://petshopapp-domi0766-easv.azurewebsites.net/api/pets';

  constructor(private http: HttpClient) {
    /*this.pets = [
      { ID: this.id++, Name: "Bob", Type: "Dog", Color: "Black", Price: 50.0, Birthdate: "2018-01-01", SoldDate: "2018-02-02" },
      { ID: this.id++, Name: "Rob", Type: "Cat", Color: "Black", Price: 55.0, Birthdate: "2018-01-01", SoldDate: "2018-02-02" },
      { ID: this.id++, Name: "Pet3", Type: "Fish", Color: "Black", Price: 50.0, Birthdate: "2018-01-01", SoldDate: "2018-02-02" },
      { ID: this.id++, Name: "Pet4", Type: "Goat", Color: "Black", Price: 50.0, Birthdate: "2018-01-01", SoldDate: "2018-02-02" },
      { ID: this.id++, Name: "Pet5", Type: "Hedgehog", Color: "Black", Price: 50.0, Birthdate: "2018-01-01", SoldDate: "2018-02-02" },
    ]*/
  }
  
  getAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiURL);
  }

  getPetByID(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.apiURL + '/' + id);
  }

  addPet(pet: Pet): Observable<any> {
    return this.http.post(this.apiURL, pet, {responseType: 'text'});
  }

  updatePet(pet: Pet): Observable<any> {
    return this.http.put(this.apiURL + '/' + pet.id, pet, {responseType: 'text'});
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(this.apiURL + '/' + id, {responseType: 'text'});
  }
}
