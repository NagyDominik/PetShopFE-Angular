import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  apiURL = 'https://petshopapp-domi0766-easv.azurewebsites.net/api/owners';
  httpOptions = { headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'token'
    })};

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {  }
  
  getAll(): Observable<Owner[]> {
    this.httpOptions.headers =
      this.httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Owner[]>(this.apiURL, this.httpOptions);
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
