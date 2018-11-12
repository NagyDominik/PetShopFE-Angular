import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner';
import { AuthenticationService } from './authentication.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  apiURL = 'https://petshopapp-domi0766-easv.azurewebsites.net/api/owners';
  headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'token'
  });

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {  }
  
  getAll(): Observable<Owner[]> {
    this.headers =
      this.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Owner[]>(this.apiURL, {headers: this.headers} );
  }

  getOwnerByID(id: number): Observable<Owner> {
    this.headers =
      this.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Owner>(this.apiURL + '/' + id, {headers: this.headers});
  }

  addOwner(owner: Owner): Observable<any> {
    this.headers =
      this.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post(this.apiURL, owner, {headers: this.headers, responseType: 'text'});
  }

  updateOwner(owner: Owner): Observable<any> {
    this.headers =
      this.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put(this.apiURL + '/' + owner.id, owner, {headers: this.headers, responseType: 'text'});
  }

  deleteOwner(id: number): Observable<any> {
    this.headers =
      this.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete(this.apiURL + '/' + id, {headers: this.headers, responseType: 'text'});
  }
}
