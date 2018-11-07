import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  apiURL = 'https://petshopapp-domi0766-easv.azurewebsites.net/api/owners';

  constructor(private http: HttpClient) {  }
  
  getAll(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiURL);
  }

  getOwnerByID(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.apiURL + '/' + id);
  }

  addOwner(owner: Owner): Observable<any> {
    return this.http.post(this.apiURL, owner, {responseType: 'text'});
  }

  updateOwner(owner: Owner): Observable<any> {
    return this.http.put(this.apiURL + '/' + owner.id, owner, {responseType: 'text'});
  }

  deleteOwner(id: number): Observable<any> {
    return this.http.delete(this.apiURL + '/' + id);
  }
}
